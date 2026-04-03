"use strict";
//Written by Riley Tyler

//Import Modules
import { displayResults } from './cmd_displayResults.js';

//defaultCommand Object
export const budgeterCommand = {
    run(inputText) {
        let string;
        const budgetItems = {
            budgetNames: [],
            budgetPrices: [],
        };
        //Create budgetItems object
        if (localStorage.getItem('budgetItems') != null) {
            let budgetItemsSaved = JSON.parse(localStorage.getItem('budgetItems'));
            budgetItems.budgetNames = budgetItemsSaved.budgetNames;
            budgetItems.budgetPrices = budgetItemsSaved.budgetPrices;
        }

        //Commands THIS COULD USE SOME INPUT VALIDATION ex. make sure that the user only inputs a number for the price
        if (inputText.includes("add")) {
            let inputArray = inputText.split(' ');
            if ((inputArray[2] != null) && (inputArray[3] != null)) {
                budgetItems.budgetNames.push(inputArray[2]);
                budgetItems.budgetPrices.push(inputArray[3]);
                string = "\n" + "Budgeter Added: " + inputArray[2] + " " + inputArray[3];
            }
            else {
                string = "\n" + "Input Invalid. Budgeter Usage: \"add [NAME] [PRICE]\", \"view\", or \"clear\"";
            }
        }
        else {
            switch (inputText) { //determine which log to show from inputText.
                case "budgeter clear":
                    budgetItems.budgetNames = [];
                    budgetItems.budgetPrices = [];
                    string = "\n" + "Budgeter: Cleared Current Items";
                    break;
                case "budgeter view":
                    //Calculate total price
                    let totalPrice = 0;
                    string = "\n" + "|Budgeter|";
                    budgetItems.budgetPrices.forEach(price => {
                        totalPrice += parseInt(price);
                    });
                    for (let i = 0; i < budgetItems.budgetNames.length; i++) {
                        string += "\n" + budgetItems.budgetNames[i] + " :: " + budgetItems.budgetPrices[i];
                    }
                    string += "\n" + "Total Price: " + totalPrice;
                    
                    break;
                default:
                    string = "\n" + "Input Invalid. Budgeter Usage: \"add [NAME] [PRICE]\", \"view\", or \"clear\"";
                    break;
            }
        }

        //Save to localstorage
        localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
        
        displayResults.run(string);
    }
};