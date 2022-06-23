import React from 'react'
import Icon from '../assets/coolicon.svg';
import style from '../style/category.module.css'

const Category = (props) => {
  // const {user:{displayName}} = props
  // Render based on render prop passed into page
 
    return (
    
      <><div className={style.card}>
        <span className={style.alltext}>
          <span className={style.devtext}>
            <span>DevHub Copy</span>
          </span>
            <h5>Nick</h5>
          <span className={style.frame10_text8}>Last Updated:June 16 2022: 12:30 PM</span>
        </span>
      </div><button className={style.frame10_edit_button}>
          <img src={Icon} alt='Edit Button' className={style.frame10_editedit} />
        </button><div className={style.frame10_image}>
          <div className={style.frame10_aspect}>
          </div>
        </div></>
  
    )

}
export default Category