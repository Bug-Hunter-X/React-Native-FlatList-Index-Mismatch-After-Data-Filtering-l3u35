To fix this, use a unique key for each item in the `keyExtractor` prop. This will ensure that the index prop correctly reflects the item's position even after filtering or sorting. If you do not have a unique identifier in the data, you can generate one using a library such as `uuid`.

Example (Solution):
```javascript
import { uuid } from 'uuid'; // Or any other unique ID generator

const data = [{id: uuid(), text: 'item 1'}, {id: uuid(), text: 'item 2'}, {id: uuid(), text: 'item 3'}];
const filteredData = data.filter(item => item.id !== data[1].id);

return (
  <FlatList
    data={filteredData}
    renderItem={({ item, index }) => <Text>{item.text} - Index: {index}</Text>}
    keyExtractor={item => item.id}
  />
);
```
By using a unique identifier (`item.id` in this case), the `FlatList` correctly associates each item with its index, even if the data source has changed.