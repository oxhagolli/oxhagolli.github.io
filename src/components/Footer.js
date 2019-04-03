import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
            <li><a href="https://twitter.com/orens_x" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/orens.xhagolli" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/orensxhagolli/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://www.linkedin.com/in/orens-xhagolli-6804aa4a/" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
            <li><a href="https://github.com/oxhagolli" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
        <p className="copyright">Orens Xhagolli &copy; 2019. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
