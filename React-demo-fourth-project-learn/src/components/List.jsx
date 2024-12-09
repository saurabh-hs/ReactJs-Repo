import React from 'react'

const List = ({items}) => {
  return (
    <table>
        <tbody>
            {items.map(food => (
                <tr key={food.id}>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default List
