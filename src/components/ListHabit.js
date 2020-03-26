import React, {Component} from 'react';
import HabitListBox from './HabitListBox';
import habitPayload from "../data/habitList.json";

class ListHabit extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                {habitPayload.map(habit => (
                    <HabitListBox habitDetail={habit}  key={habit.id}/>
                ))}
            </div>
        );
    }
}

export default ListHabit;