import { Account } from './account.js';

export function transferWithTax(payer, receiver, transferAmount) {
    const payerAccountAfterTransfer = new Account(payer.id, chargeTaxForTransfer(payer.balance, validateValues(transferAmount)));
    const receiverAccountAfterTransfer = new Account(receiver.id, receiver.balance + transferAmount);

    return [payerAccountAfterTransfer, receiverAccountAfterTransfer];
}

function validateValues(transferAmount) {
    if (transferAmount < 1000 || transferAmount > 9999) {
        throw new Error('Valor inválido')
    } 
    else {
        return transferAmount;
    }
}

function chargeTaxForTransfer(balance, transferAmount) {
    const minTax = 100;
    let floatTax = 1.0
    if (transferAmount >= 1000 && transferAmount < 5000){
        floatTax = 1.05
    } else {
        floatTax = 1.10
    }
    const amountWithTax =(transferAmount*floatTax) + minTax;
    
    if (amountWithTax >= balance){
        throw new Error('Saldo Insuficiente')
    }
    return balance - amountWithTax;
}