import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'

import Note from './Note'

const note = {
  id: '1',
  content: 'This is it!',
  visibility: '2',
  author: {
    name: 'Max'
  }
}

const visibilities = [
  {
    id: '1',
    name: 'Random Company'
  },
  {
    id: '2',
    name: 'Random Team 1'
  },
  {
    id: '3',
    name: 'Random Team 2'
  }
]
function submitFunction(args) {}
const submitText = 'Submit'

describe('Note component', () => {
  test('Renders new note', () => {
    render(
      <Note
        visibilities={visibilities}
        onSubmit={submitFunction}
        submitButtonText={submitText}
      />
    )
    expect(screen.getByText(submitText)).toBeInTheDocument()
  })
  test('Renders new note with company preselected', () => {
    render(
      <Note
        visibilities={visibilities}
        onSubmit={submitFunction}
        submitButtonText={submitText}
      />
    )
    expect(screen.getByText(visibilities[0].name)).toBeInTheDocument()
  })
  test('Renders edit note with author', () => {
    render(
      <Note
        note={note}
        visibilities={visibilities}
        onSubmit={submitFunction}
        submitButtonText={submitText}
      />
    )
    expect(screen.getByText(note.author.name)).toBeInTheDocument()
  })
  test('Renders edit note with correct team selected', () => {
    render(
      <Note
        note={note}
        visibilities={visibilities}
        onSubmit={submitFunction}
        submitButtonText={submitText}
      />
    )
    expect(screen.getByText(visibilities[1].name)).toBeInTheDocument()
  })
  test('Renders edit note with content', () => {
    render(
      <Note
        note={note}
        visibilities={visibilities}
        onSubmit={submitFunction}
        submitButtonText={submitText}
      />
    )
    expect(screen.getByText(note.content)).toBeInTheDocument()
  })
  test('User clicks submit button calls callback function', () => {
    let called = undefined
    function callback(args) {
      called = true
    }
    render(
      <Note
        note={note}
        visibilities={visibilities}
        onSubmit={callback}
        submitButtonText={submitText}
      />
    )
    user.click(screen.getByText(submitText))
    expect(called).toBeTruthy()
  })
  test('User types into textarea and clicks submit button', () => {
    const text = 'Some content'

    let called = undefined
    function callback(args) {
      called = args
    }
    render(
      <Note
        note={note}
        visibilities={visibilities}
        onSubmit={callback}
        submitButtonText={submitText}
      />
    )
    user.type(screen.getByRole('textbox'), text)
    user.click(screen.getByText(submitText))
    expect(called.content).toBe(`${note.content}${text}`)
  })
  test('User clicks delete button', () => {
    let called = undefined
    function callback(args) {
      called = true
    }
    render(
      <Note
        note={note}
        visibilities={visibilities}
        onSubmit={submitFunction}
        onDelete={callback}
        submitButtonText={submitText}
      />
    )
    user.click(screen.getByText('Delete'))
    expect(called).toBeTruthy()
  })
})
