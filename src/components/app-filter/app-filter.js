import styled from 'styled-components';

const FilterComp = styled.div`
    margin-top: 20px;
`;

const AppFilter = (props) => {
    const buttonsMass = [
        {label: 'Все сотрудники', filter: 'all'},
        {label: 'На повышение', filter: 'like'},
        {label: 'З/П больше 1000$', filter: 'moreThen'}
    ];

    const buttons = buttonsMass.map(({label, filter}) => {
        const active = props.filter === filter;
        const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';

        return <button type="button" onClick={() => props.onChangeFilter(filter)} className={clazz} key={filter}>{label}</button>
    });


    return (
        <FilterComp>
            {buttons}
        </FilterComp>
    )
}

export default AppFilter;