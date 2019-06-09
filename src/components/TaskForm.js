import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: "",
            status: 1
        };
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]:  event.target.name === "status" ? (event.target.value === "true" ? true : false) : event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        var {name, status} = this.state;
        if (name) {
            this.props.onSaveTask({name, status});
            this.props.onCloseForm();
        }
    }

    componentWillMount() {
        if (this.props.taskUpdating){
            this.setState({
                id: this.props.taskUpdating.id,
                name: this.props.taskUpdating.name,
                status: this.props.taskUpdating.status,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskUpdating) {
            this.setState({
                id: nextProps.taskUpdating.id,
                name: nextProps.taskUpdating.name,
                status: nextProps.taskUpdating.status
            });
        } else {
            this.setState({
                id: null,
                name: "",
                status: 1
            });
        }
    }

    render() {
        var {id, name, status} = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{id ? "Sửa công việc" : "Thêm công việc"}</h3>
                    <span className="fa fa-times-circle text-right" onClick={this.props.onCloseForm}></span>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input value={name} onChange={this.onChange} type="text" className="form-control" name="name" />
                        </div>

                        <label>Trạng thái: </label>
                        <select value={status} onChange={this.onChange} name="status" className="form-control">
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br />

                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu lại
                            </button>&nbsp;
                            <button onClick={this.props.onCloseForm} type="button" className="btn btn-danger" >
                                <span className="fa fa-close mr-5"></span>Hủy bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
