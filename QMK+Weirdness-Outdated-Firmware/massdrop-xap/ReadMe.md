## WARNING: These firmware files are massively unsupported / outdated use at your own risk ##

Source back port from <https://github.com/Massdrop/qmk_firmware/tree/feature/riot_xap> + SignalRGB Protocol.

The directories here are the layouts provided by Massdrop. (Use VIA if you can of course)

Now a bit of warning from QMK Mainline that still applies:

This MCU support package has a lack of support from the upstream provider (Massdrop).
There are currently questions about valid licensing, and at this stage it's likely
their boards and supporting code will be removed from QMK in the near future. Please
contact Massdrop for support, and encourage them to align their future board design
choices to gain proper license compatibility with QMK.

---

The reason being as they are based upon very old releases of QMK for specific keyboards and may have been abandoned by the original developer.

It is highly recommended that you have an original firmware for your keyboard + understand how to recover your keyboard from a possible brick (not working) state.

If you accept this, feel free to try these firmware files. (Of course as always we recommend VIA builds first!)

Feel free to review + use the patch in [this directory](https://github.com/SRGBmods/QMK-Binaries/tree/main/GPL/qmk_firmware) against [ab00a](https://github.com/ab00a/qmk_firmware)

---

**One thing of note if you are attempting to use VIA to configure your keyboard you _must_ quit SignalRGB before running either software**

To use these files you may find md_loader useful:
https://github.com/Massdrop/mdloader/releases

You will also need to follow the directions from your Keyboard manufacturer to put it bootloader mode in order to use QMK Toolbox.
(Check their website for directions, you should honestly check there anyways for firmware in case you to need to factory restore as well.)

---

### Help with these binaries / user plugin creation ###

[First please read directions below](https://github.com/SRGBmods/QMK-Binaries/#directions).

**This firmware is not officially supported by SignalRGB, QMK or any other software development team but by the moderator team of SignalRGB. Support can be provided either on the Github repository ([**Issues**](https://github.com/SRGBmods/QMK-Binaries/issues)) here or the QMK channels of this** [**Discord**](https://discord.com/invite/J5dwtcNhqC) **(Discord will be faster in most cases).**

**Please keep support requests to either of those locations only, thanks!**

If you notice something missing (keyboard or variation of a keyboard) or have any issues with these binaries please contact Naitoshedo on the above Discord server.

---

Patch file should be applied against <https://github.com/Massdrop/qmk_firmware/tree/feature/riot_xap>.
