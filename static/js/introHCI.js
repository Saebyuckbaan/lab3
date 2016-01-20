'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click( updateAttribute );
}


function updateAttribute( e )
{
	//Retrieve all information from the form
	var new_width       = $("#width").val();
	var div             = $("#project").val();
	var new_description = $("#description").val();
	var description_div = div + " .project-description";

	//Small Debugger :)
	//console.log ("width: " + width + " and div : " + div);

	//update Width of the project	
	$(div).animate({
		width: new_width
	});

	//update description
	$(description_div).text( new_description );
}


function projectClick(e) { 
    //console.log("Project clicked");
  	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);


	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) 
	{
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} 
	else 
	{
		//description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
		$(description).toggle();
	}
}