import React, { Component } from 'react';

class ListAppointments extends Component {
    render() {
        const listItems = this.props.appointments.map(item=> (
            <div>
              <div>{item.petName}</div>
              <div>{item.owner}</div>
            </div>
            ));


             return <div>{listItems}</div>
    }
}


export default ListAppointments;