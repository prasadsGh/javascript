let name;
console.log(name); // output ->undefined

name='prasad';
console.log(name); // output-> prasad

name=100;
console.log(name) //output -->100

const integer= 0.3;
// integer=1;--> //this will throw an error as 
// const values can not be changed

console.log(integer);

/*
   there are two types of programming languages

   1)statically type - one in which we have to declare the data type oof each 
    variable and cnano be changes dynamically 

    2)dynamically type- one in which we dont have to declare data type 

*/


let person={
    name:"Prasad",
    dob:"23/09/2002"

}

person.name="prasad patil"

console.log(person)
console.log(person.name)

let selectcolors=['red','green','brown'];
console.log(selectcolors[1]);

selectcolors[3]='black';

console.log(selectcolors[3])

selectcolors[5]='blue';
console.log(selectcolors[5]);

console.log(selectcolors.length);