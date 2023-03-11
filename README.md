![SRGBmods QMK Builds](https://srgbmods.net/img/srgbmods-qmk.png)
# QMK Binaries #
[QMK Firmware](https://qmk.fm/) that is supported by [SignalRGB](https://www.signalrgb.com) (includes protocol information for direct ARGB mode), compiled for your convenience and ready to install!
If you wish to do this yourself the directions can be found [here](https://docs.signalrgb.com/qmk/building-firmware-from-source).
	
**These binaries may include releases from different "playground(s)" and QMK repositories. stability is not guaranteed..**

---

### QMK+VIA-Firmware (_We recommend these_): ###
**One thing of note if you are attempting to use VIA or Vial to configure your keyboard you _must_ quit SignalRGB before running either software**
* **[0.20.1](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.20.1)** is the new [QMK Mainline github](https://github.com/qmk/qmk_firmware), currently being pulled and fixes to boards are applied and uploaded.
* **[0.14.29](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.14.29)** is Keychron's [bluetooth_playground](https://github.com/Keychron/qmk_firmware/tree/bluetooth_playground) so at least when charging a K2 Pro to K8 Pro the ARGB is controllable. (Bluetooth is not supported by SignalRGB currently) - This also includes [q1 version two firmware](https://github.com/Keychron/qmk_firmware/tree/keychron-q1v1-q1v2) now as well.
* **[0.7.101-sonix](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.7.101-sonix)** is for **Sonix based keyboards _only_** and comes from [SonixQMK](https://github.com/SonixQMK/qmk_firmware/). - More firmware from this repo is coming **soon**!
* **[0.15.12-sonix](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.15.12-sonix)** is for **Sonix based keyboards _only_** and comes from [Sonix_QMKRelease_1.0](https://gitlab.com/signalrgb/qmk_firmware/-/tree/Sonix_QMKRelease_1.0/keyboards).

---

### QMK+VIA-Vial-Firmware: ###
**One thing of note if you are attempting to use VIA or Vial to configure your keyboard you _must_ quit SignalRGB before running either software**
* **[0.18.6](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA%2BVial-Firmware/0.18.6)** is the latest [Vial QMK Branch](https://github.com/vial-kb/vial-qmk), currently being pulled and fixes to boards are applied and uploaded.

---

### QMK+Default-Firmware: (_When all else fails_) ###
* **[0.20.1](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/0.20.1)** is the new [QMK Mainline github](https://github.com/qmk/qmk_firmware), currently being pulled and fixes to boards are applied and uploaded (This is default without VIA support).
* **[0.15.12-sonix](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/0.15.12-sonix)** is for **Sonix based keyboards _only_** and comes from [Sonix_QMKRelease_1.0](https://gitlab.com/signalrgb/qmk_firmware/-/tree/Sonix_QMKRelease_1.0/keyboards).

---

### Directions ###
**If you are using VIA currently, you should save your current mappings (layout) e.g. back it up with VIA before flashing that way you can restore it once the flash is complete!**

To use these files you may find [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases/) helpful.

Or if a Sonix based firmware [these directions](https://sonixqmk.github.io//SonixDocs/install/#4-flashing-the-firmware) should help.

You will also need to follow the directions from your Keyboard manufacturer to put your device in bootloader mode in order to use QMK Toolbox / Sonix Flasher. (Google is your friend!)
(Check their website for directions, you should honestly check there anyways for firmware in case you to need to factory restore as well.)

After flashing your firmware you will need a user plugin in SignalRGB in order for SignalRGB to talk to your keyboard. First see if your keyboard works immediately on launching SignalRGB, if that fails check our [user submitted plugins](https://github.com/SRGBmods/QMK-Binaries/tree/main/SignalRGB-Plugins), and finally [here are the directions](https://docs.signalrgb.com/qmk/srgbmods-qmk-firmware) for creating your own user plugin.

### Help with these binaries / user plugin creation ###

**This firmware is not officially supported by SignalRGB or QMK but by the moderator team of SignalRGB. Support can be provided either on the Github repository ( [**Issues**](https://github.com/SRGBmods/QMK-Binaries/issues) ) or the QMK channels of this** [**Discord**](https://discord.com/invite/J5dwtcNhqC) **(Discord will be faster in most cases).**

**Please keep support requests to either of those locations only, thanks!**

If you notice something missing (keyboard or variation of a keyboard) or have any issues with these binaries please contact Naitoshedo on the above Discord server.


### Older Builds - AKA Archived QMK + SignalRGB builds ###
* **[0.20.0](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/_Archived)** Archived 0.20.0.zip (Old QMK Mainline Default+SignalRGB Support)
* **[0.19.12](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/_Archived)** Archived 0.19.12.zip (Old QMK Mainline Default+SignalRGB Support)

---

* **[0.20.0](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/_Archived)** Archived 0.20.0.zip (Old QMK Mainline VIA+SignalRGB Support).
* **[0.19.12](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/_Archived)** Archived 0.19.12.zip (Old QMK Mainline VIA+SignalRGB Support).
* **[0.19.11](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/_Archived)** Archived 0.19.11.zip (Old QMK Mainline VIA+SignalRGB Support).

---

# Credits #
Thanks to the SonixQMK, QMK, VIA, GloriousThrall, and Vial communities for providing source code, all original code is completely theirs and thanks to them for providing the code for us and everyone else to use!

[SonixQMK](https://github.com/SonixQMK/qmk_firmware) , [QMK](https://github.com/qmk/qmk_firmware) , [VIA](https://www.caniusevia.com/) , [GloriousThrall](https://github.com/GloriousThrall/qmk_firmware/), and [Vial](https://github.com/vial-kb/vial-qmk)

---

## For [GPL Compliance (Source code)](https://github.com/SRGBmods/QMK-Binaries/tree/main/GPL): ##
[QMK Mainline + SignalRGB Merged Source](https://gitlab.com/signalrgb/qmk_firmware/-/tree/QMKRelease_1.0) & [SonixQMK + SignalRGB Merged Source](https://gitlab.com/signalrgb/qmk_firmware/-/tree/Sonix_QMKRelease_1.0).

[Code changes for SignalRGB Protocol 1.0.4 + SonixQMK](https://github.com/SRGBmods/QMK-Binaries/blob/main/GPL/SignalRGB-Changes_QMK-example-code-Sonix.patch)

[Code changes for SignalRGB Protocol 1.0.4 + QMK Master](https://github.com/SRGBmods/QMK-Binaries/blob/main/GPL/SignalRGB-Changes_QMK-example-code.patch)

[common_features.mk](https://github.com/SRGBmods/QMK-Binaries/blob/main/GPL/common_features.mk) & [signalrgb.c](https://github.com/SRGBmods/QMK-Binaries/blob/main/GPL/signalrgb.c) & [signalrgb.h](https://github.com/SRGBmods/QMK-Binaries/blob/main/GPL/signalrgb.h) & [quantum.h](https://github.com/SRGBmods/QMK-Binaries/blob/main/GPL/quantum.h) additional code used by both SonixQMK & QMK Mainline.

The above code changes have been applied to vanilla / playground repos for each fork(s) for the binaries provided.