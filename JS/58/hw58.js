// Q1
(function () {
    'use strict';
    function createAccount() {
        return {
            balance: 0,

            performTransaction: function (tran) {
                this.balance = tran + this.balance;

            }
        };
    }
    const checkingAccount = createAccount();
    const savingsAccount = createAccount();


    checkingAccount.performTransaction(120);
    console.log(checkingAccount.balance);

    savingsAccount.performTransaction(57777777777);
    console.log(savingsAccount.balance);



})();

// Q2
(function () {
    'use strict';
    function createAccount() {
        return {
            balance: 0,

        };
    }
    const checking = createAccount();
    const savings = createAccount();
    const acc5 = {
        balance: 0,

    };


    function transaction(trans) {
        this.balance = trans + this.balance;

    }
    transaction.call(savings, 6778);
    console.log(savings.balance);
    transaction.call(checking, 7888);
    console.log(checking.balance);

    transaction.apply(savings, [56]);
    console.log(savings.balance);

    transaction.apply(checking, [59]);
    console.log(checking.balance);

    const acctTrans = transaction.bind(acc5);
    acctTrans(1567);
    console.log(acc5.balance);








})();



