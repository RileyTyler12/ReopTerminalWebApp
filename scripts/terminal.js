"use strict";
//Written by Riley Tyler

//Import Command Modules
import { defaultCommand } from './cmd_default.js';
import { helpCommand } from './cmd_help.js';
import { infoCommand } from './cmd_info.js';
import { viewLogCommand } from './cmd_viewLog.js';
import { youtubeCommand } from './cmd_youtube.js';

//Global Variables
let inputAllowed = true;
let inputHistory = new Array();
let previousInputCount = 0;

//Create HTML Reference Variables
let logTextArea = document.getElementById("textarea-log");
let inputTextArea = document.getElementById("textarea-input");

//Add Event Listener to Input to call execute function on ENTER
inputTextArea.addEventListener("keydown", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		if (inputAllowed) {
			execute();
		}
	}
	if (event.key === "ArrowUp") {
		event.preventDefault();
		previousPrompt();
	}
})

//Main Functions

	//execute function
function execute() {
	let inputText = inputTextArea.value;
	let commandFound;
	previousInputCount = 0;
	
	logTextArea.value += "\nUser:" + inputText; //Add input to log
	if (inputText !== "") {
		inputHistory.push(inputText); //add inputText to inputHistory array
	}
	inputTextArea.value = ""; //Clear input textarea
	
	switch (inputText) { //Switch to determine command to execute.
		case "help":
			helpCommand.run();
			break;
		case "info":
			infoCommand.run();
			break;
		case "clear":
			clearCommand();
			break;
		default: //check for multiple option commands, if command still not found call defaultCommand()
			if (inputText.includes("viewLog")) {
				commandFound = true;
				viewLogCommand.run(inputText);
			}
			if (inputText.includes("youtube")) {
				commandFound = true;
				youtubeCommand.run(inputText);
			}
			if (commandFound != true) {
				if (inputText !== "") {
					defaultCommand.run();
				}
			}
			break;
	}
}

	//Previous prompt function
function previousPrompt() {
	if (inputHistory[previousInputCount]) {
		let arrayIndex = (inputHistory.length - 1) - previousInputCount;
		inputTextArea.value = inputHistory[arrayIndex];
		previousInputCount++;
	}
}

function clearCommand() { //basic command to clear the log textarea
	logTextArea.value = "";
}