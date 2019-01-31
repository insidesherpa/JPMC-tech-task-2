import React, { Component } from 'react';
import { Table } from '@jpmorganchase/perspective';
import { ServerRespond } from './DataStreamer';
import './Graph.css';

interface IProps {
  data: ServerRespond[],
}

interface PerspectiveViewerElement {
  load: (table: Table) => void,
}
class Graph extends Component<IProps, {}> {
  table: Table | undefined;

  render() {
    return React.createElement('perspective-viewer');
  }

  componentDidMount() {
    // Get element from the DOM.
    const elem: PerspectiveViewerElement = document.getElementsByTagName('perspective-viewer')[0] as unknown as PerspectiveViewerElement;

    const schema = {
      stock: 'string',
      top_ask_price: 'float',
      top_bid_price: 'float',
      timestamp: 'date',
    };

    this.table = window.perspective.worker().table(schema);
    if (this.table) {
      // Load the `table` in the `<perspective-viewer>` DOM reference.
      elem.load(this.table);
    }
  }

  componentDidUpdate() {
    if (this.table) {
      this.table.update(this.props.data.map((el: any) => {
        return {
          stock: el.stock,
          top_ask_price: el.top_ask && el.top_ask.price || 0,
          top_bid_price: el.top_bid && el.top_bid.price || 0,
          timestamp: el.timestamp,
        };
      }));
    }
  }
}

export default Graph;
