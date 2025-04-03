const button1 = document.getElementById("Button1")
let results = document.getElementById("results")

const loanAmount = document.getElementById("loanAmount")
const downPayment = document.getElementById("downPayment")
const loanTerm = document.getElementById("loanTerm")

button1.addEventListener('click', function() {
    let loanAmountValue = parseFloat(loanAmount.value) - parseFloat(downPayment.value)
    let loanTermValue = parseInt(loanTerm.value)

    if (loanTermValue !== 15 && loanTermValue !== 30) {
        alert("Loan term is not 15 or 30")
        return;
    }

    let interestRate = 0.0575
    let monthlyRate = interestRate / 12

    let monthlyPay = (loanAmountValue*monthlyRate)/(1 - Math.pow(1 + monthlyRate, - loanTermValue * 12))
    monthlyPay = parseFloat(monthlyPay.toFixed(2))


    results.appendChild(createP("Mortgage term in years: " + loanTermValue))
    results.appendChild(createP("Mortgage interest rate: 5.75%"))
    results.appendChild(createP("Monthly payment: " + monthlyPay.toFixed(2)))

    let totalInterestPaid = 0
    let loanBalance = loanAmountValue

    for (let i = 0; i <= loanTermValue * 12; i++) {
        let interestPaid = loanBalance * monthlyRate
        let principalPaid = monthlyPay - interestPaid

        loanBalance -= principalPaid
        totalInterestPaid += interestPaid
        results.appendChild(createP(`Month ${i + 1}: Remaining balance: ${loanBalance.toFixed(2)}`))

        if (loanBalance <= 0) {
            results.appendChild(createP("Ending, no more payments! (balance is 0)"))
            break;
        }
    }

    results.appendChild(createP("Total interest paid: " + totalInterestPaid.toFixed(2)))
    results.appendChild(createP("Total mortgage paid: " + (loanAmountValue + totalInterestPaid).toFixed(2)))
})

function createP(text) {
    let newP = document.createElement("p")
    newP.textContent = text
    return newP;
}