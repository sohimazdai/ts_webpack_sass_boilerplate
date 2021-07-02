import React from 'react';

type State = {
  measures: Date[],
};

export default class Measures extends React.Component<{}, State> {
  state: State = {
    measures: [],
  };

  addMeasure = (): void => {
    this.setState({ measures: this.state.measures.concat(new Date()) });
  }

  render() {
    return (
      <div className="measures_container">
        <h1 className="measures_title">Training</h1>
        <p className="measures_description">Measures</p>
        <button
          className="measures_button"
          onClick={this.addMeasure}
        >
          Add measure
        </button>
        <ol className="measures_list">
          {this.state.measures.map((m) => (
            <li
              key={m.getTime()}
              className="measures_listItem"
            >
              {m.toLocaleTimeString()}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}