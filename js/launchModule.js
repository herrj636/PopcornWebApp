


console.log(testingVar);

//Clean up entire URL for launch.****
function cleanUp(queryEntry){
	movieTitle = lastUserMessage.split(' ').join('%20').split('search%20').join("trailer%20");;
	// console.log(movieTitle);
    queryEntry = movieTitle;
    // console.log(queryEntry);
    if (queryEntry.includes("trailer")){
        console.log("constructor launched");
        var url = "https://content.googleapis.com/youtube/v3/search";
        var urlv2 = "&maxResults=3&part=snippet&key=AIzaSyC9rTLTbiq3Xpix1OkGW_0Hbk5B8Ghg6ig";
        var q = "?q=" + queryEntry;
        console.log(q);
        var fullURL = url + q + urlv2;
        // console.log("GET", fullURL);
        // console.log(cleanEntry + " in cleanup");  
        startQuery(fullURL);
    }
    else {
      console.log("no launch");
    }
}


function startQuery(input) {
  console.log('Query Launched');
  xhr = new XMLHttpRequest();
  this.input = fullURL;
  console.log("request: " + input);
  xhr.open("GET", input, true);
  xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 ) {
            if (xhr.status === 200) {
              console.log("yay");
            	parsingResponses(xhr);
            } else {
                document.getElementById("Output").innerHTML("Query Launched, But API not connected");
            }
          }
  }
  
  
  xhr.send(null);

}

// console.log(resp);

// 
