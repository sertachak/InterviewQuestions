interface Bridge{
  abstract public void useBridgeFunction();
}

class Hardware implements Bridge{
  @Override
  public void useBridgeFunction(){
    System.out.println("Hardware using by bridge!!");
  }
}

class Printer implements Bridge{
  @Override
  public void useBridgeFunction(){
    System.out.println("Printer using by bridge!!");
  }
}

abstract class Software{
  protected Bridge bridge1;
  protected Bridge bridge2;

  protected Software(Bridge bridge1, Bridge bridge2){
    this.bridge1 = bridge1;
    this.bridge2 = bridge2;
  }
  abstract public void deliverSoftwareInfo();
}

class Software1 extends Software{
  public Software1(Bridge bridge1, Bridge bridge2){
    super(bridge1, bridge2);
  }

  @Override
  public void deliverSoftwareInfo(){
    System.out.println("Software1");
    bridge1.useBridgeFunction();
    bridge2.useBridgeFunction();
  }
}


class Software2 extends Software{
  public Software2(Bridge bridge1, Bridge bridge2){
    super(bridge1, bridge2);
  }

  @Override
  public void deliverSoftwareInfo(){
    System.out.println("Software2");
    bridge1.useBridgeFunction();
    bridge2.useBridgeFunction();
  }
}
class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    Software first = new Software1( new Hardware(), new Printer());
    first.deliverSoftwareInfo();
    Software second = new Software2( new Hardware(), new Printer());
    second.deliverSoftwareInfo();


  }
}