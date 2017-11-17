import { Form, Input, FormLabel, Submit } from "../../components/Form";
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {  BrowserRouter as Router, Route, Switch, Link, findDOMNode  } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import Button  from '../../components/Button'
import Type  from '../../components/Button'



const DAY_FORMAT = 'YYYYMMDD';

class Login extends Component {
	state = {
		posts: [],
	    redirect: false
	   
  	};
	componentDidMount() {
		console.log("in did mount of serch");
   		this.getJobPostings();
    }
	
 	getJobPostings = () =>{

 		API.getJobPostings()
 		.then(res =>{
 			this.setState({posts: res.data})
 				console.log("All Postings " + JSON.stringify(res.data));
 		})
 		.catch(err => console.log(err));
 	};
	
	redirectToPoster = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: "/poster"});
	};

	redirectToMechanic = event => {
		 event.preventDefault();
		 console.log("In serchpage");
		  this.setState({redirect: "/mechanic"});
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
						
						<div className="modal fade" id="userTypeModal" tabIndex="-1" role="dialog" aria-labelledby="userTypeModalLabel" aria-hidden="true">
						  <div className="modal-dialog" role="document">
						    <div className="modal-content">						     
						      <div className="modal-body">
						      	<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						         	<span aria-hidden="false" >&times;</span>
						       	 </button>
						      	<Panel>
								  <PanelHeading 
								  	title="Account Type"
								  	/>
								  
								  <PanelBody>

								  	<div className="user-types" id="user-mechanic">
								  		<Link to={"/type"}>
						          		<button type="button" className="btn btn-info btn-user-type" data-dismiss="modal" onClick={this.redirectToPoster}>Poster (Post Job)</button>
						          		</Link>
						         	 </div>
						          	<div className="user-types" id="user-poster">
						        		<button type="button" className="btn btn-info btn-user-type" data-dismiss="modal" onClick={this.redirectToMechanic}>Mechanic (Bid on Job)</button>
						        	</div>
						         </PanelBody>
						        	
						        </Panel>
						        <button type="button" className="btn btn-primary btn-cancel" data-dismiss="modal" >
					         		Cancel
					       	 	</button>

						      </div>
						     
					      		
							  
						      
						    </div>
						  </div>
						</div>
						



				{/*End of Modal Component*/}


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
							{(this.state.posts.length ) ? (
		        			
		              			<List id="job-post">
		                			{this.state.posts.map(post => (
		                				
		                				 <ListItem key={post._id}>
		                				 	<div className="job-posting-title">Job Posted by: {post.project[0]} - Starting Bid Amount: ${post.start_price}</div>
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
										  		<List id="job-bid">
						                			{/*{this.props.searchResult.map(result => (*/}
						                				
					                				 <ListItem key=""> 
						                				 <div className="bid-items">       									                					
				                							<div className="bid-description">
				                								
														  		Hours: 2   Bid: 150.00	Bid By: Mechanic1
														  		
														    </div>  
						                					<div className="btn-accept-bid">												  		
												          		<button type="button" className="btn btn-info btn-accept-bit" onClick="">Accept Bid</button>										          		
												         	</div>
												         </div>          
					                 				</ListItem>
					                 				<ListItem key="">          									                					
				                						<div className="bid-items">       									                					
				                							<div className="bid-description">
														  		Hours: 2   Bid: 250.00	Bid By: Mechanic2													  	
														    </div>  
						                					<div className="btn-accept-bid">												  		
												          		<button type="button" className="btn btn-info btn-accept-bit" onClick="">Accept Bid</button>										          		
												         	</div>
												         </div>         
					                 				</ListItem>
						                			
						              			</List>	
							              	</PanelBody>
							              </Panel>	

							              <div className="job-posting-title">Job Posted by: User1  -  Location: Sandy, UT</div>
							              <div className="job-posting-detail">              				 
		                					<strong>
		                						Lorem ipsum dolor sit amet, ne aperiam commune eligendi est. At ullum noluisse suscipiantur mei, et dictas sapientem assentior cum, erant decore reformidans his ne. At tota legere discere nec, an zril aliquip inermis ius, sit nisl putant vituperata ei. Augue affert te nec, pro percipit pertinacia no.
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
				                								<p>
				                									Hours: 2   Bid: 200.00 Bid By: Mechanic1
														  		</p>													  	
														  		
														    </div>  
						                					<div className="btn-accept-bid">												  		
												          		<button type="button" className="btn btn-info btn-accept-bit" onClick="">Accept Bid</button>										          		
												         	</div>
												         </div>          
					                 				</ListItem>
					                 				<ListItem key="">          									                					
				                						<div className="bid-items">       									                					
				                							<div className="bid-description">
														  		Hours: 2   Bid: 250.00	Bid By: Mechanic2	 											  	
														    </div>  
						                					<div className="btn-accept-bid">												  		
												          		<button type="button" className="btn btn-info btn-accept-bit" onClick="">Accept Bid</button>										          		
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