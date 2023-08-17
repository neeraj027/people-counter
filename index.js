const count = document.querySelector(".count")
const btn = document.querySelector(".add")
let temp = 0;

btn.addEventListener("click",function(){
    temp+=1;
    count.textContent=temp;
})

//or you can use below code

// const count = document.querySelector(".count")
// temp = 0
// function increment(){
//     temp+=1;
//     count.textContent=temp;
// }