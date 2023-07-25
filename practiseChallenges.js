// 1.revserve string

function solution(str){
    return str.split('').reverse().join('');
 }

// 2.Take a  array of number then return a sum of that array 

// Sum Numbers, a is the accumulator, b is the current value, the initial value is 0 of accumulator
function sum (numbers) {
    return numbers.reduce((a,b) => a+b, 0 )
    
    
}

// 3.Caculate the average of the array of number and compare it with a number 

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // caculate an average of an array 
    const averagePoints = (classPoints.reduce((a,b) => a + b, 0 )) / (classPoints.length)
    
    //compare the average with the array 
    
    return yourPoints > averagePoints ? true : false 
  }
// Alternative solution

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

// Filtering out string from an array that has both string and integers 
function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(item => typeof item === 'number');
  }
// Filtering out integers from an array that has both string and integers 
  function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(item => typeof item === 'number');
  }
  
  