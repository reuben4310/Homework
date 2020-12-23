import React, { Component } from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div class="calculator">
                <div id="screen" class="screen">{this.props.input}</div>
                <div class="buttons">
                    <button onClick={e => this.props.onClick(e.target.name)} class="btn clear" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                    <button name="&lt;-" onClick={e => this.props.onClick(e.target.name)} class="btn backspace">&lt;-</button>
                    <button name="/" onClick={e => this.props.onClick(e.target.name)} class="btn operator divide">/</button>
                    <button name="7" onClick={e => this.props.onClick(e.target.name)} class="btn number seven">7</button>
                    <button name="8" onClick={e => this.props.onClick(e.target.name)} class="btn number eight">8</button>
                    <button name="9" onClick={e => this.props.onClick(e.target.name)} class="btn number nine">9</button>
                    <button name="*" onClick={e => this.props.onClick(e.target.name)} class="btn operator multiply">*</button>
                    <button name="4" onClick={e => this.props.onClick(e.target.name)} class="btn number four">4</button>
                    <button name="5" onClick={e => this.props.onClick(e.target.name)} class="btn number five">5</button>
                    <button name="6" onClick={e => this.props.onClick(e.target.name)} class="btn number six">6</button>
                    <button name="-" onClick={e => this.props.onClick(e.target.name)} class="btn operator minus">-</button>
                    <button class="btn number one" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button name="2" onClick={e => this.props.onClick(e.target.name)} class="btn number two">2</button>
                    <button name="3" onClick={e => this.props.onClick(e.target.name)} class="btn number three">3</button>
                    <button name="+" onClick={e => this.props.onClick(e.target.name)} class="btn operator plus">+</button>
                    <button name="0" onClick={e => this.props.onClick(e.target.name)} class="btn number zero">0</button>
                    <button name="=" onClick={e => this.props.onClick(e.target.name)} class="btn equal">=</button>
                </div>
            </div>

        );
    }
}


export default KeyPadComponent;