import React, { Component } from 'react'
import { Card, Avatar, Col, Button, DatePicker } from 'antd';
import moment from 'moment';
const { Meta } = Card;

export class Note extends Component {
    render() {
        return (
            <>
                {this.props.notes.map(note =>
                    <Col key={note.id} span={8} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{ width: 300, marginTop: 16, color: '#B16E4B' }} 
                            headStyle={{backgroundColor: '#FDCF76', color: '#B16E4B'}}
                            bodyStyle={{backgroundColor: '#FCF0CF'}}
                            title={note.title}
                            extra={<Button>X</Button>}
                            actions={[<>Duedate: <DatePicker
                                showTime format="YYYY-MM-DD"
                                defaultValue={moment(note.duedate)} /></>]}
                        >
                            <Button type='danger' style={{ width: 50, marginRight: 10, backgroundColor: '#FA9D9D' }}  >{note.tag}</Button>
                            <span style={{backgroundColor: '#F5F5F5', padding: 5}}>created: {note.created}</span>
                            <Meta
                                avatar={<Avatar size={50} src="https://huntpng.com/images250/dancing-minion-png-7.png" />}
                                description={note.content}
                            />
                            {}
                        </Card>
                    </Col>
                )}
            </>
        )
    }
}

export default Note
