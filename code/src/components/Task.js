import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from '../reducers/tasks'
import { Button } from '../styledComponents/Button'
import { DoubleButtons } from '../styledComponents/DoubleButtons'
import { List } from '../styledComponents/List'
import { ListItem } from '../styledComponents/ListItem'
import { CustomCheckBox } from 'components/CustomCheckBox'


export const Task = ({ itemIndex }) => {
  const item = useSelector(store => store.tasks.list.items[itemIndex])
  const dispatch = useDispatch()

  const handleOnChange = event => {
    dispatch(tasks.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }))
  }

  const onRemoveClicked = event => {
    dispatch(tasks.actions.removeTodo({
      itemIndex: itemIndex,
    }))
  }

  return (
    <List>
      <ListItem isChecked={item.done ? 'checked' : ''}
        onChangeHandler={handleOnChange}>{item.description}</ListItem>
      <DoubleButtons>
        <CustomCheckBox
          isChecked={item.done ? 'checked' : ''}
          onChangeHandler={handleOnChange}
        />
        <Button onClick={onRemoveClicked}>
          Remove
      </Button>
      </DoubleButtons>
    </List>
  )
}