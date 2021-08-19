// // handle deposit button event
// document.getElementById('deposit-button').addEventListener('click', function () {
//     // get the amount deposited
//     const depositInput = document.getElementById('deposit-input');
//     const newDepositAmountText = depositInput.value;
//     const newDepositAmount = parseFloat(newDepositAmountText);

//     // update deposit total
//     const depositTotal = document.getElementById('deposit-total');
//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText);
//     const newDepositTotal = previousDepositAmount + newDepositAmount;

//     depositTotal.innerText = newDepositTotal;

//     // update account balance
//     const balanceTotal = document.getElementById('balance-total');
//     const balanceTotalText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balanceTotal.innerText = newBalanceTotal;
//     // clear the deposit input field
//     depositInput.value = '';
// });

// // handle withdraw event handler
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawAmountText = withdrawInput.value;
//     const newWithdrawAmount = parseFloat(withdrawAmountText);
//     console.log(newWithdrawAmount);

//     // set withdraw total
//     const withdrawTotal = document.getElementById('withdraw-total');
//     const previousWithdrawText = withdrawTotal.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawText);

//     const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     withdrawTotal.innerText = newWithdrawTotal;

//     // update balance
//     const balanceTotal = document.getElementById('balance-total');
//     const previousBalanceText = balanceTotal.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceText);
//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

//     balanceTotal.innerText = newBalanceTotal;

//     // clear withdraw input
//     withdrawInput.value = '';
// })

// code from Atik starts from here

let depositTotal = document.getElementById("deposit-total");
let depositInput = document.getElementById("deposit-input");
let depositButton = document.getElementById("deposit-button");
let balanceTotal = document.getElementById("balance-total");

depositButton.addEventListener("click", function () {
  let depositAmmount = parseFloat(depositTotal.innerText);
  if (depositInput.value != "" && depositInput.value >= 0) {
    depositTotal.innerText = parseFloat(depositInput.value) + depositAmmount;
    balanceTotal.innerText =
      parseFloat(balanceTotal.innerText) + parseFloat(depositInput.value);
  } else {
    console.log("provide Valid amount");
  }
  depositInput.value = "";
});

// withdraw system function
let withdrawTotal = document.getElementById("withdraw-total");
let withdrawInput = document.getElementById("withdraw-input");
let withdrawButton = document.getElementById("withdraw-button");

withdrawButton.addEventListener("click", function () {
  let withdrawAmmount = parseFloat(withdrawTotal.innerText);
  if (withdrawInput.value != "" && withdrawInput.value >= 0) {
    if (
      parseFloat(balanceTotal.innerText) - parseFloat(withdrawInput.value) >=
      0
    ) {
      withdrawTotal.innerText =
        withdrawAmmount + parseFloat(withdrawInput.value);
      balanceTotal.innerText =
        parseFloat(balanceTotal.innerText) - parseFloat(withdrawInput.value);
    } else {
      console.log("not enough money");
    }
  } else {
    console.log("Provide valid ammount");
  }
  withdrawInput.value = "";
});
