

import Menu from "../../components/Menu/Menu" 
import styles from "./show.module.scss" 
import React from "react"
import MD5 from 'crypto-js/md5';

import  PaginationComponent  from "../../components/Pagination/PaginationComponent"


export default async  function Page({params: {page : [id, sortType]}}){
    // console.log(page)
    console.log(id, sortType)
    let data
    const data1 = await fetch(`http://localhost:8080/users?page=${id}&sort=${sortType}`)

        data = await data1.json()
        // console.log(data.content)
      




    let count;
    const response = await fetch(`http://localhost:8080/recordCount`);
    
    if (!response.ok) {
      console.error("Error fetching record count:", response.statusText);
    } else {
      count = await response.json();
      console.log("Count:", count); 
    }        
    return (

    <>
    <Menu/>
    <div className="container">

    <h1>Show users</h1> 
        <div className={styles.dataview}>
            <div className={styles.header}>login</div>
            <div  className={styles.header}>name</div>
            <div className={styles.header}>surname</div>
        {
                data.content?.map((item, i) => {
                    const modifiedSurname = item.surname + "_"+ MD5(item.name).toString()
                   return  <React.Fragment key= {i}>
                    <div >{item.login} </div>
                    <div >{item.name} </div>
                    <div >{modifiedSurname} </div>
                    </React.Fragment>
                
                })
            }
        </div>
        
    <PaginationComponent page={parseInt(id)} count = {parseInt(count)} sortType = {sortType}
     ></PaginationComponent>

    </div>
        </>

)}