var ExecutionEnvironment = require('exenv');
var DomAvl = ExecutionEnvironment.canUseDOM;

import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js';

class HelloComponent extends React.Component {  

  constructor(props) {
    super(props);

  }

  render(){

	if (DomAvl) {
		var tblname = this.props.tbl;
	} else {								// manipulate data on client or server side
		var tblname = this.props.tbl;
	}

    return(
		<div className="container">
			<h2>{tblname}</h2>
			<p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
			<Table cdomain={this.props.cdomain} data={this.props.data}/>
		</div>
    )
  }
}

if (DomAvl) {
  ReactDOM.render(<HelloComponent tbl= {tbl} cdomain={cdomain} data={data}/>, document.getElementById('react-root'))	
} else {
  exports.HelloComponent = HelloComponent
}