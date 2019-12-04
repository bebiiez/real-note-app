import React, { Component } from 'react'
import { Row } from 'antd';
import Note from './Note';

export class NotesList extends Component {
    render() {
        return (
            <Row>
                <Note notes={this.props.notes} />
            </Row>
        )
    }
}

export default NotesList
