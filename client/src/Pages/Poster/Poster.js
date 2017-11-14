import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'
import CSS from "./PosterCSS.css";

const DAY_FORMAT = 'YYYYMMDD';

class Poster extends Component {
	
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
						  	title="Poster"
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
						  		<Input
						  		   type="text"
						  		   id="state"
						  		/>
						  		<FormLabel
						  		  for="zip"
						  		  text="Zip Code"
						  		/>
						  		<Input
						  		   type="text"
						  		   id="zip"
						  		/>						  		
						  		
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
 
export default Poster;