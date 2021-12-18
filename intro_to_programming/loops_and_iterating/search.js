/*This program iterates over the elements of an array to find the element whose value is 5. When it finds that value, it stores its index
in the indexOfFive variable.
It then logs the index of the found element to the console. Notice that we initialize indexOfFive to -1: we use this value when the array 
doesn't have the desired value.
*/

let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
  }
}

console.log(indexOfFive);

/* If you study this code, you should notice that the loop continues executing once it finds the element whose value is 5. 
It iterates over every element in the array, even if 5 is the first element. That seems pointless and wasteful of precious CPU resources. 
That's where break steps in and saves the day:
*/

let array = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive = -1;

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);