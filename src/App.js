import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
  render(){
    var isDisplayForm = false;
    return (
      <div className="container">
          <div className="text-center">
            <h1>QUẢN LÝ CÔNG VIỆC</h1>
            <hr/>
          </div>
          
          <div className="row">
            {
              isDisplayForm ? 
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <TaskForm />
                </div>
                :
                null
            }
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary" onClick={this.onToggleForm}><span className="fa fa-plus mr-5"></span>Thêm công việc</button>
              <Control />
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }  
}

export default App;
