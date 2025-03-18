export interface Horse {
  name: string;
  image: string;
  description: string;
  breed: string;
  color?: string;
  age?: number;
  sex?: string; // Example: "15.2 hands"
  sire?: string; // Horse's father
  dam?: string; // Horse's mother
  winnings?: string[]; // For performance horses like reiners
  championships?: string[]; // For show horses like Morgans
  accomplishments?: string[]; // Combined list of winnings and championships
}

export const horses: Horse[] = [
  {
    name: "West Coast Shootin'",
    image: "/pictures/wes-scottsdale.JPG",
    description: "A big baller G (come up with a real description)",
    breed: "Quarter Horse",
    color: "Dun",
    age: 7,
    sex: "Gelding",
    sire: "Guns R For Shootin'",
    dam: "TC West Coast Wendi",
    winnings: ["???"],
    championships: [],
    accomplishments: [
      "AQHA Congress - Level 1 Open Futurity",
      "NRHA Cactus Reining Classic - Rookie Level 1 & 2",
      "RMNRHA Rocky Mountain Slide - Rookie Level 1 & 2",
    ],
  },
  {
    name: "Hay Batter Batter",
    image: "/pictures/thor.PNG",
    description: "A big baller G (come up with a real description)",
    breed: "Quarter Horse",
    color: "Sorrel",
    age: 6,
    sex: "Gelding",
    sire: "Inferno Sixty Six",
    dam: "Shiney Enterprise",
    winnings: ["???"],
    championships: [],
    accomplishments: [
      "NRHA blah blah blah",
      "???", // Placeholder for additional accomplishments
    ],
  },
  {
    name: "VDM One More Time",
    image: "/pictures/miller.PNG",
    description: "A big baller G (come up with a real description)",
    breed: "Morgan Horse",
    color: "???",
    age: 10,
    sex: "Gelding",
    sire: "???",
    dam: "???",
    winnings: [],
    championships: ["???", "???"],
    accomplishments: [
      "Morgan Grand National (add championships)",
      "Morgan Grand National (add championships)",
      "???", // Placeholder for additional accomplishments
    ],
  },
];
