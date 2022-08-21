import React from 'react';

interface State {
  stops: Date[];
}

export default class Counter extends React.Component<{}, State> {
  state: State = {
    stops: [],
  };

  addMeasure = (): void => this.setState((state) => ({ stops: state.stops.concat(new Date()) }));

  render: () => JSX.Element = () => {
    return (
      <div className="counter_container">
        <h1 className="counter_title">Training</h1>
        <p className="counter_description">There are {this.state.stops.length} stops</p>
        <button className="counter_button" onClick={this.addMeasure}>
          Add measure
        </button>
        <ol className="counter_list">
          {this.state.stops.map((m: Date): JSX.Element => (
            <li key={m.getTime()} className="counter_listItem">
              {m.toLocaleTimeString()}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
