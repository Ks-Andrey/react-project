import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item

        return <EmployeesListItem {...itemProps} onDelete={() => onDelete(id)} key={id} onToggleProp={(e) => {onToggleProp(id, e.target.getAttribute('data-btn'))}}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;