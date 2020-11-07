// Import React
import React, { Component } from 'react';
import {Router, navigate} from '@reach/router';
import firebase from './Firebase';

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';
import CheckIn from './CheckIn';
import Attendees from './Attendees';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      displayName:null,
      userID:null
    };
    this.registerUser = this.registerUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged( FBUser =>{
      if(FBUser){
        this.setState({
          user:FBUser,
          displayName:FBUser.displayName,
          userID:FBUser.uid
        });

        const ref = firebase.database().ref( `meetings/${FBUser.uid}`);
        ref.on('value', snapshot => {
          let meetings = snapshot.val();
          let meetingsList = [];
           console.log(meetings);
          for(let item in meetings){
            meetingsList.push({
              meetingID:item,
              meetingName:meetings[item].meetingName
            });
          }
          this.setState({
            meetings:meetingsList,
            howManyMeetings:meetingsList.length
          });

        });


      }else{
        this.setState({user:null});
      }
    });
  }

  registerUser(username){
    console.log(username);
    firebase.auth().onAuthStateChanged( FBUser =>{
      FBUser.updateProfile({
        displayName:username
      })
      .then(() =>{
        this.setState({
          user:FBUser,
          displayName:FBUser.displayName,
          userID:FBUser.uid
        });
        navigate('/meetings');
      });
    });
    
  }

  logOutUser(e) {
    this.setState({
      user:null,
      displayName:null,
      userID:null
    });
    firebase
    .auth()
    .signOut()
    .then(()=>{
      navigate('/login'); 
    });
  }
  addMeeting =(meetingName)=>{
    const ref =firebase.database().ref(`meetings/${this.state.user.uid}`);
    ref.push({meetingName:meetingName});
  }
 
  render() {
    return (
      <div>
        <Navigation user ={this.state.user} logOutUser={this.logOutUser}/>
        {this.state.user && 

        <Welcome userName ={this.state.displayName} logOutUser={this.logOutUser}/> }

        <Router>

          <Home path="/" user ={this.state.user}/>
          <Login path="/login"/>
          <Meetings path="/meetings" userID={this.state.userID} addMeeting={this.addMeeting} meetings={this.state.meetings}/>
          <CheckIn path="/checkin/:userID/:meetingID"/>
          <Attendees path="/attendees/:userID/:meetingID" adminUser ={this.state.userID}/>
          <Register path="/register" registerUser={this.registerUser}/>
        </Router>
      </div>
    );
  }
}

export default App;
