document.getElementById('num-friends').addEventListener('input', function () {
    const numFriends = parseInt(this.value);
    const friendInputsDiv = document.getElementById('friend-inputs');
    friendInputsDiv.innerHTML = ''; // Clear existing inputs

    for (let i = 1; i <= numFriends; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Friend ${i} Name`;
        input.className = 'friend-name';
        friendInputsDiv.appendChild(input);
    }
});

document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const numFriends = parseInt(document.getElementById('num-friends').value);

    // Get friend names
    const friendInputs = document.querySelectorAll('.friend-name');
    const friendNames = Array.from(friendInputs).map(input => input.value.trim()).filter(name => name);

    if (expenseName && !isNaN(expenseAmount) && expenseAmount > 0 && numFriends > 0 && friendNames.length === numFriends) {
        // Store the expense in localStorage
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push({
            name: expenseName,
            amount: expenseAmount,
            friends: friendNames
        });
        localStorage.setItem('expenses', JSON.stringify(expenses));

        // Clear input fields
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
        document.getElementById('num-friends').value = '';
        friendInputs.forEach(input => input.value = '');
    } else {
        alert('Please enter valid expense name, amount, number of friends, and their names.');
    }
});

// Function to navigate to the view expenses page
function navigateToView() {
    window.location.href = 'view.html';
}
