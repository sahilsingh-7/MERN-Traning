// let a = new String("hello");
// let b = "hello";

// if(a==b){
//     console.log("yes");
// }
// else{
//     console.log("No");
// }
//cannot be assigned constant obj 

// const obj = {
//     name: 'Ajay',
//     lastname: 'singh',
// }

// console.log(obj);
// document.write(obj);

// obj.age = 20;// assigning a new object is allowed 
// console.log(obj);


// objects key values can be changed but whole obj can't be reassign 

// obj.name = 20;
// console.log(obj);

//basic if array

// let arr = [1,2,3,4];

// arr = [45,4,78,8];
// arr[1] = 48;
// arr[10] = 20; // this fills rest places with undefined and put 20 at 10th index 

// console.log(arr);
// console.log(typeof(arr)); // array is of object type an object is also of object type to differentiate amoung them we use Array.isArray(array's name)


// arr = [45,4,78,8];

// const obj = {
//     name: 'Ajay',
//     lastname: 'singh',
// }
// console.log(typeof(Array.isArray(arr))); // print True 
// console.log(typeof(Array.isArray(obj))); // print Flase


// function chechifobj(ar){
//     if(Array.isArray(ar)==1){
//         console.log("No");
//     }
//     else{
//         console.log("Yes");
//     }
// }

// // chechifobj([1,5,6]);
// chechifobj({name: "aehe"});
// chechifobj([]);


// for loops (for of, for in loops in homework )

// const arr = ['name', 2];
// const obj = {
//     name: 'Ajay' , age:20 , lastname: 'singh'
// }
// for(let i in obj){
//     console.log(i); // this will print its keys name 
// }


