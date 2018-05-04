function talkToMiniBot() {

  // Fetch user input
  var userInput = document.forms["userInput"]["userInput"].value;

  // Check that the input is not empty
  if (userInput == "") {
    alert("Please say something.");
    return false;
  }

  // If the input is valid
  // Update history
  var previousBotMsg = $("#botDiv").html();
  var userMsgHTML = "<p>" + userInput + "</p>";
  $("#historyDiv").append("<p><b>Bot:</b></p>", previousBotMsg, "<p><b>You:</b></p>", userMsgHTML);

  // Empty input field
  document.forms["userInput"]["userInput"].value = "";

  // HTTP POST request for chatbot answer
  $.ajax({
  type: "POST",
    //url: "http://127.0.0.1:8888/minibot/api/msg",
    url: "http://109.31.68.167:8888/minibot/api/msg",
    data: { msg: userInput },
    success: function ( data ) {
      botMsg = data["msg"];
      formattedMsg = "<p>" + botMsg + "</p>";
      $("#botDiv").html(formattedMsg); // Update display with chatbot answer
    },
    dataType: "json"
  });

  return false; // Do not submit form
};

function complainAboutAnswer() {
  // HTTP POST request for chatbot answer
  $.ajax({
  type: "POST",
    //url: "http://127.0.0.1:8888/minibot/api/complain",
    url: "http://109.31.68.167:8888/minibot/api/complain",
    success: function ( data ) {
      formattedMsg = "<p>" + "I apologise, I will notice my developers." + "</p>";
      $("#botDiv").html(formattedMsg); // Update display with chatbot answer
    },
    dataType: "json"
  });
}
