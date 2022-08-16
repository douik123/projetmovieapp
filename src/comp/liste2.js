import React  from 'react';
import { Rate } from 'antd';
function App(props) {
console.log(props)

  return(
<div className='card'>
<div className='imageprop'>{props.data.image}</div>
<div className='name'><h2>{props.data.name}</h2></div>
<div className='y'>
  <div className='description'><h4>{props.data.description}</h4></div>
  
</div>

</div> 
    
  );
}

export default App;