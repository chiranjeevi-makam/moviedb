import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'

class Popular extends Component {
  state = {posterData: [], typeName: ''}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${'256523ad59c77acbdc3fef4b0cf95016'}&language=en-US&page=1`
    const position = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 256523ad59c77acbdc3fef4b0cf95016 ',
      },
    }
    const response = await fetch(url, position)
    const data = await response.json()
    const {results} = data
    console.log(data)
    const dataFormat = results.map(each => ({
      adult: each.adult,
      backdropPath: each.backdrop_path,
      id: each.id,
      originalLanguage: each.original_language,
      originalTitle: each.original_title,
      overview: each.overview,
      popularity: each.popularity,
      posterPath: each.poster_path,
      releaseDate: each.release_date,
      title: each.title,
      video: each.video,
      voteAverage: each.vote_average,
      voteCount: each.vote_count,
    }))
    console.log(dataFormat)
    this.setState({posterData: dataFormat, typeName: 'Popular'})
  }

  render() {
    const {posterData, typeName} = this.state
    return (
      <div>
        <Header />
        <h1 className="mainHead">{typeName}</h1>
        <ul className="displayMovies">
          {posterData.map(object => (
            <li className="posterDisplay">
              <img
                src={`https://image.tmdb.org/t/p/original${object.posterPath}`}
                alt={object.posterPath}
                className="specifications"
                key={object.posterPath}
              />
              <div className="detailStructure">
                <div>
                  <p className="title">{object.title}</p>
                  <p className="average">{object.voteAverage}</p>
                </div>
                <Link to={`/${object.id}`}>
                  <button type="button">View Details</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Popular
