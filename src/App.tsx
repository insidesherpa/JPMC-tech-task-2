import React, { Component } from 'react';
import DataStreamer, { ServerRespond } from './DataStreamer';
import Graph from './Graph';
import './App.css';

interface IState {
  data: ServerRespond[],
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
    };
  }

  renderGraph() {
    return (<Graph data={this.state.data}/>)
  }

  getDataFromServer() {
    DataStreamer.getData((serverResponds: ServerRespond[]) => {
      this.setState({ data: [...this.state.data, ...serverResponds] });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Bank Merge & Co Task 2
        </header>
        <div className="App-content">
          <button className="btn btn-primary Stream-button" onClick={() => {this.getDataFromServer()}}>Start Streaming Data</button>
          <div className="Graph">
            {this.renderGraph()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
