const balance = document.getElementById("balance");
const income = document.getElementById("money-plus");
const expense = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

if (localStorageTransactions !== null) {
  transactions = [...localStorageTransactions];
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  const { id, text, amount } = transaction;
  const sign = amount < 0 ? "-" : "+";

  const li = document.createElement("li");
  li.classList.add(`${amount > 0 ? "plus" : "minus"}`);
  li.innerHTML = `${text} <span>${sign}$${Math.abs(
    amount
  )}</span><button class="delete-btn" onclick="removeTransaction(${id})">x</button>`;

  list.appendChild(li);
}

// Init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);

  updateBalances();
}

// Update the balance, income and expense
function updateBalances() {
  let inc = 0;
  let exp = 0;
  let total = 0;

  transactions.forEach(({ amount }) => {
    if (amount > 0) {
      inc += amount;
    } else {
      exp += amount;
    }
    total += amount;
  });

  inc = inc.toFixed(2);
  exp = Math.abs(exp).toFixed(2);
  const sign = total < 0 ? "-" : "+";
  total = (total < 0 ? Math.abs(total) : total).toFixed(2);

  income.textContent = `+$${inc}`;
  expense.textContent = `-$${exp}`;
  balance.textContent = `${sign}$${total}`;
}

// Generate random ID
function generateId() {
  return Math.floor(Math.random() * 1000);
}

// Add transaction
function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() !== "" && amount.value !== "") {
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: Number(amount.value),
    };

    text.value = "";
    amount.value = "";

    transactions.push(transaction);

    addTransactionDOM(transaction);
    updateBalances();

    updateLocalStorage();
  } else {
    console.log("Please add a text and amount");
  }
}

// Remove transactions bu ID
function removeTransaction(id) {
  const updateTransactions = transactions.filter(
    (transaction) => id !== transaction.id
  );

  transactions = [...updateTransactions];

  updateLocalStorage();
  init();
}

// Update localStorageTransactions
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

init();

form.addEventListener("submit", addTransaction);
