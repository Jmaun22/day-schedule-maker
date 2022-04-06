
  // Use Moment.js to display time

  window.setInterval(function () {
    var today = moment();
    // $("#1a").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    $("#1a").text(today.format("h"));
    
    }, 1000);

    // function to display backround past present and future based on diffrent colors 

      
    
    /* -------------------------------------------------------------------------- */
    document.getElementById("hour-eleven").style.backgroundColor = "blue";

    // 1.function past
    function backround() {
      // hour of the day 
      var today = moment();
      var hour = today.format("h");

      // conditionals to descide if it is past present or future 
      switch (hour) {
        case 9:
          document.getElementsByClassName("information").style.background = "blue";
          
          break;
        case 10:
          
          break;
        case 11:
          
          break;

        case 12:
          
          break;

        case 1:
          
          break;

        case 2:
          
          break;
        case 3:
          
          break;
        case 4:
          
          break;

        case 5:
          
          
          break;
      
        default:
          break;
      }

      
      $("#1a").text(hour);

    };

    function past() {



    };

    // 2.function present 

    function present() {

    };

    // 3.function future 

    function future() {

    };
