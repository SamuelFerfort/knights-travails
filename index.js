function buildGraph() {
  const graph = [];

  for (let i = 0; i < 8; i++) {
    graph.push([]);
    for (let j = 0; j < 8; j++) {
      graph[i].push([i, j]);
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

      graph[i][j] = neighbors;
    }
  }
  return graph;
}
const knightMoves = buildGraph();

function fastestRoute([x, y], [row, column]) {
  const path = [];
  const q = [];
  const visitedSquares = new Set();
  q.push({ square: [x, y], parent: null, moves: knightMoves[x][y] });
  while (q.length) {
    let current = q.shift();
    if (visitedSquares.has(current.moves.toString())) continue;

    visitedSquares.add(current.moves.toString());
    for (let [i, j] of current.moves) {
      if (i === row && j === column) {
        let currentSquare = current;
        while (currentSquare) {
          path.unshift(currentSquare.square);
          currentSquare = currentSquare.parent;
        }
        path.push([i, j]); // add the destination
        let output = `Move from [${[x, y]}] to [${[
          row,
          column,
        ]}]\n=> You made it in ${path.length} moves! Here's your path:\n`;
        let squares = "";
        path.forEach((square) => (squares += `[${square}]\n`));

        return output + squares;
      }

      q.push({ square: [i, j], parent: current, moves: knightMoves[i][j] });
    }
  }
  return null;
}

// Test case
const start = [0, 0];
const end = [5, 7];
const result = fastestRoute(start, end);
console.log(result);
