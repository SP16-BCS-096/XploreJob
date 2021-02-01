import React  from "react";
import "./Footer.css";
function Footer(){
return(
	<div className ="main-Footer">
	<div className="acontainer">
<div className="row">
<div className="col">
<h4>Customer Support</h4>
<ul className="list-unstyled">
<li><a className="fa-fa-about" href="./help">Help </a></li>
  
</ul>
</div>

<div className="col">
<h4>The Company</h4>
<ul className="list-unstyled">
  <li><a className="fa-fa-about" href="./About">About Us </a></li>
  
  
</ul>
</div>

<div className="col">
<h4>Find Us On</h4>
<ul className="list-unstyled">
  <li><a className="fa fa-facebook" href="www.Facebook.com">Facebook</a></li>
  <li><a className="fa fa-google" href="www.google.com">Google</a></li>
  <li><a className="fa fa-twitter" href="www.twitter.com">twitter</a></li>
<li><a className="fa fa-instagram" href="www.Instagram.com">Instagram</a></li>
 
</ul>
</div>
</div>
<hr />
<div className="row">
<p className="col-sm">
  &copy;{new Date().getFullYear()} Career Club |All right reserved |Terms of services |Privacy |Contact Us
</p>
</div>
	</div>
	</div>


	)
}
export default Footer;