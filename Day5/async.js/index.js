// console.log('GEC starting');
// function fn(erp){
//     console.log("hello ");
//     let ans = 2+3;
//     // console.log(" ");
//     console.log(ans);
//     console.log("bye");
// }


//asyncronous event
// function printpretty(erp){
//     // console.log("hello ");
//     // let ans = 2+3;
//     // // console.log(" ");
//     // console.log(ans);
//     // console.log("bye");
//     console.log("chal be chutiye");
// }
// // setTimeout(fn ,10000);
// // console.log("GEC end");

// const e = document.getElementById("u");
// e.addEventListener("click",printpretty);

// const res = fetch("https://api.github.com/user/deepak3440");
// console.log(res);
// res.then(() => console.log('fetched'));

console.log("start");
const req = fetch('https://dummyjson.com/products/1')

// .then(res => console.log(res));
const res = req.then(res => res.json())
res.then((data)=>console.log(data));

// .then(json => console.log(json))
// fetch('https://dummyjson.com/products/1')
// // .then(res => console.log(res));
// .then(res => res.json())
// // .then(json => console.log(json))
            
console.log("end");