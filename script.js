// 1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// a) Programmatically subtract the value of the first element from the last element
var firstLastDifference = ages[ages.length - 1] - ages[0];
console.log('Difference between first and last element:', firstLastDifference);

// b) Add a new age to your array and repeat the step above
// Add a new age
ages.push(45); 
 // Recalculate the difference
difference = ages[ages.length - 1] - ages[0];
console.log('New difference after adding an age:', difference);

// c) Use a loop to iterate through the array and calculate the average age
var total = 0;
for (var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var average = total / ages.length;
console.log('Average age:', average);



// 2) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'. 
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// a. Use a loop to iterate through the array and calculate the average number of letters per name
var totalLetters = 0;
for (var i = 0; i < names.length; i++) {
     // Add the length of each name to the total
    totalLetters += names[i].length;
}
var averageLetters = totalLetters / names.length;
console.log('Average number of letters per name:', averageLetters);

// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces
var allNamesConcatenated = '';
for (var i = 0; i < names.length; i++) {
    allNamesConcatenated += names[i];
    if (i < names.length - 1) {
        // Add a space after each name except the last one
        allNamesConcatenated += ' '; 
    }
}
console.log('All names concatenated:', allNamesConcatenated);



// 3) How do you access the last element of any array?
// example
var myArray = [1, 2, 3, 4, 5];

// Access the last element using the length property
var lastElement = myArray[myArray.length - 1];

// Log the last element
console.log('The last element is:', lastElement);



// 4) How do you access the first element of any array?
var myArray = [1, 2, 3, 4, 5];
var firstElement = myArray[0];
 // This will log the first element of the array
console.log(firstElement);



// 5) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var nameLengths = [];

for (var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

 // This will log the lengths of each name in the names array
console.log(nameLengths);



// 6) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
var nameLengths = [3, 5, 3, 5, 4, 3];
var sum = 0;

for (var i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

 // This will log the sum of all the elements in the nameLengths array
console.log(sum);



// 7) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatenateWord(word, n) {
    // Start with an empty string
    var result = ''; 
    
    // Loop n times
    for (var i = 0; i < n; i++) {
        // Concatenate word to result in each iteration
        result += word; 
    }
    
    // Return the final concatenated string
    return result;
}

// Example usage:
var repeatedWord = concatenateWord('Hello', 3);
// This will log 'HelloHelloHello'
console.log(repeatedWord); 



// 8) Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function getFullName(firstName, lastName) {
    // Concatenates the first name, a space, and the last name
    return firstName + ' ' + lastName; 
}

// Example usage:
var fullName = getFullName('John', 'Doe');
// This will log 'John Doe'
console.log(fullName); 



// 9) Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
function isSumGreaterThan100(numbers) {
    var total = 0; // Initialize total sum to 0
    
    // Loop through each number in the array and add it to the total sum
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    
    // Check if the total sum is greater than 100
    return total > 100;
}

// Example usage:
var numbersArray = [10, 20, 30, 40, 5];
var result = isSumGreaterThan100(numbersArray);
 // This will log true or false based on the sum of the numbers
console.log(result);



// 10) Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    // Initialize total sum to 0
    var total = 0; 
    // Get the number of elements in the array
    var count = numbers.length; 
    
    // Check if the array is empty to prevent division by zero
    if (count === 0) {
        return 0;
    }
    
    // Loop through each number in the array and add it to the total sum
    for (var i = 0; i < count; i++) {
        total += numbers[i];
    }
    
    // Calculate the average
    var average = total / count;
    return average;
}

// Example usage:
var numbersArray = [10, 20, 30, 40, 50];
var average = calculateAverage(numbersArray);
// This will log the average of the numbers
console.log(average); 



// 11) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
// Helper function to calculate the average of numbers in an array
function calculateAverage(numbers) {
    var total = 0;
    var count = numbers.length;

    if (count === 0) {
        // Prevent division by zero
        return 0; 
    }

    for (var i = 0; i < count; i++) {
        total += numbers[i];
    }

    return total / count;
}

// Function to compare the averages of two arrays
function isFirstAverageGreater(array1, array2) {
    var average1 = calculateAverage(array1);
    var average2 = calculateAverage(array2);

    return average1 > average2;
}

// Example usage:
var array1 = [10, 20, 30, 40, 50];
var array2 = [15, 25, 35];

var result = isFirstAverageGreater(array1, array2);
// This will log 'true' or 'false' based on the comparison
console.log(result); 



// 12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}

// Example usage:
var isHotOutside = true;
var moneyInPocket = 11.00;

var result = willBuyDrink(isHotOutside, moneyInPocket);
// This will log 'true' if it's hot outside and money in pocket is greater than 10.50
console.log(result); 



// 13) Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// Function: isValidEmail
// Description: This function checks if the given email address is in a valid format.
// Why: Validating an email address format is a common requirement for form submissions on websites to ensure that users provide a usable email address.

function isValidEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Tests if the email matches the pattern
    return emailRegex.test(email); 
}

// Example usage:
var email = "test@example.com";
var result = isValidEmail(email);
console.log("Is the email valid?", result);
// This will log "Is the email valid? true" if the email is in a valid format, or "false" otherwise.
