import NavBar from '../components/NavBar'
import style from '../style/landing.module.css'

// DONE 
const Landing = (props) => {
  
  return (
    <div className={style.landing}>
      <NavBar />
      <h1> Welcome to DevHub!</h1>
      <p>Let's make your work more organized and easily accessible with DevHub.</p>
      {/* enter screenshots into srcs */}
      <div className={style.big_image_container}>
        <img className={style.big_image} src='https://www.designyourway.net/blog/wp-content/uploads/2019/06/dshb.jpg' alt='Example of DevHub Dashboard' />
      </div>
      <div className={style.small_image_container}>
        {/* add functionality for clicking image to pop up modal of expanded image */}
        <img className={style.small_images} src='https://i.pinimg.com/originals/5e/43/84/5e4384e31285bba73d5129f4a1517aca.png' alt='DevHub Screenshots' />
        <img className={style.small_images} src='https://i.pinimg.com/originals/5e/43/84/5e4384e31285bba73d5129f4a1517aca.png' alt='DevHub Screenshots' />
        <img className={style.small_images} src='https://i.pinimg.com/originals/5e/43/84/5e4384e31285bba73d5129f4a1517aca.png' alt='DevHub Screenshots' />
        <img className={style.small_images} src='https://i.pinimg.com/originals/5e/43/84/5e4384e31285bba73d5129f4a1517aca.png' alt='DevHub Screenshots' />
      </div>
    </div>
  )
}

export default Landing