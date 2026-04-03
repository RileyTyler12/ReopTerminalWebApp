"use strict";
//Written by Riley Tyler

//Import Modules
import { displayResults } from './cmd_displayResults.js';

//defaultCommand Object
export const youtubeCommand = {
    run(inputText) {
        let oldVideo = document.getElementById("youtubeVideo");
        if (oldVideo) {
            oldVideo.remove();
        }
        
        let logContainer = document.getElementById("log-container")
        let inputTextArray = inputText.split(" ");
        let videoID = inputTextArray[1];
        if (videoID) {
            if (videoID !== "close") {
                let newVideoHtml = "<iframe id='youtubeVideo' width='640' height='480' allow='autoplay;' allowfullscreen src='https://www.youtube.com/embed/" + videoID + "?autoplay=1'></iframe>";
                logContainer.insertAdjacentHTML("afterend", newVideoHtml);
            }
        }
        else {
            displayResults.run("\n" + "No video ID. Usage: \"youtube videoID|close\"")
        }
    }
};