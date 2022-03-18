const checkAir = function (samples, threshold) {
  let dirtySamples = 0;

  // count how many dirty samples there are
  for (const i of samples) {
    dirtySamples += i === "dirty" ? 1 : 0;
  }

  // find percentage of dirty samples and compare against threshold
  // console.log(dirtySamples/samples.length); // print percentage dirty
  const isPolluted = dirtySamples/samples.length < threshold;
  return isPolluted ? "Clean" : "Polluted"
}

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))