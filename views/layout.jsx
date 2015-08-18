var React = require('react');

var Layout = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>I AM!</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
          <link rel="stylesheet" href="stylesheets/cover.css" />
          <link href='http://fonts.googleapis.com/css?family=Pacifico|Bangers|Playball' rel='stylesheet' />
        </head>
        <body>
        
    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner">
              <a href="/"><h3 className="masthead-brand">I AM!</h3></a>
                            <nav>
                <ul className="nav masthead-nav">

                </ul>
              </nav>
            </div>
          </div>


          {this.props.children}


          <div className="mastfoot">
            <div className="inner">
          <a href="http://madewithloveinbaltimore.org">Made with &hearts; in Baltimore</a>, by <a href="https://twitter.com/danieloh84">@danieloh84</a>.            </div>
          </div>

        </div>

      </div>

    </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        </body>
      </html>
    );
  }
})

module.exports = Layout;