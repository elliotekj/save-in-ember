chrome.extension.sendMessage({}, function(response)
{
	var readyStateCheckInterval = setInterval(function()
	{
		if (document.readyState === "complete")
		{
			clearInterval(readyStateCheckInterval);
			// Page is done loading
			///////////////////////////////////////

			// Get the image link
			var image_link  = $(".single-img img").attr("src");

			// Insert the button
			$(".meta-act:nth-child(2)").after("<div class='meta-act meta-act-full'><span class='meta-act-link meta-ember' id='send-to-ember'>Save in Ember</span></div>");

			// Open the tab in the background
			document.getElementById("send-to-ember").addEventListener("click", generateLink, false);

			function generateLink()
			{
	    	var a = document.createElement("a");
	    	a.href = "emberapp:///import?url=" + image_link;

	    	var evt = document.createEvent("MouseEvents");
	    	evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, false, 0, null);
	    	a.dispatchEvent(evt);
			}

		}
	}, 10);
});
