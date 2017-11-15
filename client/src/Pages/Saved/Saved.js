import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import API from '../../utils/API';
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";


const DAY_FORMAT = 'YYYYMMDD';

class Saved extends Component {

	
	state = {
	    nytArticles: [],
	    mongoArticles: [],
	   
  	};

  	componentDidMount() {
   		this.loadSavedArticles();
  	}

	
  	loadSavedArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ mongoArticles: res.data})
      )
      .catch(err => console.log(err));
  	};

  	deleteItem = article => event => {
  		API.deleteArticle(article)
  		.then(res => {
  		  this.loadSavedArticles();
         console.log("Record successfully deleted");}
      )
      .catch(err => console.log(err));

  	};	

	render() {
		  
		return (
			<div className="Saved">
				<div className="row">
	        		<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>
	    			<div className="col-sm-8 col-md-8 col-lg-8">
	    				<div className="panel panel-default">
		        			<div className="panel-body">
		        				<h2>Saved Searches</h2>
		        			</div>
			        	</div>
			        	<div>
		        		<Link to={"/search"} id="saved-articles">
	    					<button className="btn btn-info" >Search Articles</button>	
	    				</Link>
	    				</div>		        		
	    			</div>
	    			<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>
		        </div>
		        <div className="row">
	        		<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>
	    			<div className="col-sm-8 col-md-8 col-lg-8">
	    				{(this.state.mongoArticles.length) ? (
		        			
	              			<List id="article-list">
	                			{this.state.mongoArticles.map(result => (
	                				
	                				 <ListItem key={result._id}>	                				 
	                					<a href={result.link}  target="_blank">
	                						<strong>
	                							{result.topic}
	                						</strong>
	                					</a>
	                					<button name="deleteBtn" className="btn btn-success btn-sm save-article-btn" value="Delete Article" type="button" onClick={this.deleteItem(result._id)}>Delete Article</button>               
	                 				</ListItem>
	                			))}
	              			</List>
	            		) : (<h3>No Saved Articles to Display</h3>)}
	    			</div>
		    		<div className="col-sm-2 col-md-2 col-lg-2">
			        </div>
		        </div>
	        </div>
		);
	}
}
 
export default Saved;