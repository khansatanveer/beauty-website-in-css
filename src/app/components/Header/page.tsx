'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top bar */}
      <div className="top-bar">
        <span className="top-bar-text">Extra 10% OFF On Your First Order</span>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="brand">
          BEAUTY
          </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="hamburger-icon"
          aria-label="Toggle menu"
        >
          <svg
            className="icon-svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`navigation ${isMenuOpen ? "navigation-open" : ""}`}>
          <div className="nav-links">
            <Link href="/Home" className="nav-item">
              Home
              <span className="nav-underline"></span>
            </Link>
            <Link href="/About" className="nav-item">
              About
              <span className="nav-underline"></span>
            </Link>
            <Link href="/Contact" className="nav-item">
              Contact
              <span className="nav-underline"></span>
            </Link>
          </div>
        </nav>
      </div>
      <hr className="divider" />
    </header>
  );
};

export default Header;
