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

      $( "ul li" ).first().addClass( "highlight" );

      $('#myButton').click(function() {
        // Manipulating the DOM
        $('#myDiv').text('Button Clicked!');
        $('#myDiv').css('color', 'red');
      });
      $( "#go" ).on( "click", function() {
        $( "#block" ).animate({
          width: "70%",
          opacity: 0.4,
          marginLeft: "0.6in",
          fontSize: "3em",
          borderWidth: "10px"
        }, 1500 );
      });
      $( "#go1" ).on( "click", function() {
        $( "#block1" )
          .animate({
            width: "90%"
          }, {
            queue: false,
            duration: 3000
          })
          .animate({ fontSize: "24px" }, 1500 )
          .animate({ borderRightWidth: "15px" }, 1500 );
      });
       
      $( "#go2" ).on( "click", function() {
        $( "#block2" )
          .animate({ width: "90%" }, 1000 )
          .animate({ fontSize: "24px" }, 1000 )
          .animate({ borderLeftWidth: "15px" }, 1000 );
      });
       
      $( "#go3" ).on( "click", function() {
        $( "#go1" ).add( "#go2" ).trigger( "click" );
      });
       
      $( "#go4" ).on( "click", function() {
        $( "div" ).css({
          width: "",
          fontSize: "",
          borderWidth: ""
        });
      });
      $( "#go" ).on( "click", function() {
        $( ".block" ).first().animate({
          left: 100
        }, {
          duration: 1000,
          step: function( now, fx ){
            $( ".block" ).slice( 1 ).css( "left", now );
          }
        });
      });

  //     $( "select" )
  // .on( "change", function() {
  //   var str = "";
  //   $( "select option:selected" ).each( function() {
  //     str += $( this ).text() + " ";
  //   } );
  //   $( "div" ).text( str );
  // } )
  // .trigger( "change" );


  $( "#draggabl" ).draggable();


  $( "#draggabl" ).draggable();
  $( "#droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
  $( "#selectable" ).selectable();
  $( "#accordion" ).accordion();

});