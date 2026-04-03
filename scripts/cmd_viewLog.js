"use strict";
//Written by Riley Tyler

//Import Modules
import { displayResults } from './cmd_displayResults.js';

//defaultCommand Object
export const viewLogCommand = {
    run(inputText) {
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
        
        displayResults.run(string);
    }
};