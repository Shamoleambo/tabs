import MovieGenre from './components/MovieGenre'
import DATA from './data'

function App() {
  return (
    <>
      <h1>My favorite movies</h1>
      <h2>The best list ever is mine of course</h2>
      <section class='genres-section'>
        <h3>Movie Genre</h3>
        <div className='movie-genres'>
          {DATA.map((datum) => (
            <MovieGenre key={datum.title} {...datum} />
          ))}
        </div>
      </section>
    </>
  )
}

export default App
