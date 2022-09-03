let array = [
  [2, -3, 5, 10],
  [25, -24, -11, 100],
  [-6, -7, 10],
];

for (let item of array) {
  // console.log(item);
  for (let x of item) {
    // console.log(x);
    if (x > 0) {
      console.log(x);
    }
  }
}
