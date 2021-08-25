import './menu.scss'

import MenuItem from './MenuItem'

export default function Menu({ menuOpen, setMenuOpen }) {
  const list = [
    {
      id: '#intro',
      title: 'Intro'
    },
    {
      id: '#portfolio',
      title: 'Portfolio'
    },
    {
      id: '#works',
      title: 'Works'
    },
    {
      id: '#testimonials',
      title: 'Testimonials'
    },
    {
      id: '#contact',
      title: 'Contact'
    }
  ]

  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        {list.map(item => (
          <MenuItem
            id={item.id}
            itemName={item.title}
            setMenuOpen={setMenuOpen}
          />
        ))}
      </ul>
    </div>
  )
}
