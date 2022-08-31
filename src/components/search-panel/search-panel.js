const SearchPanel = ({onChangeTerm}) => {
    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={(e) => onChangeTerm(e.target.value)}/>
    )
}

export default SearchPanel;