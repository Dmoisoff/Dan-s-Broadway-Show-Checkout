import { Shows } from "~/types/show";

const showNames = [
    "Hamilton",
    "The Lion King",
    "Wicked",
    "Les Misérables",
    "Dear Evan Hansen",
    "The Book of Mormon",
    "Chicago",
    "Cirque du Soleil",
    "The Mousetrap",
    "Harry Potter and the Cursed Child"
];

const showPrices = [
    200,   // Hamilton
    150,   // The Lion King
    180,   // Wicked
    220,   // Les Misérables
    180,   // Dear Evan Hansen
    150,   // The Book of Mormon
    120,   // Chicago
    100,   // Cirque du Soleil
    90,    // The Mousetrap
    250    // Harry Potter and the Cursed Child
]

export const mockShows: Shows = showNames.reduce((acc, current, index) => {
  acc[(index+1)] = {
    name: current,
    price: showPrices[index],
    id: (index+1)
  };
  return acc;
}, {});


