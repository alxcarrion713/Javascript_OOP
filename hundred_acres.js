var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };

tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;

var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;
owl.south=piglet;


var Bees = {character: "Bees"};
Bees.west = tigger.north;
tigger.north.east = Bees;
rabbit.south= Bees;

var Owl = {character: "Owl"};
piglet.north = Owl;
Owl.south = piglet;
Owl.east = pooh.north;
pooh.north.west = Owl;

var chris = {character: Christopher_Robin};
pooh.north= chris;
chris.south= pooh;
chris.west= piglet.north;
owl.east= pooh.north;
rabbit.west= pooh.north;
Bees.north.west= pooh.north;
piglet.north.east= pooh.north;

var rabbit= {character: Rabbit};
Bees.north= rabbit;
rabbit.south= Bees;
rabbit.west= pooh.north;
pooh.north.east= rabbit;
rabbit.east= gopher;
gopher.west= Bees.north;

var gopher={character:Gopher};
gopher.west= rabbit;
rabbit.east= gopher;
Bees.north=gopher.west;

var kango={character: Kango};
kango.south= chris;
chris.north= kango;
kango.south= rabbit.west;
kango.south= owl.east;

var eeyore= {character:Eeyore};
eeyore.south= kango;
kango.north= eeyore;
eeyore.south= chris.north;

var heffalumps={character: heffalumps};
heffalumps.west=eeyore;
eeyore.east=heffalumps;

