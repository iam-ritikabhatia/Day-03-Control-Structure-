//  number is positive / negative / zero
 function checkNumber(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is negative`);
  } else {
    console.log(`${num} is zero`);
  }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);

// Person is eligible o vote (age >= 18) and log the result to console

function eligibleVote(age) {
  if (age >= 18) {
    console.log(`${age} is eligible to vote`);
  } else {
    console.log(`${age} is not eligible to vote`);
  }
}
eligibleVote(20);
eligibleVote(2);
eligibleVote(14); 

// program to find the largest of three numbers using nested if else statement

function largestNumber(a, b, c) {
  if (a >= b) {
    if (a >= c) {
      console.log(`${a} is the largest number`);
    } else {
      console.log(`${c} is the largest number`);
    }
  } else {
    if (b >= c) {
      console.log(`${b} is the largest number`);
    } else {
      console.log(`${c} is the largest number`);
    }
  }
}
largestNumber(5, 18, 3);
largestNumber(7, 9, 31);
largestNumber(18, 61, 74);

// program that uses a switch case to determine the day of the week based on a number(1-7) and log the day to the name of the console

function getDayofWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thrusday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day number");
  }
}
getDayofWeek(1);
getDayofWeek(3);
getDayofWeek(5);
getDayofWeek(7);
getDayofWeek(9); 

// program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the result to console

function grade(scoreBased) {
  switch (scoreBased) {
    case 1:
      console.log("Grade A");
      break;
    case 2:
      console.log("Grade B");
      break;
    case 3:
      console.log("Grade C");
      break;
    case 4:
      console.log("Grade D");
      break;
    case 5:
      console.log("Grade E");
      break;
    case 6:
      console.log("Grade F");
      break;
    default:
      console.log("Your score was not Fit in the criteria");
  }
}

grade(1);
grade(5);
grade(6);
grade(3);
grade(4);   

//  or

function getGrade(score) {
  let grade;
  switch (true) {
    case score >= 90 && score <= 100:
      grade = "A";
      break;
    case score >= 80 && score < 90:
      grade = "B";
      break;
    case score >= 70 && score < 80:
      grade = "C";
      break;
    case score >= 60 && score < 70:
      grade = "D";
      break;
    case score >= 50 && score < 60:
      grade = "E";
      break;
    case score >= 0 && score < 50:
      grade = "F";
      break;
    default:
      console.log("Invalid score. Please enter a score between 0 and 100");
      return;
  }
  console.log(`grade for score ${score} is ${grade}`);
}

getGrade(95);
getGrade(45);
getGrade(40);
getGrade(70);
getGrade(90);
getGrade(80);
getGrade(30);
getGrade(85);





// Program that uses the ternary operator to check if a number is even or odd and log the result to console.

function checkEvenorOdd(num){
    const result = (num % 2 === 0) ? "Even" : "Odd" ;
        console.log(`The number  ${num} is ${result}`);
    }


    checkEvenorOdd(5);
    checkEvenorOdd(8);
    checkEvenorOdd(55);

    


    //  function leap year 

    function leapYear(year){
        return (year % 100 === 0 ) ? (year % 400 === 0) : (year % 4 === 0);
    }

    console.log(leapYear(2016));
    console.log(leapYear(2024));
    console.log(leapYear(2019));
    console.log(leapYear(2506));
    console.log(leapYear(2630));
    