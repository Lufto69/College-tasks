import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employers-list/employees-list'
import EmployeesAddForm from '../emploers-add-form/employees-add-form'

function App() {

    const date = [
        {name: 'John', salary: 80000, increase: true, id: 1},
        {name: 'Mary', salary: 8500, increase: false, id: 2},
        {name: 'Keny', salary: 8050, increase: true, id: 3}
    ]

    return(
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList date={date}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App