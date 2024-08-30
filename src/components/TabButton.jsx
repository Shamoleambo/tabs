function TabButton({ content, id, onClick }) {
  return <button onClick={() => onClick(id)}>{content}</button>
}

export default TabButton
