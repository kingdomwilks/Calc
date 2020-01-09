import React from 'react';
import CalculatorButton from './CalculatorButton'



class ButtonContainer extends React.Component{ 

    render() {
    return (
        <div className="button-container">
            <div className="row1">
            <CalculatorButton onClick={this.props.onClick} inputValue="clear" clasz="button-clear"/>
            <CalculatorButton onClick={this.props.onClick} inputValue="/" clasz="button-input"/>
            </div>
            <div className="row1">
            <CalculatorButton onClick={this.props.onClick} inputValue={1} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue={2} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue={3} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue="-" clasz="button-input"/>
            </div>
            <div className="row1">
            <CalculatorButton onClick={this.props.onClick} inputValue={4} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue={5} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue={6} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue="+" clasz="button-input"/>
            </div>
            <div className="row1">
            <CalculatorButton onClick={this.props.onClick} inputValue={7} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue={8} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue={9} clasz="button"/>
            <CalculatorButton onClick={this.props.onClick} inputValue="=" clasz="button-input"/>
            </div>
        </div>
    )
}
}

export default ButtonContainer;