import React from 'react'

export default function Button(props) {
  return (
    <div>
        <button style={props.styles}>{props.title}</button>
      
    </div>
  )
}
