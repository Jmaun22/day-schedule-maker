
  // Use Moment.js to display time

  window.setInterval(function () {
    var today = moment();
    $("#1a").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
 
    
    }, 1000);

    // function to display backround past present and future based on diffrent colors 

      
    
    /* -------------------------------------------------------------------------- */
    var today = moment();
    var hour = today.format("h");
    var hourI = Number.parseInt(hour)
    console.log(typeof(hourI))
backround(hourI);
    // 1.function past
    function backround(hour) {
      // hour of the day 
      // var today = moment();
      // var hour = today.format("h");
      console.log("plz " + hour)

    
      
      





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
    /* -------------------------------------------------------------------------- */
    
   /* --------------------------- save text to button -------------------------- */

   var shoppingFormEl = $('#saveBTN');
   var shoppingFormElB = $('#secondBT');

   var shoppingFormElC = $('#saveBTN2');
   var shoppingFormElD = $('#saveBTN3');
   var shoppingFormElE = $('#saveBTN4');
   var shoppingFormElF = $('#saveBTN5');
   var shoppingFormElG = $('#saveBTN6');
   var shoppingFormElH = $('#saveBTN7');
   var shoppingFormElI = $('#saveBTN8');


   
function change(){
  
   var textInTxtArea = $('textarea[name="log"]').val();
   localStorage.setItem("textInTxtArea", textInTxtArea);

   console.log(textInTxtArea);

   var textInTxtAreaB = $('textarea[name="logB"]').val();
   localStorage.setItem("textInTxtAreaB", textInTxtAreaB);

   var textInTxtAreaC = $('textarea[name="log2"]').val();
   localStorage.setItem("textInTxtAreaC", textInTxtAreaC);

   var textInTxtAreaD = $('textarea[name="log2"]').val();
   localStorage.setItem("textInTxtAreaD", textInTxtAreaD);

   var textInTxtAreaE = $('textarea[name="log3"]').val();
   localStorage.setItem("textInTxtAreaE", textInTxtAreaE);

   var textInTxtAreaF = $('textarea[name="log4"]').val();
   localStorage.setItem("textInTxtAreaF", textInTxtAreaF);

   var textInTxtAreaG = $('textarea[name="log5"]').val();
   localStorage.setItem("textInTxtAreaG", textInTxtAreaG);

   var textInTxtAreaH = $('textarea[name="log6"]').val();
   localStorage.setItem("textInTxtAreaH", textInTxtAreaH);

   var textInTxtAreaI = $('textarea[name="log7"]').val();
   localStorage.setItem("textInTxtAreaI", textInTxtAreaI);

   var textInTxtAreaJ = $('textarea[name="log8"]').val();
   localStorage.setItem("textInTxtAreaJ", textInTxtAreaJ);
   
   


};



shoppingFormEl.on('click', change);
shoppingFormElB.on('click', change);
shoppingFormElC.on('click', change);
shoppingFormElD.on('click', change);
shoppingFormElE.on('click', change);

shoppingFormElF.on('click', change);
shoppingFormElG.on('click', change);
shoppingFormElH.on('click', change);
shoppingFormElI.on('click', change);


/* -------------------------------------------------------------------------- */

// 9am
var text = localStorage.getItem("textInTxtArea");

var textB = localStorage.getItem("textInTxtAreaB");
var textC = localStorage.getItem("textInTxtAreaC");
var textD = localStorage.getItem("textInTxtAreaD");
var textE = localStorage.getItem("textInTxtAreaE");
var textF = localStorage.getItem("textInTxtAreaF");
var textG = localStorage.getItem("textInTxtAreaG");
var textH = localStorage.getItem("textInTxtAreaH");
var textI = localStorage.getItem("textInTxtAreaI");


var area = $('textarea[name="log"]');

var areaB = $('textarea[name="logB"]');
var areaC = $('textarea[name="logC"]');
var areaD = $('textarea[name="logD"]');
var areaE = $('textarea[name="logE"]');
var areaF = $('textarea[name="logF"]');
var areaG = $('textarea[name="logG"]');
var areaH = $('textarea[name="logH"]');
var areaI = $('textarea[name="logI"]');

console.log("yo" + text);
area.textContent = text;

areaB.textContent = textB;
areaC.textContent = textC;
areaD.textContent = textD;
areaE.textContent = textE;
areaF.textContent = textF;
areaG.textContent = textG;
areaH.textContent = textH;
areaI.textContent = textI;


area.append(text);

areaB.append(textB);
areaC.append(textC);
areaD.append(textD);
areaE.append(textE);
areaF.append(textF);
areaG.append(textG);
areaH.append(textH);
areaI.append(textI);

text.append('<p>' + area + '</p>');

textB.append('<p>' + areaB + '</p>');
textC.append('<p>' + areaC + '</p>');
textD.append('<p>' + areaD + '</p>');
textE.append('<p>' + areaE + '</p>');
textF.append('<p>' + areaF + '</p>');
textG.append('<p>' + areaG + '</p>');
textH.append('<p>' + areaH + '</p>');
textI.append('<p>' + areaI + '</p>');

// 10am

   





//11am


// 12am


// 1pm


// 2pm

// 3pm


// 4pm


// 5pm



   

  