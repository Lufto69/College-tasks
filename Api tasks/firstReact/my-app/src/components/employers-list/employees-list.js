import EmployeesListItem from '../emploers-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({date}) => {

    const elements = date.map(item => {

        const {id, ...items} = item

        return (
            <EmployeesListItem key={id} {...items}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;