class ClientInformation implements Client{

    public int check( CashAccount cashAccount ){
        return cashAccount.getCash();
    }

    public int check( CreditAccount creditAccount ){
        return creditAccount.getCredit();
    }

    public int check( LoanAccount loanAccount ){
        return loanAccount.getLoan();
    }
}