import NavBar from '../components/NavBar'
import style from '../style/landing.module.css'

// DONE 
const Landing = (props) => {
  
  return (
    <div className={style.landing}>
      <NavBar />
      <h1><span>The first<br /></span>
       <span>all in one<br /></span>
      <span>Project Manager</span></h1>
      <p>Let's make your work more organize and easily using the DevHub with<br /> many of the latest features in managing work every day.</p>
      {/* enter screenshots into srcs */}
      <div className={style.big_image_container}>
        <img className={style.big_image} src='https://i.imgur.com/eyp7ytL.png' alt='Example of DevHub Dashboard' />
      </div>

    </div>
  )
}

export default Landing