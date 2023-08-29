/* 
We put this below:
#ifdef JOYSTICK_ENABLE
#    include "process_joystick.h"
#endif

 */

#ifdef SIGNALRGB_SUPPORT_ENABLE
#    ifndef VIA_ENABLE
#    include "signalrgb.h"
#    endif
#endif