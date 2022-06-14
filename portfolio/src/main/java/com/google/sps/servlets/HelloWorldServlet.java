package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override

  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;"); 
    String[] messages = {"Hey whats sup", "This is a test message", "Keep this in mind"};
    // response.getWriter().println("<h1>Hello Rishith Kyatham!</h1>");
    Gson gson = new Gson();
    String result = gson.toJson(messages);
    response.getWriter().println(result);
 }
}
