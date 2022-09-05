import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Style.css';

const App = () => {
  let time= new Date().toLocaleTimeString();
  const [curtime, setcurtime] = useState(time);


  const updatedfunction=() => {
    time = new Date().toLocaleTimeString()
     setcurtime(time);
    }
    setInterval (updatedfunction,1000)

  return (


    <>
    <div className= "counterdiv">
    <h1 className='text-center'>
       Time- {curtime}
      </h1>

    </div>
    </>
  )
}

export default App;


