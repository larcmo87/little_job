import { Input } from "../../components/Form";
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { List, ListItem } from "../../components/List";
import ReactDOM from 'react-dom';
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'

import { setNavType, setNavPath, setActive, setLogOffOnText } from "../../NavNavigation.js"
import App from "../../App"
import './Mechanic-DashboardCSS.css'


class Login extends Component {
	state = {
		bids: [],
		redirect: false,
		searchlocation: ""
	   
  	};
  	
	componentDidMount() {
		this.getMechanicJobBids(localStorage.getItem('Id'));

		if(localStorage.getItem('Id')){
			setLogOffOnText("Log Off");
		}else{
			setLogOffOnText("Sign On");
		}

		if(localStorage.getItem('userType')){

	  		if(localStorage.getItem('userType') === "mechanic"){
				setNavPath("/mechanic-dashboard");
			}

			if(localStorage.getItem('userType') === "poster"){
				setNavPath("/poster-dashboard");
			}

			setNavType("Dashboard");
			setActive("dashboard");	
	   		ReactDOM.render(<App />,document.getElementById('root'));
	   	}
    };

	deleteBid = (id) =>{
		API.deleteBid(id)
		.then(res =>{
			this.getMechanicJobBids(localStorage.getItem('Id'));
		var deletedBid = this.state.bids.indexOf(id);
		this.state.bids.splice(deletedBid, 1);
		});
	};

 	getMechanicJobBids = (id) =>{
 		let jobBids = [];
 		API.getMechanicById(id)
 		.then(res =>{
 			
 				console.log("All Mechanics bids " + JSON.stringify(res.data));

 			res.data.bid.forEach(bid => {		
 				//LOOP THROUGH EACH PROJECT BID AND PUSH THE BID TO THE BID ARRAY OF OBJECT postsbylocation
				/*for(let b = 0; b < user.bid.length; b++){
					console.log(" bid id = " + user.bid[b]._id);*/
					//OJECT THAT WILL HOLD PROJECT DATA
			 		let mechanicProjectBids = {
			 			projectId: "",
			 			bidId: "",
			 			userId: "",
			 			start_price:"",
			 			description: "",
			 			bidTime: "",
			 			bidAmount: "",
			 			accepted: "",
			 			
			 		};
			 		if(bid.project !== null){
			 			mechanicProjectBids.projectId = bid.project._id;
			 			mechanicProjectBids.userId = bid.project.userId;
			 			mechanicProjectBids.start_price = bid.project.start_price;
						mechanicProjectBids.description = bid.project.description;
					
			 		}
					
					mechanicProjectBids.bidId = bid._id;					
					mechanicProjectBids.bidTime =  bid.time;
					mechanicProjectBids.bidAmount =  bid.price;	
					mechanicProjectBids.accepted =  bid.accepted;	

					jobBids.push(mechanicProjectBids);		
				// }	
					
 			});
 			this.setState({bids: jobBids});
 			console.log("this state bids value = " + this.state.bids);
 		})
 		.catch(err => console.log(err));
 		
 		localStorage.setItem('searchLocation','');
 		
 	};

 	searchPostsByLocation = () =>{
		//Store the location in local storage item searchLocation
		localStorage.setItem('searchLocation', this.state.searchlocation);
		//reset state values (userId, password, errorMessage, showLoginError)
		this.setState({
			userId: "",
			password: "",
			errorMessage:"",
			showLoginError: false,
			redirect: "/search"
		});
	};

	//SET STATE OF THE COMPONENT THAT HAS A ONCHANGE EVENT
	handleInputChange = event =>{
		const { name, value } = event.target;
		console.log("event target = " + name);
	    this.setState({
	    	[name]: value
    	});

    	
	};

	render() {
			if (this.state.redirect === "/search") {
    			return <Redirect push to={this.state.redirect} />;
  			}
		  
		return (
			<div className="login">						
				
				<div className="row">
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">													
						<div className="row">
							<div className="col-sm-2 col-md-2 col-lg-2">																		
								<label id="search-location-lbl">Job Ads:</label>
							</div>
							<div className="col-sm-8 col-md-8 col-lg-8">		
								<Input
									value={this.state.searchlocation}
									name="searchlocation"
									className="search"
									type="text"
									id="search-location"
									placeholder="Search Location"
									onChange={this.handleInputChange}
									
								/>
							</div>
							<div className="col-sm-2 col-md-2 col-lg-2">		
								<Button
									type="button"
									text="Search"
									id="location-search-btn"
									className="btn btn-info btn-sm"	
									onClick={this.searchPostsByLocation}									  	
								/>									
							</div>	
							
						</div>{/*end of row class}*/}							
						<div className="row">
							{(this.state.bids.length ) ? (
		        			
		              			<List id="job-post">
		                			{this.state.bids.map(bid => (
		                				
		                				 <ListItem key={bid.projectId}>
		                				 	<div className="job-posting-title">Job Posted by: {bid.userId} - Starting Bid Amount: ${bid.start_price}</div>

		                				   <div className="job-posting-detail">  

		                					<strong>
		                						{bid.description}
		                					</strong>	                					
		                				   </div>

		                				  <Panel>
	                						<PanelHeading 
										  		title="Job Bids"
										  	/>
									  		<PanelBody>
										  		<List id="job-bid">
						                			{/*{this.props.searchResult.map(result => (*/}
						                			{(bid.accepted == null) ? (
						                				<ListItem key=""> 
							                				 <div className="bid-items">       									                					
					                							<div className="bid-description">				                								
															  		Hours: {bid.bidTime}   Bid: {bid.bidAmount}														  		
															    </div>  
							                					<div className="btn-accept-bid">												  		
													          		<button type="button" className="btn btn-info btn-accept-bit" onClick={() => this.deleteBid(bid.bidId)}>Remove Bid</button>										          		
													         	</div>
													         </div>				                			
					                 					</ListItem>	
						                			) : (
						                				(bid.accepted === "true") ? ( 
						                					<ListItem key=""> 
								                				 <div className="bid-items" style={{backgroundColor:'green', color:'white'}}>       									                					
						                							<div className="accepted-bid-description" >				                								
																  		Hours: {bid.bidTime}   Bid: ${bid.bidAmount}	<span>Congradulations! Your Bid WON! Job poster will be contacting you soon.</span>	
																    </div> 

														         </div>				                			
					                 						</ListItem>	
						                				) : (
						                					<ListItem key=""> 
								                				<div className="bid-items" style={{backgroundColor:'red', color:'white'}}>       									                					
						                							<div className="accepted-bid-description" >				                								
																  		Hours: {bid.bidTime}   Bid: ${bid.bidAmount}	<span>Job Closed. Sorry, your bid was not accepted.</span>	
																    </div> 

														         </div>			                			
					                 						</ListItem>	
						                				)					                				
					                 				)}				                 				
						              			</List>	
							              	</PanelBody>
							              </Panel>							           
		                 				</ListItem>
		                			))}
		              			</List>
		              		
	            			) : (<h3>No Results to Display</h3>)}				   		 		
		        	
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