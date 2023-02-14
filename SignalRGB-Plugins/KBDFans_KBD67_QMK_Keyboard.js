export function Name() { return "KBDFans KBD67"; }
export function VendorId() { return 0x4b42; }
export function ProductId() { return 0x1225; }
export function Publisher() { return "WhirlwindFX"; }
export function Size() { return [15, 5]; }
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
		{"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
	];
}

const vKeys =
[
	0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14,
	15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
	30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
	44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
	58, 59, 60, 61, 62, 63, 64, 65, 66
];
const vKeyNames =
[
	"Esc", "1", "2", "3", "4", "5",  "6", "7", "8", "9", "0",  "-", "+",  "Backspace", "Home", //15
	"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Page Up",     //15
	"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",  "Page Down",    //14
	"Left Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Right Shift",    "Up Arrow",   "End",   //14
	"Left Ctrl", "Left Win", "Left Alt", "Space", "Right Alt", "Fn", "Left Arrow",  "Down Arrow", "Right Arrow", //9

];

const vKeyPositions =
[
	[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0], [13, 0], [14, 0], //15
	[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], //15
	[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2],         [13, 2], [14, 2], //14
	[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], 		   [13, 3], [14, 3],  //14
	[0, 4], [1, 4], [2, 4],					[6, 4],				    [10, 4], [11, 4], [12, 4], [13, 4], [14, 4]  //9
];

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
	ClearReadBuffer();
	versionQMK();
	versionSignalRGBProtocol();
	uniqueIdentifier();
	effectEnable();
}

export function Render()
{
	sendColors();
}

export function Shutdown()
{
	effectDisable();
}

function ClearReadBuffer(timeout = 10)
{
	let count = 0;
	let readCounts = [];
	device.flush();

	while(device.getLastReadSize() > 0)
	{
		device.read([0x00], 32, timeout);
		count++;
		readCounts.push(device.getLastReadSize());
	}
	//device.log(`Read Count ${count}: ${readCounts} Bytes`)
}

function versionQMK() //Check the version of QMK Firmware that the keyboard is running
{
	let packet = [];
	packet[0] = 0x00;
	packet[1] = 0x01;

	device.write(packet, 32);
	packet = device.read(packet, 32);

	let QMKVersionByte1 = packet[2];
	let QMKVersionByte2 = packet[3];
	let QMKVersionByte3 = packet[4];
	device.log("QMK Version: " + QMKVersionByte1 + "." + QMKVersionByte2 + "." + QMKVersionByte3);
	device.pause(30);
}

function versionSignalRGBProtocol() //Grab the version of the SignalRGB Protocol the keyboard is running
{
	let packet = [];
	packet[0] = 0x00;
	packet[1] = 0x02;

	device.write(packet, 32);
	packet = device.read(packet, 32);

	let ProtocolVersionByte1 = packet[2];
	let ProtocolVersionByte2 = packet[3];
	let ProtocolVersionByte3 = packet[4];
	device.log("SignalRGB Protocol Version: " + ProtocolVersionByte1 + "." + ProtocolVersionByte2 + "." + ProtocolVersionByte3);
	device.pause(30);
}

function uniqueIdentifier() //Grab the unique identifier for this keyboard model
{
	let packet = [];
	packet[0] = 0x00;
	packet[1] = 0x03;

	device.write(packet, 32);
	packet = device.read(packet, 32);

	let UniqueIdentifierByte1 = packet[2];
	let UniqueIdentifierByte2 = packet[3];
	let UniqueIdentifierByte3 = packet[4];
	device.log("Unique Device Identifier: " + UniqueIdentifierByte1 + UniqueIdentifierByte2 + UniqueIdentifierByte3);
	device.pause(30);
}

function effectEnable() //Enable the SignalRGB Effect Mode
{
	let packet = [];
	packet[0] = 0x00;
	packet[1] = 0x05;

	device.write(packet, 32);
	device.pause(30);
}

function effectDisable() //Revert to Hardware Mode
{
	let packet = [];
	packet[0] = 0x00;
	packet[1] = 0x06;

	device.write(packet, 32);
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

function sendColors()
{
	let rgbdata = grabColors();

	for(let index = 0; index < 8; index++) //This will need rounded up to closest value for your board.
	{
		let packet = [];
		let offset = index * 9;
		packet[0] = 0x00;
		packet[1] = 0x04;
		packet[2] = offset;
		packet[3] = 0x09;
		packet = packet.concat(rgbdata.splice(0, 27));
		device.write(packet, 33);

	}

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