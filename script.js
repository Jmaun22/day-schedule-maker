
  // Use Moment.js to display time

  window.setInterval(function () {
    var today = moment();
    $("#1a").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
 
    
    }, 1000);

    // function to display backround past present and future based on diffrent colors 

      
    
    /* -------------------------------------------------------------------------- */
 
backround()
    // 1.function past
    function backround() {
      // hour of the day 
      var today = moment();
      var hour = today.format("h");
      





      // conditionals to descide if it is past present or future 
      switch (hour) {
        case 9:
          document.getElementById("hour-nine").style.backgroundColor = "green";
          document.getElementById("hour-ten").style.backgroundColor = "red";
          document.getElementById("hour-eleven").style.backgroundColor = "red";
          document.getElementById("hour-tweleve").style.backgroundColor = "red";
          document.getElementById("hour-thirteen").style.backgroundColor = "red";
          document.getElementById("hour-fourteen").style.backgroundColor = "red";
          document.getElementById("hour-fifthteen").style.backgroundColor = "red";
          document.getElementById("hour-sixteen").style.backgroundColor = "red";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
        
          
          
          break;
        case 10:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "green";
          document.getElementById("hour-eleven").style.backgroundColor = "red";
          document.getElementById("hour-tweleve").style.backgroundColor = "red";
          document.getElementById("hour-thirteen").style.backgroundColor = "red";
          document.getElementById("hour-fourteen").style.backgroundColor = "red";
          document.getElementById("hour-fifthteen").style.backgroundColor = "red";
          document.getElementById("hour-sixteen").style.backgroundColor = "red";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
          
          break;
        case 11:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "yellow";
          document.getElementById("hour-eleven").style.backgroundColor = "green";
          document.getElementById("hour-tweleve").style.backgroundColor = "red";
          document.getElementById("hour-thirteen").style.backgroundColor = "red";
          document.getElementById("hour-fourteen").style.backgroundColor = "red";
          document.getElementById("hour-fifthteen").style.backgroundColor = "red";
          document.getElementById("hour-sixteen").style.backgroundColor = "red";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
          
          break;

        case 12:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "yellow";
          document.getElementById("hour-eleven").style.backgroundColor = "yellow";
          document.getElementById("hour-tweleve").style.backgroundColor = "green";
          document.getElementById("hour-thirteen").style.backgroundColor = "red";
          document.getElementById("hour-fourteen").style.backgroundColor = "red";
          document.getElementById("hour-fifthteen").style.backgroundColor = "red";
          document.getElementById("hour-sixteen").style.backgroundColor = "red";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
          
          break;

        case 1:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "yellow";
          document.getElementById("hour-eleven").style.backgroundColor = "yellow";
          document.getElementById("hour-tweleve").style.backgroundColor = "yellow";
          document.getElementById("hour-thirteen").style.backgroundColor = "green";
          document.getElementById("hour-fourteen").style.backgroundColor = "red";
          document.getElementById("hour-fifthteen").style.backgroundColor = "red";
          document.getElementById("hour-sixteen").style.backgroundColor = "red";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
          
          break;

        case 2:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "yellow";
          document.getElementById("hour-eleven").style.backgroundColor = "yellow";
          document.getElementById("hour-tweleve").style.backgroundColor = "yellow";
          document.getElementById("hour-thirteen").style.backgroundColor = "yellow";
          document.getElementById("hour-fourteen").style.backgroundColor = "green";
          document.getElementById("hour-fifthteen").style.backgroundColor = "red";
          document.getElementById("hour-sixteen").style.backgroundColor = "red";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
          
          break;
        case 3:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "yellow";
          document.getElementById("hour-eleven").style.backgroundColor = "yellow";
          document.getElementById("hour-tweleve").style.backgroundColor = "yellow";
          document.getElementById("hour-thirteen").style.backgroundColor = "yellow";
          document.getElementById("hour-fourteen").style.backgroundColor = "yellow";
          document.getElementById("hour-fifthteen").style.backgroundColor = "green";
          document.getElementById("hour-sixteen").style.backgroundColor = "red";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
          
          break;
        case 4:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "yellow";
          document.getElementById("hour-eleven").style.backgroundColor = "yellow";
          document.getElementById("hour-tweleve").style.backgroundColor = "yellow";
          document.getElementById("hour-thirteen").style.backgroundColor = "yellow";
          document.getElementById("hour-fourteen").style.backgroundColor = "yellow";
          document.getElementById("hour-fifthteen").style.backgroundColor = "yellow";
          document.getElementById("hour-sixteen").style.backgroundColor = "green";
          document.getElementById("hour-seventeen").style.backgroundColor = "red";
          
          break;

        case 5:
          document.getElementById("hour-nine").style.backgroundColor = "yellow";
          document.getElementById("hour-ten").style.backgroundColor = "yellow";
          document.getElementById("hour-eleven").style.backgroundColor = "yellow";
          document.getElementById("hour-tweleve").style.backgroundColor = "yellow";
          document.getElementById("hour-thirteen").style.backgroundColor = "yellow";
          document.getElementById("hour-fourteen").style.backgroundColor = "yellow";
          document.getElementById("hour-fifthteen").style.backgroundColor = "yellow";
          document.getElementById("hour-sixteen").style.backgroundColor = "yellow";
          document.getElementById("hour-seventeen").style.backgroundColor = "green";
          
          
          break;
      
        default:

          break;
      }

      
      $("#1a").text(hour);

    };

   /* --------------------------- save text to button -------------------------- */

   var shoppingFormEl = $('#saveBTN');
   var shoppingListEl = $('#info');
function change(){
   document.getElementById("hour-seventeen").style.backgroundColor = "green";
   var textInTxtArea = $('textarea[name="log"]').val();
   localStorage.setItem("textInTxtArea", textInTxtArea);

   console.log(textInTxtArea);

};


shoppingFormEl.on('click', change);

var text = localStorage.getItem("textInTxtArea");
var area = $('textarea[name="log"]');

text.append(area);
   
   // create function to handle form submission
   function handleFormSubmit(event) {
     event.preventDefault();
   
     // select form element by its `name` attribute and get its value
     var shoppingItem = $('textarea[name="log"]').val();
   
     // if there's nothing in the form entered, don't print to the page
     if (!shoppingItem) {
       console.log('No shopping item filled out in form!');
       return;
     }
   
     // print to the page
     localStorage.setItem("shoppingItem", shoppingItem);
    
     shoppingListEl.append('<li>' + shoppingItem + '</li>');
   
     // clear the form input element
     $('input[name="shopping-input"]').val('');
   }
   
   // Create a submit event listener on the form element
  