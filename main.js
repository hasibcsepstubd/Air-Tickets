// Author: Md. Hasibur Rashid
// Live: https://hasibcsepstubd.github.io/Air-Tickets/
// Code: https://github.com/hasibcsepstubd/Air-Tickets/


// Total ticket price calculation function ==============================================================
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


// Booking now function =======================================================================
function bookNow(){

    if (parseInt(document.getElementById("total").innerText)>=100){
        document.getElementById("booking-form").remove();
        document.querySelector("h1").innerText="Congratulation";
        document.querySelector(".booking-content p").innerHTML="Your Ticket is book successfully. Ticket details are:";
        // Adding new html element
        const newElement = document.createElement('p');
        newElement.innerHTML='<br><h3>Total price: '+ document.getElementById("total").innerText+'</h3><br><h3>Tax: '+ document.getElementById("tax").innerText+'</h3>';
        var a = document.querySelector(".booking-content").lastElementChild;
        a.appendChild(newElement);
        
    }
    else{
        // styling DOM element
        document.getElementById("input-first-class-tickets").style.border="revert";
        document.getElementById("input-first-class-tickets").style.borderColor="red";
        document.getElementById("input-economy-class-tickets").style.border="revert";
        document.getElementById("input-economy-class-tickets").style.borderColor="red";

        alert("Your are not book any ticket. Please try again. Thanks");
    }
    
}


// All event lister ===========================================================================

// Add first class ticket booking event listener--------------------------------------
document.getElementById('add-first-class-ticket').addEventListener("click",function(){
    document.getElementById('input-first-class-tickets').stepUp(1) ;
    document.getElementById("input-first-class-tickets").style.border="none";
    document.getElementById("input-economy-class-tickets").style.border="none";
    calculateTotalTicketPrice();
});

// Remove first class ticket booking event listener-------------------------------------
document.getElementById('remove-first-class-ticket').addEventListener("click",function(){
    document.getElementById('input-first-class-tickets').stepDown(1) ;
    document.getElementById("input-first-class-tickets").style.border="none";
    document.getElementById("input-economy-class-tickets").style.border="none";
    calculateTotalTicketPrice();
});

// Add economy class ticket booking event listener-------------------------------------
document.getElementById('add-economy-class-ticket').addEventListener("click",function(){
    document.getElementById('input-economy-class-tickets').stepUp(1) ;
    document.getElementById("input-first-class-tickets").style.border="none";
    document.getElementById("input-economy-class-tickets").style.border="none";
    calculateTotalTicketPrice();
});

// Remove economy class ticket booking event listener-------------------------------------
document.getElementById('remove-economy-class-ticket').addEventListener("click",function(){
    document.getElementById('input-economy-class-tickets').stepDown(1) ;
    document.getElementById("input-first-class-tickets").style.border="none";
    document.getElementById("input-economy-class-tickets").style.border="none";
    calculateTotalTicketPrice();
});

// Event listener for changing first/economy class ticket input value------------------------------
document.getElementById('input-first-class-tickets').addEventListener("change",calculateTotalTicketPrice);
document.getElementById('input-economy-class-tickets').addEventListener("change",calculateTotalTicketPrice);

// Book Now event listener-----------------------------------------------------------------
document.getElementById('book-now').addEventListener("click",bookNow);





