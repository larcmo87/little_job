import { Input } from "../../components/Form";
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { List, ListItem } from "../../components/List";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import Button  from '../../components/Button';
import { Modal } from 'react-bootstrap';

class Search extends Component {

	state = {
		id: "",
		posts: [],		
		searchlocation: "",
		userId: "",
		userType: "",
		start_price:"",
		description: "",
		bidTime : "",		
		bidAmount: "",
		showModal: false,
	    redirect: false
	   
  	};
	componentDidMount() {
		console.log("in did mount of serch");
		if(localStorage.getItem('searchLocation') !== null){
			if(localStorage.getItem('userType') === 'mechanic'){
				this.setState({
					userType : localStorage.getItem('userType')
				});
			}
   			this.getJobPostings(localStorage.getItem('searchLocation'));
   		}
    };

    componentWillMount(){
    	this.getJobPostings(localStorage.getItem('searchLocation'));
    }
	
 	getJobPostings = location =>{

 		console.log("in getJobPostings location = " + location);

 		//ARRAY THAT WILL HOLD THE PROJECT DATA OBJECTS
 		let searchPosts = [];

 		//API CALL TO GET POSTINGS BY LOCATION (CITY OR ZIP CODE)
 		API.getJobPostings(location)
 		.then(res =>{ 			
 			
 			//LOOP THROUGH EACH USER RECORD TO GRAB PROJECT DATA 			
 			res.data.forEach(user => {				
				
				//LOOP THROUGH EACH PROJECT BID AND PUSH THE BID TO THE BID ARRAY OF OBJECT postsbylocation
				for(let p = 0; p < user.project.length; p++){
					console.log(" project id = " + user.project[p]._id);
					//OJECT THAT WILL HOLD PROJECT DATA
			 		let postsbylocation = {
			 			id: "",
			 			userId: "",
			 			start_price:"",
			 			description: "",
			 			status: "",
			 			bid:[]
			 		};
					postsbylocation.id = user.project[p]._id;
					postsbylocation.userId = user.project[p].userId;
					postsbylocation.start_price = user.project[p].start_price;
					postsbylocation.description = user.project[p].description;
					postsbylocation.status =  user.project[p].status;
					
					
					//ONLY ADD BID IF BID ARRAY LENGHT IS GREATER THAN 0
					if(user.project[p].bid.length > 0){
						//LOOP THROUGH THE PROJECT BIDS AND PUSH TO THE postsbylocation BID ARRAY ATTRIBUTE
						for (let i = 0; i < user.project[p].bid.length; i++){
							//PUSH THE BID TO THE postsbylocation BID ARRAY ATTRIBUTE	 							
							postsbylocation.bid.push(user.project[p].bid[i]);
						}//END OF PROJECT BID FOR LOOP
					}

					//PUSH THE PROJECT DATA TO THE searchPosts ARRAY
					searchPosts.push(postsbylocation); 						
				}//END OF PROJECT FOR LOOP
 					 					
 			});
 				
 			//SET THE POSTS ARRAY STATE	
 			this.setState({posts: searchPosts,searchlocation: ""})
 			
 		})//END OF THEN
 		.catch(err => console.log(err));


 	};

 	//Bid Modal close 
 	close = () => {
    	this.setState({ showModal: false });
    	this.componentWillMount();
 	};

 	//Bid Modal open 
  	open = () => {
    	 this.setState({ showModal: true });
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

	//BID ON JOB
	bidOnJob = (id,userId,start_price,description) => event => {
		console.log(" post bid id " + id);
		console.log(" post bid userid " + userId);
		//SET THE STATE OF THE VALUES THAT WILL BE USED TO DISPLAY IN THE BID MODAL
		this.setState({
			id : id,
			userId: userId,			
			start_price: start_price,
			description: description
		});				
		console.log(" post bid id " + this.state.id);
		console.log(" post bid userid " + this.state.userId);

		//OPEN BID MODAL
		this.open();
		
	};

	//POST BID AFTER ENTING BID INFO IN THE BID MODAL
	postBid = () =>{
		let Id = localStorage.getItem('Id');
		let userId = localStorage.getItem('userId');
		API.saveJobBid({id:Id, provider:userId, price:this.state.bidAmount, time:this.state.bidTime, project:this.state.id})
		.then(res => {
			console.log("bid res = " + res.body);

		});

		//CLOSE MODAL
		this.close();

		//REFRESH THE JOB POSTINGS WITH NEW BID
		this.getJobPostings(this.state.searchlocation);  
	};

	//SET STATE OF THE COMPONENT THAT HAS A ONCHANGE EVENT
	handleInputChange = event =>{
		const { name, value } = event.target;
		console.log("event target = " + name);
	    this.setState({
	    	[name]: value
    	});

    	
	};

	//FIND POSTS BY LOCATION
 	handleFormSubmit = event => {
	  event.preventDefault();
	  if (this.state.searchlocation) {
	  	this.getJobPostings(this.state.searchlocation);  
	  }
	};

	render() {
		/*if (this.state.redirect === "/mechanic") {
    		return <Redirect push to={this.state.redirect} />;
  		}

  		if (this.state.redirect === "/poster") {
    		return <Redirect push to={this.state.redirect} />;
  		}*/
		  
		return (
			<div className="Search">			    
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
									onClick={this.handleFormSubmit}									  	
								/>									
							</div>								
						</div>{/*end of row class}*/}							
						<div className="row">
							{(this.state.posts.length) ? (		        				
		              			<List id="job-post">
		              				{this.state.posts.map(post => ( 		                				
		                				<ListItem key={post.id}>
		                				 	<div className="job-posting-title">Job Posted by: {post.userId} - Starting Bid Amount: ${post.start_price}</div>
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
										  			{(post.bid.length) ? (
											  			<List id="job-bid">
							                				{post.bid.map(bid => (							                				
							                				 	<ListItem key={bid._id}> 
								                					 <div className="bid-items">       									                					
						                								<div className="bid-description">					                								
																  			Hours: {bid.time}   Bid: {bid.price}	Bid By: {bid.provider}															  		
																    	</div>						                					
														         	</div>          
							                 					</ListItem>	 
							                				))}
							              				</List>	
							              			) : (<h5>No bids on job</h5>)}
							              			{(this.state.userType === 'mechanic') ? (							              				
							              				<div className="btn-bid">												  		
													    	<button 
													    		type="button" 
													    		id="btn-bid"												    	
													    		className="btn btn-info" 
													    		onClick={this.bidOnJob(post.id, post.userId, post.start_price, post.description)}												    	
													    	>
													    	Bid On Job
													    	</button>										          		
														</div> 
							              			) : (<div></div>)}								  				
									  				
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

				{/*Bid Modal*/}
				<Modal show={this.state.showModal} onHide={this.close}>
          			<Modal.Header closeButton>
            			<Modal.Title>Bid On Job</Modal.Title>
          			</Modal.Header>
          			<Modal.Body>
            			<h5>Job Posted By: {this.state.userId} and {this.state.id}</h5>
            			<h5>Starting Bid: ${this.state.start_price}</h5>
            			<h5>Description:</h5>
            			<div id="modal-bid-desc">
            				<h6>{this.state.description}</h6>
            			</div>
            			<br/>
            			<h5>Bid Hours: </h5>
            			<div>            				
            				<Input 
            					type="number"
            					id="bid-time" 
            					value={this.state.bidTime}
            					placeholder="0"
            					name="bidTime"
            					onChange={this.handleInputChange}
            				/>            				
            			</div>  			

            			<h5>Bid Amount</h5> 
            			<div>
            				<h5 className="bid-label">$</h5>
            				<Input 
            					type="Text"
            					id="bid-amount" 
            					placeholder="0.00"
            					value={this.state.bidAmount}
            					name="bidAmount"
            					onChange={this.handleInputChange}
            				/>
            			</div>
            			<br/>
            			<Button
							type="button"
							text="Make Bid"
							id="modal-bid-btn"
							className="btn btn-info btn-sm"	
							disabled={this.state.enabled}
							onClick={this.postBid}											  	
						/>	           
          			</Modal.Body>
         		    <Modal.Footer>
            			<Button 
            				type="button"
            				text="Close"
            				onClick={this.close}
            			/>
          			</Modal.Footer>
        		</Modal>{/*End of Bid Modal*/}
        	</div>
		);
	}
}
 
export default Search;