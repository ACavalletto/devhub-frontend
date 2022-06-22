import { Link } from 'react-router-dom'
import category from '../../assets/category.svg'
import style from '../../style/sidebar.module.css'
const collapsible = (e) => { 
  let target = e.target.parentElement;
  let links = target.nextSibling;
  console.log(links)
  links.style.display === 'block' ? links.style.display = 'none': links.style.display='block'
}

const CategoryBtn = (props) => {
  // Collapse/Expand functionality built here
  return (
    // line 15-16 are not being called correctly/line 18 is fine
    <div className={style.categories}>
      <button className={style.category_btn} onClick={collapsible}><img src={category}/></button>
      {/* the URI's are placeholders for now */}
      <div className={style.category_links} style={{ display: 'none' }}>
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