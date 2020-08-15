import React, { Component } from 'react';

var ButtonParent = (BasicComponent, parameterPassedToHoc) => {
    class NewBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
                text: "hello world"
            }
            this.incrementCount = this.incrementCount.bind(this);
        }
        incrementCount() {
            this.setState((prevState) => (
                {
                    count: prevState.count + 1 + parameterPassedToHoc
                }
            ))
        }
        render() {
            return (
                <div>
                    <BasicComponent {...this.state}
                        increment={this.incrementCount} {...this.props}/>
                </div>
            )
        }
    }
    return NewBtn
}

export default ButtonParent;