import React from 'react';

const styles= {
    border: 'solid 1px green',
    width: '40px',
    padding: '20px',
    background: 'green',
    color: 'white',
    fontWeight: '600',
    marginBottom: '10px',
    marginRight: '10px'
}

const CountBox = (props) => {
    return(
        <div style={styles}>{props.count} Days</div>
    );
}

export default CountBox;