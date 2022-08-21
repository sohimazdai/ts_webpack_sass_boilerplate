import React from 'react';

interface State {
  stops: Date[];
}

export default class Measures extends React.Component<{}, State> {
  state: State = {
    stops: [],
  };

  addMeasure = (): void => this.setState((state) => ({ stops: state.stops.concat(new Date()) }));

  render: () => JSX.Element = () => {
    return (
      <div className="measures_container">
        <h1 className="measures_title">Training</h1>
        <p className="measures_description">There are {this.state.stops.length} stops</p>
        <button className="measures_button" onClick={this.addMeasure}>
          Add measure
        </button>
        <ol className="measures_list">
          {this.state.stops.map((m: Date): JSX.Element => (
            <li key={m.getTime()} className="measures_listItem">
              {m.toLocaleTimeString()}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
