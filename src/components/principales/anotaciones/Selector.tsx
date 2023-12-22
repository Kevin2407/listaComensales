import React, { Component } from 'react';

interface OpcionesSelectorState {
    selectedOption: string | null;
}

class Selector extends Component<{}, OpcionesSelectorState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedOption: null,
        };
    }

    handleOptionClick = (option: string) => {
        this.setState({ selectedOption: option });
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div className='border m-3 rounded-xl w-fit h-fit overflow-hidden '>
                {["●", "T", "X", "A", "V"].map((option) => (
                    <div
                        key={option}
                        onClick={() => this.handleOptionClick(option)}
                        className={`inline-block p-2 m-0 cursor-pointer ${selectedOption === option ? ' bg-red text-gray-light' : 'hover:bg-gray hover:text-gray-light'
                            }`}
                    >
                        {option}
                    </div>
                ))}
            </div>
        );
    }
}

export default Selector;
