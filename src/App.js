import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
      taskUpdating: null,
      tasks: []
    }
  }

  componentWillMount() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      this.setState({
        tasks: tasks
      });
    }
    // var tasks = localStorage.getItem('tasks', JSON.stringify());
  }

  onToggleForm = () => {
    if (this.state.taskUpdating) {
      this.setState({
        taskUpdating: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm
      });
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  onOpenForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }

  onSaveTask = (task) => {
    var {tasks} = this.state;
    debugger
    if (task.id) {
      var index = this.findIndex(tasks, task.id);
      if (index !== -1) {
        tasks[index] = task;
      }
    } else {
      if (tasks) {
        tasks.push({
          id: this.generateRandomId(),
          name: task.name,
          status: task.status
        });
      } else {
        tasks = [{
          id: this.generateRandomId(),
          name: task.name,
          status: task.status
        }];
      }
    }
    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  }

  onUpdateStatus = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(tasks, id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
    }
    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onEditTask = (task) => {
    debugger
    this.setState({
      taskUpdating: task,
      isDisplayForm: true
    });
  }

  onDeleteTask = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(tasks, id);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render(){
    var {isDisplayForm, tasks, taskUpdating} = this.state;
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
                  <TaskForm onCloseForm={this.onCloseForm} 
                    onSaveTask={this.onSaveTask}
                    taskUpdating={taskUpdating} />
                </div>
                :
                null
            }
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary" onClick={this.onToggleForm}><span className="fa fa-plus mr-5"></span>Thêm công việc</button>
              <Control />
              <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList tasks={tasks} 
                    onUpdateStatus={this.onUpdateStatus}
                    onEditTask={this.onEditTask}
                    onDeleteTask={this.onDeleteTask} />
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  } 
  
  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateRandomId(){
    return this.s4() + '-' + this.s4() + this.s4() + this.s4() + '-' + this.s4() + this.s4() + this.s4() + this.s4();
  }

  findIndex(array, id) {
    var result = -1;
    array.forEach((item, index) => {
      if (item.id === id) {
        result = index;
      }
    });
    return result;
  }
}

export default App;
