import { Link } from 'react-router-dom'
import category from '../../assets/category.svg'

const collapsible = (e) => { 
  let target = e.target.parentElement;
  let links = target.nextSibling;
  console.log(links)
  links.style.display === 'block' ? links.style.display = 'none': links.style.display='block'
}

const CategoryBtn = (props) => {
  // Collapse/Expand functionality built here
  return (
    <div className='categories'>
      <button className='category-btn' onClick={collapsible}><img src={category}/></button>
      {/* the URI's are placeholders for now */}
      <div className="category-links" style={{ display: 'none' }}>
        <br />
      <Link to='/categorya'>
        <div>A</div>
        </Link>
        <br />
      <Link to='/categoryb'>
        <div>B</div>
        </Link>
        <br />
      <Link to='/categoryc'>
        <div>C</div>
        </Link>
      </div>
    </div>
  )
}

export default CategoryBtn