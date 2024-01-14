                              /////////// Number 1  ///////////
  // 1- Write a program that allow to user enter number then printit


// var x = window .prompt ( "Entar your Number")                                                                                    *
// document .getElementById ("demo") .innerHTML= x




  ////////////////////////////////////////  Number 2    ////////////////////////////////////////////////////////////////
  // 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// var number = window.prompt('Enter your Number');
//   number = Number(number);
  
// if (number %3==0  &&  number %4==0)  {
// window.alert('yes')
// }else{

// window.alert('no')
//  } 




////////////////////////////////////////////// Number 3   /////////////////////////////////////////////////////////////////////
// 3- Write a program that allows the user to insert 2 integers then print the max
                                            
// var Num1 = Number( window.prompt("enter your Number 1:"))
// var Num2 = Number( window.prompt("enter your Number 2:"))
// if (Num1 > Num2) {                                                                    
//   window.alert(Num1)
// }else{
//   window.alert(Num2)
// }




/////////////////////////////////////////////////    Number  4   ////////////////////////////////////////////////////////////////////////
// 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.


//    var num = Number( window.prompt("enter your Number :"))
//    if (num <  0){
//     window.alert('negative')                                                                                
//    }else{
//       window.alert('positive')                                          
//  }
                                                






 /////////////////////////////////////////////////// Number 5   //////////////////////////////////////////////////////////////////////////
//  5- Write a program that take 3 integers from user then print the max element and the min element.

  // var num1 = Number( window.prompt("enter your Number 1:"))
  // var num2 = Number( window.prompt("enter your Number 2:"))
  // var num3 = Number( window.prompt("enter your Number 3:"))
                                                
  //  if (num1>num2 && num1>num3){                                          
  // window.alert('max Number : '+num1)
  //  } else if  (num2>num1 && num2>num3){
  //   window.alert('max Number : '+num2)
  //  }else if  (num3>num2 && num3>num1){
  //   window.alert('max Number : '+num3)
  //  }
   
  //  if (num1<num2 && num1<num3){                                          
  //   window.alert('min Number : '+num1)
  //    } else if  (num2<num1 && num2<num3){
  //     window.alert('min Number : '+num2)
  //    }else if  (num3<num2 && num3<num1){
  //     window.alert('min Number : '+num3)
  //    }




   
 /////////////////////////////////////////////////////////    Number 6  //////////////////////////////////////////////////////////////////
//  6- Write a program that allows the user to insert integer number then check If a number is oven or odd 

  //  var number = Number(window.prompt("Enter your Number"));
  //  if (number%2==0){
  //   window.alert(number+' is Even')
  //  }else{
  //   window.alert(number+'is ood')
  //  }




 /////////////////////////////////////////////////////////////    Number 8    ////////////////////////////////////////////////////////////
//  8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

//  var  character =window.prompt("enter your character :")
//  switch (character) {
//    case ( "o"): 
//    case ( "O"): 
//    window.alert('vowel')
//    break;
//     case ( "a"):                                                      
//     case ( "A"):                                                      
//     window.alert('vowel')
//      break;
//    case ( "i"): 
//    case ( "I"): 
//    window.alert('vowel')
//    break;
//     case ( "u"): 
//     case ( "U"): 
//     window.alert('vowel')
//   break;
//    case ( "e"): 
//    case ( "E"): 
//    window.alert('vowel')
//     break;
//    default:
//     window.alert('consonant')
//    break;
//  }




//////////////////////////////////////////////////////////////////    Number 9    ///////////////////////////////////////////////////////////
// 9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number

  //   var  number = window.prompt("enter your number :");

  // for (var i = 1 ; i <= number ; i ++ ){                       
  //  window.alert(i);
  //   }





////////////////////////////////////////////////////////////////////   Number 10  //////////////////////////////////////////////////////
// 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

// var  number = window.prompt("enter your number :");
// for(i=1 ; i<=12 ; i++){
//   window.alert(i*number);
// }





////////////////////////////////////////////////////////////////////// Number 11  ////////////////////////////////////////////////////////////
// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number

// var  number = window.prompt("enter your number :");
// for(i=1 ; i <= number ; i ++){
//   if(i%2==0)
//   window.alert(i);
// }





                        
 ///////////////////////////////////////////////////////////////////    Number 12    //////////////////////////////////////////////////////////////
//  12- Write aprogram that take two integers then print the power



//  var number =window.prompt("enter your number  :")
// var power =window.prompt("enter your power :")
// ruselt=1;
// for(var i=0 ; i<power ;i++){
//   ruselt*=number
// }

// window.alert(ruselt);







///////////////////////////////////////////////////////////////////////// number 12   /////////////////////////////////////////////////////////
// 12- Write a program to enter marks of five subjects and calculate total, average and percentage.

// var total= 0;
// for(var i=0;i<5 ; i++){
//   total += Number(window.prompt('Enter mark subject' + (i+1)));

// }
// window.alert("total marks ="+total);
// window.alert('Avg =' +total/5);
// window.alert("presenage =" +total/500*100)








//////////////////////////////////////////////////////////////////////     Number 13   /////////////////////////////////////////////////////////////
// 13-Write a program to input month number and print number of days in that month.

// var  monthNumber= window.prompt('Enter month Number')
// if(monthNumber== 1 ||monthNumber== 3 || monthNumber==5 || monthNumber==7 || monthNumber==8 || monthNumber==10 || monthNumber==12){
//   window.alert('31')
// }else if(  monthNumber==4 ||  monthNumber==6 ||   monthNumber==9 ||  monthNumber==11 ){
//  window.alert('30') 
// }else if( monthNumber==2){
//   window.alert('28 days in a common year and 29 in leap years') 
// }








/////////////////////////////////////////////////////////////////////    Number 14  ////////////////////////////////////////////////////////////
// 14- Write a program to input marks of five subjectsPhysics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

// var sPhysicsmark =Number(window.prompt('Enter mark of sPhysics subject')) ;
// var Chemistrymark = Number (window.prompt('Enter mark of Chemistry subject'));
// var Biologymark = Number(window.prompt('Enter mark of Biology subject'));
// var Mathematicsmark =Number( window.prompt('Enter mark of Mathematics subject'));
// var Computermark =Number( window.prompt('Enter mark of sPhysics Computer'));

// var presentage=(sPhysicsmark+Chemistrymark+Biologymark+Mathematicsmark+Computermark)/500*100;
// if (presentage>=90) {
//    window.alert('grade A')
// }else if (presentage>=80) {
//   window.alert('grade B')
// }else if (presentage>=70) {
//   window.alert('grade c')
// }else if (presentage>=60) {
//   window.alert('grade D')
// }else if (presentage>=40) {
//   window.alert('grade E')
// }else if (presentage<=40) {
//   window.alert('grade F')
// }







///////////////////////////////////////////////////////////////////////  Number 15  /////////////////////////////////////////////////////
// 15- Write a program to print total number of days in month

// var  monthNumber= window.prompt('Enter month Number')
// switch ( monthNumber) {
//   case '1':
//   case '3':
//   case '5':
//   case '7':
//   case '8':
//   case '10':
//   case '12':
//     window.alert('31')
//     break;
//    case '2':
//    window.alert('28 days in a common year and 29 in leap years') 
//    break;
//   case '4':    
//   case '6':    
//   case '9':    
//   case '11':
//      window.alert('30')
//      break;     
// }






////////////////////////////////////////////////////////////////////////  Number  16 /////////////////////////////////////////////////
// 16- Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt('Enter your char');
// if(char=='a' || char=='A' ||char=='e' ||char=='E' || char=='o' || char=='O' || char=='I' ||   char=='i' ||  char=='U' || char=='u'){
//   window.alert('vowel')
// }else{
//   window.alert('consonant')
// }







//////////////////////////////////////////////////////////////////////// Number 17 //////////////////////////////////////////////////
// 17- Write a program to find maximum between two numbers


// var number1 = window.prompt('Enter first Number ')
// var number2 = window.prompt('Enter sec Number ')

// switch (number1>number2) {
//   case true:
//     window.alert(number1)
//     break;
//   case false:
//     window.alert(number2)
//     break;
// }






///////////////////////////////////////////////////////////////////////////// Number 18 ///////////////////////////////////////////////
//18- Write a program to check whether a number is even or odd

// var number = window.prompt('Enter your Number')

// switch (number%2==0) {
//   case true:
//     window.alert('Even')
//     break;
//     case false:
//       window.alert('ood')
//     break;
// }







/////////////////////////////////////////////////////////////////////////////////// Number 19 ///////////////////////////////////////////////
//19- Write a program to check whether a number is positive or negative or zero

// var number = window.prompt('Enter your Number')

// switch (number>0) {
//   case true:
//     window.alert('Number is positive')
//     break;
//     case false:
//       switch (number==0) {
//         case true:
//           window.alert('zero')
//           break;
//           case false:
//             window.alert('Number is Negative')
//             break;
       
//       }
    
   
// }





///////////////////////////////////////////////////////////    Number 20   ///////////////////////////////////////////////////////////
// 20- Write a program to create Simple Calculator

//  var num1 = Number(window.prompt("Enter first number 1 : "))
// var premator = window.prompt("Enter your premator (+, -, *, /)")
// var num2 = Number(window.prompt("Enter sec number 2 : "))

// if (premator == "+" ){
//     window.alert(result= num1 + num2);                                               
// }
//  else if(premator == "-" ){
    
//     window.alert(result = num1 - num2);
// }
        
//  else if (premator == "/" ){
//   window.alert(result = num1 / num2);
// }
//  else if (premator == "*" ){
//   window.alert(result = num1 * num2);
// }else{
//   window.alert('Invalid operator');
// }








                                            //  the End