import {Component} from 'react';

import styled from 'styled-components';

const ListGroupItem = styled.li`
    padding: 15px 20px;
    border-bottom: 1px solid #3d5a80;
    &:last-child {
        border-bottom: none;
    }
    span{
        line-height: 35px;
        font-size: 20px;
        cursor: pointer;
        min-width: 550px;
    }
    input {
        line-height: 35px;
        font-size: 20px;
        text-align: center;
        border: 0;
    }
    button {
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
    }
    .btn-cookie {
        color: #e09f3e;
    }
    .btn-trash {
        color: #e5383b;
    }
    .fa-star {
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: #FFD700;
        transition: 0.3s all;
        transform: translateX(30px);
        opacity: 0;
    }
    &.like .fa-star {
        opacity: 1;
        transform: translateX(0px);
    }
    &.increase {
        .list-group-item-input, .list-group-item-label{
            color: #e09f3e;
        } 
    }
    &.increase .btn-star {
        color: #aeaeae;
    }
`;

class EmployeesListItem extends Component {

    render() {
        const {name, salary, onDelete, onToggleProp, increase, like} = this.props;

        let classNameContainer = "list-group-item d-flex justify-content-between";

        if (increase) {
            classNameContainer += " increase";
        }
        if (like){
            classNameContainer += " like";
        }


        return (
            <ListGroupItem className={classNameContainer}>
                <span className="list-group-item-label" data-btn="like" onClick={onToggleProp}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm " data-btn="increase" onClick={onToggleProp}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </ListGroupItem>
        );
    }
}

export default EmployeesListItem;