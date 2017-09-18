import React from "react";
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import {connect} from 'react-redux';

class Queue extends React.Component {

constructor(props) {
  console.log('constructor');
  super(props);
  this.updateTicketTimeSinceOpened = this.updateTicketTimeSinceOpened.bind(this);
}

// componentWillMount() {
//   console.log('componentWillMount');
// }


componentDidMount() {
  // console.log('componentDidMount');
  this.timeSinceOpenedChecker = setInterval(() =>
    this.updateTicketTimeSinceOpened(),
    5000
  );
}

// componentWillReceiveProps() {
//   console.log('componentWillReceiveProps');
// }
//
// shouldComponentUpdate() {
//   console.log('shouldComponentUpdate');
//   return true;
// }
//
// componentWillUpdate() {
//   console.log('componentWillUpdate');
// }
//
// componentDidUpdate() {
//   console.log('componentDidUpdate');
// }

componentWillUnmount(){
  clearInterval(this.timeSinceOpenedChecker);
}


updateTicketTimeSinceOpened() {
  this.forceUpdate();
}

render() {
  console.log('render');
  return (
    <div>
      <TicketList
          ticketList = {this.props.masterTicketList}/>
        <NewTicketControl/>
    </div>
  );
}
}

const mapStateToProps = state => {
  console.log(state);
  return {
    masterTicketList : state
  }
}

export default connect(mapStateToProps)(Queue);
