#
# We put this right after
# ifeq ($(strip $(CIE1931_CURVE)), yes)
#    OPT_DEFS += -DUSE_CIE1931_CURVE
#    LED_TABLES := yes
# endif
#

ifeq ($(strip $(SIGNALRGB_SUPPORT_ENABLE)), yes)
    RAW_ENABLE := yes
    SRC += $(QUANTUM_DIR)/signalrgb.c
    OPT_DEFS += -DSIGNALRGB_SUPPORT_ENABLE
endif

# Hint for a mass-compile / multibuild compile comment out lines 9, 10, 14, and 15 for a global :default keymap build :)