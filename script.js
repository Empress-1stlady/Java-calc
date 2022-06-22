//Reading of numbers in the program
 //accept the number from the user through prompt box
const number1 = parseFloat(prompt('Enter firstnumber:')); //convert string to number
const operator = prompt('Enter operator to use: ( +, -, *, /)');
const number2 = parseFloat(prompt('Enter secondnumber:'));
      //use if, elseif and else keyword to define the calculator co
let result = 0;
if (operator == '+'){
  result = number1 + number2;
}else if (operator == '-'){
  result = number1 - number2; 
}else if (operator == '*'){
  result = number1 * number2;
}else if (operator == '/'){
  result = number1 / number2;
}
//display  the result
alert(number1 + '' + operator + '' + number2 + '=' + result)

   