import React, { Component } from "react";

class VodImage extends Component {

  clickVodImage() {
  	alert("this works")
  }

  render() {
    return (
    	<a href="#" onClick={this.clickVodImage}>
	    	<div className="vodImage">
				<div className="container-fluid">
					<br/>	
					<h5 className="text-center">Vod Title: Zyra Game against Sona</h5>
					<h5 className="text-center">Date: September 8, 2017</h5>
					<br/>
					<h5 className="text-center">Character: Zyra</h5>
					<h5 className="text-center">Role: Support</h5>
					<br/>
					<h5 className="text-center">From Student: Azianpinoy</h5>
				</div>
			</div>
		</a>		
    );
  }
}
export default VodImage;