import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {  BrowserRouter as Router, Route, Switch, Link, findDOMNode  } from "react-router-dom";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import Button  from '../../components/Button';
import Type  from '../../components/Button';


const DAY_FORMAT = 'YYYYMMDD';
let showH = false;
let errorInLineStyle = {color: "red"};  //Error login message inline style CSS

class Login extends Component {
	state = {
	    userId: "",
	    password: "",
	    redirect: "" ,
	    showLoginError: false,
	    errorMessage: ""
  	};

  	
	// LOGIN get route = "api/login"
	getUserByLogin = (event) => {
		console.log("user id in userbylogin = " + this.state.userId);

		//Authenticate user login id and password. 
		API.getUserByLogin({userId:this.state.userId,password:this.state.password})
		.then(res => {			
			
			//If userId/password is incorrect the do...
			if(res.data.userId === "No user Found"){
				this.setState({
					userId: "",
					password: "",
					errorMessage:"User Id or Password Not Found!",
					showLoginError: true
				});

			//If userId/password authenticated then do...
			}else{
				
				//reset state values (userId, password, errorMessage, showLoginError)
				this.setState({
					userId: "",
					password: "",
					errorMessage:"",
					showLoginError: false
				});

				//Store the user record _id in localstorage variable Id
				localStorage.setItem('Id', res.data._id);
				localStorage.setItem('userId', res.data.userId);

				//if the user type is "poster" then do...
				if(res.data.user_type === "poster"){
					//Redirect to the Poster-Dashboard page
					this.redirectToPosterDashboard(event);				
				} 
				//if the user type is "mechanic" then do..
				else if(res.data.user_type === "mechanic"){
					//Redirect to the Mechanic-Dashboard page
					this.redirectToMechanicDashboard(event);
				}
				console.log("loginby id respose = " + JSON.stringify(res,null,2));
			}
			
		})
		.catch(err => console.log(err));
	};

	// goes to "/poster"
	redirectToPoster = event => {
		 event.preventDefault();
		 console.log("In searchpage");
		  this.setState({redirect: "/poster"});
	};

	// goes to "/poster-dashboard"
	redirectToPosterDashboard = (event) => {
		 event.preventDefault();
		 console.log("In searchpage");
		  this.setState({redirect: "/poster-dashboard"});
	};

	// goes to "/mechanic-dashboard"
	redirectToMechanic = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: "/mechanic"});
	};

	// goes to "/mechanic-dashboard"
	redirectToMechanicDashboard = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: "/mechanic-dashboard"});
	};

	//===========================================
	handleInputChange = event =>{
		const { name, value } = event.target;
		console.log("event target = " + name);
	    this.setState({
	    	[name]: value
    	});
	};

    handleFormSubmit = event => {
	  	event.preventDefault();
	  	// if (this.state.topic && this.state.beginDT && this.state.endDT) {
	  		this.getUserByLogin(event);  
	};


	render() {
			if (this.state.redirect === "/mechanic") {
    			return <Redirect push to={this.state.redirect} />;
  			}

  			if (this.state.redirect === "/mechanic-dashboard") {
    			return <Redirect push to={this.state.redirect} />;
  			}

  			if (this.state.redirect === "/poster") {
    			return <Redirect push to={this.state.redirect} />;
  			}

  			if (this.state.redirect === "/poster-dashboard") {
    			return <Redirect push to={this.state.redirect} />;
  			}
		  
		return (
			<div className="login">
						
						<div className="modal fade" id="userTypeModal" tabIndex="-1" role="dialog" aria-labelledby="userTypeModalLabel" aria-hidden="true">
						  <div className="modal-dialog" role="document">
						    <div className="modal-content">						     
						      <div className="modal-body">
						      	<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						         	<span aria-hidden="false" >&times;</span>
						       	 </button>
						      	<Panel>
								  <PanelHeading 
								  	title="Account Type"
								  	/>
								  
								  <PanelBody>
								  	<div className="user-types" id="user-mechanic">								  		
						          		<button type="button" className="btn btn-info btn-user-type" data-dismiss="modal" onClick={this.redirectToPoster}>Poster (Post Job)</button>						          		
						         	 </div>
						          	<div className="user-types" id="user-poster">
						        		<button type="button" className="btn btn-info btn-user-type" data-dismiss="modal" onClick={this.redirectToMechanic}>Mechanic (Bid on Job)</button>
						        	</div>
						         </PanelBody>
						        	
						        </Panel>
						        <button type="button" className="btn btn-primary btn-cancel" data-dismiss="modal" >
					         		Cancel
					       	 	</button>
						      </div>					      
						    </div>
						  </div>
						</div>{/*End of Modal Component*/}
						

				<div className="row">
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">													
						<div className="row">
							<div className="col-sm-2 col-md-2 col-lg-2">																		
								<label id="search-location-lbl">Work Ads:</label>
							</div>
							<div className="col-sm-8 col-md-8 col-lg-8" id="search-location-input-div">		
								<Input
									className="search"
									type="text"
									id="search-location"
									placeholder="Search Location"
								/>
							</div>
							<div className="col-sm-2 col-md-2 col-lg-2">		
								<Link to={"/search"}>
									<Button
										type="button"
										text="Search"
										id="location-search-btn"
										className="btn btn-info btn-sm"										  	
									/>	
								</Link>								
							</div>	
							
						</div>{/*end of row class}*/}
						
						{(this.state.showLoginError) ? (
							<div className="row login-error-row">
								<div className="col-sm-6 col-md-6 col-lg-6 login-error-col">
	        								<h3 className="login-error" style={errorInLineStyle}>
	        									{this.state.errorMessage}
	        								</h3>
	        					</div>		
							</div>
	        							) : <div className="row">
								<div className="col-sm-12 col-md-12 col-lg-12">
										  <h3>   </h3>
	        					</div>		
							</div>
						}
	        					
						
						<div className="row">
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
								  		   value={this.state.userId}
								  		   type="text"
								  		   id="user-id"
								  		   name="userId"
								  		   onChange={this.handleInputChange}
								  		/>
								  		<FormLabel
								  		 
								  		  text="Password"
								  		/>
								  		<Input
								  		   value={this.state.password}
								  		   type="password"
								  		   id="user-password"
								  		   name="password"
								  		   onChange={this.handleInputChange}
								  		/>
								  		<Submit 
								  			id="login-submit"
								  			text="Log In"
								  			onClick={this.handleFormSubmit}
								  		/>
								  	</Form>
								  </PanelBody>
								</Panel>
							</div>
							<div className="col-sm-6 col-md-6 col-lg-6">
								<Panel id="create-account-pnl">
									<PanelHeading 
									  	title="Create Account"
									  	/>
								  	<PanelBody id="create-account-pnl-body">
								  		 {/*<Link to={"/type"}>*/}
								  		<Button
								  			data-toggle="modal" 
								  			data-target="#userTypeModal"
											type="button"
										  	text="Create"
										  	id="create-account-btn"
										  	className="btn btn-info btn-sm"										  	
										/>
										{/*</Link>*/}
								  </PanelBody>
								</Panel>
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
 
export default Login;