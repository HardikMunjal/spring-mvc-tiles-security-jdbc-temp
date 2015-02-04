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
    
   
   
  
  <h2>Admin | You are now logged in</h2>  
  <h3><a href="${logoutUrl}">Logout</a></h3>  
  
  
  <c:url value="/AssignRole" var="AssignRoleUrl" />
  <h3><a href="${AssignRoleUrl}">Assign Role</a></h3>
  
 </center>  
 
 </div>
    </tiles:putAttribute>
</tiles:insertDefinition>  