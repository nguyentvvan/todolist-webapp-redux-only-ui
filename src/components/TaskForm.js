import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm công việc</h3>
                    <span className="fa fa-times-circle text-right"></span>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên: </label>
                            <input type="text" className="form-control" name="name" />
                        </div>

                        <label>Trạng thái: </label>
                        <select name="status" className="form-control">
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select><br />

                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>Lưu lại
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger" >
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
