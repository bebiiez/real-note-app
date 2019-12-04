import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Select, DatePicker } from 'antd';
const { TextArea } = Input;
const { Option } = Select;


export class NoteForm extends Component {

    render() {
        const { onChangeTitle, dataNote, onChangeContent, onAddNote, onChangeDate, onChangeTag } = this.props

        return (
            <Row type='flex' justify='center'>
                <Col span={15}>

                    <Row ><h1>REAL WORLD NOTE APP</h1></Row>

                    <Row type='flex' justify='center' style={{ border: '1px solid rgba(0,0,0,.25)', padding: '10px' }}>
                        <Col ><h3>Add a Note</h3></Col>
                        <Form>
                            <Col span={24}>
                                <Form.Item>
                                    <Input
                                        prefix={<Icon type="form"
                                            style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Title"
                                        width='100%'
                                        onChange={onChangeTitle}
                                        value={dataNote.title}
                                    />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item>
                                    <TextArea
                                        rows={4}
                                        placeholder="Content"
                                        onChange={onChangeContent}
                                        value={dataNote.content}
                                    />
                                </Form.Item>
                            </Col>

                            {/* <Row> */}

                            <Col span={8}>
                                <Form.Item >
                                    <Select style={{ width: 120 }} onChange={onChangeTag} options={dataNote.tag} >
                                        <Option value="A">A</Option>
                                        <Option value="B">B</Option>
                                        <Option value="C">C</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <DatePicker
                                    showTime format="YYYY-MM-DD HH:mm"
                                    onChange={onChangeDate}
                                    selected={dataNote.duedate}
                                />
                            </Col>

                            <Col span={8}>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit"
                                        onClick={onAddNote}>ADD NOTE</Button>
                                </Form.Item>
                            </Col>

                            {/* </Row> */}

                        </Form>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default NoteForm
