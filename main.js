import inquirer from "inquirer";
//Account details:
let myBalance = 15000; //Dollar
let myPin = 1345;
// Show current balance:
console.log(`Your Current Balnance is:${myBalance}`);
// For Pin:
const pin = await inquirer.prompt([
    {
        name: 'pin',
        type: 'number',
        message: 'Enter Your Pin Code'
    },
]);
//condition for Pin Code:
if (pin.pin === myPin) {
    console.log(`Correct Pin Code`);
}
else {
    console.log(`Incorrect Pin Code`);
}
