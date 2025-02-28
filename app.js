// var typed = new Typed(".about", {
//   strings: [
//     "Web Developer / Web Designer \n\ CDAC certified | ENTC Engineer | Game Tester",
//   ],
//   typeSpeed: 25,
//   loop: false,
//   showCursor: false,
// });
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");
const closed = document.getElementById("closed");
if(bar){
    bar.addEventListener("click",()=>{
         nav.classList.add("active");
    });
} ;
if(closed){
    closed.addEventListener("click",()=>{
         nav.classList.remove("active");
    })
} 
