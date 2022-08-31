import styled from 'styled-components';

const AppInfoComp = styled.div`
    padding: 25px;
    background-color: #3d5a80;
    border-radius: 4px;
    box-shadow: 15px 15px 30px rgba(0,0,0, .15);
    color: #fff;
`;

const AppInfo = ({score, scoreIncrease}) => {
    return (
        <AppInfoComp className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {score}</h2>
            <h2>Премию получат: {scoreIncrease}</h2>
        </AppInfoComp>
    )
}

export default AppInfo;