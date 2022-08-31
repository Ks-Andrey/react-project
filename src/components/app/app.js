import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import styled from 'styled-components';

const SearchPanelComp = styled.div`
    margin-top: 30px;
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
`;

const AppComp = styled.div`
    margin: 0 auto;
    max-width: 1000px;
`;

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: [
        {name: "John A.", salary: 1000, increase: false, like: true, id: 1},
        {name: "Alex M.", salary: 3000, increase: true, like: false, id: 2},
        {name: "Tom H.", salary: 5000, increase: false, like: false, id: 3}
      ],
      term: '',
      filter: 'all'
    }
  }

  onDelete = (id) => {
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    })
  }

  onAdd = (item) => {
    const newArr = this.state.data;

    newArr.push(item);

    this.setState({
      data: newArr
    })  
  }

  searchObjects = (data, term) => {
    if (term.length == 0) {
      return data;
    }

    return data.filter(item => item.name.indexOf(term) > -1);
  }

  onChangeTerm = (term) => {
    this.setState({
      term: term
    })
  }

  onChangeFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  onFilter = (data, filter) => {
    switch (filter) {
      case 'like':
        return data.filter(item => item.like)
      case 'moreThen':
        return data.filter(item => item.salary > 1000);
      default:
        return data;
    }
  }

  onToggleProp = (id, prop) => {
    const index = this.state.data.findIndex(item => item.id === id),
          newArr = this.state.data;

    newArr[index][prop] = !this.state.data[index][prop];

    this.setState({
      data: newArr
    })
  }


  render(){
    let score = this.state.data.length,
        scoreIncrease = this.state.data.filter(item => item.increase).length;

    const searchData = this.onFilter(this.searchObjects(this.state.data, this.state.term), this.state.filter);

    return (
      <AppComp>
          <AppInfo score={score} scoreIncrease={scoreIncrease}/>

          <SearchPanelComp>
              <SearchPanel onChangeTerm={this.onChangeTerm}/>
              <AppFilter onChangeFilter={this.onChangeFilter} filter={this.state.filter}/>
          </SearchPanelComp>
          
          <EmployeesList data={searchData} onDelete={this.onDelete} onToggleProp={this.onToggleProp}/>
          <EmployeesAddForm onAdd={this.onAdd} keyValue={this.state.data.length + 1}/>
      </AppComp>
    );
  }
}

export default App;
