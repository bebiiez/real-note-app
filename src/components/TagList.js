import React, { Component } from 'react'
import { Radio } from 'antd'

export class TagList extends Component {
    render() {
        return (
            <Radio.Group>
                <Radio.Button value="A">A</Radio.Button>
                <Radio.Button value="B">B</Radio.Button>
                <Radio.Button value="C">C</Radio.Button>
                <Radio.Button value="ALL">ALL</Radio.Button>
            </Radio.Group>
        )
    }
}

export default TagList
