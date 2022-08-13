/*
   Problem 3: oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

ভিডিও ভালো করে দেখবে। 



প্রতি লিটার ডিজেলের এর দাম – 114 টাকা

প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 

প্রতি লিটার অকটেনের এর দাম – 135 টাকা 



এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

*/

function oilPrice(diesel, petrol, octane) {
    if (typeof diesel !== "number" || typeof petrol !== "number" || typeof octane !== "number") {
      return "Error: Please enter a valid number.";
    }

    const totalCost = (diesel * 114) + (petrol * 130) + (octane * 135);
    return totalCost;
}

const diesel = 0;
const petrol = "2";
const octane = 3;
const totalCost = oilPrice(diesel, petrol, octane);
console.log(totalCost);
