                        // Assignment-3

                        // Problem-1

// let temperatureCelsius = parseFloat(prompt("Enter the current temperature in Celsius:"));

// if (temperatureCelsius > 30) {
//     alert("It's a hot day!");
// } else {
//     alert("The weather is moderate.");
// }

                        //  Problem-2


    // Get marks from the user
// var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
// var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
// var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));

// // Calculate total and average marks
// var totalMarks = subject1 + subject2 + subject3;
// var averageMarks = totalMarks / 3;

// // Determine the grade based on the average marks
// var grade;
// if (averageMarks >= 90) {
//             grade = 'A';
// } else if (averageMarks >= 80) {
//             grade = 'B';
// } else if (averageMarks >= 70) {
//             grade = 'C';
// } else if (averageMarks >= 60) {
//             grade = 'D';
// } else {
//             grade = 'F';
// }

// // Display the marksheet
// alert("Subject 1: " + subject1 + "\nSubject 2: " + subject2 + "\nSubject 3: " + subject3 +
//               "\nTotal Marks: " + totalMarks + "\nAverage Marks: " + averageMarks.toFixed(2) + "\nGrade: " + grade);
              

                        // Assignment-4

                        // Problem-1

                        
// var number = parseInt(prompt("Enter a number:"));
                        
// // Display the multiplication table using a for loop
// document.write("<h2>Multiplication Table for " + number + "</h2>");
// document.write("<ul>");
// for (var i = 1; i <= 10; i++) {
//     var result = number * i;
//     document.write("<li>" + number + " x " + i + " = " + result + "</li>");
// }
// document.write("</ul>");
                        

                        // Problem-2

// var number = 5; 
// var factorial = 1; 
                
                        
// var i = 1;
// while (i <= number) {
//     factorial *= i;
//     i++;
// }
                
//                         // Display the result
// document.write("<p>The factorial of " + number + " is: " + factorial + "</p>");
                    

                        // Assignment-5

                        // Problem-1

// function greetUser(userName) {
//     return "Hello, " + userName + "! Welcome to our website.";
// }
                                        
// var userProvidedName = prompt("Please enter your name:");
                
                        
// var greetingMessage = greetUser(userProvidedName);
// alert(greetingMessage);


                        // Problem-2

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
                
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
                
//     return true;
// }
                
                        
// var userProvidedNumber = parseInt(prompt("Enter a positive integer:"));
                
                 
// var result = isPrime(userProvidedNumber);
                
                       
// if (result) {
//     alert(userProvidedNumber + " is a prime number.");
//     } else {
//     alert(userProvidedNumber + " is not a prime number.");
// }