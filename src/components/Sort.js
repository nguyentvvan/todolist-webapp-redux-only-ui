import React, { Component } from 'react';

class Sort extends Component {
    render(){
        return (
            <div className="drop-down">
                <button type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" className="btn btn-primary dropdown-toggle">
                    Sắp xếp <span className="fa fa-caret-square-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a>
                            <span className="fa fa-sort-alpha-down pr-5"> Tên A-Z <i className="fas fa-check"></i></span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span className="fa fa-sort-alpha-up pr-5"> Tên Z-A </span>
                        </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a>
                            Trạng thái kích hoạt
                        </a>
                    </li>
                    <li>
                        <a>
                            Trạng thái ẩn
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sort;
