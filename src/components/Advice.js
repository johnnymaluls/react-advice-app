import React, { Component } from 'react'
import axios from 'axios'

export class Advice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            advice: '',
            id: 5
        }
    }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get(`https://api.adviceslip.com/advice/${this.state.id}`)
            .then((response) => {
                var data = JSON.parse(response.data + "}");
                const { advice } = data.slip;
                //const { advice } = response.data.slip;
                this.setState({ advice: advice })
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleClick = () => {
        const random = Math.floor(Math.random() * Math.floor(200));
        this.setState({
            id: random
        });

        this.fetchAdvice();
        console.log('CLICKED')
    }

    render() {
        const { advice } = this.state

        return (
            <div className="appli">
                <div className="head">
                    <h1 className="title">SILLY ADVICE</h1>
                </div>
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.handleClick}>
                        <span>GIVE ME ADVICE!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Advice
