import React from 'react';

function Navbar() {
  return (
    <header id='header' className='header d-flex align-items-center'>
      <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
        <a href='index.html' className='logo d-flex align-items-center'>
          <img src='img/logo.png' alt='' />
          <h1>
            SNS IMUN<span></span>
          </h1>
        </a>
        <i className='mobile-nav-toggle mobile-nav-show bi bi-list'></i>
        <i className='mobile-nav-toggle mobile-nav-hide d-none bi bi-x'></i>
        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <a href='/' className='active'>
                Home
              </a>
            </li>
            <li>
              <a href='about'>About</a>
            </li>
            <li>
              <a href='services.html'>Services</a>
            </li>
            <li>
              <a href='projects.html'>Projects</a>
            </li>
            <li>
              <a href='blog.html'>Blog</a>
            </li>
            <li class='dropdown'>
              <a href='#'>
                <span>Dropdown</span>
                <i className='bi bi-chevron-down dropdown-indicator'></i>
              </a>
              <ul>
                <li>
                  <a href='#'>Dropdown 1</a>
                </li>
                <li class='dropdown'>
                  <a href='#'>
                    <span>Deep Dropdown</span>
                    <i className='bi bi-chevron-down dropdown-indicator'></i>
                  </a>
                  <ul>
                    <li>
                      <a href='#'>Deep Dropdown 1</a>
                    </li>
                    <li>
                      <a href='#'>Deep Dropdown 2</a>
                    </li>
                    <li>
                      <a href='#'>Deep Dropdown 3</a>
                    </li>
                    <li>
                      <a href='#'>Deep Dropdown 4</a>
                    </li>
                    <li>
                      <a href='#'>Deep Dropdown 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#'>Dropdown 2</a>
                </li>
                <li>
                  <a href='#'>Dropdown 3</a>
                </li>
                <li>
                  <a href='#'>Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='contact.html'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;