import React from 'react'

export default function List (props) {
    return (
      <div className="list-wrapper">
      <ul className="d-flex flex-column-reverse todo-list">
        {props.items.map((item) => (
          <li key={item.id}>
            <span className="form-check-label"
              onClick={() => props.toggle && props.toggle(item.id)}
              style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
                {item.name}
            </span>
            <button className="remove mdi mdi-close-circle-outline" onClick={() => props.remove(item)}>
              X
            </button>
          </li>
        ))}
      </ul>
      </div>
    )
}