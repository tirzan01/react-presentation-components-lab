// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {

    constructor() {
        super()

        this.state = {
            mood: 'happy',
        }
    }

    handleClick = () => {
        this.setState(prevState => {return {mood: prevState.mood === 'happy' ? 'sad' : 'happy'}})
        
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }

}

export default SimpleComponent
// prevState === 'Happy' ? 'Sad' : 'Happy'