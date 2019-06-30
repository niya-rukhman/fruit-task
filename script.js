const costOfApple = 10;
const costOfOrange = 15;
const costOfBanana = 7;
let noOfApple = 0;
let noOfOrange = 0;
let noOfBanana = 0;
let totalCost = 0;
let totalCostEl = document.getElementById("totalAmount");
totalCost = noOfApple * costOfApple + noOfOrange * costOfOrange + noOfBanana * costOfBanana;

function cashValue(){ 
 let userAmount = document.getElementById("totalRs").value;
     
//  if(userAmount < totalCostEl.innerHTML){     

//     alert("Sorry,you have not enough money.");
   
//    }
//            else{
//                alert("Shopping SUCCESS!!");
//     }
}   
    

function plusApple() {
    let addApple = ++noOfApple;
    document.getElementById('buyApple').value = addApple;
    console.log(addApple);
    totalCostEl.innerHTML = noOfApple * costOfApple + noOfOrange * costOfOrange + noOfBanana * costOfBanana;
    
     if(userAmount > totalCostEl){     

     alert("Sorry,you have not enough money.");
    
    }
            else{
                alert("Shopping SUCCESS!!");
     }
    
    
}

function minusApple() {
    let subApple = --noOfApple;
    document.getElementById("buyApple").value = subApple;
    console.log(subApple);
    totalCostEl.innerHTML = noOfApple * costOfApple + noOfOrange * costOfOrange + noOfBanana * costOfBanana;

    if(userAmount < totalCost){     

     alert("Sorry,you have not enough money.");
    
    }
            else{
                alert("Shopping SUCCESS!!");
     }
    
}
  
function plusOrange() {
    let addOrange = ++noOfOrange;
    document.getElementById('buyOrange').value = addOrange;
    console.log(addOrange);
    totalCostEl.innerHTML = noOfApple * costOfApple + noOfOrange * costOfOrange + noOfBanana * costOfBanana;
    
    if(userAmount < totalCost){     

     alert("Sorry,you have not enough money.");
    
    }
            else{
                alert("Shopping SUCCESS!!");
     }
    
}

function minusOrange() {
    let subOrange = --noOfOrange;
    document.getElementById("buyOrange").value = subOrange;
    console.log(subOrange);
    totalCostEl.innerHTML = noOfApple * costOfApple + noOfOrange * costOfOrange + noOfBanana * costOfBanana;

    if(userAmount < totalCost){     

        alert("Sorry,you have not enough money.");
       
   }
           else{
               alert("Shopping SUCCESS!!");
    }
    
    
}
  
function plusBanana() {
    let addBanana = ++noOfBanana;
    document.getElementById('buyBanana').value = addBanana;
    console.log(addBanana);
    totalCostEl.innerHTML = noOfApple * costOfApple + noOfOrange * costOfOrange + noOfBanana * costOfBanana;
    
    if(userAmount < totalCost){     

     alert("Sorry,you have not enough money.");
    
    }
            else{
                alert("Shopping SUCCESS!!");
     }
    
    
}

function minusBanana() {
    let subBanana = --noOfBanana;
    document.getElementById("buyBanana").value = subBanana;
    console.log(subBanana);
    totalCostEl.innerHTML = noOfApple * costOfApple + noOfOrange * costOfOrange + noOfBanana * costOfBanana;

    if(userAmount < totalCost){     

        alert("Sorry,you have not enough money.");
       
   }
           else{
               alert("Shopping SUCCESS!!");
    }
    
}
  






