import React from 'react'

class CalculatorButton extends React.Component {

    

   render() {

    return (
        <button  
            className={this.props.clasz} 
            onClick={this.props.onClick}
            inputValue={this.props.inputValue}
        >
            {this.props.inputValue}
        </button>
    );
    }
}

export default CalculatorButton;