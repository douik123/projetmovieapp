import "./Modal.css";
import { Rate } from 'antd';
import Image from './image.js'
function Modale({AnnulerModal,ConfirmerModale,setName,setDescription,setImage,image,setRate}) {

    return (
      <>
          <div className="modal">
            <div onClick={AnnulerModal} className="overlay"></div>
            <div className="modal-content">
                <h2 className="titrePoopUp">Add Movie</h2>
                <div className="inputs">
              <label className="labels">Name:</label>
              <input type="text" name="T2" size="20" placeholder='Name' className='inputsearch'onChange={(e)=>{
                setName(e.target.value)
              }}/>
              </div>
              <div className="inputs">
              <label className="labels">Description:</label>
              <input type="text" name="T2" size="20" placeholder='Description' className='inputsearch'onChange={(e)=>{
                setDescription(e.target.value)
              }}/>
              </div>
              <div className="inputs">
                <Image setImage={setImage} image={image}/>
                </div>
                <div className="rateInput">Movie rating:<Rate className="rating" onChange={(e)=>{
                setRate(e)
              }} /></div>
                
             
              
              <button className="annuler-modal" onClick={AnnulerModal}>
                Annuler
              </button>
              <button className="confirmer-modal" onClick={ConfirmerModale}>
                Confirmer
              </button>
            </div>
          </div>
      </>
  );
}

export default Modale;
