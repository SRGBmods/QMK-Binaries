export function Name() { return "GMMK Pro"; }
export function Version() { return "1.1.4"; }
export function VendorId() { return 0x320F; }
export function ProductId() { return 0x5044; }
export function Publisher() { return "WhirlwindFX"; }
export function Documentation(){ return "qmk/supported-keyboards"; }
export function Size() { return [21, 7]; }
export function DefaultPosition() {return [75, 70]; }
export function DefaultScale(){return 8.0;}
/* global
shutdownMode:readonly
shutdownColor:readonly
LightingMode:readonly
forcedColor:readonly
*/
export function ControllableParameters()
{
	return [
		{"property":"shutdownMode", "group":"lighting", "label":"Shutdown Mode", "type":"combobox", "values":["SignalRGB", "Hardware"], "default":"SignalRGB"},
		{"property":"shutdownColor", "group":"lighting", "label":"Shutdown Color", "min":"0", "max":"360", "type":"color", "default":"000000"},
		{"property":"LightingMode", "group":"lighting", "label":"Lighting Mode", "type":"combobox", "values":["Canvas", "Forced"], "default":"Canvas"},
		{"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
	];
}

const vKeys =
[
	0, 6, 12, 18, 23, 28, 34, 39, 44, 50, 56, 61, 66,	     69, //Move 2 //14
	1, 7, 13, 19, 24, 29, 35, 40, 45, 51, 57, 62, 78, 85,       72,  //Move 2  	//15
	2, 8, 14, 20, 25, 30, 36, 41, 46, 52, 58, 63, 89, 93,       75, //Move 2 //15
	3, 9, 15, 21, 26, 31, 37, 42, 47, 53, 59, 64, 96,          86,    	//Add 1	//14
	4, 10, 16, 22, 27, 32, 38, 43, 48, 54, 60,   90,    94,   82,             //Add 1 //14
	5, 11, 17,      33,      49, 55, 65,       95, 97, 79, //Move 1 //10
	67, 68, 70, 71, 73, 74, 76, 77, 80, 81, 83, 84, 87, 88, 91, 92 //16
];
const vKeyNames =
[
	"Esc", "F1", "F2", "F3", "F4",   "F5", "F6", "F7", "F8",    "F9", "F10", "F11", "F12",         "Print Screen",
	"`", "1",  "2", "3", "4", "5",  "6", "7", "8", "9", "0",  "-",   "+",  "Backspace",    "Del",
	"Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\",                "Page Up",
	"CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter",             	"Page Down",
	"Left Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Right Shift",                		 "Up Arrow",   "End",
	"Left Ctrl", "Left Win", "Left Alt", "Space", "Right Alt", "Fn", "Right Ctrl", 			"Left Arrow", "Down Arrow", "Right Arrow",
	"UnderGlow1", "UnderGlow2", "UnderGlow3", "UnderGlow4", "UnderGlow5", "UnderGlow6", "UnderGlow7", "UnderGlow8", "UnderGlow9", "UnderGlow10", "UnderGlow11", "UnderGlow12", "Underglow13", "Underglow14", "Underglow15", "Underglow16",
];

const vKeyPositions =
[
	[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1],  		 		 [16, 1], //14
	[1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2],  				[17, 2], //15
	[1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3], [14, 3],  				[17, 3], //15
	[1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4], [10, 4], [11, 4], [12, 4], [13, 4], 		                [17, 4], //14
	[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [11, 5], [12, 5], 		                 [16, 5], [17, 5],   //14
	[1, 6], [2, 6], [3, 6],					[7, 6],				     [11, 6], [12, 6],         [14, 6],  [15, 6], [16, 6], [17, 6],  //10
	[0, 0], [18, 0], [0, 1], [18, 1], [0, 2], [18, 2], [0, 3], [18, 3], [0, 4], [18, 4], [0, 5], [18, 5], [0, 6], [18, 6], [0, 6], [18, 6], //16
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
	if (shutdownMode === "SignalRGB")
	{
		sendColors(true);
	}
	else
	{
		effectDisable();
	}

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

	for(let index = 0; index < 10; index++) //This will need rounded up to closest value for your board.
	{
		let packet = [];
		let offset = index * 9;
		packet[0] = 0x00;
		packet[1] = 0x04;
		packet[2] = offset;
		packet[3] = 0x09;
		packet = packet.concat(rgbdata.splice(0, 27));
		device.write(packet, 33);
		device.pause(1);
	}

	let packet = []; //This is a bruteforce method for the moment.
	packet[0] = 0x00;
	packet[1] = 0x04;
	packet[2] = 0x5A;
	packet[3] = 0x08;
	packet = packet.concat(rgbdata.splice(0, 24));
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