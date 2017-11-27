import { Form, Input, FormLabel, Submit } from "../../components/Form";
import { Redirect } from 'react-router';
import React, { Component } from 'react';
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import "./MechanicCSS.css";
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class Mechanic extends Component {
	
	state = {
		userInfo: {},
	    redirect: "",	    
	    userId: "",
	    username: "",
		password: "",
		user_type: "mechanic",
		email: "",
		phone_number: "",
		credentials: "",
		address: "",
		city: "",
		state: "",
		zip: ""

	   
  	};

  	componentDidMount() {
   		
  	}

	addMechanic = () => {
		
		console.log(this.state.userInfo);
			
			API.saveUser({
				userId: this.state.userId,
				username: this.state.username, 
				password: this.state.password,
				user_type: "mechanic",
	  			email: this.state.email,
	  			phone_number: this.state.phone_number,
	  			credentials: this.state.credentials,
	  			address: this.state.address,
	  			city: this.state.city,
	  			state: this.state.state,
	  			zip: this.state.zip
				
			}) 
			.then(res => {
				localStorage.setItem('myData', this.state.userId);
				this.setState({	 
					redirect:"/successful",   
	    			userId: "",
	    			username: "",
					password: "",
					user_type: "poster",
					email: "",
					phone_number: "",
					address: "",
					city: "",
					state: "",
					zip: ""
				});
			
				this.redirectToSuccessful();

			})
			.catch(err => console.log(err));
	};

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
	  		this.addMechanic(this.state.userId, this.state.username, this.state.password,this.state.user_type,
	  			this.state.email,this.state.phone_number,this.state.credentials,this.state.address,this.state.city,this.state.state,this.state.zip);
	   		console.log("states = " + JSON.stringify(this.state, null, 2));
	   // }
	  };

	serchpage = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: true});
	};


	render() {
		  if (this.state.redirect) {
		    return <Redirect push to="/successful" />;
		  }

		return (

			<div className="login">
				
				<div className="row">
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">
						<Panel>
						  <PanelHeading 
						  	title="Mechanic"
						  	/>
						  <PanelBody>
						  	<Form onSubmit={this.handleFormSubmit} data-toggle="validator">
						  		<FormLabel
						  		  
						  		  text="User ID"
						  		/>								  		
						  		<Input
						  		   value={this.state.userId} 
						  		   name="userId"
						  		   type="text"
						  		   id="user-id"
						  		   onChange={this.handleInputChange} 
						  		/>
						  		<FormLabel
						  		  
						  		  text="Password"
						  		/>
						  		<Input
						  			value={this.state.password} 
						  			onChange={this.handleInputChange}
						  			name="password"
						  		   type="password"
						  		   id="user-password"
						  		/>
						  		<FormLabel
						  		  text="Name"
						  		/>								  		
						  		<Input
						  			value={this.state.username} 
						  			onChange={this.handleInputChange}
						  			name="username"
						  		   type="text"
						  		   id="name"
						  		/>
						  		<FormLabel
						  		  text="Phone Number"
						  		/>								  		
						  		<Input
						  			value={this.state.phone_number} 
						  			onChange={this.handleInputChange}
						  			name="phone_number"
						  		   type="text"
						  		   id="phone-number"
						  		/>
						  		<FormLabel
						  		  
						  		  text="Email"
						  		/>
						  		<Input
						  			value={this.state.email} 
						  			onChange={this.handleInputChange}
						  			name="email"
						  		   type="email"
						  		   id="email"
						  		   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
						  		/>
						  		<FormLabel
						  		  
						  		  text="City"
						  		/>								  		
						  		<Input
						  			value={this.state.city} 
						  			onChange={this.handleInputChange}
						  			name="city"
						  		   type="text"
						  		   id="city"
						  		/>
						  		<FormLabel
						  		  
						  		  text="State"
						  		/>
						  		 <FormGroup controlId="formControlsSelect">
      								
      								<FormControl componentClass="select" placeholder="State" name="state" value={this.state.state} onChange={this.handleInputChange}>
									<option value="">select one</option>
  									<option value="AL">Alabama</option>
  									<option value="AK">Alaska</option>
 									<option value="AZ">Arizona</option>
  									<option value="AR">Arkansas</option>
  									<option value="CA">California</option>
  									<option value="CO">Colorado</option>
  									<option value="CT">Connecticut</option>
  									<option value="DE">Delaware</option>
  									<option value="DC">District Of Columbia</option>
  									<option value="FL">Florida</option>
  									<option value="GA">Georgia</option>
  									<option value="HI">Hawaii</option>
  									<option value="ID">Idaho</option>
  									<option value="IL">Illinois</option>
  									<option value="IN">Indiana</option>
  									<option value="IA">Iowa</option>
 									<option value="KS">Kansas</option>
  									<option value="KY">Kentucky</option>
  									<option value="LA">Louisiana</option>
  									<option value="ME">Maine</option>
  									<option value="MD">Maryland</option>
  									<option value="MA">Massachusetts</option>
  									<option value="MI">Michigan</option>
  									<option value="MN">Minnesota</option>
  									<option value="MS">Mississippi</option>
 									<option value="MO">Missouri</option>
  									<option value="MT">Montana</option>
  									<option value="NE">Nebraska</option>
  									<option value="NV">Nevada</option>
  									<option value="NH">New Hampshire</option>
  									<option value="NJ">New Jersey</option>
  									<option value="NM">New Mexico</option>
  									<option value="NY">New York</option>
  									<option value="NC">North Carolina</option>
  									<option value="ND">North Dakota</option>
  									<option value="OH">Ohio</option>
  									<option value="OK">Oklahoma</option>
  									<option value="OR">Oregon</option>
  									<option value="PA">Pennsylvania</option>
  									<option value="RI">Rhode Island</option>
  									<option value="SC">South Carolina</option>
  									<option value="SD">South Dakota</option>
  									<option value="TN">Tennessee</option>
  									<option value="TX">Texas</option>
  									<option value="UT">Utah</option>
  									<option value="VT">Vermont</option>
  									<option value="VA">Virginia</option>
  									<option value="WA">Washington</option>
  									<option value="WV">West Virginia</option>
  									<option value="WI">Wisconsin</option>
  									<option value="WY">Wyoming</option>
  									
						  			
      							</FormControl>
      									
    							</FormGroup>
						  		<FormLabel
						  		 
						  		  text="Zip Code"
						  		/>
						  		<Input
					  			  value={this.state.zip} 
					  			   onChange={this.handleInputChange}
					  			   name="zip"
						  		   type="text"
						  		   id="zip"
						  		/>
								<FormLabel
								  for="qualifications"
								  text="Qualifications"
								/>
								<FormGroup controlId="formControlsTextarea">
      							<ControlLabel></ControlLabel>
      							<FormControl componentClass="textarea" placeholder="Enter text here" name="credentials" value={this.state.credentials}  onChange={this.handleInputChange}/>
    							</FormGroup>
						  		
						  		<Submit 
						  			id="login-submit"
						  			text="Submit"
						  			type="submit"
			   			 			onClick={this.handleFormSubmit}

						  		/>

						  	</Form>

						  </PanelBody>
						</Panel>													
						
					</div>					
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>

				</div>{/*end of row class}*/}
        	</div>
		);
	}
}
 
export default Mechanic;