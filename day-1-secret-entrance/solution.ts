import rotations from "./rotations.ts";

const minRotation = 0;
const maxRotation = 100; // maxRotation is 100 because we count 0-99

let currentRotation = 50;
let password = 0;

rotations.forEach((rotation) => {
  const amount = parseInt(rotation.substring(1));

  if (rotation[0] === "L") {
    currentRotation = currentRotation - amount;
  }

  while (currentRotation < 0) {
    if (currentRotation + amount !== 0) {
      password++;
    }

    currentRotation = maxRotation - currentRotation * -1;
  }

  if (rotation[0] === "R") {
    currentRotation = currentRotation + amount;
  }

  while (currentRotation > maxRotation - 1) {
    currentRotation = minRotation + (currentRotation - maxRotation);

    if (currentRotation !== 0) {
      password++;
    }
  }

  if (currentRotation === 0) {
    password++;
  }
});
