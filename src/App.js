//import logo from './logo.svg';
import './App.css';
import data from './components/FakeData/fakeData.json'
import { useEffect, useState } from 'react';
import User from './components/User/User';
import Cart from './components/Cart/Cart';


function App() {
      //console.log(data);
      const [users, setUsers] = useState([]);
      const [cart, setCart] = useState([]);
      
      useEffect(() => {
        setUsers(data);
      },[])

      const handleAddUser = (user) => {
        const newCart = [...cart, user]
        setCart(newCart);
      }
      

  return (
    <div className="App">
      <h1>Friend Added: {cart.length} </h1>
      <Cart cart={cart}></Cart>
      <div>
          {
            users.map(user => <User user={user} handleAddUser={handleAddUser} key={user.id}></User> )
          }
      </div>
    </div>
  );
}

export default App;
