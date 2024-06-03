import EmployeesListItem from '../emploers-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelite, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, ...items} = item
        return (
            <EmployeesListItem 
            key={id} 
            {...items}
            onDelite={() => onDelite(id)}
            onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;