import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import ListHabit from './ListHabit';
import AddHabit from './AddHabit';
import UpdateProgress from './UpdateProgress';

const style = {
    color: 'white'
}

const App = () => {
    return(
        <div>
            <BrowserRouter>
            <div style={{ display: 'flex', background: 'green', color: 'white',padding: '10px', marginBottom: '10px' }}>
                <h2>Habit Streak</h2>
                <div style={{ display: 'flex', margin: '16px' }}>
                    <div style={{ margin: '10px', color: 'white' }}><Link to='/list' style={style}>List Habit</Link></div>
                    <div style={{ margin: '10px', color: 'white' }}><Link to='/update' style={style}>Update Progress</Link></div>
                    <div style={{ margin: '10px', color: 'white' }}><Link to='/create' style={style}>Add Habit</Link></div>
                </div>
            </div>
            {/* <Sidebar /> */}
            <Route
                path="/list"
                component={ListHabit}
                exact 
            />
            <Route
                path="/create"
                component={AddHabit}
                exact 
            />
            <Route
                path="/update"
                component={UpdateProgress}
                exact 
            />
            </BrowserRouter>
        </div>
    );
}

export default App;