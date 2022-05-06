const blocksAway = function(dir) {
  let up = dir[0] === 'right';
  const result = {east: 0, north: 0};
  for (let i = 0; i < dir.length; i = i + 2) {
    result[(up = up !== true) ? 'north' : 'east'] += dir[i+1] * (dir[i] !== dir[i-2] ? 1 : -1);
  }

  return result;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));