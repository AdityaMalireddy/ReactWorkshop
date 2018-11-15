import React, { Component } from 'react';
import classes from './App.module.css';
import Course from '../components/Courses/Course';
import Chapter from '../components/Module/Chapters';
import Assignment from '../components/Module/Assignmnets';
import Quiz from '../components/Module/Quizes';
import InClassActivity from '../components/Module/InClassActivities';

class App extends Component {

  state = {
    moduleContent: null,
    moduleActive: false,
    aboutActive: false,
    syllabusActive: false,
    calendarActive: false
  }

  moduledFired = (moduleNo) => {

    if(moduleNo === 1) {
      let concepts = ['concept 1 in module 1','concept 2 in module 1']
      let assignments = ['assignment 1 in module 1','assignment 2 in module 1']
      this.setState({
        moduleContent: 
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro}> Module 0{moduleNo} -  <span>module 01 name</span></h4>
              <div>
                <p className = {classes.moduleTutorial}>Module 01 Tutorial</p>
                <Chapter module={moduleNo} concept={concepts}/>
                <Assignment assignments={assignments}/>
              </div>
            </div>
      })
    } else if(moduleNo === 2) {
      let concepts = ['concept 1 in module 2','concept 2 in module 2']
      let quizes = ['quiz 1 in module 2','quiz 2 in module 2']
      let count = 2
      this.setState({
        moduleContent: 
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro}> Module 0{moduleNo} -  <span>module 02 name</span></h4>
              <div>
                <p className = {classes.moduleTutorial}>Module 02 Tutorial</p>
                <Chapter module={moduleNo} concept={concepts}/>
                <Quiz quizes={quizes}/>
                <InClassActivity inClassActivity={count}/>
              </div>
            </div>
      })
    }  else if(moduleNo === 3) {
      let concepts = ['concept 1 in module 3','concept 2 in module 3']
      let quizes = ['quiz 1 in module 3','quiz 2 in module 3']
      let assignments = ['assignment 1 in module 3']
      this.setState({
        moduleContent: 
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro}> Module 0{moduleNo} -  <span>module 03 name</span></h4>
              <div>
                <p className = {classes.moduleTutorial}>Module 03 Tutorial</p>
                <Chapter module={moduleNo} concept={concepts}/>
                <Assignment assignments={assignments}/>
                <Quiz quizes={quizes}/>
              </div>
            </div>
      })
    } else if(moduleNo === 4) {
      let concepts = ['concept 1 in module 4','concept 2 in module 4']
      let assignments = ['assignment 1 in module 4']
      let count = 2
      this.setState({
        moduleContent: 
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro}> Module 0{moduleNo} -  <span>module 04 name</span></h4>
              <div>
                <p className = {classes.moduleTutorial}>Module 04 Tutorial</p>
                <Chapter module={moduleNo} concept={concepts}/>
                <Assignment assignments={assignments}/>
                <InClassActivity inClassActivity={count}/>
              </div>
            </div>
      })
    } else if(moduleNo === 5) {
      let concepts = ['concept 1 in module 5','concept 2 in module 5']
      let count = 3
      this.setState({
        moduleContent: 
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro}> Module 0{moduleNo} -  <span>module 05 name</span></h4>
              <div>
                <p className = {classes.moduleTutorial}>Module 05 Tutorial</p>
                <Chapter module={moduleNo} concept={concepts}/>
                <InClassActivity inClassActivity={count}/>
              </div>
            </div>
      })
    } else if(moduleNo === 6) {
      let concepts = ['concept 1 in module 6','concept 2 in module 6']
      let quizes = ['quiz 1 in module 6','quiz 2 in module 6']
      this.setState({
        moduleContent: 
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro}> Module 0{moduleNo} -  <span>module 06 name</span></h4>
              <div>
                <p className = {classes.moduleTutorial}>Module 06 Tutorial</p>
                <Chapter module={moduleNo} concept={concepts}/>
                <Quiz quizes={quizes}/>
              </div>
            </div>
      })
    }else if(moduleNo === 7) {
      let concepts = ['concept 1 in module 7','concept 2 in module 7']
      let assignments = ['assignment 1 in module 7']
      let quizes = ['quiz 1 in module 7','quiz 2 in module 7']
      let count = 2
      this.setState({
        moduleContent: 
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro}> Module 0{moduleNo} -  <span>module 07 name</span></h4>
              <div>
                <p className = {classes.moduleTutorial}>Module 07 Tutorial</p>
                <Chapter module={moduleNo} concept={concepts}/>
                <Assignment assignments={assignments}/>
                <Quiz quizes={quizes}/>
                <InClassActivity inClassActivity={count}/>
              </div>
            </div>
      })
    }
  }

  activeModuleState = () => {
    if(!this.state.moduleActive){
      let doesModuleActive = this.state.moduleActive;
      this.setState({
        moduleActive: !doesModuleActive,
        aboutActive: doesModuleActive,
        syllabusActive: doesModuleActive,
        calendarActive: doesModuleActive
      })
    }
  }

  activeAboutState = () => {
    if(!this.state.aboutActive){
      let doesAboutActive = this.state.aboutActive
      this.setState({
        moduleActive: doesAboutActive,
        aboutActive: !doesAboutActive,
        syllabusActive: doesAboutActive,
        calendarActive: doesAboutActive
      })
    }
  }

  activeSyllabusState = () => {
    if(!this.state.syllabusActive){
      let doesSyllabusActive = this.state.syllabusActive
      this.setState({
        moduleActive: doesSyllabusActive,
        aboutActive: doesSyllabusActive,
        syllabusActive: !doesSyllabusActive,
        calendarActive: doesSyllabusActive
      })
    } 
  }

  activeCalendarState = () => {
    if(!this.state.calendarActive){
      let doesCalendarActive = this.state.calendarActive
      this.setState({
        moduleActive: doesCalendarActive,
        aboutActive: doesCalendarActive,
        syllabusActive: doesCalendarActive,
        calendarActive: !doesCalendarActive
      })
    }
  }

  render() {
    let mainModuleContent = null;

    if(this.state.moduleActive){
      mainModuleContent = (
        <div>
          <div className={classes.Course}>
            <Course count={1} click = {this.moduledFired}/>
            <Course count={2} click = {this.moduledFired}/>
            <Course count={3} click = {this.moduledFired}/>
            <Course count={4} click = {this.moduledFired}/>
            <Course count={5} click = {this.moduledFired}/>
            <Course count={6} click = {this.moduledFired}/>
            <Course count={7} click = {this.moduledFired}/>
          </div>
          <div>
            {this.state.moduleContent}
          </div>
        </div>
      );
    }

    let mainAboutContent = null;
    if(this.state.aboutActive){
      mainAboutContent = (
        <div className = {classes.About}>
          About the course goes here
        </div>
      )
    }

    let mainSyllabusContent = null;
    if(this.state.syllabusActive){
      mainSyllabusContent = (
        <div className={classes.About}>
          Syllabus page goes here
        </div>
      );
    }

    let mainCalendarContent = null;
    if(this.state.calendarActive){
      mainCalendarContent = (
        <div className ={classes.About}>
          Calendar page goes here
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <hr className={classes.horizontal}/>
        <h1>Graduate Direct Project II 02FA18</h1>
        <button>Edit</button>
        <hr className={classes.hrzl}/>
        <div className={classes.image}>
          <img src="https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/overview_images/2207_northwest_missouri_state_university03.jpg" alt="Northwest Icon"/>
        </div>
        <div className={classes.headerMain}>
          <p className = {classes.header} onClick = {this.activeAboutState}>About the Course</p>
          <p className = {classes.header} onClick = {this.activeSyllabusState}>Syllabus</p>
          <p className = {classes.header} onClick = {this.activeModuleState}>Module</p>
          <p className = {classes.header} onClick = {this.activeCalendarState}>Calendar</p>
        </div>
        {mainModuleContent}
        {mainAboutContent}
        {mainSyllabusContent}
        {mainCalendarContent}
      </div>
    );
  }
}

export default App;
