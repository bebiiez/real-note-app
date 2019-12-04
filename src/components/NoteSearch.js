import React, { Component } from 'react'
import { Icon, Input } from 'antd'

export class NoteSearch extends Component {
    render() {
        return (
            <div>
                <Input
                    prefix={<Icon type="search"
                        style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Search Note"
                />

            </div>
        )
    }
}

export default NoteSearch
