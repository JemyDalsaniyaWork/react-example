import logo from './logo.svg';
import './App.css';

// export default function ShoppingList() {
//     const listItems = products.map(product =>
//         <li
//             key={product.id}
//             style={{
//                 color: product.isFruit ? 'magenta' : 'darkgreen'
//             }}
//         >
//             {product.title}
//         </li>
//     );
//     return (
//         <ol>{listItems}</ol>
//     );
//
//
// }


import { useState } from 'react';

// function App() {
//     return (
//        <>
//         {/* <h1>Hello all</h1>
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo"/>
//                     <p>
//                         Edit <code>src/App.js</code> and save to reload.
//                     </p>
//                     <a
//                         className="App-link"
//                         href="https://reactjs.org"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Learn React
//                     </a>
//                 </header>
//             </div>*/}
//         </>
//     );
// }

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

 function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}
// export default MyApp

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

// export default function Profile() {
//     return (
//         <>
//             <h1>{user.name}</h1>
//             <img
//                 className="avatar"
//                 src={user.imageUrl}
//                 alt={'Photo of ' + user.name}
//                 style={{
//                     width: user.imageSize,
//                     height: user.imageSize
//                 }}
//             />
//         </>
//     );
// }

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];
//
// export default function MyAppClick() {
//     return (
//         <div>
//             <h1>Counters that update separately</h1>
//             <MyButtonClick />
//             <MyButtonClick />
//         </div>
//     );
// }
//
// function MyButtonClick() {
//     const [count, setCount] = useState(0);
//
//     function handleClick() {
//         setCount(count + 1);
//     }
//
//     return (
//         <button onClick={handleClick}>
//             Clicked {count} times
//         </button>
//     );
// }

export default function MyAppClick() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButtonClick count={count} onClick={handleClick} />
            <MyButtonClick count={count} onClick={handleClick} />
        </div>
    );
}

function MyButtonClick({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}




// export default App;
