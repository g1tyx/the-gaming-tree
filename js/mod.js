let modInfo = {
	name: "The Gaming Tree",
	id: "mymod",
	author: "medsal15",
	pointsName: "points",
	modFiles: ["moreutils.js", "layers/experience.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 12,  // In hours
};

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Experience",
};

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.1</h3><br>
		- Added XP layer.<br>
		- Update endgame: 9 experience upgrades.`;

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`;

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints() {
    return new Decimal(modInfo.initialStartPoints);
}

// Determines if it should show points/sec
function canGenPoints() {
	return hasUpgrade("xp", 11);
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0);

	let gain = new Decimal(1);

	if (hasUpgrade("xp", 12)) gain = gain.times(3);
	if (hasUpgrade("xp", 21)) gain = gain.times(upgradeEffect("xp", 21));
	if (hasUpgrade("xp", 22)) gain = gain.times(upgradeEffect("xp", 22));
	if (hasUpgrade("xp", 32)) gain = gain.times(upgradeEffect("xp", 32));

	return gain;
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return { };
}

// Display extra things at the top of the page
var displayThings = [ ]

// Determines when the game "ends"
function isEndgame() {
	return player.xp.upgrades.length >= 9;
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = { }

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600); // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion) { }
