<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>  
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
       
        <form:form action="saveContact" method="post" modelAttribute="contact">
        <table>
            <form:hidden path="id"/>
            <tr>
                <td>Name:</td>
                <td><form:input path="name" /></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><form:input path="email" /></td>
            </tr>
            <tr>
                <td>Address:</td>
                <td><form:input path="address" /></td>
            </tr>
            <tr>
                <td>Telephone:</td>
                <td><form:input path="telephone" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="submit" value="Save"></td>
            </tr>
        </table>
        </form:form>
        </div>
        </center>  
 
 
 </div>
    </tiles:putAttribute>
</tiles:insertDefinition>  
    