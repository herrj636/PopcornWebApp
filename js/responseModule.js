

function parsingResponses(access) {
	console.log("response module lunched");
	console.log('Connected');
    // document.getElementById("Output").innerHTML = "<h1>Results:</h1></br>";
    var resp = JSON.parse(xhr.responseText);
    // console.log(resp);
    console.log(resp.items[0].title);               
    console.log("Constructor Launch");
    var contentWindow = document.getElementById("movieTitle");
    contentWindow.innerHTML = ""

    var titleTag = document.createElement("h3"),
    snippetTag = document.createElement("p"),
    trailerTag = document.createElement("iframe");

    var trailerURL = ("https://www.youtube.com/embed/" + resp.items[0].id.videoId);

    console.log(trailerURL);


    console.log(resp.items[0].id.videoid);
              
    var titleContent = document.createTextNode(resp.items[0].snippet.title),
    snippetContent = document.createTextNode(resp.items[0].snippet.description);
    // trailerContent = document.createTextNode(resp.items[0].pagemap.movie.trailer);

    trailerTag.setAttribute("width", 420);
    trailerTag.setAttribute("heigth", 315);
    trailerTag.setAttribute("src", trailerURL);
    trailerTag.setAttribute("frameborder", 0);
    // trailerTag.setAttribute("allowfullscreen", null);

    console.log(trailerURL);

    titleTag.appendChild(titleContent);
    snippetTag.appendChild(snippetContent);

    contentWindow.appendChild(titleTag);
    contentWindow.appendChild(snippetTag);
    contentWindow.appendChild(trailerTag);

	console.log()

}