import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Orens Xhagolli</h1>
                <p>Hi! I'm an engineer. I like to learn and build stuff! </p>
                <p>My professional interests include Data Science + ML and startups. <br/>
                If work was a Marvel movie, my superpower would be building end-to-end scalable ML systems.</p>
                <p>My general interests include tennis, hiking and playing guitar. I love video games and standup comedy.<br/>
                If life was a Marvel movie, my superpower would be that I'd explode every time something becomes routine.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
