import React from 'react';
import FilterContainer from '../containers/FilterContainer';


const Filteroptions = () => {
    return (
        <div>
            <div>
                {/* Filter Containers */}
                <FilterContainer filterProp='SHOW_ALL'>
                    ALL
                </FilterContainer>
                <FilterContainer filterProp='SHOW_ACTIVE'>
                    ACTIVE
                </FilterContainer>
                <FilterContainer filterProp='SHOW_COMPLETED'>
                    COMPLETED
                </FilterContainer>
            </div>
        </div>
    );
};

export default Filteroptions;

