import React from 'react';
import * as Api from 'typescript-fetch-api'

const api = new Api.DefaultApi()

class EventsTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            events: [], 
            targetDate: '2020-03-23' };

        this.handleReload = this.handleReload.bind(this);
    }


    async handleReload(event) {
        const response = await api.events({ date: this.state.targetDate });
        this.setState({ events: response });
    }


    render() {
        return <div>
            <button onClick={this.handleReload}>Reload</button>
            <h3>Event table</h3>
            <h4>Demonstration of typescript fetch with JSX</h4>
            <table>
               {this.state.events.map(
                   (event) => 
                        <tr><td>{event.id}</td><td>{event.name}</td></tr>)}
            </table>
        </div>
    }
}

export default EventsTable;