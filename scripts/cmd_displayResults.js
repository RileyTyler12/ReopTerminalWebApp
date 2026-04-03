"use strict";
//Written by Riley Tyler

//displayResults Object
export const displayResults = {
    	//displayResults function
    run(string) { //displays the command results in a typewriter like effect
        let inputTextArea = document.getElementById("textarea-input");
        let count = 0;
        let speed = 35;

        //Create HTML text area reference variable
        let logTextArea = document.getElementById("textarea-log");

        typewriter();
        inputTextArea.disabled = true;
        function typewriter() {
            if (count < string.length) {
                logTextArea.value += string.charAt(count);
                count++;
                setTimeout(typewriter, speed);
            }
            else {
                inputTextArea.disabled = false;
                inputTextArea.focus();
            }
        }
    }
};