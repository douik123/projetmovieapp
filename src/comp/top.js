import { TbMovie } from 'react-icons/tb';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';



function top() {
  return (
    <div className="alltop">
      <div className='top'>
        <div className='nameadmin'>
            <TbMovie/>
            Douikix
            </div>
        <div className='topright'>
            <div><BsFillPlusCircleFill className='plus'/></div>
            <div className='searchspace'>
            <input type="text" name="T1" size="20" placeholder='Quick Search' className='inputsearch'/>
            <button className='buttonsearch'><BsSearch/></button>  
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default top;
