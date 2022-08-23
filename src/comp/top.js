import { TbMovie } from 'react-icons/tb';
import { BsSearch } from 'react-icons/bs';
import Modal from './modal.js'
import React, { useState } from "react";
import { BsFillPlusCircleFill } from 'react-icons/bs';
function Top({setSearchTerm,setName,setDescription,setImage,image,setRate,addNewMovie}) {
const handleChange=(e)=>{
 setSearchTerm(e.target.value);
};
const [modal, setModal] = useState(false);
const AnnulerModal = () => {
  setModal(!modal);
};
const ConfirmerModale = () => {
    addNewMovie()
    setModal(!modal);

  };
  return (
    <div className="alltop">
      <div className='top'>
        <div className='nameadmin'>
            <TbMovie/>
            Douikix
            </div>
        <div className='topright'>
            {/* <div><BsFillPlusCircleFill className='plus'/></div> */}
            <button onClick={AnnulerModal} className="btn-modal">
        <BsFillPlusCircleFill className='plus'/>
        </button>
           {modal&& <Modal AnnulerModal={AnnulerModal} ConfirmerModale={ConfirmerModale} setName={setName} setDescription={setDescription} setImage={setImage} image={image} setRate={setRate}/>}
            <div className='searchspace'>
              <form name='f1'>
            <input type="text" name="t1" size="20" placeholder='Quick Search' className='inputsearch' onChange={(e)=>handleChange(e)}/> 
            </form>  
            <button className='buttonsearch'><BsSearch/></button>  
            
            </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
