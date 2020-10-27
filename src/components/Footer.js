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
  <li>Help</li>
  
</ul>
</div>

<div className="col">
<h4>The Company</h4>
<ul className="list-unstyled">
  <li>About Us</li>
  <li>Careers</li>
  <li>Legal</li>
  <li>Privacy and Cookie Policy</li>
  
</ul>
</div>

<div className="col">
<h4>Find Us On</h4>
<ul className="list-unstyled">
  <li>Facebook</li>
  <li>Google</li>
  <li>Twitter</li>
  <li>Instagram</li>
 
</ul>
</div>
</div>
<hr />
<div className="row">
<p className="col-sm">
  &copy;{new Date().getFullYear()} XploreJob |All right reserved |Terms of services |Privacy |Contact Us
</p>
</div>
	</div>
	</div>


	)
}
export default Footer;