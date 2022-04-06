
  // Use Moment.js to display time

  window.setInterval(function () {
    var today = moment();
    $("#1a").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    
    }, 1000);