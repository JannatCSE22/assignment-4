// program to get the file extension

// function getFileExtension(filename) {
//     console.log(filename.lastIndexOf('.')+1);
  // get file extension
//   const extension = filename.split(".").pop();
//   return extension;
// }

// passing the filename
// const result1 = getFileExtension("module.js");
// console.log(result1);

// const result2 = getFileExtension("module.txt");
// console.log(result2);

function isBestFriend(person1, person2) {
if (typeof person1.name !== 'string' || typeof person1.friend !== 'string' || typeof person2.name !== 'string' || typeof person2.friend !== 'string') {
  return 'Invalid Input, Please enter string input on object';
}
else if (person1.name.toLowerCase() === person2.friend.toLowerCase() && person2.name.toLowerCase() === person1.friend.toLowerCase()) {
return true;
} else {
return false;
}
}
const object1 = ['anis', 'manis'];
const object2 = { name: "john", friend: "doe" };
const friend = isBestFriend(object1, object2);
console.log(friend);
// Console.log(isBestFriend([20, 10]));

// console.log(isBestFriend(10, 20));