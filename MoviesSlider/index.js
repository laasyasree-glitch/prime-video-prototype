import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  const {moviesList} = props
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem details={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
