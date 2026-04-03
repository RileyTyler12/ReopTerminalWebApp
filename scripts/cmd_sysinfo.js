"use strict";
//Written by Riley Tyler

//Import Modules
import { displayResults } from './cmd_displayResults.js';

//defaultCommand Object
export const sysinfoCommand = {
    run() {
        let string = "\n" + navigator.platform + " // " + navigator.hardwareConcurrency + " Cores // " + navigator.deviceMemory + "GB Memory" + " // " + `${screen.width}x${screen.height}`;
        displayResults.run(string);
    }
};