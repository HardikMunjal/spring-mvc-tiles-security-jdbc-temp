<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
	<head>
	
	<style type="text/css">
	body {
          background-color:#1DA69C;
       
}

.p-set
{
    padding-top:120px;
     line-height:30px;
     color:#fff;
     font-size:16px;
}
.hr-set {
    border-top:1px solid rgba(0, 0, 0, 0)!important;
    margin-bottom:20px;
}
.hr-set-two {
    border-top:1px solid rgba(0, 0, 0, 0.05)!important;
    margin-bottom:5px;
}
/* =============================================================
   SIDE MENU STYLES
 ============================================================ */

#side-menu {
    height:100%;
    position:fixed;
    top:-1000px;
    left:-250px;
    background-color:#CF2545;
    color:#fff;
    z-index:999;
    overflow:auto;
    max-width:500px;

}
 #side-menu ul {
        list-style:none;
        padding:0px;
    }

        #side-menu ul li {
          border-bottom:1px solid rgba(95, 87, 88, 0.2);
padding: 20px 25px;
display:inline-block;
        }
         #side-menu ul li a i {
             padding-right:10px;
        }

            #side-menu ul li a,#side-menu ul li a:hover {
                color:#fff;
                text-decoration:none;
font-size: 16px;
            }
  
.logo-text {
    padding: 20px 30px;
cursor: pointer;
font-size:20px;
font-weight:900;

}
.menu-close-icon {
    padding:0px 10px;
    cursor: pointer;
    color:#000;
    font-size:25px;
  
}
.menu-open-icon {
    cursor:pointer;
    color:#fff;
    padding:20px 30px;
     padding:20px 25px;
     position:fixed;
}
.intro-txt {
    padding:20px;
}</style>

</head>
	<body>
	<script type="text/javascript">$(document).ready(function () {
    $('.menu-close-icon').click(function (e) {
        e.preventDefault();
        $('#side-menu').animate({ left: '-250px', top: '-1000px' });
       
    });
    $('.menu-open-icon').click(function (e) {
        e.preventDefault();
        $('#side-menu').animate({ left: '0px', top: '0px' });
       
    });
});
</script>
	
		<div id="side-menu" class="move-me" >
        <hr class="hr-set" />
        <span class="logo-text" >COMPANY NAME   </span>  <i  class="menu-close-icon glyphicon glyphicon-align-justify"></i> 
        <hr class="hr-set-two" />

        <ul  >
            <li>
             <a href="#" > <i class="glyphicon glyphicon-home"></i>    Home</a>
            </li>
            <li>
             <a href="#" >  <i class="glyphicon glyphicon-th"></i>  Features</a>
            </li>
            <li>
              <a href="#" > <i class="glyphicon glyphicon-time"></i>  Pricing</a>
            </li>
             <li>
              <a href="#" >  <i class="glyphicon glyphicon-user"></i>  Developer</a>
            </li>
             <li>
               <a href="#" > <i class="glyphicon glyphicon-map-marker"></i> Contact</a>
            </li>
        </ul>
    <div class="intro-txt">
         <br />
    <i><strong>Company Ovewview </strong></i>
        <hr />
      <p>
             Nunc at viverra risus. In euismod quam ac dictum varius. 
             Nunc at viverra risus. 
             In euismod quam ac dictum varius.
             <br>
             <a href="http://www.binarytheme.com/" target="_blank" style="text-decoration:none;color:#000">by : binarytheme </a>
         </p>
    
    </div>
   

       
    </div>
     <!-- SIDE MENU SECTION END-->  
    

<div class="container">
	<div class="row">
    <div class="col-md-6">
       <h1>    <strong> <i class="menu-open-icon glyphicon glyphicon-align-justify"></i> </strong></h1>
    </div>
     <div class="col-md-6" >
        <p class=" p-set">Please Click on the <strong> side menu icon </strong>to see the effect of dropping menu 
            Hope you will enjoy this snipppet which is inspired by this website , because <strong>i have learnt lots of things here. Thanks </strong>
            
        </p>
    </div>

	</div>
</div>
	</body>
</html>
