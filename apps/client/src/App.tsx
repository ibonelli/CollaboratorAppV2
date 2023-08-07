import { useEffect, useState } from 'react'
import DataTable from './components/Table'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then(setGreeting)
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
      <br/>
      <DataTable/>
     </>
  )
}

export default App
