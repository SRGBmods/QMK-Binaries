/*
This goes below
#include "via.h"
*/

#include "qmk_version.h"
#include "protocol/host.h"

/*
This goes below
// Called by QMK core to process VIA-specific keycodes.
*/
uint8_t packet[32];

 void get_qmk_version(void) //Grab the QMK Version
{
        packet[0] = id_signalrgb_qmk_version;
        packet[1] = QMK_VERSION_BYTE_1;
        packet[2] = QMK_VERSION_BYTE_2;
        packet[3] = QMK_VERSION_BYTE_3;

        raw_hid_send(packet, 32);
}

void get_signalrgb_protocol_version(void) //Grab what version of the SignalRGB protocol a keyboard is running
{
        packet[0] = id_signalrgb_protocol_version;
        packet[1] = PROTOCOL_VERSION_BYTE_1;
        packet[2] = PROTOCOL_VERSION_BYTE_2;
        packet[3] = PROTOCOL_VERSION_BYTE_3;

        raw_hid_send(packet, 32);
}

void get_unique_identifier(void) //Grab the unique identifier for each specific model of keyboard.
{
        packet[0] = id_signalrgb_unique_identifier;
        packet[1] = DEVICE_UNIQUE_IDENTIFIER_BYTE_1;
        packet[2] = DEVICE_UNIQUE_IDENTIFIER_BYTE_2;
        packet[3] = DEVICE_UNIQUE_IDENTIFIER_BYTE_3;

        raw_hid_send(packet, 32);
}

void led_streaming(uint8_t *data) //Stream data from HID Packets to Keyboard.
{
    uint8_t index = data[1];
    uint8_t numberofleds = data[2]; 
    #if defined(RGBLIGHT_ENABLE)
        if(index + numberofleds > RGBLIGHT_LED_COUNT) {
    #elif defined(RGB_MATRIX_ENABLE)
        if(index + numberofleds > RGB_MATRIX_LED_COUNT) {
    #endif
        packet[1] = DEVICE_ERROR_LED_BOUNDS;
        raw_hid_send(packet,32);
        return; 
    }

    if(numberofleds >= 10)
    {
        packet[1] = DEVICE_ERROR_LED_BOUNDS;
        raw_hid_send(packet,32);
        return; 
    } 
    
    for (uint8_t i = 0; i < numberofleds; i++)
    {
      uint8_t offset = (i * 3) + 3;
      uint8_t  r = data[offset];
      uint8_t  g = data[offset + 1];
      uint8_t  b = data[offset + 2];

      //if ( ((index + i) == CAPS_LOCK_LED_INDEX && host_keyboard_led_state().caps_lock) || ((index + i) == NUM_LOCK_LED_INDEX && host_keyboard_led_state().num_lock) || ((index + i) == SCROLL_LOCK_LED_INDEX && host_keyboard_led_state().scroll_lock))   {
      //if ( ((index + i) == CAPS_LOCK_LED_INDEX && host_keyboard_led_state().caps_lock) || ((index + i) == NUM_LOCK_LED_INDEX && host_keyboard_led_state().num_lock))   {
      //if ( (index + i) == CAPS_MAC_WIN_LED_INDEX && host_keyboard_led_state().caps_lock)   {
      //if ( (index + i) == CAPS_LOCK_LED_INDEX && host_keyboard_led_state().caps_lock)   {
      //if ( (index + i) == NUM_LOCK_LED_INDEX && host_keyboard_led_state().num_lock)  {
      //#if defined(RGBLIGHT_ENABLE)
      //rgblight_setrgb_at(255, 255, 255, index + i);
      //#elif defined(RGB_MATRIX_ENABLE)
      //rgb_matrix_set_color(index + i, 255, 255, 255);
      //#endif

      //} else {

      #if defined(RGBLIGHT_ENABLE)
      rgblight_setrgb_at(r, g, b, index + i);
      #elif defined(RGB_MATRIX_ENABLE)
      rgb_matrix_set_color(index + i, r, g, b);
      #endif
        }
     }
//}

void signalrgb_mode_enable(void)
{
    #if defined(RGB_MATRIX_ENABLE)
    rgb_matrix_mode_noeeprom(RGB_MATRIX_NONE); //Set RGB Matrix to none to allow a re-init.
    rgb_matrix_disable_noeeprom();
    rgb_matrix_enable_noeeprom();
    rgb_matrix_mode_noeeprom(RGB_MATRIX_SIGNALRGB); //Set RGB Matrix to SignalRGB Compatible Mode
    #endif
}

void signalrgb_mode_disable(void)
{
    #if defined(RGBLIGHT_ENABLE)
    rgblight_reload_from_eeprom();
    #elif defined(RGB_MATRIX_ENABLE)
    rgb_matrix_reload_from_eeprom(); //Reloading last effect from eeprom
    #endif
}

void signalrgb_total_leds(void)//Grab total number of leds that a board has.
{
    packet[0] = id_signalrgb_total_leds;
    #if defined(RGBLIGHT_ENABLE)
    packet[1] = RGBLIGHT_LED_COUNT;
    #elif defined(RGB_MATRIX_ENABLE)
    packet[1] = RGB_MATRIX_LED_COUNT;
    #endif
    raw_hid_send(packet,32);
}

void signalrgb_firmware_type(void) //Grab which fork of qmk a board is running.
{
    packet[0] = id_signalrgb_firmware_type;
    packet[1] = FIRMWARE_TYPE_BYTE;
    raw_hid_send(packet,32);
}


/*
Part of void raw_hid_receive(uint8_t *data, uint8_t length) {
specifically in (*command_id)
right before protocol version

*/
        
        case id_signalrgb_qmk_version:
        {
            get_qmk_version();
            break;
        }

        case id_signalrgb_protocol_version:
        {
            get_signalrgb_protocol_version();
            break;
        }

        case id_signalrgb_unique_identifier:
        {
            get_unique_identifier();
            break;
        }

        case id_signalrgb_stream_leds: 
        {
            led_streaming(data);
            break;
        }

        case id_signalrgb_effect_enable: 
        {
            signalrgb_mode_enable();
            break;
        }

        case id_signalrgb_effect_disable: 
        {
            signalrgb_mode_disable();
            break;
        }

        case id_signalrgb_total_leds:
        {
            signalrgb_total_leds();
            break;
        }

        case id_signalrgb_firmware_type:
        {
            signalrgb_firmware_type();
            break;
        }
