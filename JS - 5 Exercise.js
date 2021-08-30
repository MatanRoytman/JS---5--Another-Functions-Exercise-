//----------------------   excercise 1 ----------------------------------//
const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
const difference = (grades = []) => {
   const highest = Math.max(...grades);
   const lowest = Math.min(...grades);
   return highest - lowest;
};
console.log("Range: " + difference(grades));

//----------------------   excercise 2 ----------------------------------//
grades.sort();
console.log("Median:" + grades[5]);

//----------------------   excercise 3 ----------------------------------//
var leftSide = grades.slice(5,10);
console.log(leftSide);
const halfDifference = (leftSide = []) => {
    const highest = Math.max(...leftSide);
    const lowest = Math.min(...leftSide);
    return highest - lowest;
 };
 console.log("Half Range: " + halfDifference(leftSide));
