import NavBar from '../components/NavBar'

const Login = (props) => {
  return (
    <div className='landing'>
      <NavBar />
      <h1> Welcome to DevHub!</h1>
      <p>Let's make your work more organized and easily accessible with DevHub.</p>
      {/* enter screenshot */}
      <img className='big-image'src='' alt='Example of DevHub Dashboard' />
      <img className='small-images' src='' alt='DevHub Screenshots' />
      <img className='small-images' src='' alt='DevHub Screenshots' />
      <img className='small-images' src='' alt='DevHub Screenshots' />
      <img className='small-images' src='' alt='DevHub Screenshots' />
    </div>
  )
}

export default Login