// Please configure your SSID, passwords and OW key on the user_config.h file
#include <user_config.h>

#include <SmingCore/SmingCore.h>
#include <Libraries/DHT/DHT.h>

#include <led.h>

String postURL = "http://192.168.1.192:3000/api/sensor/";

HttpClient httpClient;
Timer checkTimer;

#define WORK_PIN 4
DHT dht(WORK_PIN, 22);

int currentMin = 0;
// HTTP request callback.
void onDataReceived(HttpClient &client, bool successful) {
  currentMin = client.getServerDate().Minute;
  if (successful) {
    Serial.println("发送成功");
  } else {
    Serial.println("本次请求失败..");
  }
}


//在每小时的59分时标记保存数据
bool saved = false;
bool getSaveStatus() {
  if (currentMin > 58) {
    if (!saved) {
      saved = true;
      return true;
    } else {
      return false;
    }
  } else {
    saved = false;
    return false;
  }
}

String getPostDate(){
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  float value;
  if (temperature > 0) {
    value = temperature;
    Serial.printf("检测到传感器，温度是： %f  湿度是： %f\n", temperature,
                  humidity);
  } else {
    value = random(0, 40);
    Serial.printf("没有检测到传感器，发送随机值： %f \n", value);
  }
  String postString =
      "{\"value\":" + String(value) + ",\"save\":" + getSaveStatus() + "}";
      return postString;
}

void postDate() {
  ledToggle();
  httpClient.reset(); // Clear any data from previous requests.
  httpClient.setRequestContentType("application/json");
  httpClient.setPostBody(getPostDate());
  httpClient.doPost(postURL, onDataReceived);
}

void ShowInfo() {

  Serial.printf("设备信息：");
  Serial.printf("\r\nSDK: v%s\r\n", system_get_sdk_version());
  Serial.printf("Free Heap: %d\r\n", system_get_free_heap_size());
  Serial.printf("CPU Frequency: %d MHz\r\n", system_get_cpu_freq());
  Serial.printf("System Chip ID: 0x%x\r\n", system_get_chip_id());
  Serial.printf("SPI Flash ID: 0x%x\r\n", spi_flash_get_id());
  Serial.printf("SPI Flash Size: %d\r\n",
                (1 << ((spi_flash_get_id() >> 16) & 0xff)));
}

// Will be called when WiFi station is connected to AP
void connectOk() {
  Serial.println("连接成功 :)");
  Serial.println("设备IP地址为：");
  Serial.println(WifiStation.getIP());
  ShowInfo();
  //将设备ID作为随机函数种子
  randomSeed(system_get_chip_id());
  postURL = postURL + String(system_get_chip_id()) + "/value";
  checkTimer.initializeMs(500, postDate).start();
}

// Will be called when WiFi station timeout was reached
void connectFail() {
  Serial.println("连接失败 :(");

  WifiStation.waitConnection(
      connectOk, 20,
      connectFail); // We recommend 20+ seconds for connection timeout at start
}

void sysReady() { Serial.println("System ready callback called...."); }

// Standard init function.
void init() {

  system_set_os_print(0);
  ledInit();
  ledON();
  Serial.begin(SERIAL_BAUD_RATE);  // 115200 by default
  Serial.systemDebugOutput(false); // Disable debug output to serial

  // Connect to WIFI
  WifiStation.config(WIFI_SSID, WIFI_PWD);
  WifiStation.enable(true);
  WifiAccessPoint.enable(false);

  // Run our method when station was connected to AP (or not connected)
  WifiStation.waitConnection(
      connectOk, 20,
      connectFail); // We recommend 20+ seconds for connection timeout at start

  System.onReady(sysReady);
}
