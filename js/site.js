function getValues() {
    //Get User Values from the DOM.
    let loanAmount = document.getElementById("loanAmount").value;
    let termMonths = document.getElementById("termMonths").value;
    let interestRate = document.getElementById("interestRate").value;

    //loanArray Declaration here?.
    let loanArray = [];

    //Input validation for integers.
    loanAmount = parseInt(loanAmount);
    termMonths = parseInt(termMonths);
    interestRate = parseInt(interestRate);

    //Loop to Check if the input values are integers and call calculateMortgage and displayData.
    if (Number.isInteger(loanAmount) && Number.isInteger(termMonths) && Number.isInteger(interestRate)) {

        //Call calculateMortgage.
        loanArray = calculateMortgage(loanAmount, termMonths, interestRate);


        //Call displayData to Display Collected Data.
        displayData(loanArray);
    }

    else {
        alert("You must enter an integer in the text boxes!")
    }


}
function calculateMortgage(loanAmount, termMonths, interestRate) {

    //loanArray here?
    //let loanArray = [];

     let totalMonthly = (loanAmount) * (interestRate/1200)/(1 - ( 1 * interestRate/1200)**(termMonths*-1));
    // // Math.pow( 1+ interestRate/1200),termMonths*-1))
    // let txtTotMonthly = "$ " . totalMonthly.toString();
    // document.getElementById("tprinciple").innerText() =txtTotMonthly;

    // loanArray [0] = '11111Hithere';
    // loanArray [1] = "Hi%20there";
    // loanArray [2] = "Hi&nbsp;there";
    // loanArray [3] = "Hi&nbsp;there";
    // loanArray [4] = "123423452345.478437"; 

    //console.log("Loan Array display log");

    //return (loanArray);

    return (totalMonthly);
}

function displayData(loanArray) {

    //Get the table body element from the page.
    let tableBody = document.getElementById("results");

    //get the template rows
    let templateRow = document.getElementById("loanTableTemplate");

    //Clear Table first
    //tableBody.innerHTML = "";

    for (let index = 0; index < loanArray; index += 5) {

        //importNode, new!! 9/23/2022
        let tableRow = document.importNode(templateRow.content, true);

        //Grab row tds from "Template Section" and put them into the array 
        let rowCols = tableRow.querySelectorAll("td");

        //Array Sets
        rowCols[0].classList.add(loanArray[index]);
        rowCols[0].textContent = loanArray[index];

        rowCols[1].classList.add(loanArray[index + 1]);
        rowCols[1].textContent = loanArray[index + 1];

        rowCols[2].classList.add(loanArray[index + 2]);
        rowCols[2].textContent = loanArray[index + 2];

        rowCols[3].classList.add(loanArray[index + 3]);
        rowCols[3].textContent = loanArray[index + 3];

        rowCols[4].classList.add(loanArray[index + 4]);
        rowCols[4].textContent = loanArray[index + 4];

        tableBody.appendChild(tableRow);
    }

}