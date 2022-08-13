/*
Problem 5: isBestFriend

তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
*/

function isBestFriend(firstObject, secondObject) {
  //are parameters object?
  if (typeof (firstObject, secondObject) !== "object") {
    return "Enter valid input";
  }
  
  else {
    //if parameters are object then check if there are any array.
    if (Array.isArray(firstObject) === true || Array.isArray(secondObject) === true) {
      return "Enter valid input";
    }
    else {
      //if object properties are string?
      if (typeof firstObject.name !== "string" || typeof firstObject.friend !== "string" || typeof secondObject.name !== "string" || typeof secondObject.friend !== "string") {
        return "Enter valid input";
        }
      else {
        //checking they are best friend or not.
        if (
          firstObject.name.toLowerCase() ===
            secondObject.friend.toLowerCase() &&
          secondObject.name.toLowerCase() === firstObject.friend.toLowerCase()
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

const object1 = { name: "doe", friend: "alex" };
const object2 = { name: "john", friend: "doe" };
const friend = isBestFriend(object1, object2);
console.log(friend);
