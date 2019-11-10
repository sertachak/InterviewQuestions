import javax.swing.*;
import java.awt.*;
import java.net.*;
class greetingScreen extends JPanel{
    public static void main(String args[]){
      JFrame frame = new JFrame("Java Update - Update Available");
      frame.setResizable(false);
      frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      frame.setBounds(100, 100, 500, 400);
      
      JPanel start = new JPanel();
      start.setBackground(new Color(245, 245, 220));
      start.setLayout(null);
      start.setBounds(0, 0, 500, 400);
    
    JLabel javaLogo = new JLabel(new ImageIcon(getClass().getResource("/javaLogo.jpg")));
    javaLogo.setBackground(Color.RED);
    javaLogo.setBounds(0, 0, 500, 55);
    start.add(javaLogo);
    
    //JButton acceptButton = new JButton("Install >");
    //acceptButton.setBounds(390, 330, 90, 25);
    /*acceptButton.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent e)
      {
 
      }
    });*/
    //start.add(acceptButton);
    
    //JButton cancelButton = new JButton("Cancel");
    //cancelButton.setBounds(290, 330, 90, 25);
    /*cancelButton.addActionListener(new ActionListener()
    {

    });*/
    //start.add(cancelButton);
    
    /*JLabel welcomeLabel = new JLabel("Welcome to Java");
    welcomeLabel.setHorizontalAlignment(SwingConstants.CENTER);
    welcomeLabel.setFont(new Font("Tahoma", Font.BOLD, 18));
    welcomeLabel.setBounds(0, 55, 500, 45);
    start.add(welcomeLabel);
    
    JSeparator separator = new JSeparator();
    separator.setBounds(0, 320, 500, 2);
    start.add(separator);
    
    JPanel backdrop = new JPanel();
    backdrop.setBackground(Color.WHITE);
    backdrop.setBounds(0, 100, 500, 220);
    start.add(backdrop);
    backdrop.setLayout(null);
    
    JButton clickHere = new JButton("<html><font color='000099'><U>Click here</U></font></html>");
    clickHere.setLocation(59, 117);
    clickHere.setSize(100, 20);
    clickHere.setHorizontalAlignment(SwingConstants.LEFT);
    clickHere.setFont(new Font("Tahoma", Font.PLAIN, 14));
    clickHere.setOpaque(false);
    clickHere.setBorderPainted(false);
    clickHere.setBackground(Color.WHITE);
    /*clickHere.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {

    }});*/
    
    /*JButton licenseAgreement = new JButton("<html><font color='000099'><U>license agreement</U></font></html>");
    licenseAgreement.setHorizontalAlignment(SwingConstants.LEFT);
    licenseAgreement.setFont(new Font("Tahoma", Font.PLAIN, 14));
    licenseAgreement.setBounds(193, 168, 150, 20);
    licenseAgreement.setOpaque(false);
    licenseAgreement.setBorderPainted(false);
    licenseAgreement.setBackground(Color.WHITE);
    /*licenseAgreement.addActionListener(new ActionListener() {
      public void actionPerformed(ActionEvent e) {
        try {

        } catch (URISyntaxException e1) {
          e1.printStackTrace();
        }
      }
    });*/
    
    /*JLabel bodyText = new JLabel("<html><center>" +
            "<br>" +
            "Java provides safe and secure access to the world of amazing Java content.<br>" +
            "From business solutions to helpful utilities and entertainment, " +
            "Java makes your internet experience come to life<br>" +
            "<br>" +
            "<br>" +
            "Note: No personal information is gathered as part of our install process.<br>" +
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            " for more information on what we do collect.<br>" +
            "<br>" +
            "<br>" +
            "Click Install to accept the " + 
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
            "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
            " and install Java now.<br>" +
            "<br>" +
            "</center></html>");
    bodyText.setBounds(0, 0, 500, 220);
    backdrop.add(bodyText);
    bodyText.setFont(new Font("Tahoma", Font.PLAIN, 14));
    bodyText.setHorizontalAlignment(SwingConstants.CENTER);
    bodyText.setVerticalAlignment(SwingConstants.TOP);
    backdrop.add(clickHere);
    backdrop.add(licenseAgreement);*/
    frame.setContentPane( start );
    frame.setVisible(true);
  }
}