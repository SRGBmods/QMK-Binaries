
ifeq ($(strip $(SIGNALRGB_SUPPORT_ENABLE)), yes)
    ifneq ($(strip $(VIA_ENABLE)), yes)
    RAW_ENABLE := yes
    SRC += $(QUANTUM_DIR)/signalrgb.c
    OPT_DEFS += -DSIGNALRGB_SUPPORT_ENABLE
    endif
endif
