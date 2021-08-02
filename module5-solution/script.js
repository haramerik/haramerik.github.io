// var switchMenuToActive = function () {
//   // Remove 'active' from home button
//   var classes = document.querySelector("#navHomeButton").className;
//   classes = classes.replace(new RegExp("active", "g"), "");
//   document.querySelector("#navHomeButton").className = classes;

//   // Add 'active' to menu button if not already there
//   classes = document.querySelector("#navMenuButton").className;
//   if (classes.indexOf("active") == -1) {
//     classes += " active";
//     document.querySelector("#navMenuButton").className = classes;
//   }
// };

$(function(){
	$('.menubar button').click(function(){
		console.log("clicked")
	})
});

$(function(){
	var header = document.getElementById("menubar");
	var btns = header.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
	  var current = document.getElementsByClassName("active");
	  current[0].className = current[0].className.replace(" active", "");
	  this.className += " active";
	  });
}
});