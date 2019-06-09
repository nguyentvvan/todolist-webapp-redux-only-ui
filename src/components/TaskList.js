import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render(){
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
                    <TaskItem />
                    <TaskItem />
                </tbody>
            </table>
        );
    }
}

export default TaskList;
