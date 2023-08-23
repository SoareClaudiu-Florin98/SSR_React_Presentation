import { useEffect, useState } from 'react'
import builders from '../../assets/images/interior_builders.svg'
import './Home.scss'
export default function Home() {
  const BuildersImg = () => {
    const [showLogo, setShowLogo] = useState(false)
    useEffect(() => {
      setShowLogo(true)
    }, [showLogo])
    if (showLogo) {
      return <img src={builders} alt="Builders" />
    }
    return <></>
  }
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="row">
            <h1 className="title">
              Cine v-a lucrat aici? A făcut o treabă <span>excelentă</span>
            </h1>
            <p className="subtitle">
              Amenajări interioare și exterioare la standarde superioare de
              calitate
            </p>
            <div className="contact-holder">
              <button type="button" className="contact-us-btn">
                Contactează-ne
              </button>
              <div className="customers">
                <p>
                  Alătură-te celor peste <span>1000</span> de clienti mulțumiți
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <BuildersImg />
        </div>
      </section>
    </>
  )
}
