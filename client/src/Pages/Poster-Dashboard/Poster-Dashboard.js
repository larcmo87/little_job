import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { List, ListItem } from "../../components/List";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import './Poster-Dashboard.css'
import { setNavType, setNavPath, setActive, setLogOffOnText} from "../../NavNavigation.js"
import App from "../../App"

class PosterDashboard extends Component {
	state = {
		posts: [],
		bids:[],
	    redirect: false,
	    startBid: "",
	    desc: "",
	    status: "",
	    creatJobAd: false   
  	};
	componentDidMount() {
		
   		

   		this.getPosterJobAds(localStorage.getItem('Id'));
		
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
    }
	
 	getPosterJobAds = (id) =>{
 		
 		API.getPosterById(id)
 		.then(res =>{
 			 this.setState({posts: res.data})
 				console.log("All Postings " + JSON.stringify(res.data));
 				
 		})

 		.catch(err => console.log(err));
 	};


 	addJobAd = (id) =>{
 		let userId = localStorage.getItem('userId');
 		this.setState({
 			status: "active"
 		});
 		API.saveJobAd({id:id, userId: userId, start_price: this.state.startBid, description: this.state.desc, status:"active"})
 		.then(res => {
 			console.log("addjobad response = " + JSON.stringify(res.data,null,2));
 			this.setState({
 				creatJobAd: false 
 			});
 			this.getPosterJobAds(id);


 		})
 		.catch(err => console.log(err));
 	};
/*	
	redirectToPoster = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: "/poster"});
	};

	redirectToMechanic = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: "/mechanic"});
	};*/
	deleteProject = (id) =>{
		API.deleteProject(id)
		.then(this.getPosterJobAds(localStorage.getItem('Id')))
	};

	createJobAdHandler = () =>{
		this.setState({
			creatJobAd: true
		});
	};

	cancelJobCreate = () =>{		
		this.setState({
				startBid: "",
	    		desc: "",
	    		status: "",
 				creatJobAd: false 
 		})
	};

	handleAcceptBid = (postId, bidId) => event =>{
		event.preventDefault();
		console.log("accept bid post id = " + postId);
		console.log("accept bid post bid id = " + bidId);
		API.postProjectBidAccept({postId:postId, bidId:bidId})
		.then(this.getPosterJobAds(localStorage.getItem('Id')))

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
	  		this.addJobAd(localStorage.getItem('Id'));
	   		console.log("states = " + JSON.stringify(this.state, null, 2));
	   // }
	   
	};

	render() {
			if (this.state.redirect === "/mechanic") {
    			return <Redirect push to={this.state.redirect} />;
  			}

  			if (this.state.redirect === "/poster") {
    			return <Redirect push to={this.state.redirect} />;
  			}
		  
		return (
			<div className="login">
			  {(!this.state.creatJobAd) ? (
				<div className="row">
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">													
						<div className="row">
							<Button 
								type="button"
								text="Create Job Ad"
								id="create-job-ad-btn"
								className="btn btn-info btn-sm"	
								onClick={this.createJobAdHandler}
							/>
							
						</div>{/*end of row class}*/}							
						<div className="row">
							{(this.state.posts.length ) ? (
		        			
		              			<List id="job-post">
		                			{this.state.posts.map(post => (
		                				
		                				 <ListItem key={post._id}>
		                				   	<div className="title_delete">
			                				 	<div className="job-posting-title">Job Posted by: {post.userId}  -  Starting Bid Amount: ${post.start_price}</div>
			                				   											  		
												<button type="button" className="btn btn-info btn-delete-post" onClick={() => this.deleteProject(post._id)}>Delete Job</button>										          		
												         	
											</div>
		                				   <div className="job-posting-detail">  
		                					<strong>
		                						{post.description}
		                					</strong>	                					
		                				   </div>

		                				  <Panel>
	                						<PanelHeading 
										  		title="Job Bids"
										  	/>
									  		<PanelBody>
									  		{(post.bid.length ) ? (
										  		<List id="job-bid">
						                			{/*{this.props.searchResult.map(result => (*/}
							                		{post.bid.map(bid => (	
							                			(bid.accepted == null) ? (
							                				<ListItem key={bid._id}> 
								                				 <div className="bid-items">       									                					
						                							<div className="bid-description">
							                							 <div className="bid-amt-lbl">
							                							 	<label>Bid Amount: {bid.price}</label>
							                							 </div>
							                							 <div>
							                							 	<label>Bid Time(Hrs/Day): {bid.time}</label>
							                							 </div>
						                							</div>		                																						  		
															   		
															    	<div className="btn-accept-bid">												  		
													          			<button type="button" className="btn btn-info btn-accept-bit" onClick={this.handleAcceptBid(post._id,bid._id)}>Accept Bid</button>										          		
													         		</div>
														         </div>          
								                				
							                 				</ListItem>
					                 					) : (
					                 						(bid.accepted === "true") ? (

					                 							<ListItem key={bid._id}> 
									                				 <div className="bid-items">       									                					
							                							<div className="bid-description">
								                							 <div className="bid-amt-lbl">
								                							 	<label>Bid Amount: {bid.price}</label>
								                							 </div>
								                							 <div>
								                							 	<label>Bid Time(Hrs/Day): {bid.time}</label>
								                							 </div>											   	 	
																	   	 
							                							 </div>	
							                							 <div id="accepted-bid">	                																						  		
																	   	 	<h4>Winning Bid!</h4>
																	     </div>	
															         </div>          
								                				
							                 					</ListItem>

					                 						) : (
					                 							<ListItem key={bid._id} > 
									                				 <div className="bid-items">       									                					
							                							<div className="bid-description">
								                							 <div className="bid-amt-lbl">
								                							 	<label>Bid Amount: {bid.price}</label>
								                							 </div>
								                							 <div>
								                							 	<label>Bid Time(Hrs/Day): {bid.time}</label>
								                							 </div>
							                							</div>		                																						  		
																	   	<div id="losing-bid">	                																						  		
																	   	 	<h4>Losing Bid</h4>
																	    </div>
															         </div>          
								                				
							                 					</ListItem>
					                 						)			

					                 					)
						                			))}
						              			</List>	
						              			) : (<div></div>)}
							              	</PanelBody>
							              </Panel>		                				  										           
		                 				</ListItem>
		                			))}
		              			</List>
		              		
	            			) : (<h3>No Job Ads to Display</h3>)}				   		 		
		        	
						</div>{/*end of row class}*/}	
									
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>

					</div>{/*end of row class}*/}
					
				</div>
				) : (
					<div className="row">
						<div className="col-sm-2 col-md-2 col-lg-2">
						</div>
						<div className="col-sm-8 col-md-8 col-lg-8">
							<Panel>
								  <PanelHeading 
								  	title="Create Job Ad"
								  	/>
								  <PanelBody>								  	
								  	<Form onSubmit={this.handleFormSubmit}>	
								  		<FormLabel								  		 
								  		  text="Starting Bid Amount: "
								  		/>
								  		<Input
								  		   value={this.state.startBid}
								  		   type="text"
								  		   id="bid-start-amount"
								  		   name="startBid"
								  		   onChange={this.handleInputChange}
								  		/>								  		
								  		<FormLabel								  		 
								  		  text="Job Description"
								  		/>							  		
										<FormGroup controlId="formControlsTextarea" id="job-ad-textarea-fg">
			      							<ControlLabel></ControlLabel>
			      							<FormControl 
			      								value={this.state.desc}
			      								name="desc"
			      								componentClass="textarea" 
			      								className="text-area" 
			      								placeholder=""
			      								onChange={this.handleInputChange} 
			      							/>
		    							</FormGroup>
		    							<Submit 
								  			id="cancel-job-ad-submit"
								  			text="Cancel"
								  			type="submit"
								  			onClick={this.cancelJobCreate}
								  		/>	

								  		<Submit 
								  			id="create-job-ad-submit"
								  			text="Create Job Ad"
								  			type="submit"
								  			onClick={this.handleFormSubmit}
								  		/>
								  	</Form>
								  </PanelBody>
								</Panel>
						</div>{/*end of col-8 class}*/}
						<div className="col-sm-2 col-md-2 col-lg-2">
						</div>
					</div>	

				)}	
					
        	</div>
		);
	}
}
 
export default PosterDashboard;