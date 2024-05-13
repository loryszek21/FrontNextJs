'use client'
import { useRef, useState } from "react";
import Menu from "../components/Menu/Menu"
import PopUp from "../components/Modal/Modal"
import style from "./add.module.scss"
import { motion } from "framer-motion";

export default function Page() {


    const [file, setFile] = useState()
    const [data, setData] = useState()

  const handleChange = event => {

    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      const body = new FormData();
    //   body.append("xmlFile", selectedFile);
    //   console.log("Wybrany plik XML:", selectedFile);


    }
  };


  const handleClick = async event => {
    event.preventDefault()
    console.log(file)
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch('http://localhost:8080/add',{
        method: 'POST',
        // headers: { 'Content-Type': 'multipart/form-data;' },
        body: formData
        // body: {file:file}
        
    }).then(res => 
        setData(res.json()),
        setShowModal(true)
    )
    console.log(data)

  };
  const [showModal, setShowModal] = useState(false);

    return (
        <>
        <Menu/>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="formFile" className="form-label" ><h1>Add users to database </h1></label>
                        <input className="form-control mb-2" type="file" id="formFile" onChange={handleChange}></input>
                        <motion.input whileHover={{scale:1.1}} whileTap={{scale:0.9}} className="btn btn-primary" type="submit" onClick={handleClick} value="Submit"></motion.input>
                    </div>
                </form>
            </div>

        <PopUp isOpen={showModal}setOpened={setShowModal}>
            {data&&<h2 className={style.text}>{data}</h2>}

            
        </PopUp>
        </>

    )
}



