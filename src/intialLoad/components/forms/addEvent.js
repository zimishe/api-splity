/**
 * Created by eugene on 06/09/17.
 */

import React, { Component } from 'react'

class AddEventForm extends Component {
    toggleForm() {
        let form = document.querySelector('.add-event__form');
        
        if (form !== null) {
            form.classList.toggle('add-event__form--visible');
        }
    }
    
    render() {
        let inputFromProps = {
                placeholder : 'Дата:',
                name: 'new_event_date',
                required: 'required',
                id: 'new_event_date'
            };
        
        return (
            <div className="add-event">
                <button className="add-event__toggle" onClick={this.toggleForm}>Додати подію</button>
            </div>
        )
    }
}

export default AddEventForm