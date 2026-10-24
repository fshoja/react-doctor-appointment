import React from 'react'

export default function Hero() {
  return (
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-label">
              مراقبت بهتر، زندگی سالم‌تر
            </p>

            <h2>
              مراقبت از سلامتی،
              <br />
              ساده‌تر از همیشه
            </h2>

            <p className="hero-description">
              پزشک موردنظر خود را پیدا کنید و به‌راحتی
              نوبت پزشکی رزرو کنید.
            </p>

            <a href="#doctors" className="hero-btn">
              مشاهده پزشکان
            </a>
          </div>

          <div className="hero-image">
            <img
              src="/img/doctorall.png"
              alt="پزشک"
            />
          </div>
        </section>
      </main>
  )
}
