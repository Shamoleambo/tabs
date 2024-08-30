function TabContent({ title, imageSource, explanation }) {
  return (
    <div className='tab-content'>
      <h4>{title}</h4>
      <img src={imageSource} alt={title} />
      <p>{explanation}</p>
    </div>
  )
}

export default TabContent
