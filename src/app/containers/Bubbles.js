import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bubbles extends Component {
    constructor(props) {
        super(props);
    }

    generateBubbles() {
        const bubbles = [];

        for(let i = 0; i < 40; i++) {
            let bubbleCls = 'stage bubble-' + this.getRandomNumber();
            const bubble = (<section className={ bubbleCls}>
                <figure className="ball">
                    <span className="iris"></span>
                </figure>
            </section>);
            bubbles.push(bubble);
        }
        return bubbles;
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 10 + 1);
    }

    render() {
        return (
            <section className="bubbles">
                <div className="col-12 bubble-wrapper">
                    {this.generateBubbles()}
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state,
    };
}

function mapDispatchToProps() {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Bubbles);
