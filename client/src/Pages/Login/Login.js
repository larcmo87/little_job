import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'
import Type  from '../../components/Button'


const DAY_FORMAT = 'YYYYMMDD';

class Login extends Component {
	
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
						<div className="row">
							<div className="col-sm-2 col-md-2 col-lg-2">																		
								<label id="search-location-lbl"> Ads:</label>
							</div>
							<div className="col-sm-8 col-md-8 col-lg-8">		
								<Input
									className="search"
									type="text"
									id="search-location"
									placeholder="Search Location"
								/>
							</div>
							<div className="col-sm-2 col-md-2 col-lg-2">		
								<Button
									type="button"
									text="Search"
									id="location-search-btn"
									class="btn btn-info btn-sm"										  	
								/>									
							</div>	
							
						</div>{/*end of row class}*/}							
						<div className="row">
							<div className="col-sm-6 col-md-6 col-lg-6">
								<Panel>
								  <PanelHeading 
								  	title="Log In"
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
								  		<Submit 
								  			id="login-submit"
								  			text="Log In"
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
								  		 <Link to={"/type"}>
								  		<Button
											type="button"
										  	text="Create"
										  	id="create-account-btn"
										  	class="btn btn-info btn-sm"										  	
										/>
										</Link>
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