import java.util.ArrayList;
import java.util.List;
import java.io.*;

class CreditAccount implements Account{

    private String name;
    private String surname;
    private int id;
    private List<Account> accountList;

    public CreditAccount( String name, String surname, int id ){
        this.name = name;
        this.surname = surname;
        this.id = id;
    }

    public int getCredit(){
        return -100;
    }

    public int accept( Client c ){
        return c.check( this );
    }

}