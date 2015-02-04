<%@ page language="java" contentType="text/html; charset=UTF-8"  
    pageEncoding="UTF-8"%>  
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<tiles:insertDefinition name="defaultTemplate">
    <tiles:putAttribute name="body">
 
 
 
        <div class="body">





<div style="text-align: center; padding: 30px;border: 1px solid green;width: 250px;">
<form method="post" action="<c:url value='j_spring_security_check' />">

<table>  
<tr>  

      <td colspan="2" style="color: red">${message}</td>  
  
     </tr>  
     <tr>  
      <td>User Name:</td>  
      <td><input type="text" name="username" />  
      </td>  
     </tr>  
     <tr>  
      <td>Password:</td>  
      <td><input type="password" name="password" />  
      </td>  
     </tr>  
     <tr>  
      <td> </td>  
      <td><input type="submit" value="Login" />  
      </td>  
  
     </tr>  
    </table>  
   </form>  
  </div>  

</div>
    </tiles:putAttribute>
</tiles:insertDefinition>  