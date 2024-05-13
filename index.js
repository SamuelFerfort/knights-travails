function allowedMoves() {
  const moves = [];
  for (let i = 0; i < 8; i++) {
    moves.push([]);
    for (let j = 0; j < 8; j++) {
      const neighbors = [];
      const possibleMoves = [
        [i + 1, j + 2],
        [i + 2, j + 1],
        [i + 2, j - 1],
        [i + 1, j - 2],
        [i - 1, j - 2],
        [i - 2, j - 1],
        [i - 2, j + 1],
        [i - 1, j + 2],
      ];

      for (const [x, y] of possibleMoves) {
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
          neighbors.push([x, y]);
        }
      }

      moves[i].push(neighbors);
    }
  }
  return moves;
}
const knightMoves = allowedMoves();

console.log(knightMoves);
