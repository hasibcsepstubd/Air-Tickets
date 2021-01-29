// Author: Md. Hasibur Rashid
// Live: https://hasibcsepstubd.github.io/Air-Tickets/
// Code: https://github.com/hasibcsepstubd/Air-Tickets/


// Ticket calculation function ==============================================================
function calculateTotalTicketPrice(){
    var numberOfFirstClassTicket, numberOfEconomyClassTicket, 
        priceOfFirstClassTicket =150, priceOfEconomyClassTicket =100,
        totalPriceOfTotalFirstClassTicket =0,  totalPriceOfTotalEconomyClassTicket=0,
        subtotal = 0, tax = 0, total = 0;

    numberOfFirstClassTicket = parseInt(document.getElementById('first-class-tickets').value);
    numberOfEconomyClassTicket = parseInt(document.getElementById('economy-class-tickets').value);
    
    totalPriceOfTotalFirstClassTicket = numberOfFirstClassTicket*priceOfFirstClassTicket;
    totalPriceOfTotalEconomyClassTicket = numberOfEconomyClassTicket*priceOfEconomyClassTicket; 
    
    subtotal =  totalPriceOfTotalFirstClassTicket + totalPriceOfTotalEconomyClassTicket;
    tax = subtotal*(10/100);
    total = subtotal + tax;

        document.getElementById('subtotal').innerText = "$"+ subtotal;
        document.getElementById('tax').innerText = "$"+ tax;
        document.getElementById('total').innerText = "$"+ total;

}
// Booking now function =======================================================================
function bookNow(){
    calculateTotalTicketPrice();
    // document.getElementById("booking-form").remove();
    document.querySelector("h1").innerText="Congratulation";
    document.querySelector("p").lastChild.innerText="Your Ticket is book successfully. Ticket details are:";
    // var a = document.getElementById("booking-content").appendChild("p");
}

// All events lister ===========================================================================
document.getElementById('first-class-tickets').addEventListener("change",calculateTotalTicketPrice);
document.getElementById('economy-class-tickets').addEventListener("change",calculateTotalTicketPrice);
document.getElementById('book-now').addEventListener("click",bookNow);

document.getElementById('add-first-class-ticket').addEventListener("click",function(){
    document.getElementById('first-class-tickets').stepUp(1) ;
    calculateTotalTicketPrice();
});

document.getElementById('remove-first-class-ticket').addEventListener("click",function(){
    document.getElementById('first-class-tickets').stepDown(1) ;
    calculateTotalTicketPrice();
});

document.getElementById('add-economy-class-ticket').addEventListener("click",function(){
    document.getElementById('economy-class-tickets').stepUp(1) ;
    calculateTotalTicketPrice();
});

document.getElementById('remove-economy-class-ticket').addEventListener("click",function(){
    document.getElementById('economy-class-tickets').stepDown(1) ;
    calculateTotalTicketPrice();
});






