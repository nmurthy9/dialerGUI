$(document).ready(function() { // do this when the document is loaded
	$("#dialerContent").show(); // show the element with ID "element"
	$("#listContent").hide(); // hide the element with ID "otherElement"
	$("#addContent").hide();
});

$("#dialer").click(function() { // when "button_id" is clicked
	$("#dialerContent").show(); // show element
	$("#listContent").hide();	// hide other element
	$("#addContent").hide();
});

$("#contactList").click(function() { // when "button_id" is clicked
	$("#listContent").show(); // show element
	$("#dialerContent").hide();	// hide other element
	$("#addContent").hide();
});

$("#addContact").click(function() { // when "button_id" is clicked
	$("#addContent").show(); // show element
	$("#dialerContent").hide();	// hide other element
	$("#listContent").hide();
});