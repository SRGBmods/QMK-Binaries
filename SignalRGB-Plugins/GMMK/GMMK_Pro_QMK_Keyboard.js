export function Name() { return "Glorious GMMK Pro QMK Keyboard"; }
export function VendorId() { return 0x320F; }
export function ProductId() { return 0x5044; }
export function Publisher() { return "WhirlwindFX"; }
export function Size() { return [19, 7]; }
export function DefaultPosition(){return [10, 100]; }
export function DefaultScale(){return 8.0;}
/* global
shutdownColor:readonly
LightingMode:readonly
forcedColor:readonly
*/
export function ControllableParameters()
{
	return [
		{"property":"shutdownColor", "group":"lighting", "label":"Shutdown Color", "min":"0", "max":"360", "type":"color", "default":"#009bde"},
		{"property":"LightingMode", "group":"lighting", "label":"Lighting Mode", "type":"combobox", "values":["Canvas", "Forced"], "default":"Canvas"},
		{"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"#009bde"},
	];
}

//Plugin Version: Built for Protocol V1.0.4

const vKeysProAnsi =
[
	0, 6, 12, 18, 23, 28, 34, 39, 44, 50, 56, 61, 66,	     69, //Move 2 //14
	1, 7, 13, 19, 24, 29, 35, 40, 45, 51, 57, 62, 78, 85,       72,  //Move 2  	//15
	2, 8, 14, 20, 25, 30, 36, 41, 46, 52, 58, 63, 89, 93,       75, //Move 2 //15
	3, 9, 15, 21, 26, 31, 37, 42, 47, 53, 59, 64, 96,          86,    	//Add 1	//14
	4, 10, 16, 22, 27, 32, 38, 43, 48, 54, 60,   90,    94,   82,             //Add 1 //14
	5, 11, 17,      33,      49, 55, 65,       95, 97, 79, //Move 1 //10
	67, 68, 70, 71, 73, 74, 76, 77, 80, 81, 83, 84, 87, 88, 91, 92 //16
];
const vKeyNamesProAnsi =
[
	"Esc", "F1", "F2", "F3", "F4",   "F5", "F6", "F7", "F8",    "F9", "F10", "F11", "F12",         "Print Screen",
	"`", "1",  "2", "3", "4", "5",  "6", "7", "8", "9", "0",  "-",   "+",  "Backspace",    "Del",
	"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",                "Page Up",
	"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",             	"Page Down",
	"Left Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Right Shift",                		 "Up Arrow",   "End",
	"Left Ctrl", "Left Win", "Left Alt", "Space", "Right Alt", "Fn", "Right Ctrl", 			"Left Arrow", "Down Arrow", "Right Arrow",
	"UnderGlow1", "UnderGlow2", "UnderGlow3", "UnderGlow4", "UnderGlow5", "UnderGlow6", "UnderGlow7", "UnderGlow8", "UnderGlow9", "UnderGlow10", "UnderGlow11", "UnderGlow12", "Underglow13", "Underglow14", "Underglow15", "Underglow16",
];

const vKeyPositionsProAnsi =
[
	[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1],  		 		   [16, 1], //14
	[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2],  				    [17, 2], //15
	[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3],  				    [17, 3], //15
	[1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4], 		                    [17, 4], //14
	[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], 		                       [16, 5], [17, 5],   //14
	[1, 6], [2, 6], [3, 6],					        [7, 6],				             [11, 6], [12, 6],          [14, 6],  [15, 6], [16, 6], [17, 6],  //10
	[0, 0], [18, 0], [0, 1], [18, 1], [0, 2], [18, 2], [0, 3], [18, 3], [0, 4], [18, 4], [0, 5], [18, 5], [0, 6], [18, 6], [0, 6], [18, 6], //16
];

const vKeysProIso =
[
	0, 6, 12, 18, 23, 28, 34, 39, 44, 50, 56, 61, 66,	     70, //Move 2 //14
	1, 7, 13, 19, 24, 29, 35, 40, 45, 51, 57, 62, 79, 86,       73,  //Move 2  	//15
	2, 8, 14, 20, 25, 30, 36, 41, 46, 52, 58, 63, 90, 97,       76, //Move 2 //15
	3, 9, 15, 21, 26, 31, 37, 42, 47, 53, 59, 64, 95,          87,    	//Add 1	//14
	4, 67, 10, 16, 22, 27, 32, 38, 43, 48, 54, 60,   91, 94,   83,             //Add 1 //14
	5, 11, 17,      33,      49, 55, 65,       96, 98, 80, //Move 1 //10
	68, 69, 71, 72, 74, 75, 77, 78, 81, 82, 84, 85, 88, 89, 92, 93 //16
];

let vKeyNames = [];
let vKeyPositions = [];
let vKeys = [];

const vKeyNamesProIso =
[
	"Esc", "F1", "F2", "F3", "F4",   "F5", "F6", "F7", "F8",    "F9", "F10", "F11", "F12",         "Print Screen",
	"`", "1",  "2", "3", "4", "5",  "6", "7", "8", "9", "0",  "-",   "+",  "Backspace",    "Del",
	"Tab", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "[", "]", "Enter",             "Page Up",
	"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "#",             	    "Page Down",
	"Left Shift", "\\", "Y", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Right Shift",                	 "Up Arrow",   "End",
	"Left Ctrl", "Left Win", "Left Alt", "Space", "Right Alt", "Fn", "Right Ctrl", 			"Left Arrow", "Down Arrow", "Right Arrow",
	"UnderGlow1", "UnderGlow2", "UnderGlow3", "UnderGlow4", "UnderGlow5", "UnderGlow6", "UnderGlow7", "UnderGlow8", "UnderGlow9", "UnderGlow10", "UnderGlow11", "UnderGlow12", "Underglow13", "Underglow14", "Underglow15", "Underglow16",
];

const vKeyPositionsProIso =
[
	[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1],           [14, 1],                 //14
	[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2],                  [15, 2],    //15
	[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3],                  [15, 3],    //15
	[1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4],                         [15, 4], //14
	[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], [13, 5],                     [14, 5], [15, 5], //14
	[1, 6], [2, 6], [3, 6],                    [7, 6],                     [11, 6], [12, 6],         [12, 6],  [13, 6], [14, 6], [15, 6], //10
	[0, 0], [18, 0], [0, 1], [18, 1], [0, 2], [18, 2], [0, 3], [18, 3], [0, 4], [18, 4], [0, 5], [18, 5], [0, 6], [18, 6], [0, 6], [18, 6],             //16
];

let LEDCount = 0;
let IsViaKeyboard = false;
const MainlineQMKFirmware = 1;
const VIAFirmware = 2;
const PluginProtocolVersion = "1.0.4";

export function LedNames()
{
	return vKeyNames;
}

export function LedPositions()
{
	return vKeyPositions;
}

export function Initialize()
{
	requestFirmwareType();
	requestQMKVersion();
	requestSignalRGBProtocolVersion();
	requestUniqueIdentifier();
	requestTotalLeds();
	effectEnable();

}

export function Render()
{
	sendColors();
}

export function Shutdown()
{
	sendColors(true);
}

function commandHandler()
{
	let readCounts = [];

	do
	{
		let returnpacket = device.read([0x00], 32, 10);
		processCommands(returnpacket);

		readCounts.push(device.getLastReadSize());

		// Extra Read to throw away empty packets from Via
		// Via always sends a second packet with the same Command Id.
		if(IsViaKeyboard)
		{
			device.read([0x00], 32, 10);
		}
	}
	while(device.getLastReadSize() > 0);

}

function processCommands(data)
{
	switch(data[1])
	{
	case 0x21:
		returnQMKVersion(data);
		break;
	case 0x22:
		returnSignalRGBProtocolVersion(data);
		break;
	case 0x23:
		returnUniqueIdentifier(data);
		break;
	case 0x24:
		sendColors();
		break;
	case 0x27:
		returnTotalLeds(data);
		break;
	case 0x28:
		returnFirmwareType(data);
		break;
	}
}

function requestQMKVersion() //Check the version of QMK Firmware that the keyboard is running
{
	device.write([0x00, 0x21], 32);
	device.pause(30);
	commandHandler();
}

function returnQMKVersion(data)
{
	let QMKVersionByte1 = data[2];
	let QMKVersionByte2 = data[3];
	let QMKVersionByte3 = data[4];
	device.log("QMK Version: " + QMKVersionByte1 + "." + QMKVersionByte2 + "." + QMKVersionByte3);
	device.pause(30);
}

function requestSignalRGBProtocolVersion() //Grab the version of the SignalRGB Protocol the keyboard is running
{
	device.write([0x00, 0x22], 32);
	device.pause(30);
	commandHandler();
}

function returnSignalRGBProtocolVersion(data)
{
	let ProtocolVersionByte1 = data[2];
	let ProtocolVersionByte2 = data[3];
	let ProtocolVersionByte3 = data[4];

	let SignalRGBProtocolVersion = ProtocolVersionByte1 + "." + ProtocolVersionByte2 + "." + ProtocolVersionByte3;
	device.log(`SignalRGB Protocol Version: ${SignalRGBProtocolVersion}`);


	if(PluginProtocolVersion !== SignalRGBProtocolVersion)
	{
		device.notify("Unsupported Protocol Version: ", `This plugin is intended for SignalRGB Protocol version ${PluginProtocolVersion}. This device is version: ${SignalRGBProtocolVersion}`, 0);
	}

	device.pause(30);
}

function returnUniqueIdentifier(data)
{
	const UniqueIdentifierByte1 = data[2];
	const UniqueIdentifierByte2 = data[3];
	const UniqueIdentifierByte3 = data[4];

	if(UniqueIdentifierByte3 === 6)
	{
		device.setControllableLeds(vKeyNamesProIso, vKeyPositionsProIso);
		vKeys = vKeysProIso;
		vKeyNames = vKeyNamesProIso;
		vKeyPositions = vKeyPositionsProIso;
	}
	else
	{
		device.setControllableLeds(vKeyNamesProAnsi, vKeyPositionsProAnsi);
		vKeys = vKeysProAnsi;
		vKeyNames = vKeyNamesProAnsi;
		vKeyPositions = vKeyPositionsProAnsi;
	}

	device.log("Unique Device Identifier: " + UniqueIdentifierByte1 + UniqueIdentifierByte2 + UniqueIdentifierByte3);
	device.pause(30);
}

function requestTotalLeds() //Calculate total number of LEDs
{
	device.write([0x00, 0x27], 32);
	device.pause(30);
	commandHandler();
}

function returnTotalLeds(data)
{
	LEDCount = data[2];
	device.log("Device Total LED Count: " + LEDCount);
	device.pause(30);
}

function requestFirmwareType()
{
	device.write([0x00, 0x28], 32);
	device.pause(30);
	commandHandler();
}

function returnFirmwareType(data)
{
	let FirmwareTypeByte = data[2];

	if(!(FirmwareTypeByte === MainlineQMKFirmware || FirmwareTypeByte === VIAFirmware))
	{
		device.notify("Unsupported Firmware: ", "Click Show Console, and then click on troubleshooting for your keyboard to find out more.", 0);
	}

	if(FirmwareTypeByte === MainlineQMKFirmware)
	{
		IsViaKeyboard = false;
		device.log("Firmware Type: Mainline");
	}

	if(FirmwareTypeByte === VIAFirmware)
	{
		IsViaKeyboard = true;
		device.log("Firmware Type: VIA");
	}

	device.pause(30);
}

function effectEnable() //Enable the SignalRGB Effect Mode
{
	device.write([0x00, 0x25], 32);
	device.pause(30);
}

function effectDisable() //Revert to Hardware Mode
{
	device.write([0x00, 0x26], 32);
	device.pause(30);
}

function grabColors(shutdown = false)
{
	let rgbdata = [];

	for(let iIdx = 0; iIdx < vKeys.length; iIdx++)
	{
		let iPxX = vKeyPositions[iIdx][0];
		let iPxY = vKeyPositions[iIdx][1];
		let color;

		if(shutdown)
		{
			color = hexToRgb(shutdownColor);
		}
		else if (LightingMode === "Forced")
		{
			color = hexToRgb(forcedColor);
		}
		else
		{
			color = device.color(iPxX, iPxY);
		}

		let iLedIdx = vKeys[iIdx] * 3;
		rgbdata[iLedIdx] = color[0];
		rgbdata[iLedIdx+1] = color[1];
		rgbdata[iLedIdx+2] = color[2];
	}

	return rgbdata;
}

function sendColors(shutdown = false)
{
	let rgbdata = grabColors(shutdown);

	const LedsPerPacket = 9;
	let BytesSent = 0;
	let BytesLeft = rgbdata.length;

	while(BytesLeft > 0)
	{
		const BytesToSend = Math.min(LedsPerPacket * 3, BytesLeft);
		StreamLightingData(Math.floor(BytesSent / 3), rgbdata.splice(0, BytesToSend));

		BytesLeft -= BytesToSend;
		BytesSent += BytesToSend;
	}
}

function StreamLightingData(StartLedIdx, RGBData)
{
	let packet = [0x00, 0x24, StartLedIdx, Math.floor(RGBData.length / 3)];

	packet.push(...RGBData);
	device.write(packet, 33);
}

function hexToRgb(hex)
{
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	let colors = [];
	colors[0] = parseInt(result[1], 16);
	colors[1] = parseInt(result[2], 16);
	colors[2] = parseInt(result[3], 16);

	return colors;
}

export function Validate(endpoint)
{
	return endpoint.interface === 1;
}

export function Image()
{
	return "";
}