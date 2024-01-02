function loveCalc(){
    let randomNumber = Math.floor((Math.random()*100) + 1);
    return randomNumber
}

$("button").on("click",function(){
    $("h1").text("Your love percentage is : " + loveCalc() + "%");

    setTimeout(function(){
        $("h1").text("Try Again?")
    },7000);
})

$(document).on("keydown", function(evt){
    switch (evt.key) {
        case "Enter":
            $("h1").text("Your love percentage is : " + loveCalc() + "%");
            setTimeout(function(){
                $("h1").text("Try Again?")
            },7000);
            break;
    
        default:console.log(evt.key);
            break;
    }
})

