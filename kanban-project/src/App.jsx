import { useState } from 'react';
import './styles.css';

export default function App(){


    const [items, setItems] = useState([1, 2])

    const addListItem = () => {
        setItems([...items, items.length + 1]);
    };

    const removeListItem = () => {
        if(items.length > 0){
        setItems(items.slice(0,-1));
        }
    };

    const [text, setText] = useState("")

    return (
        <div>
            <h1 >My Grocery List</h1>
             {/* <ul id="list">
                <li>Soup</li>
                <li>Chicken</li>
                <li>Eggs</li>
            </ul>  }*/}

            <ul>
                {items.map((num) => (
                    <li key={num}>{num}</li>
                ))}
            </ul>

                <button onClick={addListItem}>Add</button>
                <button onClick={removeListItem}>Remove</button>
        </div>
    );
}
