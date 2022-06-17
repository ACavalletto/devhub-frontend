import { Link } from 'react-router-dom'

const CategoryBtn = (props) => {
  // Collapse/Expand functionality built here
  return (
    <div className='categories'>
      {/* the URI's are placeholders for now */}
      <Link to='/categorya'>
        <div>Category A</div>
      </Link>
      <Link to='/categoryb'>
        <div>Category B</div>
      </Link>
      <Link to='/categoryc'>
        <div>Category C</div>
      </Link>
    </div>
  )
}

export default CategoryBtn