#
# We put this right after
# ifeq ($(strip $(CIE1931_CURVE)), yes)
#    OPT_DEFS += -DUSE_CIE1931_CURVE
#    LED_TABLES := yes
# endif
#

ifeq ($(strip $(SIGNALRGB_SUPPORT_ENABLE)), yes)
    ifneq ($(strip $(VIA_ENABLE)), yes)
    RAW_ENABLE := yes
    SRC += $(QUANTUM_DIR)/signalrgb.c
    OPT_DEFS += -DSIGNALRGB_SUPPORT_ENABLE
    endif
endif
