import inquirer from "inquirer";
//Account details:
let myBalance = 15000; //Dollar
let myPin = 1345;
// Show current balance:
console.log(`Your Current Balnance is:${myBalance}`);
// check Pin:
const pin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Code"
    },
]);
//condition for Pin Code:
if (pin.pin === myPin) {
    console.log(`Correct Pin Code`);
    // For tranzaction:
    let tranzaction = await inquirer.prompt([
        {
            name: "tranzaction",
            type: "list",
            message: " WelCome to the ATM,Select your way to transaction",
            choices: ["withdraw", "deposit", "fastcash", "check balance", "exit"],
        },
    ]);
    //for withdraw:
    if (tranzaction.tranzaction === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Your amount",
            },
        ]);
        if (amount.amount <= myBalance) {
            myBalance -= amount.amount;
            console.log(`Withdrawn: ${amount.amount}`);
            console.log(`Your Reamaining Balance is: ${myBalance}`);
        }
        else {
            console.log("Insuficient Balance");
        }
    }
    //for deposit:
    if (tranzaction.tranzaction === "deposit") {
        let deposit = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "Enter the Amount you want to deposit",
            },
        ]);
        if (deposit.deposit > 0) {
            myBalance += deposit.deposit;
            console.log(`Amount You deposited : ${deposit.deposit}`);
            console.log(`Updated Amount : ${myBalance}`);
        }
        else {
            console.log("Invalid Amount");
        }
    }
    // for fastCash:
    if (tranzaction.tranzaction === "fastcash") {
        let withdraw = await inquirer.prompt([
            {
                name: 'withdraw',
                type: 'list',
                message: 'Select the Amount',
                choices: ['1000', '1500', '2000', '2500', '3000', '3500', '4000']
            },
        ]);
        if (withdraw.withdraw <= myBalance) {
            myBalance -= withdraw.withdraw;
            console.log("remaianing balance", myBalance);
        }
    }
    //for check balance:
    if (tranzaction.tranzaction === "check balance") {
        console.log(`Your Balance is: ${myBalance}`);
    }
    if (tranzaction.tranzaction === "exit") {
        console.log("Thanks For Choosing");
    }
}
else {
    console.log(`Incorrect Pin Code`);
}
