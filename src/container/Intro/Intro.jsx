import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (playVideo) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  })
  return (
    <div className="app__video">
      <video
        ref={videoRef}
        src={meal}
        muted
        loop
        controls={false}
        type="video/mp4"
      />
      <div className="app__video-overlay">
        <div className="app__video-overlay_circle" onClick={() => { setPlayVideo(!playVideo) }}>
          {
            playVideo
              ?
              (<BsPauseFill color="#fff" size={30} />)
              :
              (<BsFillPlayFill color="#fff" size={30} />)
          }
        </div>
      </div>
    </div>
  )
}
export default Intro
