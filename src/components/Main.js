import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <p>I was born in Pogradec, Albania and grew up in Tirana, Albania. In high school, my family and I moved to Philadelphia, PA.</p>
          <p>I graduated with honors from Rochester Institute of Technology with a Bachelor's and Master's both in Computer Science. My undergraduate focus is in Computer Graphics, while my graduate immersion is in Intelligent Systems and Artificial Intelligence.</p>
          <p>I enjoy working on ideas and projects in addition to my day job at Microsoft. I love playing guitar (big Red Hot Chili Peppers fan), tennis occasionally and hiking on the weekends.</p>
          <p>Favorite computer games: CS:GO, Factorio, Software Inc., Cities: Skylines, Civ V, Tropico 4, KSP, Rome: Total War, HoI4, ...</p>
          <p>Favorite comedians: Mark Normand, Nate Bargatze, Kevin Hart, Chris Rock, Jim Jefferies</p>
          <p>Favorite shows: Silicon Valley, The Office, Friends</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
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