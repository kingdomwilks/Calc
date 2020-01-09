import React from 'react';
import ButtonContainer from './ButtonContainer';
import Display from './Display';
import update from 'immutability-helper';
import {create, all} from 'mathjs';

class CalculatorContainer extends React.Component {

    state = {
        operations: []
    }

   calculateOperations = () => {
        let result = this.state.operations.join('')
        const math = create(all)
        if (result) {
            let nextResult = math.evaluate(result)
            this.setState({
                operations: [nextResult],
            })
        }
    }

    handleClick = (e) => {
        const value = e.target.getAttribute('inputValue')
        switch(value) {
            case 'clear' :
                this.setState({
                    operations: [],
                })
                break
            case '=' :
                this.calculateOperations()
                break
            default:
                const newOperations = update(this.state.operations, {
                    $push: [value],
                })
                this.setState({
                    operations: newOperations,
                })
                break
        }
    }

        onKeyPress = e => {
            const value = e.key;

            const allowed = [
                '1', '2', '3', '4',
                '5', '6', '7', '8',
                '9', '+', '-', '/', '=', '.',
                'Enter', 'equal', 'Backspace'
            ];

            if (allowed.includes(value)) {
                switch(value) {
                    case 'Escape' :
                        this.setState({
                            operations: [],
                        })
                        break
                    case 'Backspace':
                        const backspaceOp = this.state.operations;
                        backspaceOp.pop()
                        this.setState({
                            operations: backspaceOp,
                        })
                        break
                    case '=':
                    case 'Enter':
                        this.calculateOperations()
                        break
                    default:
                        const newOps = update(this.state.operations, {
                            $push: [value],
                        })
                        this.setState({
                            operations: newOps,
                        })
                        break
                }
            }
        }
    
    componentWillMount = (e) => {
        document.addEventListener('keydown', this.onKeyPress.bind(this));
    }
    
    render() {
        console.log(this.state.currentValue);
    return (
        <div className="calculator-container">
            <Display
                operations={this.state.operations}
            />
            <ButtonContainer
                onClick={this.handleClick}
            />
        </div>
    )
}
}

export default CalculatorContainer;