export function Name() { return "Keychron Q0"; }
export function VendorId() { return 0x3434; }
export function ProductId() { return 0x0130; }
export function Publisher() { return "Caedendi"; }
export function Documentation(){ return "/qmk/building-firmware-from-source"; }
export function Size() { return [4, 6]; }
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
		{"property":"shutdownColor", "group":"lighting", "label":"Shutdown Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
		{"property":"LightingMode", "group":"lighting", "label":"Lighting Mode", "type":"combobox", "values":["Canvas", "Forced"], "default":"Canvas"},
		{"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"009bde"}
	];
}

//Plugin Version: Built for Protocol V1.0.4

const vKeys =
[
	 0,  1,  2,  3,
	 4,  5,  6,  7,
	 8,  9, 10,
	11, 12, 13, 14,
	15, 16, 17,
	18,     19, 20,
];
const vKeyNames =
[
	"Circle", "Triangle", "Square",     "Cross",
	"NumLock",   "Num /",  "Num *",     "Num -",
	"Num 7",     "Num 8",  "Num 9",
	"Num 4",     "Num 5",  "Num 6",     "Num +",
	"Num 1",     "Num 2",  "Num 3",
	"Num 0",               "Num .", "Num Enter"
];

const vKeyPositions =
[
	[0, 0], [1, 0], [2, 0], [3, 0],
	[0, 1], [1, 1], [2, 1], [3, 1],
	[0, 2], [1, 2], [2, 2],
	[0, 3], [1, 3], [2, 3], [3, 3],
	[0, 4], [1, 4], [2, 4],
	[0, 5], 		[2, 5], [3, 5]
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

function requestUniqueIdentifier() //Grab the unique identifier for this keyboard model
{
	device.write([0x00, 0x23], 32);
	device.pause(30);
	commandHandler();
}

function returnUniqueIdentifier(data)
{
	let UniqueIdentifierByte1 = data[2];
	let UniqueIdentifierByte2 = data[3];
	let UniqueIdentifierByte3 = data[4];

	if(!(UniqueIdentifierByte1 === 0 && UniqueIdentifierByte2 === 0 && UniqueIdentifierByte3 === 0))
	{
		device.log("Unique Device Identifier: " + UniqueIdentifierByte1 + UniqueIdentifierByte2 + UniqueIdentifierByte3);
	}

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