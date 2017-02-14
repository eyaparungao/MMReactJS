import React, { Component } from 'react';
import Card from './Card';

export default class CardCollection extends Component {
    render() {
        return (
            <div className='card-collection'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}