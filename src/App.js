import React, { Component } from 'react';
import './App.css';
import { Tabs, Tab, Button } from 'react-bootstrap';


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    alert(`selected ${key}`);
    this.setState({ key : key });
  }

  render() {
    return (

      <div>
        <Button bsStyle="primary">primary button</Button>

        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example"
        >
          <Tab eventKey={1} title="Tab 1">
            Tab 1 content
        </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
            
        </Tab>
          <Tab eventKey={3} title="Tab 3" disabled>
            Tab 3 content
        </Tab>
        </Tabs>
      </div>

    );
  }
}


export default App;
