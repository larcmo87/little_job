import { Input } from "../../components/Form";
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { List, ListItem } from "../../components/List";
import ReactDOM from 'react-dom';
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'
import NAV from "../../components/Nav/NavBar"
import { setNavType, setNavPath, setActive } from "../../NavNavigation.js"
import App from "../../App"


class Login extends Component {
	state = {
		bids: [],
		redirect: false
	   
  	};
  	
	componentDidMount() {
		this.getMechanicJobBids(localStorage.getItem('Id'));
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
			 			bidAmount: ""
			 			
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
		localStorage.setItem('searchLocation', this.state.searchLocation);
		//reset state values (userId, password, errorMessage, showLoginError)
		this.setState({
			userId: "",
			password: "",
			errorMessage:"",
			showLoginError: false,
			redirect: "/search"
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
								<label id="search-location-lbl">Work Ads:</label>
							</div>
							<div className="col-sm-8 col-md-8 col-lg-8">		
								<Input
									className="search"
									type="text"
									id="search-location"
									placeholder="Search Location"
									onClick={this.searchPostsByLocation}
								/>
							</div>
							<div className="col-sm-2 col-md-2 col-lg-2">		
								<Button
									type="button"
									text="Search"
									id="location-search-btn"
									className="btn btn-info btn-sm"										  	
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