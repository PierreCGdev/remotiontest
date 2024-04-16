import ListItem from './ListItem';

function List(props) {
  const handleRemoveItem = (item) => {
    props.updateItems(prevItems => {
      return prevItems.filter(i => i !== item);
    });
  };

  const handleEditItem = (item, message) => {
    const itemKey = props.items.indexOf(item);
    if (itemKey > -1) {
      const newItems = props.items.map((value, index) => {
        if (index === itemKey) {
          return message;
        }

        return value;
      });

      props.updateItems(newItems);
    }
  };

  const renderContent = () => {
    return props.items.map((item) => {
      return (
        <ListItem
          key={item}
          item={item}
          onRemove={handleRemoveItem}
          onEdit={handleEditItem} />
      );
    });
  };

  return (
    <ul>
      {renderContent()}
    </ul>
  );
}

export default List;