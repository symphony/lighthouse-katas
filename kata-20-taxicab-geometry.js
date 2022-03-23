const blocksAway = function(directions) {
  const position = { east: 0, north: 0 };
  // determine starting direction
  let facing = directions[0] === "right" ? 0 : 1;
  // break up directions list into pairs of direction and steps
  let instructions = [];
  for (let i = 0; i < directions.length; i += 2) {
    instructions.push([directions[i], directions[i+1]]);
  }

  // send instructions to function
  for (const pair of instructions) {
    navigate(pair[0], pair[1]);
  }

  return position;

  // helper function that interprets instructions and updates position
  function navigate(direction, steps) {
    // "turn" us left or right
    facing += direction === "right" ? 1 : -1;
    facing = (facing + 4) % 4; // ensures we stay between 0-3

    // update position
    switch (facing) {
      case 0: // north
      position.north += steps;
      break;
      case 1: // east
      position.east += steps;
      break;
      case 2: // south
      position.north -= steps;
      break;
      case 3: // west
      position.east -= steps;
      break;
    }
  }
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));