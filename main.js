// Author: Md. Hasibur Rashid
// Live: https://hasibcsepstubd.github.io/Air-Tickets/
// Code: https://github.com/hasibcsepstubd/Air-Tickets/


// Total ticket price calculation function =======================================================
function calculateTotalTicketPrice(){
    
    // Variable declaration
    var numberOfFirstClassTicket, numberOfEconomyClassTicket, 
        priceOfFirstClassTicket =150, priceOfEconomyClassTicket =100,
        totalPriceOfTotalFirstClassTicket =0,  totalPriceOfTotalEconomyClassTicket=0,
        subtotal = 0, tax = 0, total = 0;

    // Get input from DOM
    numberOfFirstClassTicket = parseInt(document.getElementById('input-first-class-tickets').value);
    numberOfEconomyClassTicket = parseInt(document.getElementById('input-economy-class-tickets').value);
    
    // Calculate First and Economy class ticket value
    totalPriceOfTotalFirstClassTicket = numberOfFirstClassTicket*priceOfFirstClassTicket;
    totalPriceOfTotalEconomyClassTicket = numberOfEconomyClassTicket*priceOfEconomyClassTicket; 
    
    // Calculate subtotal, tax and total ticket price 
    subtotal =  totalPriceOfTotalFirstClassTicket + totalPriceOfTotalEconomyClassTicket;
    tax = subtotal*(10/100);
    total = subtotal + tax;

    // Set calculation output to DOM
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}


// Input Validation style=====================================================================
function invalidInputStyle(isEnable){
    
    if(isEnable==true){
        document.getElementById("input-first-class-tickets").style.border="revert";
        document.getElementById("input-first-class-tickets").style.borderColor="red";
        document.getElementById("input-economy-class-tickets").style.border="revert";
        document.getElementById("input-economy-class-tickets").style.borderColor="red";
    }
    else{
        document.getElementById("input-first-class-tickets").style.border="none";
        document.getElementById("input-economy-class-tickets").style.border="none";
    }
    
    
}

// Booking now function =======================================================================
function bookNow(){

    if (parseInt(document.getElementById("total").innerText)>=100){
        
        // Disable all input fields after booking
        const allInputFields =document.querySelectorAll("input")
        allInputFields.forEach((e)=>{
            e.setAttribute("disabled", "true");
        })

        // Disable plus-minus btn
        const allPlusMinusButton =document.querySelectorAll(".plus-minus-btn")
        allPlusMinusButton.forEach((e)=>{
            e.remove();
        })

        document.getElementById("book-now").remove();

        // Congratulation message
        const message = document.querySelector("h1");
        message.style.background="green";
        message.innerHTML="<span style='padding-left:10px;'>Congratulation</span>";
        document.querySelector(".booking-content p").innerHTML="<h3>Your Ticket is book successfully and your receipt is here. Please, download and print it.</h3>";       
    }
    else{
        // styling DOM element
        alert("Your are not book any ticket. Please try again. Thanks");
        invalidInputStyle(true);
    }
    
}


// All event lister ===========================================================================

// Add first class ticket booking event listener--------------------------------------
document.getElementById('add-first-class-ticket').addEventListener("click",function(){
    document.getElementById('input-first-class-tickets').stepUp(1) ;
    invalidInputStyle(false);
    calculateTotalTicketPrice();
});

// Remove first class ticket booking event listener-------------------------------------
document.getElementById('remove-first-class-ticket').addEventListener("click",function(){
    document.getElementById('input-first-class-tickets').stepDown(1) ;
    invalidInputStyle(false);
    calculateTotalTicketPrice();
});

// Add economy class ticket booking event listener-------------------------------------
document.getElementById('add-economy-class-ticket').addEventListener("click",function(){
    document.getElementById('input-economy-class-tickets').stepUp(1) ;
    invalidInputStyle(false);
    calculateTotalTicketPrice();
});

// Remove economy class ticket booking event listener-------------------------------------
document.getElementById('remove-economy-class-ticket').addEventListener("click",function(){
    document.getElementById('input-economy-class-tickets').stepDown(1) ;
    invalidInputStyle(false);
    calculateTotalTicketPrice();
});

// Event listener for changing first/economy class ticket input value------------------------------
document.getElementById('input-first-class-tickets').addEventListener("change",calculateTotalTicketPrice);
document.getElementById('input-economy-class-tickets').addEventListener("change",calculateTotalTicketPrice);

// Book Now event listener-----------------------------------------------------------------
document.getElementById('book-now').addEventListener("click",bookNow);





