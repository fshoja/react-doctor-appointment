import React from 'react'

export default function Header() {
  return (
      <header className="header">
        <h1 className="logo">MediTrack</h1>

        <nav className="nav">
          <a href="#home">خانه</a>
          <a href="#doctors">پزشکان</a>
          <a href="#appointments">نوبت‌های من</a>
        </nav>

        <button className="header-btn">
          رزرو نوبت
        </button>
      </header>
  )
}
