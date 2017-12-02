
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import API from '../../utils/API';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'
import { setNavType, setNavPath, setActive, setLogOffOnText } from "../../NavNavigation.js"
import App from "../../App"

class About extends Component {

	state = {
		userInfo: {},
	    redirect: "",	    
	    userId: "",
	    username: "",
		password: "",
		user_type: "about",
		email: "",
		phone_number: "",
		credentials: "",
		address: "",
		city: "",
		state: "",
		zip: ""

	   
  	};

  	componentDidMount() {

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

			//SET THE DASHBOARD NAV LINK TO APPEAR IN THE NAV BAR
			setNavType("Dashboard");

			//SET THE SEARCH LINK ON NAV BAR TO ACTIVE
			setActive("about");	

			//FORCE THE APP TO RERENDER TO THAT THE NAV BAR UPDATES		
	   		ReactDOM.render(<App />,document.getElementById('root'));
	   	}else{
	   		//SET THE SEARCH LINK ON NAV BAR TO ACTIVE
	   		setActive("about");

	   		//FORCE THE APP TO RERENDER TO THAT THE NAV BAR UPDATES	
	   		ReactDOM.render(<App />,document.getElementById('root'));
	   	}  	
	  
	};

  	addAbout = () => {
		
		console.log(this.state.userInfo);
			
			API.saveUser({
				userId: this.state.userId,
				username: this.state.username, 
				password: this.state.password,
				user_type: this.state.user_type,
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
					credentials: "",
					address: "",
					city: "",
					state: "",
					zip: ""
				});
				

				this.redirectToSuccessful()
			})
			.catch(err => console.log(err));
		};

		redirectToSuccessful = event => {
		 event.preventDefault();
		 console.log("In searchpage");
		  this.setState({redirect: "/successful"});
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
		  
  			if (this.state.redirect === "/successful") {
    			return <Redirect push to="/home"/>;
  			}
		return (
			<div className="login">
				<div className="row">
					<div className="col-sm-2 col-md-2 col-lg-2">
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">
						<Panel>
						  <PanelHeading 
						  	title="About Little Job"
						  	/>
						  <PanelBody>
						  	<div>
							        <h3>Why use little Job?</h3>
							        <p>
							        It is no secret that corporatized automotive shops will try to upsell you needless services at every opportunity.
							        Consumers mostly have no easy way to compare value and cost of services. This leads to a seller's market for automotive maintenance.
							        </p>
							        <p>
							        If you are an auto mechanic, you can make alot more money than just working for someone.
									There is a world of money making opportunities available to you as a auto mechanic. Auto mechanics have unique skills not available to many people. You can turn your skills into money making ventures.
							        </p>
							        <p>
							    	Little Job aims at facilitating connections between auto mechanics and consumers who want to find a competitive price for the services they need. Create a login and you can either post a job you need performed, or if you're a mechanic, you can bid on a job that others have posted.
							        </p>
							        <p>Click <a href="http://www.streetdirectory.com/travel_guide/16945/business_and_finance/ways_for_auto_mechanics_to_make_extra_money.html">here</a> for more info about how to make more money as a mechanic.</p>
							   </div>

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

export default About;