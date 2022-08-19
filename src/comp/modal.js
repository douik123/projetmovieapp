import "./Modal.css";
import React, { useState } from "react";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { Rate } from 'antd';
import Image from './image.js'
function App() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
      setModal(!modal);
    };
    const toggleModale = () => {
        setModal(!modal);
      };
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  
    return (
      <>
        <button onClick={toggleModal} className="btn-modal">
        <BsFillPlusCircleFill className='plus'/>
        </button>
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <h2 className="titrePoopUp">Add Movie</h2>
                <div className="inputs">
              <label className="labels">Name:</label>
              <input type="text" name="T2" size="20" placeholder='Name' className='inputsearch'/>
              </div>
              <div className="inputs">
              <label className="labels">Description:</label>
              <input type="text" name="T2" size="20" placeholder='Description' className='inputsearch'/>
              </div>
              <div className="inputs">
                <Image/>
                </div>
                <div className="rateInput">Movie rating:<Rate className="rating" defaultValue={0} /></div>
                
             
              
              <button className="annuler-modal" onClick={toggleModal}>
                Annuler
              </button>
              <button className="confirmer-modal" onClick={toggleModale}>
                Confirmer
              </button>
            </div>
          </div>
        )}
      </>
  );
}

export default App;
