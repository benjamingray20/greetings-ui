import React, { useState } from 'react'

export default () => {
  const [slug, setSlug] = useState('')
  const hello = useState('It is nice to meet you ')


  return (
    <div className="page">
      <div className="title">To whom am I speaking?</div>
      <input type="text" onChange={(event) => { setSlug(event.target.value) }} value={slug} />
      <div className="slug">
        {hello}
        {slug}
      </div>


    </div>
  )
}
