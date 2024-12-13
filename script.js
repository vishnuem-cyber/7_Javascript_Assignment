let number = prompt("enter a number between 0 and 1000000");
number = Number(number);
if (number >= 0 && number <= 1000000) {
    console.log("valid number")
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum = sum + i;
    }
    console.log("The sum of numbers from 1 to " + number + " is " + sum);
}
else  { 
    console.log("number is invalid");}

            
       