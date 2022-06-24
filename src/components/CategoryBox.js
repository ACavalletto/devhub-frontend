import React from 'react'
import Icon from '../assets/coolicon.svg';
import style from '../style/category.module.css'

const Category = (props) => {
  // const {user:{displayName}} = props
  // Render based on render prop passed into page
 
    return (
    <div className={style.frame10_container}>
      <div className={style.frame10_frame10}>
        <div className={style.frame10_group32}>

          <div className={style.frame10_group26}>
            <span className={style.frame10_text}>
              <span className={style.frame10_text1}>
                <div>
              <span>DevHub Copy</span>
                <br></br>
                <span></span>
                </div>
              </span>
              
              <span className={style.frame10_text5}>
              <div>
                <h5>Nick</h5>
                </div></span>
                
            </span>
            <span className={style.frame10_text6}>
              <span className={style.frame10_text7}>
                Last Updated:

              </span>
              <span className={style.frame10_text8}></span>
            </span>
          </div>
          <button className={style.frame10_edit_button}>
            <img src={Icon} alt='Edit Button'className={style.frame10_editedit}/>
            
          </button>
          <div className={style.frame10_image}>
            <div className={style.frame10_aspect}></div>
          </div>
        </div>
      </div>
    </div>
        )
    
    }
    
    
    export default Category