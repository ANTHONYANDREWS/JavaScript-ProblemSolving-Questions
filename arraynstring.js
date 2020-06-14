// 1.1 Given an array of integers, find the largest product yielded from three of the integers
// var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

// computeProduct(unsortedArray); // 21000

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

function computeProduct(array){
    let l = array.length;
    let s =array.sort();

    return Math.max(s[0]*s[1]*s[l-3], s[l-3]*s[l-2]*s[l-1]);

}
console.log(computeProduct(unsortedArray));


// 1.2 Being told that an unsorted array contains (n - 1) of n consecutive numbers (where the bounds are defined), find the missing number in O(n) time
// // The output of the function should be 8
// var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
// var upperBound = 9;
// var lowerBound = 1;

//Write your program here

var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

var nsum = (upperBound*(upperBound+1))/2;

var sum = arrayOfIntegers. reduce(function(a, b){
    return a + b;
    }, 0);

console.log(nsum-sum);


// 1.3 Removing duplicates of an array and returning an array of only unique elements
// // ES6 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

//  //Write your program here

var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

var set = new Set(array);
console.log(...set);

// 1.4 Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element
// var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

// findLargestDifference(array);

// //Write your program here

var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

function maxDifference(arr) {
    let maxDiff = -1;
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min && maxDiff < arr[i] - min) {
        maxDiff = arr[i] - min;
      }
  
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return maxDiff;
  }
  
  console.log(maxDifference(array));

//   1.5 Given an array of integers, return an output array such that output[i] is equal to the product of all the elements in the array other than itself. (Solve this in O(n) without division)
// var firstArray = [2, 2, 4, 1];
// var secondArray = [0, 0, 0, 2];
// var thirdArray = [-2, -2, -3, 2];

// //Write your program here



// 1.6 Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!
// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];


// //Write your program here

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];
let intersection = (firstArray,secondArray)=>firstArray.filter(x => secondArray.includes(x));
console.log(intersection(firstArray,secondArray));


// 2.1 Given a string, reverse each word in the sentence "Welcome to this Javascript Guide!" should be become "emocleW ot siht tpircsavaJ !ediuG"
// var string = "Welcome to this Javascript Guide!";

// //Write your program here

var string = "Welcome to this Javascript Guide!";

function ReverseString(str) { 
    return str.split('').reverse().join('') 
 } 
  
 console.log(ReverseString(string));



//  2.2 Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"
// var firstWord = "Mary";
// var secondWord = "Army";

//   //Write your program here

var firstWord = "Mary";
var secondWord = "Army";

if(JSON.stringify(firstWord.sort)==JSON.stringify(secondWord.sort))
console.log("Anagrams");
else
console.log("Not Anagrams");

// 2.3 Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account
// isPalindrome("racecar"); // true
// isPalindrome("race Car"); // true

//Write your program here


function isPalindrome(array){
    var check = array.split('').reverse().join('');

    if(check==array){
        return true;
    }
}
isPalindrome("racecar");


// 2.4 Check if a given string is a isomorphic

//   For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
//   to get string B. The order of the characters must be preserved. There must be one-to-one mapping for ever char of
//   string A to every char of string B.

//   `paper` and `title` would return true.
//   `egg` and `sad` would return false.
//   `dgg` and `add` would return true.

//   javascript
//   isIsomorphic("egg", 'add'); // true
//   isIsomorphic("paper", 'title'); // true
//   isIsomorphic("kick", 'side'); // false

//   //Write your program here

let isomorphic=(str1, str2)=>{
    if(str1.length !== str2.length) return false;  
    var map1={}, map2={}; 

    for (var i=0; i< str1.length;i++) {
        if (typeof map1[str1[i]] == "undefined" && typeof map2[str2[i]] == "undefined"){
            map1[str1[i]] = str2[i];
            map2[str2[i]] = str1[i]; 
        }
        else{
            if(map1[str1[i]] !== str2[i] && map2[str2[i]] !== str1[i]){ 
                return false;
            }
        }
    }
    return true;
}

console.log(isomorphic("egg","add"));
