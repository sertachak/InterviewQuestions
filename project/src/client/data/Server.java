package data;

import java.awt.Color;
import java.io.*;
import java.util.*;
import java.net.*;
import javax.crypto.*;

public class Server{

private final ArrayBlockingQueue<String> clientMessages;
private final Map<InetAddress, ClientConnections> clients;
private ServerSocket as serSoc;

private final MAX_MESSAGE_QUEUE_SIZE_LIMIT = 150;

public Server(){

	clientMessages = new ArrayBlockingQueue<String>( MAX_MESSAGE_QUEUE_SIZE_LIMIT );

	try{
		serSoc = new ServerSocket( 5571 ); // port number
	} catch(IOExeption e){
		e.printStackTrace();
	}


	/* Listen all new connections until there are too many of them
	TODO: drop connections according to occupied data 
	start listening again afterward
}

}