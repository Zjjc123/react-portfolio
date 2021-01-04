import React from "react"
import Social from "../components/Social"

function About() {
  const links = [
    { src: process.env.PUBLIC_URL + 'images/logos/linkedin.svg', url: 'https://www.linkedin.com/in/zjjc123/' },
    { src: process.env.PUBLIC_URL + 'images/logos/instagram.svg', url: 'https://www.instagram.com/jasonzhang02' },
    { src: process.env.PUBLIC_URL + 'images/logos/youtube.svg', url: 'https://www.youtube.com/channel/UC4oYKaYEiIQ_5h2i5RW8yeQ' },
    { src: process.env.PUBLIC_URL + 'images/logos/twitch.svg', url: 'https://www.twitch.tv/zjjc1234' }
  ]

  return (
    <div className='white-page'>
      <div className='container'>
        <div className="hero">
          <div className="hero-images">
            <img src={process.env.PUBLIC_URL + 'images/face.jpg'} alt="face1" />
          </div>
          <div className="hero-content">
            <h1>
              <div className="hero-content-line-inner">Jason Zhang</div>
            </h1>
            <p>
              Jason Zhang is a current high school senior attending Eastlake High School.
              He is a software developer and an aspiring filmmaker and photographer.
            </p>
            <div className="logos">
              {
                links.map(
                  link => {
                    return <Social src={link.src} url={link.url} />
                  }
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
