/**************Hello user********************/
const greet=(name)=>{
  return "Hello "+name;
}
console.log(greet('Natalia'));

/***********************What type?****************/
const checkType=(value)=> typeof value;

console.log(checkType('str'));//string
console.log(checkType(12));//number
//array
const arr=[0,1,2,3];
console.log(checkType(arr))//object 
/*An array is an object. And like any object in JavaScript, the array instance has a constructor function — Array.
When checking for Array instance, Array.isArray is preferred
*/
console.log(Array.isArray(arr)?'array':'not an array');

/***************Check length*****************/
const checkLength=(value)=>{
  return value.length;
}
const theLength = checkLength("Around the World");
console.log(theLength);//16
console.log(checkLength("One More Time"));//13

//length of array to iterate
console.log(checkLength([0,1,2,3]));//4

/*************Sum of two numbers***************/
function addTwoNumbers(a,b){
  return a+b;
}
let result_addTwoNumbers = addTwoNumbers(5, 15);
console.log(result_addTwoNumbers);
let newNum = 12;
console.log(addTwoNumbers(result_addTwoNumbers, newNum));

/*************Add and multiply********************/
const addAndMultiply=(a,b,c,d)=> (a+b)*(c+d);

let result_addAndMultiply = addAndMultiply(2,3,4,5);
console.log(result_addAndMultiply)
console.log(addAndMultiply(1,1,1,1));

/****************Return larger ********************/
const checkLarger=(a,b)=>a>b?a:b;
console.log(checkLarger(1, 2));
console.log(checkLarger(44, 33));

/****************Sum of elements*******************/
const addArrNums=arr=>{
  let result=0;
  arr.forEach(el=>result+=el);
  return result;
}

let total = addArrNums([4, 7, 12, 11]);
console.log(total);//34
total = addArrNums([4, 5, 6, 7, 8, 9]);
console.log(total);//39
console.log(total - total);//0

/*************Squaring a number**********/
const squaring=a=>a*a;
console.log(squaring(8));//64

/************Odd or Even****************/
const oddOrEven=a=>a%2?'Odd':'Even';
console.log(oddOrEven(16));//Even

/*************Sum of positive*************/
const sumOfPositive=arr=>{
  const positiveArr=arr.filter(el=>el>0);
  return positiveArr.length===0
    ? 0
    : positiveArr.reduce((a,b)=>a+b);
}
console.log(sumOfPositive([-2]));//0
console.log(sumOfPositive([1,2,3,-2]));//6

/*************END*************************/