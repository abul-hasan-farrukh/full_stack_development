$("h1").click(function() {
$("h1").css("color", "blue");
});

$("button").on("click", function(){
        $("h1").css("color", "blue");
        $("h1").slideUp().slideDown().animate({opacity: 0.5});        
});

// $(document).keypress(function(Event){
//         $("h1").text(Event.key);
//         $("h1").css("color", "blue");       
// });