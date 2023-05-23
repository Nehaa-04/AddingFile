
console.log('hello world');

const name = "Neha";
const age = 30;
const address="civil lines";

const personDetails = 'My name is ' +name+ ' and i am ' +age ;
console.log(personDetails);

console.log('My name is ' + name + ' and i am ' +age);

let personalDetails;
console.log(`${personalDetails} = My name is ${name} age is ${age} address is ${address}`);

console.log("personal details = My name is ",name, "age is", age," address is", address)

//-------------------------------------------------------------------------------------------------------------------------//
//Reverse a string - length function and s.charAt() works like array;

const s = "ram";
let str = "";

for(let i=s.length-1; i>=0; i--)
{
    str = str + s[i];
}

console.log(str);

//---------------------------------------------------------------------------------------------------------------//
//Find second largest no 

var secondmax = (arr) => {
   
let largest = Number.MIN_VALUE;
let secondlargest = Number.MIN_VALUE;

for(let i=0; i<arr.length; i++)
{
 if(arr[i]>largest)
 {
    secondlargest=largest;
    largest=arr[i];
 }
 else if(arr[i]<largest && arr[i]>secondlargest)
 {
    secondlargest = arr[i]
 }
}
return secondlargest;
}
//-------------------------------------------------------------------------------------//

let arr = new Array (6, 2, 3, 4, 5);
    let largest = Number.MIN_VALUE;
    let secondlargest = Number.MIN_VALUE;

    for(let i=0; i<arr.length; i++)
    {
         if(arr[i]>largest)
         {
            secondlargest=largest;
            largest=arr[i];
         }
         else if(arr[i]<largest && arr[i]>secondlargest)
         {
            secondlargest = arr[i]
         }
    }
console.log(secondlargest);

//---------------------------------------------------------------------------------------------//
