# FLICKR CHALLENGE
by David Berner

## Notes

Time to complete: 2 hours

### Given more time I would have:

* Implemented more tests

* Provided a proper UI.  I assumed part 2 - building the UI for the responsive site was to demonstrate HTML and CSS proficiency so I purely provided a few helper styles for myself.

* Sorted layout for older IE's

* Provided local storage fall back


### Features:

* In order for the memory of selected/favourited photos to be retained on page refresh this site needs to be running on a  server. [MAMP](https://www.mamp.info/en/") or [WAMP](http://www.wampserver.com/en/) are ideal for doing so locally.

Or I uploaded it here for your convenience: [http://davidberner.co.uk/flickr/app](http://davidberner.co.uk/flickr/app)

* You can also tab through the photos and hit the enter key to favourite them.

* Tested in Firefox 39, Chrome 48, Safari 9, IE 10, 11 (functionally but not layout), Edge


## To run tests

 1. If required [install Node](https://nodejs.org/en/download/)

 2. Navigate to the `Flickr - David Berner` folder in the terminal e.g `cd path/to/Flickr - David Berner/`

 3. Run `npm install` in terminal.  This will install Chai and Mocha

 4. Open the `test.html` file in the browser.  This can be found inside the `test` directory.