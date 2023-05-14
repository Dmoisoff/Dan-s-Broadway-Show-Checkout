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
  "Harry Potter and the Cursed Child",
];

const showPrices = [
  200, // Hamilton
  150, // The Lion King
  180, // Wicked
  220, // Les Misérables
  180, // Dear Evan Hansen
  150, // The Book of Mormon
  120, // Chicago
  100, // Cirque du Soleil
  90, // The Mousetrap
  250, // Harry Potter and the Cursed Child
];

const notes = [
  "An absolute masterpiece! The play was a rollercoaster of emotions, with captivating performances that left me breathless.",
  "A thought-provoking and beautifully crafted production. The seamless blend of storytelling and exquisite staging made for an unforgettable theatrical experience.",
  "This play was a delightful surprise! The witty dialogue and impeccable comedic timing had the audience in stitches from beginning to end.",
  "A powerful and gripping performance that tackled complex themes with grace and intensity. The talented cast brought the characters to life in a truly mesmerizing way.",
  "I was completely mesmerized by the sheer brilliance of this play. The innovative set design and mesmerizing performances transported me to another world.",
  "This play was a true gem. The intimate setting and raw emotions conveyed by the actors created an immersive and profoundly moving experience.",
  "A triumph of storytelling! The intricate plot twists and superb acting kept me on the edge of my seat throughout the entire performance.",
  "A refreshing take on a classic story. The director's bold interpretation and the exceptional performances breathed new life into a beloved tale.",
  "This play was a feast for the senses. The stunning visuals, haunting melodies, and powerful choreography combined to create an unforgettable spectacle.",
  "A true tour de force! The ensemble cast displayed extraordinary chemistry and talent, leaving the audience captivated and longing for more.",
];

export const mockShows: Shows = showNames.reduce((acc, current, index) => {
  acc[index + 1] = {
    name: current,
    price: showPrices[index],
    id: index + 1,
    note: notes[index],
  };
  return acc;
}, {});
