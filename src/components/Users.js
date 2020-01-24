import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( user => <li key={Math.random(Math.floor() * 100000)}>{user.username}</li>)}
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users)
