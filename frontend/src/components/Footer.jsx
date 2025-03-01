// import React from 'react'

const Footer = () => {
  return (
<footer>
<div className="footer-container">
        <footer className="footer">

            <div className="footer-top">

                <div className="comp-logo">
                    <a className="logo-link" href="#">
                        <img className="logo-svg" src="/netflix-logo.png"/>
                      
                    </a>
                </div>
                <p className="filler-text">  </p>
                <div className="social">
                        <a className="social-link" href="https://www.instagram.com/sanskar_real?igsh=MWI1NWptbzduMG5mOQ==" target="_blank">
                            <img src="/instagram.svg" className="social-icon" />
                        </a>
                        <a className="social-link" target="_blank" href="https://www.linkedin.com/in/502-sanskar/">
                            <img src="/linkedin.svg" className="social-icon" />
                        </a>
                        <a className="social-link" target="_blank" href="https://github.com/sanskar-502">
                            <img src="/github.svg" className="social-icon" />
                        </a>
                        <a className="social-link" target="_blank" href="https://x.com/?lang=en">
                            <img src="/twitter.svg" className="social-icon" />
                        </a>
                </div>
            </div>

            <div className="footer-grid">
                        {/* <!-- column 1 -->  */}
                <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Products
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Overview</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Solutions</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Pricing</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Customers</a>
                                </li>
                            </ul>
                </div>
                        {/* <!-- column 2 -->  */}
                <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Company
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">About</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Investor Relations</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Jobs</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Press</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Blog</a>
                                </li>
                            </ul>
                </div>
                        {/* <!-- column 3 -->  */}
                <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Support
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Contact</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Documentation</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Chat</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">FAQ</a>
                                </li>
                            </ul>
                </div>
                        {/* <!-- column 4 -->  */}
                <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Legal
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Cookie Settings</a>
                                </li>
                                
                            </ul>
                </div>
            </div>
        </footer>
        <div className="footer-copyright">
            © 2024 - Present Netflix. All rights reserved.
        </div>
    </div>
</footer>
  )
}

export default Footer
