import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
          Users!
        <ul>
          {this.props.users.map(user => <li key={user}>{user}</li>) }
        </ul>
          <div>Total: {this.props.userCount}</div>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (store) => {
  return {
    users: store.users.map(user => user.username),
    userCount: store.users.length      
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
