

function sum (){
   event.preventDefault();

   let number1 = document.getElementById('number1').value;
   let number2 = document.getElementById('number2').value;

   if (number1== ''){
       number1 = 0;
   }

   if (number2== ''){
       number2 = 0;
   }

   let numberFloat1 = parseFloat(number1);
   let numberFloat2 = parseFloat(number2);

   let result = numberFloat1 + numberFloat2

//    console.log(result);

   document.getElementById('result').innerHTML = 'Result is=' + result;
}