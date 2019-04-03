import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>I was born in Pogradec, Albania and grew up in Tirana, Albania. During high school, my family and I moved to Philadelphia, PA.</p>
          <p>I graduated with honors from Rochester Institute of Technology with a Bachelor's and Master's both in Computer Science. My undergraduate focus is in Computer Graphics, while my graduate immersion is in Intelligent Systems and Artificial Intelligence.</p>
          <p>I enjoy working on ideas and projects in addition to my day job at Microsoft. I love playing guitar (big Red Hot Chili Peppers fan), playing tennis occasionally and hiking on the weekends.</p>
          <p>Favorite computer games: CS:GO, Factorio, Software Inc., Cities: Skylines, Civ V, Tropico 4, KSP, Rome: Total War, HoI4, ...</p>
          <p>Favorite comedians: Mark Normand, Nate Bargatze, Kevin Hart, Jim Jefferies</p>
          <p>Favorite shows: Silicon Valley, The Office, Friends</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p><em>Open Source</em><br/>I've been to over 30 hackathons during my college career. I've won several of them. Most of these projects are available on my github. 
          Some of my favorites are <a href="https://github.com/oxhagolli/TrackVirus">TrackVirus</a>, a tool that would predict the Zika virus spread, <a href="https://github.com/oxhagolli/pyDuctor">PyDuctor</a>, an application that lets you conduct music using a leap motion, etc. Head over to my <a href="https://github.com/oxhagolli/">github</a> or my <a href="https://devpost.com/orensxhagolli">devpost</a> to see more. Good luck getting to run any of these (Read: If I were to do hackathons all over again, I'd be a bit more organized).</p>
          <p><em>Proprietary</em><br/>Most of my proprietary work consists of building end-to-end machine learning systems, which are not usually exposed to the internet. However, some popular products that I've worked on that potentially still use code that I've written are <a href="https://turbotax.intuit.com/">TurboTax</a>, <a href="https://www.mint.com/">Mint</a> and <a href="https://turbo.intuit.com/">Turbo</a>.</p>
          {close}
        </article>

        <article id="resume" className={`${this.props.article === 'resume' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Resume</h2>
          <embed className="resume" src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/oxhagolli/resume/raw/master/main.pdf"></embed>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main