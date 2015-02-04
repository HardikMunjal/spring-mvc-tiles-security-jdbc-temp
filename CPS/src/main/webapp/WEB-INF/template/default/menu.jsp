<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<div class="menu">

    <ul>
    <li><b>Keep Your menu items here</b>
</li>
        <li>
            <spring:url value="/home" var="homeUrl" htmlEscape="true"/>
            <a href="${homeUrl}">Contacts</a>
        </li>
        <li>
            <spring:url value="/user" var="aboutUrl" htmlEscape="true"/>
            <a href="${aboutUrl}">About</a>
        </li>
        
        <li>
            <spring:url value="/login" var="loginUrl" htmlEscape="true"/>
            <a href="${loginUrl}">Login</a>
            
        </li>
        
        
    </ul>
</div>