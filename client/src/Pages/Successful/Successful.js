import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'



class Successful extends Component {
	state = {
	    redirect: "",
	    userId: "",
	    password: ""
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
				localStorage.setItem('userType', res.data.user_type);

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

		// goes to "/poster-dashboard"
	redirectToPosterDashboard = (event) => {
		 event.preventDefault();
		 console.log("In searchpage");
		  this.setState({redirect: "/poster-dashboard"});
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
			

  			if (this.state.redirect === "/mechanic-dashboard") {
    			return <Redirect push to={this.state.redirect} />;
  			}

  			if (this.state.redirect === "/poster-dashboard") {
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
								  		   name="userId"
								  		   onChange={this.handleInputChange}
								  		/>
								  		<FormLabel								  		 
								  		  text="Password"
								  		/>
								  		
								  		<Input
								  		   type="password"
								  		   id="user-password"
								  		   value={this.state.password}
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