// Navbar Fix now scrolls to each section
$(".nav-link").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
         scrollTop: $($(this).attr("href")).offset().top - 100
     }, 400);
     $(".nav-link").removeClass("active")
     $(this).addClass("active");
} )

// Cigar Talk will show individual letters of each definition
function navCharacters(id) {
    const phonetics = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whisky", "xray", "yankee", "zulu"];
        $("[id$='-terms']").hide();
    const elementId = id + '-terms';
        $('#' + elementId).show();
}
