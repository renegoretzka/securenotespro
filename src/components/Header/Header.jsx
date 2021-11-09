import React from 'react'
import Head from 'next/head'

export default function Header({ title = 'Secure Notes Pro' }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
