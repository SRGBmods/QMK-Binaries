## WARNING: These firmware files are massively unsupported / outdated use at your own risk ##

Source back port from <https://github.com/ab00a/qmk_firmware> + SignalRGB Protocol + some rgb_matrix.c / rgb_matrix.h back ports (from qmk mainline) for this keyboard.
As you can see it is rather old but this repo & what it is based on is the most recent for rk61 keyboard support.

Try the VIA build for your keyboard of course (as even said below!)

---

The reason being as they are based upon very old releases of QMK for specific keyboards and may have been abandoned by the original developer.

It is highly recommended that you have an original firmware for your keyboard + understand how to recover your keyboard from a possible brick (not working) state.

If you accept this, feel free to try these firmware files. (Of course as always we recommend VIA builds first!)

Feel free to review + use the patch in [this directory](https://github.com/SRGBmods/QMK-Binaries/tree/main/GPL/qmk_firmware) against [ab00a](https://github.com/ab00a/qmk_firmware)

---

**One thing of note if you are attempting to use VIA to configure your keyboard you _must_ quit SignalRGB before running either software**

To use these files you may find QMK Toolbox helpful:
https://github.com/qmk/qmk_toolbox/releases/

Or if a sonix release:
https://sonixqmk.github.io//SonixDocs/install/#4-flashing-the-firmware

You will also need to follow the directions from your Keyboard manufacturer to put it bootloader mode in order to use QMK Toolbox.
(Check their website for directions, you should honestly check there anyways for firmware in case you to need to factory restore as well.)

---

### Help with these binaries / user plugin creation ###

[First please read directions below](https://github.com/SRGBmods/QMK-Binaries/#directions).

**This firmware is not officially supported by SignalRGB, QMK or any other software development team but by the moderator team of SignalRGB. Support can be provided either on the Github repository ([**Issues**](https://github.com/SRGBmods/QMK-Binaries/issues)) here or the QMK channels of this** [**Discord**](https://discord.com/invite/J5dwtcNhqC) **(Discord will be faster in most cases).**

**Please keep support requests to either of those locations only, thanks!**

If you notice something missing (keyboard or variation of a keyboard) or have any issues with these binaries please contact Naitoshedo on the above Discord server.

---

Patch file should be applied against <https://github.com/ab00a/qmk_firmware> rk61 fork.