import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import NotesList from './NotesList'

const notes = [
  {
    id: '1',
    content: 'This is a note!',
    visibility: '2',
    author: {
      name: 'Max'
    }
  },
  {
    id: '2',
    content: 'This is a note!',
    visibility: '1',
    author: {
      name: 'Max'
    }
  },
  {
    id: '3',
    content: 'This is a note!',
    visibility: '3',
    author: {
      name: 'Max'
    }
  },
  {
    id: '4',
    content: 'This is a note!',
    visibility: '2',
    author: {
      name: 'Max'
    }
  }
]

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

describe('NotesList component', () => {
  test('Renders list with the correct amount of notes.', () => {
    render(<NotesList notes={notes} teams={teams} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })
})
