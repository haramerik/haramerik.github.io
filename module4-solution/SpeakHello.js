// var first_name = "Jim";

// if (first_name == "Yaakov" ||
// 	first_name == "Paul"||
// 	first_name == "Frank"||
// 	first_name == "Larry"||
// 	first_name == "Paul"||
// 	first_name == "Laura") {
	
// 	document.write("Hello " + first_name + "!");
	
// }

(function (window) {
	//var names = ["Yaakov", " Paul", " Frank", " Larry", " Paula", " Laura"];
	// var yaakovGreeter = {};
	// yaakovGreeter.name = "Yaakov! ";
	var speakWord = "Hello ";
	
	var helloSpeaker = function (name) {
  		document.write(speakWord + name + "!!!<br/>");
	}

	window.helloSpeaker = {speak: helloSpeaker};

})(window);

