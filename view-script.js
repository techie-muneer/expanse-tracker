document.addEventListener('DOMContentLoaded', function () {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expensesList = document.getElementById('expenses');
    const totalAmountElement = document.getElementById('total-amount');
    const splitDetails = document.getElementById('split-details');

    let totalAmount = 0;

    expenses.forEach(expense => {
        const expenseItem = document.createElement('li');
        expenseItem.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
        expensesList.appendChild(expenseItem);

        // Update the total amount
        totalAmount += expense.amount;

        // Display split cost per friend
        const splitAmount = (expense.amount / expense.friends.length).toFixed(2);
        expense.friends.forEach(friend => {
            const splitItem = document.createElement('li');
            splitItem.textContent = `${friend} should pay: $${splitAmount}`;
            splitDetails.appendChild(splitItem);
        });
    });

    // Display total amount
    totalAmountElement.textContent = totalAmount.toFixed(2);
});

// Function to navigate to the add expense page
function navigateToAdd() {
    window.location.href = 'index.html';
}
