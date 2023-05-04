import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ButtonComponent from './components/ButtonComponent';
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Product from './pages/ProductPage'
import { Layout } from 'antd';


function App() {
  const [count, setCount] = useState(0)

  return (
     <Layout>
     <Header></Header>
     <Routes>
     <Route path="/" element={ <HomePage/> } />
     <Route path="/product/:id" element={ <Product/> } />
   </Routes>
     <Footer></Footer>
     </Layout>
  )
}

export default App
