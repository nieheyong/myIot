#include <led.h>
#include <user_config.h>

#define LED_PIN 16
bool status = false;

void ledInit() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, OFF);
}

void ledON() {
  digitalWrite(LED_PIN, ON);
  status = TRUE;
}
void ledToggle() {
  status = !status;
  digitalWrite(LED_PIN, status);
}

void ledOFF() {
  digitalWrite(LED_PIN, OFF);
  status = FALSE;
}
void ledSet(bool sta) {
  status = sta;
  digitalWrite(LED_PIN, !sta);
}

bool ledStatus() { return status; }
