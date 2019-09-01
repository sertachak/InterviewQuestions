public class Main {
    
    public static void main( String[] args ) {
    CashAccount cashAccount = new CashAccount( "Jack", "Greed", 1 );
    CreditAccount creditAccount = new CreditAccount("Jack", "Greed", 1);
    LoanAccount loanAccount = new LoanAccount("Jack", "Greed", 1);
    Account [] accounts = { cashAccount, creditAccount, loanAccount };

    ClientInformation clientInformation = new ClientInformation();

    for( Account account : accounts ){
        System.out.println( account.accept( clientInformation ) );
    }

  }
}