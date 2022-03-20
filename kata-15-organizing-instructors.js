const organizeInstructors = function(instructors) {
  const organized = {};
  for (const i of instructors) {
    // check if course array already exists, if not create it and add instructor
    if (organized[i.course] === undefined) {
    organized[i.course] = [i.name];
    // if it does exist, add instructor
    } else {
      organized[i.course].push(i.name);
    }
  }
  return organized;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));