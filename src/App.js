import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistic from './components/Statistic/Statistic';

import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/' ,element:<Main></Main>,children:[
        {
          path: '/home',
          element:<Home></Home>
        },
        {
          path: '/topics',
          loader:() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }
          ,
          element: <Topics></Topics>
        },
        {
          path:'/topic/:topicId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
        },
        element: <Quiz></Quiz>
      },

        {
          path: '/statistic',
          
          loader:() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistic></Statistic>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },

      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>




      
    </div>
  );
}

export default App;
