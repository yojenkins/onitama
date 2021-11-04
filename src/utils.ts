/*
    spaces[y] represents the row
    spaces[y][x] represents the row & column

    const spaces = [
            0  1  2  3  4
        0  [-, -, -, -, -],
        1  [-, -, -, -, -],
        2  [-, -, -, -, -],
        3  [-, -, -, -, -],
        4  [-, -, -, -, -],
    ]


    * ---- Moving Relative to another space
    type Space = {
        row: 2,
        col: 2
    }
    const middle = {row: 2, col: 2}

    type Coords = [number, number]
    const validSpaces: Coords[] = [[2, -1], [0, -1]]

    ** ---- Finding the position of [2, -1] relative to the `middle` variable spaces[2][2]
    coord[1] (-1) represents the y coord relative to the starting space. Translating it to the array structure for spaces means "moving to" spaces[3][2]
    coord[0] (2) represents the x coord relative to the starting space.  Translating that movement to the array structure for spaces means "moving to" spaces[3][4] 

    spaces[2][2] is NOT x, y coords

*/

const spaces = [
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
];

// const coordSpaces = [
//   [-2, 2],
//   [-1, 2],
//   [0, 2],
//   [1, 2],
//   [2, 2],
//   [-2, 1],
//   [-1, 1],
//   [0, 1],
//   [1, 1],
//   [2, 1],
//   [-2, 0],
//   [-1, 0],
//   [0, 0],
//   [1, 0],
//   [2, 0],
//   [-2, -1],
//   [-1, -1],
//   [0, -1],
//   [1, -1],
//   [2, -1],
//   [-2, -2],
//   [-1, -2],
//   [0, -2],
//   [1, -2],
//   [2, -2],
// ];

type Space = {
  row: 2;
  col: 2;
};
type Coords = [number, number];

export function isValidMove(startingSpace: Space, movementCoords: Coords) {
  const { row, col } = startingSpace;
  const [x, y] = movementCoords;

  // positive y value means subtracting from row val so we invert by * -1
  const newRowPosition = row + y * -1;
  const newColPosition = col + x;
  const validX = -2 <= newColPosition && newColPosition <= 2;
  const validY = -2 <= newRowPosition && newRowPosition <= 2;

  return validX && validY;
}

export function shuffleArray<T>(original: Array<T>): Array<T> {
  const array = [...original];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
