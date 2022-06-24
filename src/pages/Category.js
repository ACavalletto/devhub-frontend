import React from 'react'
import Icon from '../assets/coolicon.svg';
import style from '../style/category.module.css'
import { useState, useEffect } from 'react'


const Category = ({ user, id, URL, category }) => {

  const [information, setInformation] = useState([])
console.log(id)
  const getData = async () => {
    const response = await fetch(URL + 'category/' + id + category)
    const data = await response.json();
    const { content } = data;
    console.log(data)
    setInformation(content);
  }
  const deleteContent = async (id) => {
    await fetch(URL + 'content/' + id, {
      method: 'DELETE',
    })
    getData();
  }
  useEffect(() => { getData()}, [])

  // const createContent = async (content, reference) => {
  //   await fetch(URL + '/content' + reference, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'Application/json',
  //     },
  //   })
  //   getData();
  // }

  const loaded = () => {

    return information.map((element) => (
      
      <div className={style.card}>
        <span className={style.alltext}>
          <span className={style.devtext}>
            <span>{element.title}</span>
          </span>
          <h5>{user}</h5>
          <span className={style.frame10_text7}>
            Last Updated:
          </span>
          <span className={style.frame10_text8}> {element.updatedAt}</span>
        </span>
          <button className={style.frame10_edit_button} onClick={deleteContent.bind(this, element._id )}>
          <img src={Icon} alt='Edit Button' className={style.frame10_editedit} />
          <div className={style.allcontent}>
            {element.content}
          </div>
          </button>
          <div className={style.frame10_image}>
            <div className={style.frame10_aspect}></div>
          </div>
      </div>
          
    ))
  }
  return information? loaded(): <h1>Loading...</h1>
}




export default Category