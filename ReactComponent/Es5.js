// Date     : 12 Aug 2016

var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM

var HelloMessage = React.createClass({

  getInitialState: function() {
  	return{
  		data: this.props.data 
  	}
  },

  handleClick: function () {
	    alert('You clicked!')				// binding events on client side 
  },
  
  viewMore: function (lastId) {

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

  },

  render: function() {


	if (isNode) { var tblname = this.props.tbl;
	} else {								// manipulate data on client or server side
		var tblname = this.props.tbl;
	}
	// var tblname = this.props.tbl;
	var lastId = 0;
	var tbldata = this.state.data.map( ( ObjectMapped, index , err ) => {
				lastId = ObjectMapped.Id;				
				return(
						<tr key={index}>
							<td>{ (isNode) ? 'Loading...' : ObjectMapped.Id }</td>
							<td>{ (isNode) ? 'Loading...' : ObjectMapped.Name }</td>
							<td>{ (isNode) ? 'Loading...' : ObjectMapped.Age }</td>
						</tr>
				)
			} )
	
    return (
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
})

if (isNode) {
  exports.HelloMessage = HelloMessage
} else {
  ReactDOM.render(<HelloMessage tbl= {tbl} cdomain={cdomain} data={data}/>, document.getElementById('react-root'))
}
