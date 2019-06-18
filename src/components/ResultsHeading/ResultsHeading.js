import React from 'react';

export class ResultsHeading extends React.Component {
    render() {
        return (
            <h1 className="lobstah">Heres all the {this.props.term} that you can handle in {this.props.city}</h1>
        )    
    }
}