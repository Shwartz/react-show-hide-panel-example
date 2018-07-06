import React from "react";

import "./Panel.css";

const mock: String[] = [
  "Click outside the Panel to close it",
  "First item",
  "Second item",
  "Third item"
];

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  isOpen: boolean = false;

  items = mock.map((item, index) => {
    return <li key={index}> {item}</li>;
  });

  listeners() {
    this.isOpen
      ? document.addEventListener("mousedown", this.handleClickOutside)
      : document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.togglePanel();
    }
  }

  togglePanel() {
    this.isOpen = !this.isOpen;
    this.listeners();
    this.setState({
      isOPen: this.isOpen
    });
  }

  render() {
    return (
      <div ref={this.wrapperRef} className="Panel">
        <button className="Button" onClick={this.togglePanel.bind(this)}>
          Toggle Panel
        </button>
        {this.isOpen ? <ul className="PanelList">{this.items}</ul> : null}
      </div>
    );
  }
}

export default Panel;
