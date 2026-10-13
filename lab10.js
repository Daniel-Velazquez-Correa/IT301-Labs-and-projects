let value;
let message = 'Please enter the total restaurant bill: ';
do {
    value = Number(prompt(message));
    if(value == 0) {
        message = 'Please enter a value greater than 0: ';
    } else if(value < 0) {
        message = 'Negative amounts are not allowed. Please enter a valid bill amount.';
    } else if(Number.isNaN(value)) {
        message = 'Invalid input. Please enter a numeric bill amount.';
    }
} while(Number.isNaN(value) || value <= 0);

document.write(`For the bill of \$${value}, the tip should be \$${value * .10}`);
