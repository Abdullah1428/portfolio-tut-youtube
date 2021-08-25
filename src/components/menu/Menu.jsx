import './menu.scss'

import MenuItem from './MenuItem'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <MenuItem id='#intro' itemName='Intro' setMenuOpen={setMenuOpen} />
        <MenuItem
          id='#portfolio'
          itemName='Portfolio'
          setMenuOpen={setMenuOpen}
        />
        <MenuItem id='#works' itemName='Works' setMenuOpen={setMenuOpen} />
        <MenuItem
          id='#testimonials'
          itemName='Testimonials'
          setMenuOpen={setMenuOpen}
        />
        <MenuItem id='#contact' itemName='Contact' setMenuOpen={setMenuOpen} />
      </ul>
    </div>
  )
}
