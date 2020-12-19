import React from 'react'
import './ListComponent.css'
class ListComponent extends React.Component {
  constructor(props) {
    super(props)
    buttons = props.messages;
    this.state = {
      lastClickedButton: ''
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.buttons.map((button, i) => (

            <button key={i}
              onClick={() => {
                this.setState({ lastClickedButton: button.type })
                button.callAction()
              }}
              className='my-button'>
              {button.name}
            </button>
          ))}
        </ul>
      </div>
    )
  }
}