![SRGBmods QMK Builds,100%](https://srgbmods.net/img/srgbmods-qmk.png)

# PLEASE __READ ALL OF THIS__, IT WILL HELP YOU. #

Need help and cannot be bothered to read anything below this? Join this [**Discord**](https://discord.gg/jY2xrWXXRc) assign yourself the QMK role from the pull down. Then puruse the channels provided for QMK + SignalRGB users. No support for any of these files will be provided by official email tech support. Only Discord & Github issues.

# _Make sure to click the download button for your specific firmware (if a bin file), otherwise view the firmware file then right click and choose "save link as" on the raw button!_ #

# QMK Binaries #
[QMK Firmware](https://qmk.fm/) that is supported by [SignalRGB](https://www.signalrgb.com) (includes protocol information for direct ARGB mode), compiled for your convenience and ready to install!

If you wish to compile your own yourself the directions can be found [here](https://docs.signalrgb.com/qmk/building-firmware-from-source).
	
**These binaries may include releases from different "playground(s)" and QMK repositories. stability is not guaranteed**, but Naitoshedo will definitely attempt to help you as well as our other moderators & occasionaly staff.

---

# For GPL Compliance (Full Source code): #
[QMK Mainline + SignalRGB Protocol](https://github.com/SRGBmods/QMK), [SonixQMK + SignalRGB Protocol](https://github.com/SRGBmods/SonixQMK) & [Keychron + SignalRGB Protocol](https://github.com/SRGBmods/KeychronQMK) & [Others](https://github.com/orgs/SRGBmods/repositories?q=QMK).

Additionally see the following [directory](https://github.com/SRGBmods/QMK-Binaries/tree/main/GPL), these are the files (with comments) for hand patching SignalRGB Protocol support into 3rd party QMK forks.

---

# Credits #
Thanks to the [SonixQMK](https://github.com/SonixQMK/qmk_firmware) , [QMK](https://github.com/qmk/qmk_firmware) , [VIA](https://www.caniusevia.com/) , [GloriousThrall](https://github.com/GloriousThrall/qmk_firmware/) , [jonylee1986](https://github.com/jonylee1986/qmk_firmware_master) , [Keychron](https://github.com/Keychron/qmk_firmware) , [Vial](https://github.com/vial-kb/vial-qmk) and many more communities for providing source code, all original code is completely theirs and thanks to them for providing the code for us and everyone else!

Licenses include: [SonixQMK](https://github.com/SonixQMK/qmk_firmware/blob/sn32_master/LICENSE) , [QMK](https://github.com/qmk/qmk_firmware/blob/master/LICENSE) , [VIA](https://github.com/the-via/firmware/blob/master/LICENSE) , [GloriousThrall](https://github.com/GloriousThrall/qmk_firmware/blob/master/license_GPLv3.md) , [jonylee1986](https://github.com/jonylee1986/qmk_firmware_master/blob/master/LICENSE) , [Keychron](https://github.com/Keychron/qmk_firmware/blob/master/LICENSE) , and  [Vial](https://github.com/vial-kb/vial-qmk/blob/vial/LICENSE).

---

# Help with these binaries / user plugin creation #

**This firmware is not "officially" supported by SignalRGB, QMK or any other software development team but by the moderator team of SignalRGB. Support can be provided either on the Github repository ([**Issues**](https://github.com/SRGBmods/QMK-Binaries/issues)) here or the QMK channels of this** [**Discord**](https://discord.com/invite/J5dwtcNhqC) **(Discord will be faster in most cases)**, after joining this specific Discord go to the #roles channel and assign yourself the QMK role. This will allow you to interact with the QMK group / support mods of the server.

**Please keep support requests to either of those locations only, thanks!**

If you notice something missing (keyboard or variation of a keyboard) or have any issues with these binaries please contact Naitoshedo on the above Discord server.

---

# Start here if you are new #
[QMK + VIA builds](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware) these are the most recommended builds and may help narrow things down (don't skip directly but keep reading please), but there are several QMK builds listed, always start with the most recent version VIA builds listed and then work your way down the links from here. Issues? Please contact Naitoshedo on the [**Plugin Discord Server**](https://discord.gg/jY2xrWXXRc) server. (If you are using a Keychron keyboard I suggest you try the keychron suffix first, if it fails use the via suffix instead... for example: start with keychron_v6_ansi_keychron.bin and if that fails try keychron_v6_ansi_via.bin as it may be more stable or actually work)

[VIA JSON Definitions](https://github.com/SRGBmods/QMK-Binaries/tree/main/VIA_JSON) these files are for loading into VIA if the definition file is reported missing (newer keyboards than what are included in VIA).

---

### QMK+VIA-Firmware (_We recommend these_): ###
**Start Here when in doubt mainline is the most reliable! in fact _default_ builds are being deprecated (retired, unreliable etc)**

_Please explore here as there are many builds that you may find helpful!_

**One thing of note if you are attempting to use VIA or Vial to configure your keyboard you _must_ quit SignalRGB before running either software**
#### QMK Mainline (VIA Builds) - You Should Start with these. ####
* **[0.24.7](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.24.7)** is the new [QMK Mainline github development branch](https://github.com/qmk/qmk_firmware), currently being pulled and fixes to boards are applied and uploaded. (SRGBP¹ 1.0.5)
* **[0.20.8](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.20.8)** is the oldest release [QMK Mainline github](https://github.com/qmk/qmk_firmware), if you have issues with the above try this next. (SRGBP¹ 1.0.4)

**¹SRGBP refers to SignalRGB Protocol Version**

#### Jonylee1986 Fork ####
* **[0.20.7](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.20.7-jonylee1986)** These are specifically hfdkb based boards (monsgeek, top40, acr87, akko) if you cannot find these in mainline first then use these. (SRGBP* 1.0.4)

#### Keychron ####
* **[0.14.29](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.14.29-keychron)** is Keychron's [bluetooth_playground](https://github.com/Keychron/qmk_firmware/tree/bluetooth_playground), [wireless_playground](https://github.com/Keychron/qmk_firmware/tree/wireless_playground) and [playground](https://github.com/Keychron/qmk_firmware/tree/playground). When connected to USB (wired mode) ARGB is controllable. (Bluetooth is not supported by SignalRGB currently).
#### SonixQMK ####
* **[sn32_develop](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/sn32_develop)** is for **Sonix based keyboards _only_** and is currently under construction from SonixQMK's sn32_develop branch.
* **[0.15.12-sonix](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.15.12-sonix)** is for **Sonix based keyboards _only_** and comes from an older SonixQMK repo.
* **[0.7.101-sonix](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.7.101-sonix)** is for **Sonix based keyboards _only_** and comes from an older SonixQMK repo.
* **[0.7.101-sonix-develop](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/0.7.101-sonix_develop)** is for **Sonix based keyboards _only_** and comes from an older SonixQMK repo.

---

### QMK+VIA-Vial-Firmware: ###
**One thing of note if you are attempting to use VIA or Vial to configure your keyboard you _must_ quit SignalRGB before running either software**
* **[01_21_2024](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA%2BVial-Firmware)** is the latest dev [Vial QMK Branch](https://github.com/vial-kb/vial-qmk), currently being pulled and fixes to boards are applied and uploaded.

---

### QMK+Default-Firmware: (_When all else fails_) ###
**Please note:** _Default builds are now deprecated, as VIA, VIAL, or XAP builds will replace all except for speciality builds._
#### QMK Mainline ####
* **[0.24.7](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/0.24.7)** is from [QMK Mainline github](https://github.com/qmk/qmk_firmware), last default version to be compiled (This is default without VIA support).
* **[0.20.8](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/0.20.8)** is the previous release [QMK Mainline github](https://github.com/qmk/qmk_firmware), if you have issues with the above try this next (This is default without VIA support).
#### SonixQMK ####
* **[0.15.12-sonix](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/0.15.12-sonix)** is for **Sonix based keyboards _only_** and comes from an older SonixQMK repo.

---

### Directions ###
**If you are using VIA or Vial currently, you should save your current mappings (layout) e.g. back it up before flashing that way you can restore it once the flash is complete!**

To use these files you may find [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases/) helpful.
**Make sure to go to the Tools menu -> and Install Drivers!**

Or if a Sonix based firmware [these directions](https://sonixqmk.github.io/SonixDocs/install/#4-flashing-the-firmware) should help.

You will also need to follow the directions from your Keyboard manufacturer to put your device in bootloader mode in order to use QMK Toolbox / Sonix Flasher. (Google is your friend!)
(Check their website for directions, you should honestly check there anyways for firmware in case you to need to factory restore as well.)

After flashing your firmware you will need a user plugin in SignalRGB in order for SignalRGB to talk to your keyboard. First see if your keyboard works immediately on launching SignalRGB, if that fails check our [user submitted plugins](https://github.com/SRGBmods/qmk-plugins)

And finally [here are the directions](https://docs.signalrgb.com/qmk/srgbmods-qmk-firmware#user-plugin-creation) for creating your own user plugin.

---

### Older Builds - Archived builds ###
* **[VIA](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA-Firmware/_Archived)** Archived VIA builds (Old QMK Mainline VIA+SignalRGB Support).
* **[Vial](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BVIA%2BVial-Firmware/_Archived)** Archived Vial builds (Old QMK Mainline VIA+Vial+SignalRGB Support).
* **[Default](https://github.com/SRGBmods/QMK-Binaries/tree/main/QMK%2BDefault-Firmware/_Archived)** Archived Default builds (Old QMK Mainline Default+SignalRGB Support)

---

### Manually add Protocol support files ###

To manually add the SignalRGB Protocol 1.0.5 to almost any qmk fork please see the [following files](https://github.com/SRGBmods/QMK-Binaries/tree/main/GPL/qmk_firmware).

The above code changes have been applied to vanilla / playground repos for each fork(s) for the binaries provided.

---

**If and when possible specific forks for supporting specific keyboards will be merged to QMK mainline release (cp -rp specificfork/keyboards/<keyboard_brand/maybe_a_child> ~/qmk/mainline/keyboards) and compiled against it.**

_(The above may include backporting RGB_Matrix to that specific board and the source is available in the QMK mainline and can be provided upon request keeping track of all these gets a bit tricky but I will definitely **try**.)_
