import { useState } from 'react'
import MovieGenre from './components/MovieGenre'
import TabButton from './components/TabButton'
import { GENRE_DATA, MOVIE_DATA } from './data'
import TabContent from './components/TabContent'

function App() {
  const [tabContent, setTabContent] = useState(null)

  function handleClick(id) {
    const movieData = MOVIE_DATA.filter((movie) => movie.id === id)[0]
    setTabContent(<TabContent {...movieData} />)
  }

  return (
    <>
      <h1>My favorite movies</h1>
      <h2>The best list ever is mine of course</h2>
      <section className='genres-section'>
        <h3>Movie Genre</h3>
        <div className='movie-genres'>
          {GENRE_DATA.map((datum) => (
            <MovieGenre key={datum.id} {...datum} />
          ))}
        </div>
      </section>
      <section className='movie-reveal-section'>
        {GENRE_DATA.map((datum) => (
          <TabButton
            key={datum.id}
            content={datum.title}
            id={datum.id}
            onClick={handleClick}
          />
        ))}
        {tabContent}
      </section>
    </>
  )
}

export default App
