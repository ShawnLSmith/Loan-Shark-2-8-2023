function getValues(){
    //Get User Values from the DOM.
    let loanAmount = document.getElementById("loanAmount").value;
    let termMonths = document.getElementById("termMonths").value;
    let interestRate = document.getElementById("interestRate").value;
    
    //loanArray Declaration.
    let loanArray = [];

    //Input validation for integers.
    loanAmount = parseInt(loanAmount);
    termMonths = parseInt(termMonths);
    interestRate = parseInt(interestRate);

    //Loop to Check if the input values are integers and call calculateMortgage and displayData.
    if (Number.isInteger(loanAmount) && Number.isInteger(termMonths) && Number.isInteger(interestRate)) {

        //Call calculateMortgage.
        calculateMortgage(loanAmount, termMonths, interestRate);

        //Call displayData to Display Collected Data.
        displayData(loanArray);
    }

    else
    {
        alert("You must enter an integer in the text boxes!")
    }
        
    
}
// function calculateMortgage(loanAmount, termMonths, interestRate){
    
// let totalMnthly = (loanAmount) * (interestRate/1200)/(1 - ( 1+ interestRate/1200)**(termMonths*-1));
// // Math.pow( 1+ interestRate/1200),termMonths*-1))
// let txtTotMnthly = "$ " . totalMnthly.toString();
// document.getElementById("tprinciple").innerText() =txtTotMnthly;
// }

//function 

 function displayData (loanArray) {
    
    //Get the table body element from the page.
    let tableBody = document.getElementById("results");

    //get the template rows
    let templateRow = document.getElementById("loanTableTemplate");

    //Clear Table first
    tableBody.innerHTML = "";

    for (let index = 0; index < loanArray.length; index += 5) {

        //importNode, new!! 9/23/2022
        let tableRow = document.importNode(templateRow.content, true);

        //Grab row tds from "Template Section" and put them into the array 
        let rowCols = tableRow.querySelectorAll("td");  

        //Array Sets
        rowCols[0].classList.add (loanArray[index]);
        rowCols[0].textContent = loanArray[index];

        rowCols[1].classList.add (loanArray[index + 1]);
        rowCols[1].textContent = loanArray[index + 1];

        rowCols[2].classList.add (loanArray[index + 2]);
        rowCols[2].textContent = loanArray[index + 2];

        rowCols[3].classList.add (loanArray[index + 3]);
        rowCols[3].textContent = loanArray[index + 3];

        rowCols[4].classList.add (loanArray[index + 4]);
        rowCols[4].textContent = loanArray[index + 4];       
        
        tableBody.appendChild(tableRow);
    }
    
}