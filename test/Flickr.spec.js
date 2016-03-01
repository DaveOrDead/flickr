'use strict';

var jsonFlickrFeed = {
        "title": "Uploads from everyone",
        "link": "http://www.flickr.com/photos/",
        "description": "",
        "modified": "2016-03-01T09:01:01Z",
        "generator": "http://www.flickr.com/",
        "items": [
       {
            "title": "#gotothesea🌊",
            "link": "http://www.flickr.com/photos/138239242@N08/24770658664/",
            "media": {"m":"http://farm2.staticflickr.com/1608/24770658664_700886bc8b_m.jpg"},
            "date_taken": "2016-03-01T01:01:01-08:00",
            "description": " <p><a href=\"http://www.flickr.com/people/138239242@N08/\">instalushta<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/138239242@N08/24770658664/\" title=\"#gotothesea🌊\"><img src=\"http://farm2.staticflickr.com/1608/24770658664_700886bc8b_m.jpg\" width=\"240\" height=\"240\" alt=\"#gotothesea🌊\" /><\/a><\/p> <p>by lnbrm7 <a href=\"http://ift.tt/1LRZUA8\" rel=\"nofollow\">ift.tt/1LRZUA8<\/a><\/p>",
            "published": "2016-03-01T09:01:01Z",
            "author": "nobody@flickr.com (instalushta)",
            "author_id": "138239242@N08",
            "tags": "instagram ifttt"
       },
       {
            "title": "Çıldır Gölü, Ardahan #yoldaolmak #homeof #çıldır #lake #ardahan #anatolia #turkey #Kars",
            "link": "http://www.flickr.com/photos/maxmajestic/24774536853/",
            "media": {"m":"http://farm2.staticflickr.com/1467/24774536853_65971f7890_m.jpg"},
            "date_taken": "2016-03-01T11:01:03-08:00",
            "description": " <p><a href=\"http://www.flickr.com/people/maxmajestic/\">yoldaolmak<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/maxmajestic/24774536853/\" title=\"Çıldır Gölü, Ardahan #yoldaolmak #homeof #çıldır #lake #ardahan #anatolia #turkey #Kars\"><img src=\"http://farm2.staticflickr.com/1467/24774536853_65971f7890_m.jpg\" width=\"240\" height=\"240\" alt=\"Çıldır Gölü, Ardahan #yoldaolmak #homeof #çıldır #lake #ardahan #anatolia #turkey #Kars\" /><\/a><\/p> ",
            "published": "2016-03-01T09:01:03Z",
            "author": "nobody@flickr.com (yoldaolmak)",
            "author_id": "58573300@N07",
            "tags": "square squareformat iphoneography instagramapp uploaded:by=instagram"
       },
       {
            "title": "Las calles hablan",
            "link": "http://www.flickr.com/photos/gonzomau/24774540273/",
            "media": {"m":"http://farm2.staticflickr.com/1449/24774540273_44994714b4_m.jpg"},
            "date_taken": "2016-03-01T06:01:12-08:00",
            "description": " <p><a href=\"http://www.flickr.com/people/gonzomau/\">GonzoMau<\/a> posted a photo:<\/p> <p><a href=\"http://www.flickr.com/photos/gonzomau/24774540273/\" title=\"Las calles hablan\"><img src=\"http://farm2.staticflickr.com/1449/24774540273_44994714b4_m.jpg\" width=\"240\" height=\"240\" alt=\"Las calles hablan\" /><\/a><\/p> ",
            "published": "2016-03-01T09:01:12Z",
            "author": "nobody@flickr.com (GonzoMau)",
            "author_id": "8641114@N03",
            "tags": "square squareformat iphoneography instagramapp uploaded:by=instagram foursquare:venue=4c02b3419a7920a149d4ce79"
    }]
};


var expect = chai.expect;
var output;
var flickrApp = flickrApp;
flickrApp.processPhotos(jsonFlickrFeed);

output = document.querySelector("#gallery");

describe("Rendering", function() {
    describe("Should render images correctly", function() {
        it("Number of images written to the dom should be greater than 0", function() {
            expect(output.getElementsByTagName("img").length).to.be.above(0);
        });

        it("Images should have alt text", function() {
            expect(output.getElementsByTagName("img")[0].alt).to.have.length.above(0);

        });

    });

    describe("Favouriting should work on click", function() {
        it("When button containing image clicked, class of selected should be added", function() {
            output.getElementsByTagName("button")[0].click();
            expect(output.getElementsByTagName("button")[0].className).to.contain("selected");
        });
        it("When button containing image re-clicked, class of selected should be removed", function() {
            output.getElementsByTagName("button")[0].click();
            expect(output.getElementsByTagName("button")[0].className).to.not.contain("selected");
        });

    });

});