type Coords = [number, number];

export interface GameCard {
  title: string;
  startingPlayer: "blue" | "red";
  color: "green" | "blue" | "red";
  validSpaces: Coords[];
}

const redCards = [
  {
    title: "Rabbit",
    color: "red",
    startingPlayer: "blue",
    validSpaces: [
      [1, 1],
      [2, 0],
      [-1, -1],
    ],
  },
  {
    title: "Rooster",
    color: "red",
    startingPlayer: "red",
    validSpaces: [
      [1, 0],
      [1, 1],
      [-1, 0],
      [-1, -1],
    ],
  },
  {
    title: "Ox",
    color: "red",
    startingPlayer: "blue",
    validSpaces: [
      [0, 1],
      [1, 0],
      [0, -1],
    ],
  },
  {
    title: "Cobra",
    color: "red",
    startingPlayer: "red",
    validSpaces: [
      [1, 1],
      [-1, 0],
      [1, -1],
    ],
  },
];

const blueCards = [
  {
    title: "Frog",
    color: "blue",
    startingPlayer: "red",
    validSpaces: [
      [-1, 1],
      [-2, 0],
      [1, -1],
    ],
  },
  {
    title: "Goose",
    color: "blue",
    startingPlayer: "blue",
    validSpaces: [
      [1, 0],
      [1, -1],
      [-1, 0],
      [-1, 1],
    ],
  },
  {
    title: "Horse",
    color: "blue",
    startingPlayer: "red",
    validSpaces: [
      [0, 1],
      [-1, 0],
      [0, -1],
    ],
  },
  {
    title: "Eel",
    color: "blue",
    startingPlayer: "blue",
    validSpaces: [[-1, 1], [1, 0], [-1 - 1]],
  },
];

const greenCards = [
  {
    title: "Tiger",
    color: "green",
    startingPlayer: "blue",
    validSpaces: [
      [0, -1],
      [0, 2],
    ],
  },
  {
    title: "Crab",
    color: "green",
    startingPlayer: "blue",
    validSpaces: [
      [0, 1],
      [-2, 0],
      [2, 0],
    ],
  },
  {
    title: "Monkey",
    color: "green",
    startingPlayer: "blue",
    validSpaces: [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ],
  },
  {
    title: "Crane",
    color: "green",
    startingPlayer: "blue",
    validSpaces: [
      [0, 1],
      [-1, -1],
      [1, -1],
    ],
  },
  {
    title: "Dragon",
    color: "green",
    startingPlayer: "red",
    validSpaces: [
      [2, 1],
      [-2, 1],
      [-1, -1],
      [1, -1],
    ],
  },
  {
    title: "Elephant",
    color: "green",
    startingPlayer: "red",
    validSpaces: [
      [1, 0],
      [-1, 0],
      [1, 1],
      [-1, 1],
    ],
  },
  {
    title: "Mantis",
    color: "green",
    startingPlayer: "red",
    validSpaces: [
      [1, 1],
      [-1, 1],
      [0, -1],
    ],
  },
  {
    title: "Boar",
    color: "green",
    startingPlayer: "red",
    validSpaces: [
      [0, 1],
      [1, 0],
      [-1, 0],
    ],
  },
];

export const gameCards: GameCard[] = [...redCards, ...blueCards, ...greenCards];
