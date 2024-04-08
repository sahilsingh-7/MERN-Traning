// console.log(window);
// console.log(innerHeight);
// console.log(innerWidth);
// console.log(window.document);
// console.log(window);


// console.dir(window);
// console.dir(window.document);
// console.log(window.document);


// selectors

// const res = document.getElementsByTagName('h3');


// const res = document.getElementById('yy');

// const res = document.querySelectorAll('h3');

// console.log(res);

// const res = document.getElementById('yy');
// res.innerHTML = "hello World"
// console.log(res);

// const res = document.getElementsByTagName('div');
// res[0].innerHTML = "<h4>hellow</h4>"
// console.log(res);


const ne = document.createElement("h3")
ne.innerText = "Eat Sleep Code Repeate"
// console.log(ne);
// document.body.appendChild(ne);

const fd = document.getElementsByTagName('div');
fd[0].appendChild(ne);