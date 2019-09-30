package data;

import java.awt.Color;
import java.io.*;
import java.util.*;
import java.net.*;
import javax.crypto.*;

public class Server{

private final ArrayBlockingQueue<String> clientMessages;
private final Map<InetAddress, TargetConection> targetMap;
private ServerSocket as serSoc;

private static final MAX_CONNECTION_SIZE = 10;
private static final MAX_WAITING = 30;
private static final MAX_MESSAGE_QUEUE_SIZE_LIMIT = 150;
private static final SERVER_NAME = '';

	public Server(){

		clientMessages = new ArrayBlockingQueue<String>( MAX_MESSAGE_QUEUE_SIZE_LIMIT );
		targetMap = new HashMap<InetAddress, TargetConection>();

		try{
			serSoc = new ServerSocket( 5571 ); // port number when running a server choose a port that not already dedicated to some other service. 
			//A new socket should be connected to serverSocket to listen server.
		} catch(IOExeption e){
			e.printStackTrace();
		}


		// Socket Represents the client side  serverSocket represents the server side
		/* Listen all new connections until there are too many of them
		TODO: drop connections according to occupied data 
		start listening again afterward*/

		Thread processMes = new Thread(){
			@Override
			public void run(){
				while( true ){
					try{
						String message = clientMessages.take();
						System.out.println( message );
					}catch( InterruptedException e ){
						e.printStackTrace();
					}
				}
			}
		}

		Thread connectionWithProtection = new Thread(){
			@Override
			public void run(){
				while ( activeConnections < MAX_CONNECTION_SIZE ){
					try{
						Socket soc = serSoc.accept();
						TargetConection target = new TargetConection(GREEN, Server.this, soc );
						targetMap.put( InetAddress.getByName(SERVER_NAME),target )
					}catch(IOExeption e){
						e.printStackTrace();
					}
				}
			}
		}
		connectionWithProtection.start();
		processMes.start();

	}

	private Set<TargetConection> activeConnections(){
		// not need to synchronize set because it only used by one of the treads. TODO// do not forget to set it a treadSafe form if want to use again.
		Set<TargetConection> activeConnections = new HashSet<TargetConection>();
		// done connections added to targets
		for( Map.Entry connection : targetMap.entrySet() ){
			if( connection.getValue().status == GREEN ){
				activeConnections.add( c );
			}
		}

		return activeConnections;
	}


}