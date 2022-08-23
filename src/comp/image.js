import React from 'react';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import './Modal.css';

const Image =({setImage,image})=> {
 const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setImage(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
		return (
			<div className="page">
				<div className="container">
					<h1 className="heading">Add the movie poster</h1>
					<div className="img-holder">
						<img src={image} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons"><AiOutlinePlusSquare/></i>
						
					</label>
          </div>
				</div>
			</div>
		);
	}


export default Image;