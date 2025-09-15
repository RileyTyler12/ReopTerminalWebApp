"use strict";
//Written by Riley Tyler

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
			helpCommand();
			break;
		case "info":
			infoCommand();
			break;
		case "clear":
			clearCommand();
			break;
		default: //check for multiple option commands, if command still not found call defaultCommand()
			if (inputText.includes("viewLog")) {
				commandFound = true;
				viewLogCommand(inputText);
			}
			if (inputText.includes("youtube")) {
				commandFound = true;
				youtubeCommand(inputText);
			}
			if (commandFound != true) {
				if (inputText !== "") {
					defaultCommand();
				}
			}
			break;
	}
}
	//displayResults function
function displayResults(string) { //displays the command results in a typewriter like effect
	let count = 0;
	let speed = 35;
	typewriter();
	inputAllowed = false;
	function typewriter() {
		if (count < string.length) {
			logTextArea.value += string.charAt(count);
			count++;
			setTimeout(typewriter, speed);
		}
		else {
			inputAllowed = true;
		}
	}
};

	//Previous prompt function
function previousPrompt() {
	if (inputHistory[previousInputCount]) {
		inputTextArea.value = inputHistory[previousInputCount];
		previousInputCount++;
	}
}

//Command Functions
function defaultCommand() {
	let string = "\n" + "Command Not Found. Try typing \"help\"";
	displayResults(string);
}

function helpCommand() {
	let string = "\n" + "Commands Available:" + "\n" +
								"help" + "\n" + 
								"info" + "\n" +
								"viewLog" + "\n" +
								"youtube" + "\n" +
								"clear";
	
	displayResults(string);
}

function infoCommand() {
	let string = "\n" + "Reop Technologies Corporation (made for fun by Reop)";
	displayResults(string);
}

function viewLogCommand(inputText) {
	let string;
	switch (inputText) { //determine which log to show from inputText.
		case "viewLog 001":
			string = "\n" + "Log 001:" + "\n" +
								"AI: Status report on object?" + "\n" + 
								"Michael: Object is secure in MED-Lock, 7 members of crew are under." + "\n" +
								"AI: What are the symptoms?" + "\n" +
								"Michael: 5 minutes - Severe Hallucinations, delusions of strange symbols. 10 minutes - Extreme violence including self mutilation, death imminent." + "\n" +
								"AI: Continue with operation. Do not fail. Crew is expendable." + "\n" +
								"LOG END 7/27/9023";
			break;
		default:
			string = "\n" + "Log not found. Usage: \"viewLog ###\"";
			break;
	}
	
	displayResults(string);
}

function youtubeCommand(inputText) { //command for fun to show youtube video by using id as a parameter
	let oldVideo = document.getElementById("youtubeVideo");
	if (oldVideo) {
		oldVideo.remove();
	}
	
	let logContainer = document.getElementById("log-container")
	let inputTextArray = inputText.split(" ");
	let videoID = inputTextArray[1];
	if (videoID) {
	   let newVideoHtml = "<iframe id='youtubeVideo' width='640' height='480' allowfullscreen src='http://www.youtube.com/embed/" + videoID + "?autoplay=1'></iframe>";
	   logContainer.insertAdjacentHTML("afterend", newVideoHtml);
	}
	else {
		displayResults("\n" + "No video ID. Usage: \"youtube videoID\"")
	}
}

function clearCommand() { //basic command to clear the log textarea
	logTextArea.value = "";
}