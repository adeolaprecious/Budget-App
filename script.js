let balance = 10000;
const transactionList = document.getElementById('transactionList');
const balanceElement = document.getElementById('balance');

function addTransaction() {
  const transactionInput = document.getElementById('transaction');
  const amountInput = document.getElementById('amount');

  const transaction = transactionInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (amount > balance){
    alert("you have reached your limit")

    }else if
     (transaction !== '' && !isNaN(amount)) {
    balance -= amount;
    updateBalance();
    addTransactionToList(transaction, amount);
    clearInput();
  } 
  else {
    alert('Please enter a valid transaction and amount.');
  }
}

function updateBalance() {
  balanceElement.textContent = balance.toFixed(2);
}

function addTransactionToList(transaction, amount) {
  const listItem = document.createElement('li');
  listItem.textContent = `${transaction}: $${amount.toFixed(2)}`;
  transactionList.appendChild(listItem);
}

// function clearInput() {
//   document.getElementById('transaction').value = '';
//   document.getElementById('amount').value = '';
// }

// updateBalance();
