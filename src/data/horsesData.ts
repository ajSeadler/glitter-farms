// src/data/horsesData.ts

export interface Horse {
  name: string;
  image: string;
  description: string;
  breed: string;
}

export const horses: Horse[] = [
  {
    name: "West Coast Shootin'",
    image: "/pictures/wes-scottsdale.JPG",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus tempore!",
    breed: "Quarter Horse",
  },
  {
    name: "Hay Batter Batter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Roan.jpg/640px-Roan.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus tempore!",
    breed: "Quarter Horse",
  },
  {
    name: "Cowboy Cassonova",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Roan.jpg/640px-Roan.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates necessitatibus tempore!",
    breed: "Quarter Horse",
  },
];
