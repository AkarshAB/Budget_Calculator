

function addIncome() {
  incomeSources = incomeSource.value
  incomeAmounts = incomeAmount.value
  amounts = document.getElementById('amounts').innerHTML

  if (incomeSources == "" || incomeAmounts == 0) {
    alert('Enter Details');
  }

  else {
    var tabledata = `<tr>
  <td>${incomeSources}</td>
  <td>${incomeAmounts}</td>
  </tr>`

    document.getElementById('table1').innerHTML += tabledata;
    // actualSavings = Number (amounts) + Number (incomeAmounts);
    
    // console.log(actualSavings);

    document.getElementById('amounts').innerHTML = Number(amounts) + Number(incomeAmounts);

    container_1.innerHTML = `<label for="" class="income pb-1">Enter Income Source</label>
    <input type="text" class="form-control" id="incomeSource">
    <label for="" class="income pb-1">Enter Amount</label>
    <input type="number" class="form-control" id="incomeAmount">
    <div class="text-center mt-2">
    <button type="reset" class="btn btn-sm btn-success mt-2" onclick="addIncome()">Add Income</button>`
    incomeAmount.innerHTML = ``

  }
  
}

function addExpense() {
  expenseSources = expenseSource.value
  expenseAmounts = expenseAmount.value
  amounts = document.getElementById('amounts').innerHTML

  if (expenseSources == "" || expenseAmounts == 0) {
    alert('Enter Details');
  }

  else {
    var tableData = `<tr class = "tabledetails">
  <td>${expenseSources}</td>
  <td>${expenseAmounts}</td>
  </tr>`

    document.getElementById('table2').innerHTML += tableData

    document.getElementById('amounts').innerHTML = Number(amounts) - Number(expenseAmounts);

    container_2.innerHTML = `<label for="" class="expense pb-1">Enter Expense Source</label>
    <input type="text" class="form-control" id="expenseSource">
    <label for="" class="expense pb-1">Enter Amount</label>
    <input type="number" class="form-control" id="expenseAmount">
    <div class="text-center mt-3">
      <button type="reset" class="btn btn-sm btn-danger" onclick="addExpense()">Add Expense</button>`
  }
}

function deleteTableData(){


  document.getElementById('table1').innerHTML = `<div class="incomeTable pt-1">
  <table class="mt-3 ms-3" id="table1">
    <thead>
      <th class="income" style="width: 15rem;">Income Source</th>
      <th class="income">Amount</th>
    </thead>
   
     
  </table>`;

  document.getElementById('table2').innerHTML = `<div class="expenseTable pt-1">
  <table class="mt-3 ms-3" id="table2">
    <thead class="">
      <th class="expense" style="width: 15rem;">Expense Source</th>
      <th class="expense">Amount</th>
    </thead>
  </table>`;

  document.getElementById('amounts').innerHTML = '0'




}

function logout(){
  window.location ='./index.html'
}