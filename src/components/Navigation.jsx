import './Navigation.css'

// My logo.
import { TbLetterA } from 'react-icons/tb'

import NavigationMenus from './NavigationMenus.jsx'

export const Navigation = () => {
  return (
    <aside className='navigation'>
      <div className='navigation__container'>
        <div className='logo'><TbLetterA /></div>
        <nav>
          <NavigationMenus />
        </nav>
      </div>
    </aside>
  )
}
