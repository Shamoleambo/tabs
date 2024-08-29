import { useState } from 'react'
import MovieGenre from './components/MovieGenre'
import DATA from './data'

function App() {
  const [tabContent, setTabContent] = useState('')

  function handleClick(title) {
    console.log(title)
    setTabContent(title)
  }

  return (
    <>
      <h1>My favorite movies</h1>
      <h2>The best list ever is mine of course</h2>
      <section className='genres-section'>
        <h3>Movie Genre</h3>
        <div className='movie-genres'>
          {DATA.map((datum) => (
            <MovieGenre key={datum.title} {...datum} />
          ))}
        </div>
      </section>
      <section className='movie-reveal-section'>
        {DATA.map((datum) => (
          <button key={datum.title} onClick={() => handleClick(datum.title)}>
            {datum.title}
          </button>
        ))}
        {tabContent}
      </section>
    </>
  )
}

export default App
