import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';

import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'


import { FormControl, FormGroup } from 'react-bootstrap';



class Poster extends Component {
	
	state = {
		client:"",
		description: "",
		start_price: "",
		status: "active",	   
  	};

  	componentDidMount() {
   		console.log("this is passed in to createpost " + this.props.userId)
	}
  	addPoster = () => {
		
		console.log(this.state.userInfo);
			
			API.saveUser({
				
				
			}) 
			.then(res => {

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
	  		this.addPoster(this.state.userId, this.state.username, this.state.password,this.state.user_type,
	  			this.state.email,this.state.phone_number,this.state.credentials,this.state.address,this.state.city,this.state.state,this.state.zip);
	   		console.log("states = " + JSON.stringify(this.state, null, 2));
	   // }
	  };


	render() {
		  
		return (
			<div className="login">
				<div className="row">
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">
						<Panel>
						  <PanelHeading 
						  	title="Job Posting"
						  	/>
						  <PanelBody>
						  	<Form>
						  		<FormLabel
						  		  
						  		  text="Job Detail"
						  		/>	
						  		<FormGroup controlId="formControlsTextarea">
      							
      							<FormControl 
      								componentClass="textarea" 
      								placeholder="Enter text here" 
      								value={this.state.description} 
						  		   name="description"						  		   
						  		   id="job-detail"
						  		   onChange={this.handleInputChange} />
    							</FormGroup>							  		
						  		
						  		<FormLabel						  		  
						  		  text="Bid Amount"
						  		/>
						  		
						  		<Input
						  			value={this.state.start_price} 
						  			onChange={this.handleInputChange}
						  			name="start_price"
						  		   type="number"
						  		   id="bid-price"
						  		/>	
						  						  			
						  		
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
 
export default Poster;