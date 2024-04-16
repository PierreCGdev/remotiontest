import { useState } from 'react';

import Input from './Input';
import Button from './Button';
import List from './List';

function Todo() {
  const [message, setMessage] = useState('');
  const [items, setItems] = useState([]);

  const onNewMessage = (event) => {
    setMessage(event.target.value);
  }

  const addNewMessage = () => {
    setItems(prevItems => prevItems.concat(message));
    setMessage('');
  };

  return (
    <div>
      <Input onChange={onNewMessage} value={message} />
      <Button onClick={addNewMessage} label={'Ajouter'} />
      <List items={items} updateItems={setItems} />
    </div>
  );
}

export default Todo;