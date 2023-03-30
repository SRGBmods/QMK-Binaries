![SRGBmods QMK Builds](https://srgbmods.net/img/srgbmods-qmk.png)
# QMK Binaries #
[QMK Firmware](https://qmk.fm/) that is supported by [SignalRGB](https://www.signalrgb.com) (includes protocol information for direct ARGB mode), compiled for your convenience and ready to install!

If you wish to compile your own yourself the directions can be found [here](https://docs.signalrgb.com/qmk/building-firmware-from-source).
	
**These binaries may include releases from different "playground(s)" and QMK repositories. stability is not guaranteed..**

---

### Help with these binaries / user plugin creation ###

[First please read directions below](https://github.com/SRGBmods/QMK-Binaries/#directions).

**This firmware is not officially supported by SignalRGB, QMK or any other software development team but by the moderator team of SignalRGB. Support can be provided either on the Github repository ([**Issues**](https://github.com/SRGBmods/QMK-Binaries/issues)) here or the QMK channels of this** [**Discord**](https://discord.com/invite/J5dwtcNhqC) **(Discord will be faster in most cases).**

**Please keep support requests to either of those locations only, thanks!**

If you notice something missing (keyboard or variation of a keyboard) or have any issues with these binaries please contact Naitoshedo on the above Discord server.

---

### QMK+VIA-Firmware (_We recommend these_): ###
**One thing of note if you are attempting to use VIA or Vial to configure your keyboard you _must_ quit SignalRGB before running either software**
* **[0.20.3](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.20.3)** is the new [QMK Mainline github](https://github.com/qmk/qmk_firmware), currently being pulled and fixes to boards are applied and uploaded.
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
**If you are using VIA or Vial currently, you should save your current mappings (layout) e.g. back it up before flashing that way you can restore it once the flash is complete!**

To use these files you may find [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases/) helpful.

Or if a Sonix based firmware [these directions](https://sonixqmk.github.io//SonixDocs/install/#4-flashing-the-firmware) should help.

You will also need to follow the directions from your Keyboard manufacturer to put your device in bootloader mode in order to use QMK Toolbox / Sonix Flasher. (Google is your friend!)
(Check their website for directions, you should honestly check there anyways for firmware in case you to need to factory restore as well.)

After flashing your firmware you will need a user plugin in SignalRGB in order for SignalRGB to talk to your keyboard. First see if your keyboard works immediately on launching SignalRGB, if that fails check our [user submitted plugins](https://github.com/SRGBmods/QMK-Binaries/tree/main/SignalRGB-Plugins), and finally [here are the directions](https://docs.signalrgb.com/qmk/srgbmods-qmk-firmware) for creating your own user plugin.

---

### Older Builds - AKA Archived QMK + SignalRGB builds ###
* **[0.20.1](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.20.1)** Archived 0.20.1.zip (Old QMK Mainline Default+SignalRGB Support)
* **[0.20.0](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/_Archived)** Archived 0.20.0.zip (Old QMK Mainline Default+SignalRGB Support)
* **[0.19.12](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/_Archived)** Archived 0.19.12.zip (Old QMK Mainline Default+SignalRGB Support)

---

* **[0.20.0](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/_Archived)** Archived 0.20.0.zip (Old QMK Mainline VIA+SignalRGB Support).
* **[0.19.12](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/_Archived)** Archived 0.19.12.zip (Old QMK Mainline VIA+SignalRGB Support).
* **[0.19.11](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/_Archived)** Archived 0.19.11.zip (Old QMK Mainline VIA+SignalRGB Support).

---

# For GPL Compliance (Full Source code): #
[QMK Mainline + SignalRGB Merged Source](https://gitlab.com/signalrgb/qmk_firmware/) & [SonixQMK + SignalRGB Merged Source](https://gitlab.com/signalrgb/qmk_firmware/-/tree/Sonix_QMKRelease_1.0).

---

# Credits #
Thanks to the [SonixQMK](https://github.com/SonixQMK/qmk_firmware) , [QMK](https://github.com/qmk/qmk_firmware) , [VIA](https://www.caniusevia.com/) , [GloriousThrall](https://github.com/GloriousThrall/qmk_firmware/) , [jonylee1986](https://github.com/jonylee1986/qmk_firmware_master) , [Keychron](https://github.com/Keychron/qmk_firmware) and [Vial](https://github.com/vial-kb/vial-qmk) communities for providing source code, all original code is completely theirs and thanks to them for providing the code for us and everyone else!

Licenses include: [SonixQMK](https://github.com/SonixQMK/qmk_firmware/blob/sn32_master/LICENSE) , [QMK](https://github.com/qmk/qmk_firmware/blob/master/LICENSE) , [VIA](https://github.com/the-via/firmware/blob/master/LICENSE) , [GloriousThrall](https://github.com/GloriousThrall/qmk_firmware/blob/master/license_GPLv3.md) , [jonylee1986](https://github.com/jonylee1986/qmk_firmware_master/blob/master/LICENSE) , [Keychron](https://github.com/Keychron/qmk_firmware/blob/master/LICENSE) , and  [Vial](https://github.com/vial-kb/vial-qmk/blob/vial/LICENSE).

---

### Manually add Protocol support files ###

To manually add the SignalRGB Protocol 1.0.4 to almost any qmk fork please see the [following files](https://github.com/SRGBmods/QMK-Binaries/tree/main/GPL/qmk_firmware).

The above code changes have been applied to vanilla / playground repos for each fork(s) for the binaries provided.

---

**If and when possible specific forks for supporting specific keyboards will be merged to QMK mainline release (cp -rp specificfork/keyboards/<keyboard_brand/maybe_a_child> ~/qmk/mainline/keyboards) and compiled against it.**

_(The above may include backporting RGB_Matrix to that specific board and the source is available in the QMK mainline and can be provided upon request keeping track of all these gets a bit tricky but I will definitely **try**.)_
