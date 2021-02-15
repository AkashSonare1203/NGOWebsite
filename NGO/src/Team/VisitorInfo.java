package Team;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.sql.Driver;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.Consumes;
import javax.ws.rs.core.Application;

@Path("/hello")
public class VisitorInfo {

		@Path("/post")
		@POST
		@Consumes(MediaType.APPLICATION_JSON)
		@Produces(MediaType.TEXT_PLAIN)
		public String createUser(Visitor m )
		{
			Statement stmt=null;
			//System.out.println("HIII");
			//System.out.println("hello "+m.getFirstName()+" "+m.getLastName());
			try {
				System.out.println("+++");
				Class.forName("com.mysql.jdbc.Driver");
				System.out.println("Connecting to database");
				Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/name","root","akash");
				System.out.println("Connected");
				System.out.println("Inserting records into tables");
				String sql="INSERT INTO rep (firstname,lastname,contact,address,pin,email) "+"VALUES (?,?,?,?,?,?)";
				PreparedStatement preparedStmt = conn.prepareStatement(sql);
			     preparedStmt.setString (1, m.getFirstName());
			     preparedStmt.setString (2, m.getLastName());
			     preparedStmt.setString (3, m.getContact());
			     preparedStmt.setString (4, m.getAddress());
			     preparedStmt.setString (5, m.getPin());
			     preparedStmt.setString (6, m.getEmail());
			     preparedStmt.execute();
			    }
			catch (Exception e){
				System.out.println(e);
				System.out.println("HIII");
				String x="f"+e.getMessage();
				return x;
			}
			String resource="hi  "+m.getFirstName()+" "+m.getLastName();
			return resource;
		}

	}



