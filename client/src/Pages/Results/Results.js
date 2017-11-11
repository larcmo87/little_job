import { Input, SearchFormBtn } from "../../components/Form";
import SaveBtn from "../../components/SaveBtn";
import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import API from '../../utils/API';
import moment from 'moment';
import styles from '../../index.css';


const DAY_FORMAT = 'YYYYMMDD';
let count = 0;

class Results extends Component {
	  	
	state = {
	    searchResultArray: [],
	    saveBtn: "Save Article"  
	   
  	};

  	componentDidMount() {
   		this.showResults;
   		console.log("Mounted");
  	};

  	showResults = () =>{
  		this.setState = ({
  			searchResultArray: this.props.searchResult
  		});
  		
  		console.log("Start up array = " + this.state.searchResultArray );
  	};

	
	saveItem = article => e => {
		console.log("artive to delete = " + JSON.stringify(article, null, 2));

		e.target.disabled = true;
		console.log("aritle.topic = " + article.headline.main);
		console.log("aritle.web_url = " + article.web_url);
		
		API.saveArticle({
			topic: article.headline.main,
			link: article.web_url 

		})
		.then(res => console.log(res))
        .catch(err => console.log(err));		

	};

	render() {
		  
		return (
			<div className="results">
			 	<div className="row">
		        	<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>

		        	<div className="col-sm-8 col-md-8 col-lg-8 search">
		        		<div className="panel panel-default">
		        			<div className="panel-body">
		        				<h2>Search Results</h2>
		        			</div>
		        		</div>
		        		
		        		{(this.props.searchResult.length) ? (
		        			
	              			<List id="article-list">
	                			{this.props.searchResult.map(result => (
	                				
	                				 <ListItem key={result.web_url}>	                				 
	                					<a href={result.web_url}  target="_blank">
	                						<strong>
	                							{result.headline.main}
	                						</strong>
	                					</a>
	                					<SaveBtn name="saveBtn" value="Save Article" onClick={this.saveItem(result)} />               
	                 				</ListItem>
	                			))}
	              			</List>
	            		) : (<h3>No Results to Display</h3>)}				   		 		
		        	</div>
		        	 
		        	<div className="col-sm-2 col-md-2 col-lg-2">
		        	</div>
	        	</div>
        	</div> 

		);
	}
}
 
export default Results;