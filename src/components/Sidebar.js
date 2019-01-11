import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu';

class Sidebar extends Component {
    componentDidMount() {
        // const node = this.node;
        // const { type, data, options } = this.props;
    }
    render() {
        return (
            <div>
                <Menu>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                    <a className="menu-item" href="/">Home</a>
                </Menu>
            </div>
        );
    }
}

export default Sidebar;
{/* <canvas style={style} ref={node => (this.node = node)} /> */}
