
var counterPlaceHolder = document.getElementById("counter-placeholder");
var btnIncrement = document.getElementById("btn-increment");
var btnDecrement = document.getElementById("btn-decrement");
var btnreset = document.getElementById("btn-reset");
var number = 0;



function changeColor(number){
    var color = "";
    if(number %2 == 0 ){
        color = "white";
        b.style.backgroundColor = 'cyan';
     }else{
        b.style.backgroundColor = 'gray';
        color="red";
    }
    return color;
}

btnIncrement.addEventListener("click", function(){
    
    number++;
    if(number===9){
    btnIncrement.disabled =  true;
   }
   btnDecrement.disabled =  false;
  btnreset.disabled =  false;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);

});

btnDecrement.addEventListener("click", function(){
    
    number--;
    if(number===0){
    btnDecrement.disabled =  true;
    btnreset.disabled =  true;

   }
   
   btnIncrement.disabled = false;
    counterPlaceHolder.innerHTML = number;
    counterPlaceHolder.style.color = changeColor(number);
});
btnreset.addEventListener("click",function(){
    number=0;
    counterPlaceHolder.innerHTML = number;
    btnDecrement.disabled =  true;
  btnreset.disabled =  true;
  btnIncrement.disabled =  false;
    counterPlaceHolder.style.color = changeColor(number);
})
