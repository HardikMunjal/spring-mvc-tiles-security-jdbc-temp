<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Default tiles template</title>
    <link href="<c:url value="/resources/styles/standard.css" />" rel="stylesheet"  type="text/css" />
 
    
</head>
<body>

    <div class="page">
        <tiles:insertAttribute name="header" />
        <div class="content">
            <tiles:insertAttribute name="menu" />
            <tiles:insertAttribute name="body" />
        </div>
        <tiles:insertAttribute name="footer" />
    </div>

</body>
</html>