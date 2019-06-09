import React, { Component } from 'react';

class Search extends Component {
    render(){
        return (
            <div className="input-group">
                <input type="text" name="" className="form-control" placeholder="Nhập từ khóa..." />
                <select name="filterStatus" className="form-control" >
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích hoạt</option>
                </select>
            </div>
        );
    }
}

export default Search;
