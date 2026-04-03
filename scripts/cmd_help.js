"use strict";
//Written by Riley Tyler

//Import Modules
import { displayResults } from './cmd_displayResults.js';

//defaultCommand Object
export const helpCommand = {
    run() {
        let string = "\n" + "Commands Available:" + "\n" +
								"help" + "\n" + 
								"info" + "\n" +
								"viewLog" + "\n" +
                                "sysinfo" + "\n" +
								"youtube" + "\n" +
								"clear";
	
	    displayResults.run(string);
    }
};