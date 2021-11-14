import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NotePreview from './NotePreview'

const note = {
  id: '1',
  content: 'This is it!',
  visibility: '2',
  author: {
    name: 'Max'
  }
}

const teams = [
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

describe('NotePreview component', () => {
  test('Renders note with correct content', () => {
    render(<NotePreview note={note} teams={teams} />)
    expect(screen.getByText(note.content)).toBeInTheDocument()
  })
  test('Renders note with correct author', () => {
    render(<NotePreview note={note} teams={teams} />)
    expect(screen.getByText(note.author.name)).toBeInTheDocument()
  })
  test('Renders note with correct team', () => {
    render(<NotePreview note={note} teams={teams} />)
    expect(screen.getByText(teams[1].name)).toBeInTheDocument()
  })
})
