/** @jsx React.DOM */


var Clock = React.createClass({

    getInitialState: function () {

        return {date: new Date()};
    },

    foo: 13,

    render: function () {
      function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thur","Friday","Saturday"];
    var months = ["Jan", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return <div><div className="row">

                  <div className="col-md-offset-4 col-md-1">
                     <h1><span className="label label-primary">{pad(this.state.date.getHours())}</span></h1>
                  </div>

                  <div className="col-md-1">
                     <h1><span className="label label-primary">{pad(this.state.date.getMinutes())}</span></h1>
                  </div>

                  <div className="col-md-1">
                     <h1><span className="label label-primary">{pad(this.state.date.getSeconds())}</span></h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-offset-4 col-md-1">
                     <h2><span className="label label-danger">{days[this.state.date.getDay()]}</span></h2>
                  </div>
                  <div className="col-md-1">
                     <h2><span className="label label-danger">{this.state.date.getDate()}</span></h2>
                  </div>
                  <div className="col-md-1">
                     <h2><span className="label label-danger">{months[this.state.date.getMonth()]}</span></h2>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-offset-4 col-md-1">
                     <h2><span className="label label-default              ">{this.state.date.getFullYear()}</span></h2>
                  </div>
               </div>
            </div>;
    },
      tick: function () {
      this.setState({date: new Date()});
    },

    componentDidMount: function() {
      this.interval = setInterval(this.tick, 1000);
    },

    componentWillUnmount: function() {
      clearInterval(this.interval);
    },


});

React.renderComponent(
    <Clock />,
    document.getElementById('container')
);
