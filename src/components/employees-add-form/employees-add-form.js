import styled from 'styled-components';

import {Component} from 'react';

const AppAddForm = styled.div`
    margin-top: 30px;
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
    .add-form {
        margin-top: 20px;
        input{
            width: 350px;
            margin-right: 20px;
        }
    }
`;

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            salary: '',
            increase: false,
            id: this.props.keyValue
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <AppAddForm>
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name" 
                        onChange={this.onValueChange}
                        value={name}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary" 
                        onChange={this.onValueChange}
                        value={salary}/>

                    <button type="submit"
                            className="btn btn-outline-light" onClick={(e) => {
                                e.preventDefault();
                                this.setState({
                                    id: this.state.id + 1
                                })

                                if (!this.state.name == '' && !this.state.salary == '') {
                                    this.props.onAdd(this.state);
                                }
                            }}>Добавить</button>
                </form>
            </AppAddForm>
        )
    }
}

export default EmployeesAddForm;