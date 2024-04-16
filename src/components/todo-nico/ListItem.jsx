import { useState } from 'react';

import Button from './Button';
import Input from './Input';

function ListItem(props) {
  const [message, setMessage] = useState(props.item);

  const onNewMessage = (event) => {
    setMessage(event.target.value);
  }

  return (
    <li style={{ marginBottom: '15px' }}>
      <span>{props.item}</span>
      <div>
        <Input onChange={onNewMessage} value={message} />
        <Button onClick={() => props.onEdit(props.item, message)} label={'Modifier'} />
        <Button onClick={() => props.onRemove(props.item)} label={'Supprimer'} />
      </div>
    </li>
  );
}

export default ListItem;
