# We recommend looking at the WIP Community Module #
More development is occuring on the [Community Module](https://github.com/SRGBmods/QMK_Community_Module) in comparison to the source found here.

## For GPL Compliance (Full Source code): ##
[QMK Mainline + SignalRGB Merged Source](https://gitlab.com/signalrgb/qmk_firmware/-/tree/QMKRelease_1.0) & [SonixQMK + SignalRGB Merged Source](https://gitlab.com/signalrgb/qmk_firmware/-/tree/Sonix_QMKRelease_1.0).

---

# Credits #
Thanks to the [SonixQMK](https://github.com/SonixQMK/qmk_firmware) , [QMK](https://github.com/qmk/qmk_firmware) , [VIA](https://www.caniusevia.com/) , [GloriousThrall](https://github.com/GloriousThrall/qmk_firmware/) , [jonylee1986](https://github.com/jonylee1986/qmk_firmware_master) , [Keychron](https://github.com/Keychron/qmk_firmware), [SHVD3x](https://github.com/SHVD3x/qmk_firmware) and [Vial](https://github.com/vial-kb/vial-qmk) communities for providing source code (not to mention PRs that are still waiting), all original code is completely theirs and thanks to them for providing the code for us and everyone else!

Licenses include: [SonixQMK](https://github.com/SonixQMK/qmk_firmware/blob/sn32_master/LICENSE) , [QMK](https://github.com/qmk/qmk_firmware/blob/master/LICENSE) , [VIA](https://github.com/the-via/firmware/blob/master/LICENSE) , [GloriousThrall](https://github.com/GloriousThrall/qmk_firmware/blob/master/license_GPLv3.md) , [jonylee1986](https://github.com/jonylee1986/qmk_firmware_master/blob/master/LICENSE) , [SHVD3x](https://raw.githubusercontent.com/SHVD3x/qmk_firmware/master/LICENSE), [Keychron](https://github.com/Keychron/qmk_firmware/blob/master/LICENSE) , and  [Vial](https://github.com/vial-kb/vial-qmk/blob/vial/LICENSE).

---

### Manually add Protocol support files ###

To manually add the SignalRGB Protocol 1.0.5 / 1.0.6 to almost any qmk fork (the keyboard does require rgb_matrix support mind you!) please see the version directories. **DO NOT DRAG AND DROP TO REPLACE FILES, THESE ARE HAND PATCHES**

The above code changes have been applied to vanilla / playground repos for each fork(s) for the binaries provided. 

---

**If and when possible specific forks for supporting specific keyboards will be merged to QMK mainline release (cp -rp specificfork/keyboards/<keyboard_brand/maybe_a_child> ~/qmk/mainline/keyboards) and compiled against it.**

_(The above may include backporting RGB_Matrix to that specific board and the source is available in the QMK mainline and can be provided upon request keeping track of all these gets a bit tricky but I will definitely **try**.)_

---

## Help with these binaries / user plugin creation ##

[First please read directions](https://github.com/SRGBmods/QMK-Binaries/#directions).

**This firmware is not officially supported by SignalRGB, QMK or any other software development team but by the moderator team of SignalRGB. Support can be provided either on the Github repository ([**Issues**](https://github.com/SRGBmods/QMK-Binaries/issues)) here or the QMK channels of this** [**Discord**](https://discord.com/invite/J5dwtcNhqC) **(Discord will be faster in most cases).**

**Please keep support requests to either of those locations only, thanks!**

If you notice something missing (keyboard or variation of a keyboard) or have any issues with these binaries please contact Naitoshedo on the above Discord server.
