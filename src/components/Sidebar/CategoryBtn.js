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
      <div className="category-links" style={{ display: 'none'}}>
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
    </div>
  )
}

export default CategoryBtn