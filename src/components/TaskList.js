import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render(){
        var taskElements = [];
        var {tasks} = this.props;
        if (tasks) {
            taskElements = tasks.map((task, index) => {
                return(
                    <TaskItem key={index} index={index} task={task} 
                        onUpdateStatus={this.props.onUpdateStatus}
                        onEditTask={this.props.onEditTask}
                    />
                )
            });
        }

        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {taskElements}
                </tbody>
            </table>
        );
    }
}

export default TaskList;
