//Function getValues
function getValues() {
    //Get User Values from the DOM.
    let loanAmount = document.getElementById("loanAmount").value;
    let termMonths = document.getElementById("termMonths").value;
    let interestRate = document.getElementById("interestRate").value;
    let loanArray = [];
    
    //Input validation for integers.
    loanAmount = parseInt(loanAmount);
    termMonths = parseInt(termMonths);
    interestRate = parseInt(interestRate);

    //Loop to Check if the input values are integers and call calculateMortgage and displayData.
    if (Number.isInteger(loanAmount) && Number.isInteger(termMonths) && Number.isInteger(interestRate) ) 
    {
        //Call calculateMortgage, and assign the array to it.
        loanArray = calculateMortgage(loanAmount, termMonths, interestRate);

        //Call displayData to Display the Collected Data.
        displayData(loanArray);
    }

    else 
    {
        alert("You must enter an integer in the text boxes!")
    }
}
//Function calculateMortgage
function calculateMortgage(loanAmount, termMonths, interestRate) {

    //Declarations
    let calculateArray = [];
    let principle = 0;
    let interestPayment = 0;
    let totalInterest = 0;
    let remainingBalance = 0;
    let monthlyPayment = 0;

    //Assignments
    principle = loanAmount;
    remainingBalance = principle;
    let interest = interestRate/1200;
    let monthPayments = loanAmount / termMonths;
    let endingBalance = monthPayments - loanAmount;

    for (let index = 0; index < (termMonths*5); index = index +5) 
    {

    //Total Monthly Payment
    let totalMonthly = (loanAmount) * (interestRate / 1200) / (1 - (1 + interestRate / 1200) ** (termMonths * -1));

    if (index == 0 ) monthlyPayment = totalMonthly;

    //Interest Payment
    interestPayment = remainingBalance * interest;
    //Accumulated Interest
    totalInterest += interestPayment;
    //Principal Payment
    let principlePayment = totalMonthly - interestPayment;
    //Remaining Balance for next month.    
    endingBalance =  remainingBalance - principlePayment;

    calculateArray[index] = totalMonthly;
    calculateArray[index+1] = remainingBalance;
    calculateArray[index+2] = interestPayment;
    calculateArray[index+3] = totalInterest;
    calculateArray[index+4] = endingBalance;

    //remainingBalance =  remainingBalance - principlePayment;    
    remainingBalance = endingBalance;

    }
    
    document.getElementById ("tPrinciple").textContent = formatCurrency(loanAmount);
    document.getElementById ("tInterest").textContent = formatCurrency(totalInterest);
    document.getElementById ("tCost").textContent = formatCurrency(loanAmount + totalInterest);
    document.getElementById ("mPayment").textContent = formatCurrency(monthlyPayment);

    return calculateArray;
}
//Function displayData
function displayData(loanArray) {  

    //Get the table body element from the page.
    let tableBody = document.getElementById("results");

    //get the template rows
    let templateRow = document.getElementById("loanTableTemplate");

    let monthCount = 1;

    for (let index = 0; index < loanArray.length-1; index = index + 5) {

        //importNode, new!! 9/23/2022
        let tableRow = document.importNode(templateRow.content, true);

        //Grab row tds from "Template Section" and put them into the array 
        let rowCols = tableRow.querySelectorAll("td");

        //Array Sets
        rowCols[0].classList.add(monthCount);
        rowCols[0].textContent = monthCount++;

        rowCols[1].classList.add(loanArray[index]);
        rowCols[1].textContent = formatCurrency(loanArray[index]);

        rowCols[2].classList.add(loanArray[index+1]);
        rowCols[2].textContent = formatCurrency(loanArray[index+1]);

        rowCols[3].classList.add(loanArray[index+2]);
        rowCols[3].textContent = formatCurrency(loanArray[index+2]);

        rowCols[4].classList.add(loanArray[index+3]);
        rowCols[4].textContent = formatCurrency(loanArray[index+3]);

        rowCols[5].classList.add(loanArray[index+4]);
        rowCols[5].textContent = formatCurrency(loanArray[index+4]);

        tableBody.appendChild(tableRow);        
    }
}

function formatCurrency(cValue){
    let format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    });

    return format.format(cValue);
}

