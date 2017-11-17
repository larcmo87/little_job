import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {  BrowserRouter as Router, Route, Switch, Link, findDOMNode  } from "react-router-dom";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'
import Type  from '../../components/Button'



const DAY_FORMAT = 'YYYYMMDD';

class Successful extends Component {
	state = {
	    redirect: "",
	    userId: "",
	    password: ""
  	};
	
	// Set the redirect State to redirect to the createpost page
	redirectToCreatePost = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: "/createpost"});
	};

	render() {
			if (this.state.redirect === "/createpost") {
    			return <Redirect push to={this.state.redirect} />;
  			}

		return (
			<div className="Successful">					

				<div className="row">
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">													
						<div className="row">
							<h1>Account Successfully Created</h1>
							<br/>
						</div>{/*end of row class}*/}							
						<div className="row">
							<div className="col-sm-3 col-md-3 col-lg-3">
							</div>
							<div className="col-sm-6 col-md-6 col-lg-6">
								<Panel>
								  <PanelHeading 
								  	title="Log In"
								  	/>
								  <PanelBody>
								  	<Form>
								  		<FormLabel
								  		 
								  		  text="User ID"
								  		/>								  		
								  		<Input
								  		   type="text"
								  		   id="user-id"
								  		   value={this.state.userId}
								  		   name="user-id"
								  		/>
								  		<FormLabel								  		 
								  		  text="Password"
								  		/>
								  		
								  		<Input
								  		   type="password"
								  		   id="user-password"
								  		   value={this.state.password}
								  		   name="user-password"
								  		/>
								  		
								  		<Submit 
								  			id="login-submit"
								  			text="Log In"
								  			onClick={this.redirectToCreatePost}
								  		/>
								  	</Form>
								  </PanelBody>
								</Panel>
							</div>
							<div className="col-sm-3 col-md-3 col-lg-3">
							</div>							
						</div>{/*end of row class}*/}	
					</div>					
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>

				</div>{/*end of row class}*/}
        	</div>
		);
	}
}
 
export default Successful;