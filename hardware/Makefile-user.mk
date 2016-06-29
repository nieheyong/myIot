## Local build configuration
## Parameters configured here will override default and ENV values.
## Uncomment and change examples:

## Add your source directories here separated by space
# MODULES = app
# EXTRA_INCDIR = include

## ESP_HOME sets the path where ESP tools and SDK are located.
## Windows:
# ESP_HOME = c:/Espressif

## MacOS / Linux:
ESP_HOME = /opt/esp-open-sdk

## SMING_HOME sets the path where Sming framework is located.
## Windows:
# SMING_HOME = c:/tools/sming/Sming

## MacOS / Linux
SMING_HOME = /opt/Sming-REST/Sming

## COM port parameter is reqruied to flash firmware correctly.
## Windows:
# COM_PORT = COM3

## MacOS / Linux:
COM_PORT = /dev/tty.SLAB_USBtoUART

## Com port speed
# Default COM port speed (used for flashing)
COM_SPEED_ESPTOOL = 921600
# Default COM port speed (used in code)
COM_SPEED_SERIAL = 115200

## Configure flash parameters (for ESP12-E and other new boards):
# SPI_MODE = dio

## SPIFFS options
DISABLE_SPIFFS = 1
# SPIFF_FILES = files

SPI_SIZE = 4M
SPI_SPEED = 80
