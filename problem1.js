/*
Problem: 1  radianToDegree

ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান(radian)। তারপর সেটাকে ডিগ্রীতে(degree) কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
*/

function radianToDegree(radian) {
  if (typeof radian !== "number") {
    return "Error: Please enter a valid number.";
  }
  //1 rad = (180/pi)
  const oneRadian = 180 / Math.PI;
  const degree = radian * oneRadian;
  const degreeTwoDecimal = degree.toFixed(2);
  const intDegree = parseFloat(degreeTwoDecimal);
  return intDegree;
}

const radian = "25";
const intDegree = radianToDegree(radian);
console.log(intDegree);