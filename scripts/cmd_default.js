"use strict";
//Written by Riley Tyler

//Import Modules
import { displayResults } from './cmd_displayResults.js';

//defaultCommand Object
export const defaultCommand = {
    run() {
        let string = "\n" + "Command Not Found. Try typing \"help\"";
        displayResults.run(string);
    }
};