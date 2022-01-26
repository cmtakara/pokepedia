import { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/index'


// pages
import Login from './pages/Login'


//contexts
import UserContext from './contexts/UserContext'
import PokemonList from './pages/PokemonList';
import Home from './pages/Home'

const App = () => {

  // in order for us to use our context, we start by importing
  // then we can utilize useContext (not to be confused with the UserContext that we created)

  // const user = useContext(UserContext)
  // console.log(user)
  
  const [user, setUser] = useState('')

  return (
    <div className="App">
      
      {/* all content comes with the provider component.  This allows us to user this as a wrapper and share information to all of the childred */}
      {/* We need the value prop inside our provider */}

      HELLO WORLD!
      <UserContext.Provider value={user}>
        <Nav />

        {/* We need to wrap all of our routes inside of react router routes component */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='login' element={<Login setUser={setUser} />}/>
          <Route path='pokemon/list' element={<PokemonList />} />
        </Routes>

      </UserContext.Provider>
    </div>
  );
}

export default App;
