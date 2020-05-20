//1 Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
let x = 40;
let y = 50;
let sum = x + y;
console.log(sum);

if(x === y){
    console.log(sum * 3);
}else{
    console.log("The values of given numbers are not the same")
}



//2) Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

if((x === 50 || y === 50) || sum === 50){
    console.log(true);
}else{
    console.log(false);
}

//3) Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

    let name = "Marigona";
    name = name.substring(1);
    console.log(name);


  //  4) Write a JavaScript program to find the largest of three given integers.
  console.log(Math.max(10, 2, 1));

 // 5) Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
  
function numbers_ranges(x, y){
    if(( x >= 40 && x <= 60 && y >= 40 && y <= 60 ) 
    || 
    (x >= 70 && x <= 100 && y >= 70 && y <= 100))
{
    return true;
}else{
    return false;
}
}
console.log(numbers_ranges(42, 54));
console.log(numbers_ranges(75, 99));
console.log(numbers_ranges(50, 61));

//6) Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("Strive", 5));

//7) Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

function city_name(str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los')
                            || (str.substring(0, 3) == 'New')))
     
        {
            return str;
      }
  
    return '';
  }
  
  console.log(city_name("New York"));
  console.log(city_name("Los Angeles"));
  console.log(city_name("Paris"));

// 8) Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function sum_nums(nums)
{
  return nums[0] + nums[1] + nums[2];
}

console.log(sum_nums([1, 4, 8]));  
console.log(sum_nums([5, 7, 9])); 
console.log(sum_nums([0, 6, 2]));


//9) Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. 

function contains13(nums) {

    if (nums.includes(1) || nums.includes(3)){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contains13([1, 4]));  
console.log(contains13([10, 3]));  
console.log(contains13([7, 5]));

//10) Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3

function NotContains13(nums) {

    if (!nums.includes(1) && !nums.includes(3)){
       return true
    } 
    else
    {
       return false
    }
}

console.log(contains13([1, 4]));  
console.log(contains13([10, 3]));  
console.log(contains13([7, 5]));

// 11) Write a JavaScript to find the longest string from a given array of strings.

    const test = arr => {
        return arr.reduce((a, b) => a.length > b.length ? a : b);
        }
        
        console.log(test(['Marigonaaaaa', 'Elona', 'Milot', 'Rrezarta']))

/*12)
Write a JavaScript program to find the types of a given angle.
        
        Types of angles:
            Acute angle: An angle between 0 and 90 degrees.
            Right angle: An 90 degree angle.
            btuse angle: An angle between 90 and 180 degrees.
            Straight angle: A 180 degree angle.*/

            function angle_Type(angles) {
                if(angles < 90) {
                  return "Acute angle";
                }
                if(angles === 90) {
                  return "Right angle";
                }
                if(angles < 180) {
                  return "btuse angle";
                }
                return "Straight angle";
              }
              console.log(angle_Type(50))
              console.log(angle_Type(90))
              console.log(angle_Type(144))
              console.log(angle_Type(180))

// 13)Write a JavaScript program to find the index of the greatest element of a given array of integers
const array1 = [1, 3, 2];

console.log(Math.max(...array1));

//14) Write a JavaScript program to get the largest even number from an array of integers.
var array = [4 , 8, 60, 56, 50];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
console.log(largest);


//15) Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
    let m = 5;
    let n = 50;
     if((m === 50 || n === 50) || (m + n)=== 50){
        console.log(true)
     }else{
         console.log(false);
     }


// 16) Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
     let x1 = 1;
     let y1 = -2;

     if ((x1 < 0 && y1 > 0) || x1 > 0 && y1 < 0){
         console.log(true)
     }else{
         console.log(false);
     }

//17) Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
     
function upper_lower(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);  
    return front_part + back_part;
  }
  console.log(upper_lower("Marigona"));
  console.log(upper_lower("Ma"));
  console.log(upper_lower("JAVAScript"));
 

//18)Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

  function rangeBetween(x, y) 
 {
  const sumNums = x + y;
  if (sumNums >= 50 && sumNums <= 80) {
    return 65;
  }
  return 80;
}

console.log(rangeBetween(33,24));
console.log(rangeBetween(94,82));

/*

19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34".

20)
Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG).
*/
function acronym(text) {
    return text
      .split(/\s/)
      .reduce(function(accumulator, word) {
        return accumulator + word.charAt(0);
      }, '');
  }
  
  console.log(acronym('Convert Phrase to Acronym'));



 

