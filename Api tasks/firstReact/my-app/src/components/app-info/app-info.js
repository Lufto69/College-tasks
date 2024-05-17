import './app-info.css'

const AppInfo = ({allEmploees, godEmploes}) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников </h1>
            <h2>Общее число сотрудников: {allEmploees}</h2>
            <h3>Премию получат: {godEmploes}</h3>
        </div>
    )
}

export default AppInfo