class ThreadMultEx1 implements Runnable{
    private Thread t;
    private String threadName;

    ThreadMultEx1 ( String name ){
        threadName = name;
        System.out.println("Creating" + threadName );
    }

    public void run(){
       System.out.println("Running" + threadName ); 

       try {
            for(int i = 4; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", " + i);
                // Let the thread sleep for a while.
                Thread.sleep(50);
            }
       }catch ( InterruptedException  e ){
           System.out.println("Thread " +  threadName + " interrupted.");
       }
       System.out.println("Thread " +  threadName + " exiting.");
    }

    public void start(){
        if (t==null) {
            t = new Thread (this, threadName );
            t.start();
        }
    }

}

public class ThreadMultEx {

   public static void main(String args[]) {
      ThreadMultEx1 R1 = new ThreadMultEx1( "Thread-1");
      R1.start();
      
      ThreadMultEx1 R2 = new ThreadMultEx1( "Thread-2");
      R2.start();
   }   
}