import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { todoListSelector } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Todo from '../Todo';


export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector)
  
  const handleAdd = () => {
    dispatch(addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      completed: false
    }))
    setTodoName('')
    setPriority('Medium')
  }

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriority = (value) => {
    setPriority(value)
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} priority={todo.priority} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
