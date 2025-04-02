const button1 = document.getElementById("Button1")
let results = document.getElementById("results")

const loanAmount = document.getElementById("loanAmount")
const downPayment = document.getElementById("downPayment")
const loanTerm = document.getElementById("loanTerm")


button1.addEventListener('click', function(){
    loanAmount.value.toFixed(2)
    downPayment.value.toFixed(2)
    let monthlyPay = ((0.0557/12) * loanAmount) / (1-Math.pow(1 + (0.0575/12), (loanTerm * -12))).toFixed(2)
    if (loanTerm != 15 || loanTerm != 30){
        alert("Loan term is not 15 or 30")
    }


    let loanP = document.createElement("p")
    loanP.textContent = "Mortgage term in years: " + loanTerm.value
    results.appendChild(loanP)

    let rateP = document.createElement("p")
    rateP.textContent = "Mortgage interest rate: 5.75%"
    results.appendChild(rateP)

    let mortgageAmP = document.createElement("p")
    let mortgageAmount = loanAmount + loanAmount * 1.0575
    mortgageAmP.textContent = mortgageAmount
    results.appendChild(mortagageAmP)

    let interestAmP = document.createElement("p")
    let interestAmount = (monthlyPay * loanTerm*12) - loanAmount
    interestAmP.textContent = interestAmount
    results.appendChild(interestAmP)

    let totMortgageAmP = document.createElement("p")
    let totalMortgage = loanAmount + interestAmount
    totMortgageAmP.textContent = totalMortgage
    results.appendChild(totMortgageAmP)

    let monthlyLoanBalaP = document.createElement("p")
    let loanBalance = totalMortgage - monthlyPay
    monthlyLoanBalaP.textContent = loanBalance
    results.appendChild(monthlyLoanBalaP)
    
    for (let i=0; i <loanTerm; i++ ){
        let interesttt = (loanAmount * .0575) /12
        let principal = monthlyPay - interesttt
        

    }

    if(monthlyLoanBalaP == 0){
        results.textContent = "Ending no more payments (balance is 0)"
    }
})