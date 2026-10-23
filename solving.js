const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by spaces (e.g., 1 2 0 -1): ', (input) => {
    // Convert the user's text input into an array of numbers
    const nums = input.trim().split(/\s+/).map(Number);

    // Find the smallest missing positive integer
    let number = 1;
    while (nums.includes(number)) {
        number++;
    }

    console.log(`The smallest missing positive number is: ${number}`);
    
    rl.close();
});