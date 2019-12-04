import React, { Component } from 'react'
import './App.css';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';
import TagList from './components/TagList';
import NoteSearch from './components/NoteSearch';
import { Row } from 'antd';
import { uniqueId } from 'lodash'

export class App extends Component {

  state = {
    notes: [
      { id: '01', title: 'Bebie', content: 'ABCDEF', tag: 'A', duedate: '05/12/2019', created: '02/12/2019 14:23' },
      { id: '02', title: 'Bebiez', content: 'ABCDEFGHIJ', tag: 'B', duedate: '05/12/2019' , created: '02/12/2019 14:23' }
    ],
    dataNote: []
  }

  // this.handleAddNote=this.contenthandleAddNote.bind(this)

  handleAddNote = (e) => {
    e.preventDefault()
    let dataNote = this.state.dataNote

    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uniqueId(),
          title: dataNote.title,
          content: dataNote.content,
          tag: dataNote.tag,
          duedate: dataNote.duedate
        }
      ]
    })

  }

  handleOnChangeTitle = e => {
    this.setState({
      dataNote: { ...this.state.dataNote, title: e.target.value }
    })
  }

  handleOnChangeContent = e => {
    this.setState({
      dataNote: { ...this.state.dataNote, content: e.target.value }
    })
  }

  handleonChangeDate = date => {
    const selectedDate = date.format('YYYY-MM-DD HH:mm')

    this.setState({
      dataNote: { ...this.state.dataNote, duedate: selectedDate }
    })
  }

  handleOnChangeTag = data =>{
    this.setState({
      dataNote: { ...this.state.dataNote, tag: data }
    })
  }

  render() {
    return (
      <div className="App">
        <Row>
          <NoteForm
            dataNote={this.state.dataNote}
            onChangeTitle={this.handleOnChangeTitle}
            onChangeContent={this.handleOnChangeContent}
            onChangeTag={this.handleOnChangeTag}
            onChangeDate={this.handleonChangeDate}
            onAddNote={this.handleAddNote} />
          <br />
          <NotesList notes={this.state.notes} />
        </Row>

        <Row type='flex' align='bottom' justify='space-around' style={{ backgroundColor: '#FA9D9D', padding: '10px' }}>
          <TagList />
          <NoteSearch />
        </Row>
      </div>
    )
  }
}

export default App

