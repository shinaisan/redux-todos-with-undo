import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import {
  Form,
  FormControl,
  FormGroup,
  Button
} from 'react-bootstrap';

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
        inline
      >
        <FormGroup>
          <Button type="submit" bsStyle="primary">
            +
          </Button>
          <FormControl
            type="text"
            placeholder="Todo"
            inputRef={node => {
              input = node
            }}
            size="50"
          />
        </FormGroup>
      </Form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo

