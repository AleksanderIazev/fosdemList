import * as style from './filterTodoPanel.styles';

function FilterTodoPanel({ filter, isSetFilter, todos }: any) {
    const activeFilter = filter;

    return (
        <style.SFilterComponentWrapper>
            <style.SFilterBtn
                className={activeFilter === 'active' ? 'active' : ''}
                onClick={() => isSetFilter('active')}
            >
                Show Active tasks
            </style.SFilterBtn>
            <style.SFilterBtn
                className={activeFilter === 'completed' ? 'active' : ''}
                onClick={() => isSetFilter('completed')}
            >
                Show Completed tasks
            </style.SFilterBtn>
        </style.SFilterComponentWrapper>
    );
}

export default FilterTodoPanel;
