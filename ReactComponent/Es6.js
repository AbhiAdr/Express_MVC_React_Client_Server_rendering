var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react') : window.ReactDOM

class HelloComponent extends React.Component {  
  render(){
    return(
    			<div>Hello Boom!!!</div>
    )
  }
}

if (isNode) {
  exports.HelloComponent = HelloComponent
} else {
  ReactDOM.render(<HelloComponent tbl= {tbl} cdomain={cdomain} data={data}/>, document.getElementById('react-root'))
}