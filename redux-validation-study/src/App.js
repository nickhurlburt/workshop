import React, {Component} from 'react';
import './App.css';

import { connect } from 'react-redux';
import { onBlurFunc, curriedUpdateFieldFunc, postUserFunc } from './actions';

import AstronautName from './components/AstronautName';
import AstronautEmail from './components/AstronautEmail';

class App extends Component {

  render() {
    console.log(this.props);
    const myOnBlur = this.props.onBlur(this.props.state.form);
    return (
      <div className="App">
        <AstronautName updateField={this.props.curriedUpdateField('name')} onBlur={myOnBlur} field={this.props.state.form.name} />
        <AstronautEmail updateField={this.props.curriedUpdateField('email')} onBlur={myOnBlur} field={this.props.state.form.email} />
        <button onClick={() => {
          this.props.postUser(this.props.state.form);
        }}>{this.props.state.postUser.isLoading ? 'Loading...' : 'Submit'}</button>
        {this.props.state.form.errors.name || this.props.state.form.errors.email ?
          <div>
            Errors: {this.props.state.form.errors.name} ... {this.props.state.form.errors.email}
          </div> :
          ''
        }
        {this.props.state.postUser.data ? 
          <div>
            <p>Name: {this.props.state.postUser.data.name}</p>
            <p>Email: {this.props.state.postUser.data.email}</p>
          </div> :
          <div><p>No data received</p></div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    postUser: postUserFunc(dispatch),
    curriedUpdateField: curriedUpdateFieldFunc(dispatch),
    onBlur: onBlurFunc(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
