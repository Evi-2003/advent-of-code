import ids from "./ids.ts";
const exampleData = [
  "11-22",
  "95-115",
  "998-1012",
  "1188511880-1188511890",
  "222220-222224",
  "1698522-1698528",
  "446443-446449",
  "38593856-38593862",
  "565653-565659",
  "824824821-824824827",
  "2121212118-2121212124",
];
let invalidIds = 0;

const checkPattern = (id: string) => {
  const patternStart = id.slice(0, id.length / 2);
  const patternEnd = id.slice(id.length / 2, id.length);

  if (patternStart === patternEnd) {
    invalidIds += parseInt(id);
  }

  return;
};

exampleData.forEach((range) => {
  const start = parseInt(range.slice(0, range.indexOf("-")));
  const end = parseInt(range.slice(range.indexOf("-") + 1));

  for (let id = start; id <= end; id++) {
    checkPattern(id.toString());
  }
});

console.log(invalidIds);

// Array.from(id).forEach((number, idx) => {
//   if (number === array[idx + 1]) {
//     console.log(array.join(""));
//   }
// });
