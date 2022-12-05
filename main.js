import "./src/styles/style.css"
import createTransaction from "./src/components/createTransaction"

const form = document.querySelector(".transactions-form")
const ul = document.querySelector(".all-transactions")

const balance = document.querySelector(".current-balance")
const incomes = document.querySelector(".incomes-value")
const expenses = document.querySelector(".expenses-value")

let currentBalance = Number(balance.textContent)
let currentIncomes = 0
let currentExpenses = 0

form.onsubmit = (event) => {
  event.preventDefault()

  const transactionName = event.target[0]
  let transactionValue = Number(event.target[1].value).toFixed(2)
  const monetaryValueAndColor = monetaryAndColor(transactionValue)

  ul.append(
    createTransaction(
      transactionName.value,
      transactionValue,
      monetaryValueAndColor
    )
  )

  if (transactionValue < 0) {
    currentBalance = currentBalance - Number(transactionValue) * -1
    currentExpenses = currentExpenses - transactionValue

    balance.innerHTML = currentBalance.toFixed(2)
    expenses.innerHTML = currentExpenses.toFixed(2)
  } else if (transactionValue > 0) {
    currentBalance = currentBalance + Number(transactionValue)
    currentIncomes = currentIncomes + Number(transactionValue)

    balance.innerHTML = currentBalance.toFixed(2)
    incomes.innerHTML = currentIncomes.toFixed(2)
  }

  form.reset()
  transactionName.focus()
}

function monetaryAndColor(value) {
  let monetary = "+ R$ "
  let color = "5px solid #2ecc71"

  if (value < 0) {
    monetary = "- R$ "
    color = "5px solid #c0392b"

    const monetaryAndColor = [monetary, color]
    return monetaryAndColor
  }

  const monetaryAndColor = [monetary, color]
  return monetaryAndColor
}

ul.onclick = (event) => {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove()
    const transactionValue =
      event.path[1].firstElementChild.childNodes[1].firstChild.data.split(
        " "
      )[3]

    if (transactionValue < 0) {
      currentBalance = currentBalance + transactionValue * -1
      currentExpenses = currentExpenses + Number(transactionValue)

      balance.innerHTML = currentBalance.toFixed(2)
      expenses.innerHTML = currentExpenses.toFixed(2)
    } else if (transactionValue > 0) {
      currentBalance = currentBalance - transactionValue
      currentIncomes = currentIncomes - transactionValue

      balance.innerHTML = currentBalance.toFixed(2)
      incomes.innerHTML = currentIncomes.toFixed(2)
    }
  }
}
