<%@ page language="java" contentType="text/html; charset=UTF-8"  
    pageEncoding="UTF-8"%>  
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<tiles:insertDefinition name="defaultTemplate">
    <tiles:putAttribute name="body">
 
 
 
        <div class="body">
 
<c:url value="/j_spring_security_logout" var="logoutUrl" />  
 <center>  
        <div align="center">
           
            
            <table border="1">
            
                <th> No </th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Telephone</th>
                <th>Action</th>
                 
                <c:forEach var="contact" items="${listContact}" varStatus="status">
               <tr>
                    <td>${status.index + 1}</td>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.address}</td>
                    <td>${contact.telephone}</td>
                    <td>
                        <a href="/cps/editContact?id=${contact.id}">Edit</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/cps/deleteContact?id=${contact.id}">Delete</a>
                    </td>
                          
                    
                </tr>
                </c:forEach>
                  
            </table>
             <h6><a href="/cps/newContact">New Contact</a></h6> 
        </div>
        <h3><a href="${logoutUrl}">Logout</a></h3>
   </center>  
 
 </div>
    </tiles:putAttribute>
</tiles:insertDefinition>  