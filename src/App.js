import React, { Component } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = null;
    this.state = {
      filePath: ''
    };
  }
  fileChangeHandle = e => {
    console.log(e.target.value);
    this.setState({ filePath: e.target.value });
  };
  handleClick = e => {
    ReactDom.findDOMNode(this.inputElement).click();
  };
  render() {
    return (
      <div>
        <div>
          <h3>测试1</h3>
          <input
            type="file"
            accept="image/*"
            capture="camera"
            ref={input => (this.inputElement = input)}
            onChange={this.fileChangeHandle}
            style={{ display: 'none' }}
          />
          <button onClick={this.handleClick}>上传文件</button>
          <div>文件路劲：{this.state.filePath}</div>
        </div>
        <div>
          <h3>测试2</h3>
          <input
            type="file"
            accept="image/*"
            capture="camera"
            onChange={this.fileChangeHandle}
          />
        </div>
        <div>
          <h3>测试3(not all)</h3>
          <input
            type="file"
            onChange={this.fileChangeHandle}
          />
        </div>
        <div>
          <h3>测试4(not accept)</h3>
          <input
            type="file"
            capture="camera"
            onChange={this.fileChangeHandle}
          />
        </div>
      </div>
    );
  }
}

export default App;
