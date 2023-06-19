import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Form from './Components/Form'
import Forgetpage from './Components/ForgetPage'
// import authContext from './context'
// import { useContext } from 'react'

function App () {
  // const [authenticated, setAuthenticated] = useState(false);
  return (
    // <authContext.Provider value={{authenticated,setAuthenticated}}>
      <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/form' element={<Form />} />
              {/* <Route path='/form' element={!authenticated ? <Login /> : <Form />} /> */}
              <Route path='/forget' element={<Forgetpage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      // </authContext.Provider>
  )
}

export default App
