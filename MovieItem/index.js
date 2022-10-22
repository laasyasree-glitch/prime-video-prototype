import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  return (
    <li className="listItem">
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button className="trigger-button" type="button">
              <img
                className="thumbnailUrl"
                src={thumbnailUrl}
                alt="thumbnail"
              />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="card">
              <div className="responsive-container">
                <ReactPlayer className="video" url={videoUrl} />
              </div>
              <div className="closeButtonContainer">
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <IoMdClose />
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </li>
  )
}
export default MovieItem
