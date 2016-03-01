'use strict';

// set up module
var flickrApp = flickrApp || {};

flickrApp.processPhotos = function(data) {

    // Grab current url as this will contain ids of selected images
    var currentUrl = window.location.href;
    // set up variable to be filled with photo data from Flickr
    var elements = '<ul class="l-grid">';

    // Loop through all returned images
    for (var i = 0, max = data.items.length; i < max; i++) {

        var selectedClass;
        var el = data.items[i];

        // check if the custom id exists in the url and add `selected` class to it if true
        var isSelected = currentUrl.indexOf(el.author_id + '|' + el.date_taken) >= 0;
        isSelected ? selectedClass = " selected" : selectedClass = "";

        // * Add photo along with layout markup to the earlier prepared variable
        // * Create custom id as one wasn't provided by Flickr by concatonating from authorid and time stamp
        // * Use inline event handlers to save having to loop through data again post-render to add event listeners for keyup and onclick.
        elements += '\
        <li class="l-grid__item"> \
            <button id="' + el.author_id + '|' + el.date_taken + '" \
                class="c-panel' + selectedClass + '" \
                type="button" \
                onClick="flickrApp.toggleSelected(event, this);" \
                onKeyUp="flickrApp.toggleSelected(event, this);"> \
                    <img class="c-image" src="' + el.media.m + '" \
                                         alt=" ' + el.title + ' "> \
            </button> \
        </li>';
    }

    // finalise elements var with closing tag and render markup in the dom
    elements += '</ul>';
    document.getElementById("gallery").innerHTML = elements;
}

flickrApp.toggleSelected = function(e, element) {

    // I prefer to use constants for keycodes
    var ENTER_KEY = 13;
    var currentUrl;

    // Allow user to either hit enter key or click on photo to favourite / defavourite it
    if((e.type === "keyup" && e.keycode === "ENTER_KEY") || e.type === "click" ) {

        currentUrl = window.location.href;

        // check to see if element is selected or not and toggle class / add it to URL depending
        if(element.classList.contains("selected")) {
            element.classList.remove("selected");
            currentUrl = currentUrl.replace("?" + element.id, "");
        } else {
            element.classList.add("selected");
            currentUrl = currentUrl + "?" + element.id;
        }

        // check if new URL can be added to url, if not add to local storage
        try {
            window.history.pushState("string", "", currentUrl );
        }
        catch (err) {
            // with more time I would implement local storage here
            console.log ("You need to be running this page on a server images to be stored for refresh.  MAMP or WAMP is a good way to go :)");
        }
    }
}

flickrApp.callFlickr = function(_tags) {

    // slightly customised version of provided JS, allows user to provide own tag
    var tags = _tags || "london";
    var script =  document.createElement("script");

    script.src = "http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=flickrApp.processPhotos&tags=" + tags;
    document.head.appendChild( script );
};


