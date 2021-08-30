
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
const difference = (grades = []) => {
   const highest = Math.max(...grades);
   const lowest = Math.min(...grades);
   return highest - lowest;
};
console.log(difference(grades));