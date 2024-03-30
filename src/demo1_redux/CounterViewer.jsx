import {useSelector} from 'react-redux'

export default function CounterViewer() {

    const counter = useSelector((store) => store )

  return  (
    <div style={{border: "2px solid green"}}> 
    
    <h2>Counter is: {counter}</h2>
    </div>
  )
}
