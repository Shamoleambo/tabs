function TabButton({ content, id, onClick }) {
  return <button className='tab-button' onClick={() => onClick(id)}>{content}</button>
}

export default TabButton
