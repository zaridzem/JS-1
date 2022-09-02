let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let item of array) {
  if (item % 2 == 0) {
    console.log(item);
  }
}

for (let item of array) {
  if (item % 2 == 1) {
    console.log(item);
  }
}
