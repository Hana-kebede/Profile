import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
//import Avatar from './Avatar';
const ProfilePictureInput = ({ onPictureChange }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [src, setSrc] = useState("");
  
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === 'image') {
      setSelectedFile(file);
      setSrc(URL.createObjectURL(file));
      onPictureChange(file);
    } else {
      setSelectedFile(null);
      setSrc(null);
    }
  };
  

  return (
<div>
 <img
    className="edit-icon"
    loading="lazy"
    alt=""
    src={src}/>
    
    <InputText type="file" onChange={handleFileChange}  />
    
     </div>
     );
    };

export default ProfilePictureInput;
