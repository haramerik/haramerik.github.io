// var first_name = "Jim";

// if (first_name == "Jen"||
// 	first_name == "Jason"||
// 	first_name == "Jim"||
// 	first_name == "John"||
// 	first_name == "Jordan"||
// 	first_name == "Jack"||
// 	first_name == "Jonah"||
// 	first_name == "Justin"||
// 	first_name == "Justine"||
// 	first_name == "Jaques") {
// 	document.write("Goodbye " + first_name + "!!!");
// }

(function (window) {
	//var names = [" John", " Jen", " Jason", " Jim"]
	// var johnGreeter = {};
	// johnGreeter.name = "John! ";
	
	var speakWord = "Goodbye ";
	var byeSpeaker = function (name) {
		document.write(speakWord + name + "!!!<br/>");
	}


	window.byeSpeaker = {speak: byeSpeaker};

})(window);


