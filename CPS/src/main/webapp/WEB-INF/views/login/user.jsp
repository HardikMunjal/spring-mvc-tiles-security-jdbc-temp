<%@ page language="java" contentType="text/html; charset=UTF-8"  
    pageEncoding="UTF-8"%>  
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<tiles:insertDefinition name="defaultTemplate">
    <tiles:putAttribute name="body">
 
 
 
        <div class="body">
 
<c:url value="/j_spring_security_logout" var="logoutUrl" />  
 <center>  
     
    
   
   
  
  <h2>You are now logged in</h2>  
  
<sec:authorize access="hasRole('ROLE_ADMIN')">
         This session will be visible to an admin only.<br/>
         You are an Administrator.<br/>
        
         <li>
            <spring:url value="/admin" var="adminUrl" htmlEscape="true"/>
            <a href="${adminUrl}">AdminMainPage</a>
        </li>
        </sec:authorize>
        


  
  
  <h3><a href="${logoutUrl}">Logout</a></h3>  
 </center>  
</div>
    </tiles:putAttribute>
</tiles:insertDefinition>   





