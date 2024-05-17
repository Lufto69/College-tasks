import {Component} from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employers-list/employees-list'
import EmployeesAddForm from '../emploers-add-form/employees-add-form'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'John', salary: 80000, increase: false, rise: false, id: 1},
                {name: 'Mary', salary: 8500, increase: false, rise: false, id: 2},
                {name: 'Keny', salary: 8050, increase: false, rise: false, id: 3}
            ]
        }
        this.Insex = 4
    }

    deliteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if(name.length != '' && salary != '' && salary > 2) {
        this.setState(({data}) => {
            return {
                data: [...data, {name, salary, increase: false, rise: false, id: this.Insex++}]
                }
            })
        }
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const allEmploees = this.state.data.length,
            godEmploes = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                <AppInfo allEmploees={allEmploees} godEmploes={godEmploes}/>
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                date={this.state.data} 
                onDelite={this.deliteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App