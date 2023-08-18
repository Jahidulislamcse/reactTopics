import React from 'react'

export default function Child(props) {

    const data3 = 'I am from Child';
    props.onChangeChildData(data3)
  return (
    <div>
    <p>I am Child component </p>
    <p>{props.data2}</p>
    </div>
  )
}
