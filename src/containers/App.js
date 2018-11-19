import React, { Component } from 'react';
import classes from './App.module.css';
import Course from '../components/Courses/Course';
import Chapter from '../components/Module/Chapters';
import Assignment from '../components/Module/Assignmnets';
import Quiz from '../components/Module/Quizes';
// import InClassActivity from '../components/Module/InClassActivities';

class App extends Component {

  state = {
    moduleContent: null,
    subModuleContent: null,
    moduleActive: false,
    aboutActive: false,
    syllabusActive: false,
    calendarActive: false
  }

  getContent(type, details){
    switch(type){
      case "Chapter":
        return <React.Fragment>
                  <a className={classes.Wrap} target="_blank" href="https://docs.google.com/document/d/1o8IfGltDSVTpqx93jQTRL8M1f9h95EBtL1Al5cDHPuw/edit">
                      Chapter : {details} document
                  </a>
                  <iframe className={classes.IFrame} src="https://docs.google.com/document/d/e/2PACX-1vSlHCNpcBLNlx9CgZCiuS9c3OAn6-Ryk2JJwfODuWhVSuDUgh-qQdcSwOjqUVLIZ5zn6G3XbPxg54gF/pub?embedded=true"></iframe> 
              </React.Fragment>
      case "Quiz":
        return <React.Fragment>
              <ul>
                <li>
                 Quiz- Requires Respondus LockDown Browser
               
                </li>
              </ul>
          </React.Fragment>
      case "Assignment":
        return <React.Fragment>
              <a className={classes.Wrap} target="_blank" href="https://docs.google.com/document/d/1vLgtoH-ZGgtAMLdOMCQ3E5NG0RQrf-J_BABOvyHmoAY/edit">
              Assignment: {details} document
              </a>
              <iframe className={classes.IFrame} src="https://docs.google.com/document/d/e/2PACX-1vTVpRBjO5zFENCDq0tyvJi-2paHoxgAN2tetMqWDFO6YXloUv2LNLslvB_wHNPOhQ1bP9uxBZ8CLnO9/pub?embedded=true"></iframe>
          </React.Fragment>
      default:
          return <p>No Content added!</p>
    }
  }

  subModuleFired = (moduleNo, type, details) =>{
      console.log(moduleNo, type, details);
      if(moduleNo===1&&type==="Video"){
        this.setState({subModuleContent: 
          <React.Fragment>
          <h1>{details}</h1>
          <div className={classes.Clear}></div>
          {/* <div className={classes.Wrap}>
            {this.getContent(type, details)}
          </div> */}
          <iframe className={classes.IFrame} src="https://www.youtube.com/embed/Z9QbYZh1YXY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </React.Fragment>
      });
      }else if(moduleNo===2&&type==="Video"){
        this.setState({subModuleContent: 
          <React.Fragment>
          <h1>{details}</h1>
          <div className={classes.Clear}></div>
          <iframe className={classes.IFrame} src="https://www.youtube.com/embed/9aVJOg2EB9I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </React.Fragment>
      });
      }else{
        this.setState({subModuleContent: 
          <React.Fragment>
          <h1>{details}</h1>
          <div className={classes.Clear}></div>
          <div className={classes.Wrap}>
            {this.getContent(type, details)}
          </div>
          </React.Fragment>
      });
      }
  }

  moduledFired = (moduleNo) => {
      let concepts = [`Concept 1 in Module ${moduleNo}`,`Concept 2 in Module ${moduleNo}`]
      let assignments = [`Assignment 1 in Module ${moduleNo}`,`Assignment 2 in Module ${moduleNo}`]
      let quizes = [];
      if(moduleNo == 2 || moduleNo == 4 || moduleNo == 6 )
        quizes = [`Quiz 1 in Module ${moduleNo}`,`Quiz 2 in Module ${moduleNo}`]
      this.setState({
        moduleContent: 
        
            <div className = {classes.Module}>
              <h4 className = {classes.moduleIntro} > Module 0{moduleNo} -  <span>module 0{moduleNo} name</span></h4>
              <div>
                <p className = {classes.moduleTutorial} onClick={()=>this.subModuleFired.bind(this, moduleNo, "Video")(`Module 0${moduleNo} Tutorial`)}>Module 0{moduleNo} Tutorial</p>
                <Chapter module={moduleNo} onClick={this.subModuleFired.bind(this, moduleNo, "Chapter")} concept={concepts}/>
                {quizes.length > 0 && <Quiz quizes={quizes} onClick={this.subModuleFired.bind(this, moduleNo, "Quiz")}/> }
                <Assignment assignments={assignments} onClick={this.subModuleFired.bind(this, moduleNo, "Assignment")}/>
              </div>
            </div>,
          subModuleContent: null
      })
  }

  activeModuleState = () => {
    if(!this.state.moduleActive){
      let doesModuleActive = this.state.moduleActive;
      this.setState({
        moduleActive: !doesModuleActive,
        aboutActive: doesModuleActive,
        syllabusActive: doesModuleActive,
        calendarActive: doesModuleActive,
          subModuleContent: null
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
        calendarActive: doesAboutActive,
        subModuleContent: null
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
        calendarActive: doesSyllabusActive,
        subModuleContent: null
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
        calendarActive: !doesCalendarActive,
        subModuleContent: null
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
          <ul>
            <li><strong>Instructor</strong>: Aziz Fellah</li>
            <li><strong>Office hours</strong>: By appointment or</li>
            </ul>
            <table border="1" className={classes.Table}>
            <thead>
              <tr>
                <th>Weekday</th>
                <th>Office hours</th>
              </tr>
            </thead>
            <tbody>
            <tr>
            <td><span>Monday</span></td>
            <td>
            <p><span>10:00 AM - 12:00 PM</span></p>
            </td>
            </tr>
            <tr>
            <td>Wednesday</td>
            <td>
            <p><span>10:00 AM - 12:00 PM</span></p>
            </td>
            </tr>
            <tr>
            <td>Friday</td>
            <td>
            <p><span>10:00 AM - 12:00 PM</span></p>
            <p><span> 03:00 PM - 04:00 PM</span></p>
            </td>
            </tr>
            </tbody>
            </table>
            <ul>
            <li><strong>Email</strong>: <a href="mailto:afellah@nwmissouri.edu">afellah@nwmissouri.edu</a></li>
            <li><strong>Office:&nbsp;</strong>Colden Hall 2290&nbsp;</li>
            <li><strong>Tel:&nbsp;</strong> (660) 562-0803</li>
            <li><strong>Teaching Assistant</strong>: Raja Srikar Karthik Chinta</li>
            <li><strong>Email:<span>&nbsp;</span></strong><a href="mailto:S530460@nwmissouri.edu">S530460@nwmissouri.edu</a></li>
            <li><a title="Syllabus" href="https://nwmissouri.instructure.com/courses/17476/assignments/syllabus"><strong>Syllabus</strong></a></li>
            </ul>
        </div>
      )
    }

    let mainSyllabusContent = null;
    if(this.state.syllabusActive){
      mainSyllabusContent = (
        <div className={classes.About}>
          
          <h3>Course Syllabus</h3><br/>
          <a className={classes.Wrap} target="_blank" href="https://docs.google.com/document/d/1PQpyMhRxcAaYvTM-NX6vqSW_KjKP1n1au3bDrDR2VAs/edit">
         </a>
         <iframe className={classes.IFrame} src="https://docs.google.com/document/d/e/2PACX-1vTo-C3YbAZuUf0pbMkF9-pWVyJl_g-GM7mSaZL7dydpjGi2QM46X05jt3E2ajzek3FHy71sv28yVspA/pub?embedded=true"></iframe> 
        </div>
      );
    }

    let mainCalendarContent = null;
    if(this.state.calendarActive){
      mainCalendarContent = (
        <div className ={classes.About}>
          <iframe className={classes.Calender} src="https://calendar.google.com/calendar/embed?src=ipofei7stq6gmotgv8nq73iv3puqkim4%40import.calendar.google.com&ctz=America%2FChicago" frameborder="0" scrolling="no"></iframe>
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <hr className={classes.horizontal}/>
        <h1>Graduate Direct Project II 02FA18 Workshop</h1> 
        <button>Edit</button>
        <hr className={classes.hrzl}/>
        <div className={classes.image}>
          <img src="https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/overview_images/2207_northwest_missouri_state_university03.jpg" alt="Northwest Icon"/>
        </div>
        <div className={classes.headerMain}>
          <p className = {classes.header} onClick = {this.activeAboutState}><i className="fas fa-info-circle" color="white"></i>&nbsp;About the Course</p>
          <p className = {classes.header} onClick = {this.activeSyllabusState}><i className="fas fa-book" color="white"></i>&nbsp;Syllabus</p>
          <p className = {classes.header} onClick = {this.activeModuleState}><i className="fas fa-box" color="white"></i>&nbsp;Module</p>
          <p className = {classes.header} onClick = {this.activeCalendarState}><i className="far fa-calendar-alt" color="white"></i>&nbsp;Calendar</p>
        </div>
        <div className = {classes.ModuleContainer} >
        {mainModuleContent}
        { this.state.subModuleContent &&  <div className={classes.ModuleRight}>
              {this.state.subModuleContent}
            </div>}
        </div>
        {mainAboutContent}
        {mainSyllabusContent}
        {mainCalendarContent}
      </div>
    );
  }
}

export default App;
