/*
Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
*/

//My answer:

let scores = [96, 47, 113, 89, 100, 102];

let aHundredOrMore = scores.filter(score => score >= 100);

let result = aHundredOrMore.length;
console.log(result);

/*
Answer provided:

let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count); // 3

Discussion
Our solution makes use of a counter variable, that we initialize as 0. We then iterate over all elements in the scores array, and for each element that is greater than or equal to 100, we increase the counter by 1.



*/

