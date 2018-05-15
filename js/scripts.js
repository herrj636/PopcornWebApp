//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
nlp = window.nlp_compromise;

var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Popcorn', //name of the chatbot
  movieTitle = "",
  queryEntry = "",
  fullURL = "",
  testingVar = "This variable is in Scripts",
  xhr = "";

  // talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  if ((lastUserMessage.toLowerCase()) === 'hi' || (lastUserMessage.toLowerCase()) =='hello' || (lastUserMessage.toLowerCase()) =='hello popcorn' || (lastUserMessage.toLowerCase()) =='hi popcorn!' || (lastUserMessage.toLowerCase()) =='hi popcorn') {  
    const hi = ["Hi! Are you looking to see a movie?",'hey there, looking for a friday night movie?','Hello!']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if ((lastUserMessage.toLowerCase()) == "no") {
    botMessage = 'Ok, I can engage in limited conversation, but you should find some friends...';
  }

  if ((lastUserMessage.toLowerCase()) === "what's your name?") {
    botMessage = 'My name is ' + botName;
  }

  if ((lastUserMessage.toLowerCase()) === "i want to see a movie" || (lastUserMessage.toLowerCase()) =='yes, i want to see a movie!' || (lastUserMessage.toLowerCase()) == 'yes') {
    botMessage = 'great! what genre are you interested in? I know about Comedy, Drama, Action and many others!';
  }

  if ((lastUserMessage.toLowerCase()) === "how about a romantic comedy?") {
    botMessage = 'Hell no.';
  }

  if ((lastUserMessage.toLowerCase()) === "just give me a few options") {
    botMessage = 'Ok, some of my favorite movies are: The Dark Night, Inception, The Matrix, Whiplash and Star Wars';
  }

  if ((lastUserMessage.toLowerCase().includes("search"))) {
    movieTitle = lastUserMessage;
    botMessage = "Here's more information about your Movie!";
    console.log(movieTitle + " from chat");
    cleanUp(movieTitle);
  }
}



//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(lastUserMessage);
    //Speech(lastUserMessage);  //says what the user typed outloud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName + ":</b> " + botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}


//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}