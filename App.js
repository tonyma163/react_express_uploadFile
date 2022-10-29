//import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);

  const fileUploaded = (e) => {
    setFile(e.target.files[0]);
  }

  const upload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3001/uploadFile', formData)
    .then(res=> {
      console.log(res);
    })
    .catch(err=> {
      console.log(err);
    });
  }

  return (
    <div className="App">
    <h1>Upload File</h1>
    <form onSubmit={upload}>
      <input
        type="file"
        onChange={fileUploaded} />
      <br />
      <input
        type="submit"
        value="Upload" />
    </form>
    </div>
  );
}

export default App;
