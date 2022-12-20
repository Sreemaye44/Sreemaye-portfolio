import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import Aboutme from './Components/Aboutme/Aboutme';
import Particlebackground from './Components/Particlebackground/Particlebackground';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>

    },
    {
      path: 'about',
      element: <Aboutme></Aboutme>
    }
  ])
  return (
    <div className="App">
      <Particlebackground></Particlebackground>
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
