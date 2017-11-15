import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'
import CSS from "./MechanicCSS.css";
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const DAY_FORMAT = 'YYYYMMDD';

class Mechanic extends Component {
	
	// state = {
	//     nytArticles: [],
	//     mongoArticles: [],
	//     query: "",
	//     topic: "",
	//     beginDT: "19500101",
	//     endDT: moment(Date.now()).format(DAY_FORMAT)
	   
 //  	};

 //  	componentDidMount() {
   
 //  	}

	// searchNYT = (query, beginDt, endDt) => {
	// 	this.setState({
	// 		nytArticles: []
	// 	});

	// 	API.getNYTArcitle(query, beginDt, endDt)
	// 	.then(res => {
	// 		this.setState({
	// 			nytArticles: res.data.response.docs,
	// 			query: "",

	// 			topic: "",
	// 			beginDT: "19500101",
	// 			endDT: moment(Date.now()).format(DAY_FORMAT)
	// 		})


	// 		let searchResult = this.state.nytArticles;
	// 		console.log(JSON.stringify(searchResult, null, 2));
	// 		console.log("search result lenght = " + this.state.nytArticles.length);
	// 	})	
	// 	.catch(err => console.log(err));

			
		
		
	// };
	//  handleStartDayChange = (beginDT) => {
	//  	beginDT = moment(beginDT).format(DAY_FORMAT)
	//  	console.log()
	//     this.setState({
	//       beginDT
	//     });
	//   };

	// handleEndDayChange  = (endDT) => {
	//  	endDT = moment(endDT).format(DAY_FORMAT)
	//  	console.log()
	//     this.setState({
	//       endDT
	//     });
	//   }; 

	// handleInputChange = event =>{
	// 	const { name, value } = event.target;
	// 	console.log("event target = " + event.target);
	//     this.setState({
	//     	[name]: value
 //    	});
	// };
	
	//   handleFormSubmit = event => {
	//   	event.preventDefault();
	//   	if (this.state.topic && this.state.beginDT && this.state.endDT) {
	//   		this.searchNYT(this.state.topic, this.state.beginDT, this.state.endDT);
	//    		console.log("states = " + JSON.stringify(this.state, null, 2));
	//    }
	//   };


	render() {
		  
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
						  	<Form>
						  		<FormLabel
						  		  for="user-id"
						  		  text="User ID"
						  		/>								  		
						  		<Input
						  		   type="text"
						  		   id="user-id"
						  		/>
						  		<FormLabel
						  		  for="user-password"
						  		  text="Password"
						  		/>
						  		<Input
						  		   type="password"
						  		   id="user-password"
						  		/>
						  		<FormLabel
						  		  for="name"
						  		  text="Name"
						  		/>								  		
						  		<Input
						  		   type="text"
						  		   id="name"
						  		/>
						  		<FormLabel
						  		  for="email"
						  		  text="Email"
						  		/>
						  		<Input
						  		   type="email"
						  		   id="email"
								   placeholder="johndoe@email.com"
						  		/>
						  		<FormLabel
						  		  for="city"
						  		  text="City"
						  		/>								  		
						  		<Input
						  		  type="text"
						  		  id="city"
						  		/>
								<FormLabel
								  for="state"
								  text="State"
								/>
								  <FormGroup controlId="formControlsSelect">
      								<ControlLabel></ControlLabel>
      								<FormControl componentClass="select" placeholder="State">
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
						  		  for="zip"
						  		  text="Zip Code"
						  		/>
						  		<Input
						  		   type="text"
						  		   id="zip"
								   placeholder="12345"
						  		/>
								<FormLabel
								  for="qualifications"
								  text="Qualifications"
								/>
								<FormGroup controlId="formControlsTextarea">
      							<ControlLabel></ControlLabel>
      							<FormControl componentClass="textarea" placeholder="Enter text here" />
    							</FormGroup>

						  		<Submit 
						  			id="login-submit"
						  			text="Submit"
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