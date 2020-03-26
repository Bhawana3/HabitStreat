import React from 'react';
import CountBox from './CountBox';


const HabitListBox = (props) => {
    const { habitDetail } = props;
    return(
        <div style={{ display: 'flex', marginLeft: '20px'}}>
            <div>
                <CountBox count={habitDetail.daysCount} />
            </div>    
            <div>
                <h3 style={{ color: 'green' }}>{habitDetail.name}({habitDetail.daysCount}/{habitDetail.total})</h3>
                <div>{habitDetail.description}</div>
            </div>
        </div>
    );
}

export default HabitListBox;

