import './Home.css'
// Multilanguage (Format.JS library).
import { FormattedMessage } from 'react-intl'
import ME from '../assets/me.png'

export const Home = () => {
  return (
    <section className='home-section' id='home'>
      <div className='container'>
        <div className='home-section__container--text'>
          <h1><FormattedMessage id='my-name-is' defaultMessage='My name is' /><span>Asiel Valle Valera.</span></h1>
          <h2><FormattedMessage id='occupation' defaultMessage="I'm a Web Developer." /></h2>
          <p className='text-justify'><FormattedMessage id='explain-occupation' defaultMessage="I'm knowledgeable about a wide range of technologies for software development. I have a passion for creating resilient, scalable, and maintainable software. I'm excited to improve the experiences of the users. I'm meticulous in my attention to the details." /></p>
          <a href='#about' className='about-me-button'><FormattedMessage id='about-me-button' defaultMessage='More about me' /></a>
        </div>
        <div className='home-section__container--my-img'>
          <img src={ME} alt='My image' />
        </div>
      </div>
    </section>
  )
}
