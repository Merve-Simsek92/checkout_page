let buttonMinus1=document.querySelectorAll(".quantity-controller")[0].firstElementChild
let buttonMinus2=document.querySelectorAll(".quantity-controller")[1].firstElementChild
let buttonMinus3=document.querySelectorAll(".quantity-controller")[2].firstElementChild
console.log(buttonMinus2);

let all=document.getElementsByTagName("button")
console.log(all);
div1=document.getElementsByClassName("product")[0];
div2=document.getElementsByClassName("product")[1];
div3=document.getElementsByClassName("product")[2];




let buttonPlus1=document.querySelectorAll(".quantity-controller")[0].lastElementChild
let buttonPlus2=document.querySelectorAll(".quantity-controller")[1].lastElementChild
let buttonPlus3=document.querySelectorAll(".quantity-controller")[2].lastElementChild
console.log(buttonPlus1);
console.log(buttonMinus1);
let buttonPlus=document.getElementsByClassName("fas fa-plus");
console.log(buttonPlus);
let sonuc1=document.querySelectorAll("#product-quantity")[0]
let sonuc2=document.querySelectorAll("#product-quantity")[1]
let sonuc3=document.querySelectorAll("#product-quantity")[2]
console.log(sonuc1);


let product1=document.getElementsByClassName("product-line-price")[0];
let product2=document.getElementsByClassName("product-line-price")[1]
let product3=document.getElementsByClassName("product-line-price")[2]
console.log(product1);


let sonucSubtotal=document.querySelectorAll(".buy-detail")[0].lastElementChild
console.log(sonucSubtotal);

let sonucTax=document.querySelectorAll(".buy-detail")[1].lastElementChild
console.log(sonucTax);

let sonucShipping=document.querySelectorAll(".buy-detail")[2].lastElementChild
let sonuctotal=document.querySelectorAll(".buy-detail")[3].lastElementChild

let result1=1;
let result2=1;
let result3=1;
let subtotal=(result1*25.98 + result2*45.98 + result3*74.99).toFixed(2);
let tax=(subtotal*0.18).toFixed(2);
let shipping=15;
let total=subtotal + tax + shipping;
buttonMinus1.addEventListener("click",()=>{
result1--;
if(result1==0){
    x=confirm("Are you sure?");
   if(x==true){
    div1.remove()}else{
        result1=1;
    }
 }

sonuc1.innerText=result1;

})
buttonMinus2.addEventListener("click",()=>{
    result2--;
    if(result2==0){
        x=confirm("Are you sure? ");
        if(x==true){
         div1.remove()}else{
            result2=1;
        }
     }
    sonuc2.innerText=result2;
    })
 buttonMinus3.addEventListener("click",()=>{
        result3--;
        if(result3==0){
            x=confirm("Are you sure?");
            if(x==true){
             div1.remove()}else{
                 result3=1;
             }
         }
        sonuc3.innerText=result3;
        })
  buttonPlus1.addEventListener("click",()=>{
            result1++;
            sonuc1.innerText=result1;
            })
 buttonPlus2.addEventListener("click",()=>{
                result2++;
                sonuc2.innerText=result2;
                })
buttonPlus3.addEventListener("click",()=>{
                    result3++;
                    sonuc3.innerText=result3;
                    })
      
                    


const calculater=()=>{

if(result1+result2+result3<1){
  subtotal=0;
tax=0;
shipping=0;
total=0;


}



else{
shipping=15;
subtotal=Number(result1)*25.98 + Number(result2)*45.98 +Number(result3)*74.99;
tax=Number(subtotal)*0.18;
total=shipping+subtotal+tax;

sonucSubtotal.innerText=subtotal.toFixed(2);
sonucTax.innerText=tax.toFixed(2);
sonucShipping.innerText=shipping;
sonuctotal.innerText=total.toFixed(2)
product1.innerText=(Number(result1)*25.98).toFixed(2);
product2.innerText=(Number(result2)*45.98).toFixed(2);
product3.innerText=(Number(result3)*74.99).toFixed(2)

}



}
[...all].forEach(element=>{
    element.addEventListener("click",calculater)
})
let removelist=document.getElementsByClassName("remove-product");
console.log(removelist);
[...removelist].forEach(element=>{
    element.addEventListener("click",()=>{
        x=confirm("Are you sure?");
        if(x==true){
    element.parentElement.parentElement.parentElement.remove()}
})
})


window.addEventListener("load",calculater)