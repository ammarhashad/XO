let tds = document.querySelectorAll("td");
let btnRestart = document.querySelector("#restart_btn");


// function changeMarker(){
//   if(this.textContent === ''){
//     this.textContent="X";
//   }
//   else if(this.textContent ==='X'){
//     this.textContent="O";
//   }
//   else{
//     this.textContent="";
//   }
// }
//
// for(var i = 0; i < 9; i++){
//   tds[i].addEventListener('click',changeMarker)
// }

btnRestart.addEventListener('click',function(){
  for(let i = 0; i < 9; i++){
        tds[i].textContent="";
      }
})

let click = 0;
for(let i = 0; i < 9; i++){
  tds[i].addEventListener('click',function(){
    if(click === 0 && tds[i].textContent === ''){
      tds[i].textContent="X";
      click = 1;
    }
    else if(click = 1 && tds[i].textContent ===''){
      tds[i].textContent="O";
      click = 0;
    }
  })
}

for(let i = 0; i < 9; i++){
  tds[i].addEventListener('dblclick',function(){
    if(tds[i].textContent === 'X'){
      tds[i].textContent="";
      click = 0;
    }
    else{
      tds[i].textContent="";
      click = 1;
    }

  })
}



// for(let i = 0; i < 9; i++){
//   tds[i].addEventListener('click',function(){
//     if(tds[i].textContent === ''){
//       tds[i].textContent="X";
//     }
//     else if(tds[i].textContent ==='X'){
//       tds[i].textContent="O";
//     }
//     else{
//       tds[i].textContent="";
//     }
//   })
// }
