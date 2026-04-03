"use strict";
//Written by Riley Tyler

//Import Modules
import { displayResults } from './cmd_displayResults.js';

//defaultCommand Object
export const infoCommand = {
    run() {
        let string = "\n" + "Reop Technologies Corporation (Everything is fictional and made for fun by Reop and Friends)";
	    displayResults.run(string);
    }
};