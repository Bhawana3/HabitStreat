import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div>
                <ul style={{ display: 'flex' }}>
                    <li style={{ margin: '10px' }}><Link to='/list'>List Habit</Link></li>
                    <li style={{ margin: '10px' }}><Link to='/update'>Update Progress</Link></li>
                    <li style={{ margin: '10px' }}><Link to='/create'>Add Habit</Link></li>
                </ul>
            </div>);
    }
}

export default Sidebar;