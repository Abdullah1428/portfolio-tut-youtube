export default function MenuItem({ id, itemName, setMenuOpen }) {
  return (
    <li onClick={() => setMenuOpen(false)}>
      <a href={id}>{itemName}</a>
    </li>
  )
}
