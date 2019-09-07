// Before
class Line{

	public void draw( int left, int top, int right, int bottom ){
		System.out.println( "Line dimensions : " + left + " " +  top +  " " + right + " " + bottom );
	}
}

class Rectangle{

	public void draw( int x, int y, int width, int height ){

		System.out.println("Rectangle with coordinate left-down point (" + x + ";" + y + "), width: " + width
                + ", height: " + height);
	}
}

public class withoutAdapterDesignPattern{

	public static void main( String args[]){

		Object[] shapes = { new Line(), new Rectangle() };
		int x1 = 10, y1 = 20, x2 = 30, y2 = 60, width = 40, height = 40;

		for( Object shape : shapes){
			if( shapes.getClass().getShortName().equals("Line") ){
				((Line)shape).draw( x1,y1,x2,y2 );
			}
			else if( shapes.getClass().getShortName().equals()){
				((Rectangle)shape.draw(x1,y1,width,height));
			}
		}
	}
}

//After Adapter

interface Shape{
	void draw( int x, int y, int x1, int y2);
}

class Line{

	public void draw( int left, int top, int right, int bottom ){
		System.out.println( "Line dimensions : " + left + " " +  top +  " " + right + " " + bottom );
	}
}

class Rectangle{

	public void draw( int x, int y, int width, int height ){

		System.out.println("Rectangle with coordinate left-down point (" + x + ";" + y + "), width: " + width
                + ", height: " + height);
	}
}

class LineAdapter implements Shape{
	private Line adaptee;

	public LineAdapter ( Line anyLine ){
		this.adaptee = anyLine;
	}

	@Override
    public void draw(int x1, int y1, int x2, int y2) {
        adaptee.draw(x1, y1, x2, y2);
    }
}

class RectangleAdapter implements Shape {
    private Rectangle adaptee;

    public RectangleAdapter(Rectangle rectangle) {
        this.adaptee = rectangle;
    }

    @Override
    public void draw(int x1, int y1, int x2, int y2) {
        int x = Math.min(x1, x2);
        int y = Math.min(y1, y2);
        int width = Math.abs(x2 - x1);
        int height = Math.abs(y2 - y1);
        adaptee.draw(x, y, width, height);
    }
}

public class withAdapterDesignPattern{
	public static void main( String args[] ){
		Shape[] shapes = { new RectangleAdapter( new Rectangle() ),  
						   new LineAdapter( new Line() ) };

		int x1 = 10, y1 = 20;
        int x2 = 30, y2 = 60;

        for (Shape shape : shapes) {
            shape.draw(x1, y1, x2, y2);
        }

	}
}