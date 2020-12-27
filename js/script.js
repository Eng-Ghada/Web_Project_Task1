
let position = $(window).scrollTop(); 

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    if(scroll > position) 
    {
        $("#ghadaSec").animate({width:'100%'},2500);
        $("#ghadaSec").animate({height:'100vh'},1000,function(){
            $("#ghadaSec h1").fadeIn(1000,function(){
                $("#ghadaSec img").slideDown(1500,function(){
                    $("#ghadaSec p,h2").fadeIn(2000)
                });
            });
        });
    } 
    position = scroll;
   
});

