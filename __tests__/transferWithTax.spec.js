import { Account } from '../account.js';
import { transferWithTax } from '../transferWithTax.js';

describe("transfer with taxes", () => {
    test('it should charge 5% tax if transferAmount is >= 1000', () => {
        const payerAccount = new Account(1, 3000)
        const receiverAccount = new Account(2, 500)
        const updatedAccounts = transferWithTax(payerAccount, receiverAccount, 1000)
        expect(updatedAccounts).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ id: 1, balance: 1850 }),
                expect.objectContaining({ id: 2, balance: 1500 })
            ])
        )
    })
    test('it should charge 10% tax if transferAmount is >= 5000', () => {
        const payerAccount = new Account(1, 8000)
        const receiverAccount = new Account(2, 500)
        const updatedAccounts = transferWithTax(payerAccount, receiverAccount, 5000)
        expect(updatedAccounts).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ id: 1, balance: 2400 }),
                expect.objectContaining({ id: 2, balance: 5500 })
            ])
        )
    })
    test("should throw error if transfer amount is < 1000", () =>{
        const payerAccount = new Account(1, 3000)
        const receiverAccount = new Account(2, 500)
        expect(() => transferWithTax(payerAccount, receiverAccount, 999)).toThrow(Error);
    })
    test("should throw error if transfer amount is >= 10000", () =>{
        const payerAccount = new Account(1, 30000)
        const receiverAccount = new Account(2, 500)
        expect(() => transferWithTax(payerAccount, receiverAccount, 12000)).toThrowError(/Valor inválido/);
    })
    test("should throw error if balance is insufficient", () =>{
        const payerAccount = new Account(1, 4000)
        const receiverAccount = new Account(2, 500)
        expect(() => transferWithTax(payerAccount, receiverAccount, 5000)).toThrowError(/Saldo Insuficiente/);
    })
});