var React = require('react');
var Layout = require('./layout');



var Homepage = React.createClass({	
  render: function() {
    return (
      <Layout>
          <div class="inner cover">
            <h1 class="cover-heading">I am...</h1>
            <a href="/"><p class="lead"><h2>{this.props.random}!</h2></p></a>
          </div>

      </Layout>
      );
	}
})



module.exports = Homepage;