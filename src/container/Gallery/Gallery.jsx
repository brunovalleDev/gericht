import React, { useRef } from 'react'
import images from '../../constants/images.js';
import SubHeading from '../../components/SubHeading/SubHeading.jsx'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css'


const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }
  return (
    <div className="app__gallery">

      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h2>Photo Gallery</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button>View More</button>
      </div>

      <div className="app__gallery-carrousel">
        <div className="app__gallery-carrousel_container" ref={scrollRef}>
          {
            [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) =>
            (
              <div className="app__gallery-carrousel_container-image" key={`image__gallery | ${index}`}>
                <img src={image} alt="gallery__img" />
                <div className="app__gallery-carrousel_container-overlay">
                  <BsInstagram className="gallery__instagram" />
                </div>
              </div>
            )
            )
          }
          <div className="app__gallery-carrousel_container-arrows">
            <BsArrowLeftShort className="gallery-arrow" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery-arrow" onClick={() => scroll('right')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
