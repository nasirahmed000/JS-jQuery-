$(document).ready(function(){
    // alert massage 
    
    // $('button').click(function(){
    //     alert("Are You Ready??")

    // });

    $('.btn').on('dblclick', function(){
         alert("Are You Ready??");
    })

    // hide 
    $('#hide').on("click",function(){
        $('h4').hide();
    });
    // show 
    $('#show').on("click",function(){
        $('h4').show();
    });
    $('#toggle').on("click",function(){
        $('h4').toggle();
    });

    $( ".ques" ).on( "click", function() {
        $( ".ans" ).slideToggle( "slow" );
      });


});