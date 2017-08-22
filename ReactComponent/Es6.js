var ExecutionEnvironment = require('exenv');
var DomAvl = ExecutionEnvironment.canUseDOM;

import React from 'react';
import ReactDOM from 'react-dom';

class HelloComponent extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  viewMore(lastId){
  	  	$.ajax({
            url: this.props.cdomain+'viewMore',
            method: 'POST',
			data: { id:lastId },
            success: function(result) {

            	result.map( (obj, idx, errr)=>{
            		this.props.data.push(obj);
            	})

            	this.setState({
            		data : this.props.data
            	})

            }.bind(this)
        });
  }

  render(){


	if (DomAvl) {
		var tblname = this.props.tbl;
	} else {								// manipulate data on client or server side
		var tblname = this.props.tbl;
	}
	// var tblname = this.props.tbl;
	var lastId = 0;
	var tbldata = this.state.data.map( ( ObjectMapped, index , err ) => {
				lastId = ObjectMapped.Id;				
				return(
						<tr key={index}>
							<td>{ (DomAvl) ? ObjectMapped.Id : 'Loading...' }</td>
							<td>{ (DomAvl) ? ObjectMapped.Name : 'Loading...' }</td>
							<td>{ (DomAvl) ? ObjectMapped.Age : 'Loading...' }</td>
						</tr>
				)
	})

    return(
		<div className="container">
		<h2 onClick={this.handleClick}>{this.props.tbl}</h2>
		<p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
			<table className="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{tbldata}
				</tbody>
			</table>
			<button type="button" className="btn btn-primary btn-block" onClick={this.viewMore.bind(this, lastId)}>View More</button>			
		</div>
    )
  }
}

if (DomAvl) {
  ReactDOM.render(<HelloComponent tbl= {tbl} cdomain={cdomain} data={data}/>, document.getElementById('react-root'))	
} else {
  exports.HelloComponent = HelloComponent
}