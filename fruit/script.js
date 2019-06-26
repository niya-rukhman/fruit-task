 const costOfApple = 10;
 const costOfOrange = 15;
 const costOfAppleBanana = 7;
 let costumerHasRs = 0;
 let noOfApple = 0;
 let noOfOrange = 0;
 let noOfBanana = 0;
 let totalCost = 0;
let customerHasRs = 27;

function plusapple(){
    let inputValue =  (document.querySelector("#buyapple").value);
   noOfApple = 2;
   totalCost = 20;
   totalCost = customerHasRs -  totalCost;
 if(customerHasRs < 10){
     alert("Sorry,you have not enough money.");
 }
 else{
     alert("Shopping SUCCESS!!");
 }
}




{/* <button class="add-qty" onclick="plusapple()"><i class="fa fa-plus"></i></button>
       <input id="buyapple" type="number" min="0">
        <button class="sub-qty" onclick="minusapple()"><i class="fa fa-minus"></i></button>
        </div> */}