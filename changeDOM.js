// let button = document.getElementById("changeBtn");
// let paragraph = document.getElementById("myParagraph");


// button.addEventListener("click", function () {
//   let family = "raha";
//   let age= 16
//   let name = `barto ${family}  age :${age}`;
//   paragraph.innerText = name;
//   paragraph.style.color = "blue";
// });


let changeContentBtn = document.getElementById('changeContentBtn');
let changeColorBtn =document.getElementById('changeColorBtn');
let contentBox=document.getElementById('contentBox');

changeContentBtn.addEventListener('click',function(){
    contentBox.innerText='تغییر محتوا'
})
changeColorBtn.addEventListener('click',function(){
    contentBox.style.color='yellow'
})