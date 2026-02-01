// Function Declaration
function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(5, 10)); // 50
console.log(calculateArea(7, 3));  // 21
console.log(calculateArea(4, 4));  // 16

// Function Expression
const calculatePerimeter = function (length, width) {
  return 2 * length + 2 * width;
};

console.log(calculatePerimeter(5, 10)); // 30
console.log(calculatePerimeter(7, 3));  // 20
console.log(calculatePerimeter(4, 4));  // 16
