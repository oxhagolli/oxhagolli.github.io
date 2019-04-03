(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(35),i=a.n(n),r=a(7),l=a.n(r),o=a(0),s=a.n(o),c=a(150),m=a(4),u=a.n(m),p=a(162),d=a.n(p),h=function(e){return s.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},s.a.createElement("div",{className:"logo"},s.a.createElement("img",{className:"pic",src:d.a,alt:"orens"})),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"inner"},s.a.createElement("h1",null,"Orens Xhagolli"),s.a.createElement("p",null,"Hi! I'm an engineer. I like to learn and build stuff! "),s.a.createElement("p",null,"My professional interests include Data Science + ML and startups."),s.a.createElement("p",null,"My general interests include tennis, hiking and playing guitar. I love video games and standup comedy."))),s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"About")),s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Work")),s.a.createElement("li",null,s.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("resume")}},"Resume")))))};h.propTypes={onOpenArticle:u.a.func,timeout:u.a.bool};var f=h,E=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this,t=s.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return s.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},s.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"About"),s.a.createElement("p",null,"I was born in Pogradec, Albania and grew up in Tirana, Albania. During high school, my family and I moved to Philadelphia, PA."),s.a.createElement("p",null,"I graduated with honors from Rochester Institute of Technology with a Bachelor's and Master's both in Computer Science. My undergraduate focus is in Computer Graphics, while my graduate immersion is in Intelligent Systems and Artificial Intelligence."),s.a.createElement("p",null,"I enjoy working on ideas and projects in addition to my day job at Microsoft. I love playing guitar (big Red Hot Chili Peppers fan), playing tennis occasionally and hiking on the weekends."),s.a.createElement("p",null,"Favorite computer games: CS:GO, Factorio, Software Inc., Cities: Skylines, Civ V, Tropico 4, KSP, Rome: Total War, HoI4, ..."),s.a.createElement("p",null,"Favorite comedians: Mark Normand, Nate Bargatze, Kevin Hart, Jim Jefferies"),s.a.createElement("p",null,"Favorite shows: Silicon Valley, The Office, Friends"),t),s.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Work"),s.a.createElement("p",null,s.a.createElement("em",null,"Open Source"),s.a.createElement("br",null),"I've been to over 30 hackathons during my college career. I've won several of them. Most of these projects are available on my github. Some of my favorites are ",s.a.createElement("a",{href:"https://github.com/oxhagolli/TrackVirus"},"TrackVirus"),", a tool that would predict the Zika virus spread, ",s.a.createElement("a",{href:"https://github.com/oxhagolli/pyDuctor"},"PyDuctor"),", an application that lets you conduct music using a leap motion, etc. Head over to my ",s.a.createElement("a",{href:"https://github.com/oxhagolli/"},"github")," or my ",s.a.createElement("a",{href:"https://devpost.com/orensxhagolli"},"devpost")," to see more. Good luck getting to run any of these (Read: If I were to do hackathons all over again, I'd be a bit more organized)."),s.a.createElement("p",null,s.a.createElement("em",null,"Proprietary"),s.a.createElement("br",null),"Most of my proprietary work consists of building end-to-end machine learning systems, which are not usually exposed to the internet. However, some popular products that I've worked on that potentially still use code that I've written are ",s.a.createElement("a",{href:"https://turbotax.intuit.com/"},"TurboTax"),", ",s.a.createElement("a",{href:"https://www.mint.com/"},"Mint")," and ",s.a.createElement("a",{href:"https://turbo.intuit.com/"},"Turbo"),"."),t),s.a.createElement("article",{id:"resume",className:("resume"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},s.a.createElement("h2",{className:"major"},"Resume"),s.a.createElement("embed",{className:"resume",src:"https://drive.google.com/viewerng/viewer?embedded=true&url=https://github.com/oxhagolli/resume/raw/master/main.pdf"}),t))},t}(s.a.Component);E.propTypes={route:u.a.object,article:u.a.string,articleTimeout:u.a.bool,onCloseArticle:u.a.func,timeout:u.a.bool,setWrapperRef:u.a.func.isRequired};var g=E,b=function(e){return s.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},s.a.createElement("ul",{className:"icons"},s.a.createElement("li",null,s.a.createElement("a",{href:"https://twitter.com/orens_x",className:"icon fa-twitter"},s.a.createElement("span",{className:"label"},"Twitter"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.facebook.com/orens.xhagolli",className:"icon fa-facebook"},s.a.createElement("span",{className:"label"},"Facebook"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.instagram.com/orensxhagolli/",className:"icon fa-instagram"},s.a.createElement("span",{className:"label"},"Instagram"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://www.linkedin.com/in/orens-xhagolli-6804aa4a/",className:"icon fa-linkedin"},s.a.createElement("span",{className:"label"},"Linkedin"))),s.a.createElement("li",null,s.a.createElement("a",{href:"https://github.com/oxhagolli",className:"icon fa-github"},s.a.createElement("span",{className:"label"},"GitHub")))),s.a.createElement("p",{className:"copyright"},"Orens Xhagolli © 2019. Design: ",s.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with: ",s.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js"),"."))};b.propTypes={timeout:u.a.bool};var y=b,v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}l()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return s.a.createElement(c.a,{location:this.props.location},s.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},s.a.createElement("div",{id:"wrapper"},s.a.createElement(f,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),s.a.createElement(g,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),s.a.createElement(y,{timeout:this.state.timeout})),s.a.createElement("div",{id:"bg"})))},t}(s.a.Component);t.default=v},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Orens Xhagolli"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(56),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,a){"use strict";var n=a(148),i=a(0),r=a.n(i),l=a(4),o=a.n(l),s=a(151),c=a.n(s),m=(a(33),a(147),r.a.createContext({})),u=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};a(153);var p=function(e){var t,a=e.children,i=e.location;return t=i&&"/"===i.pathname?r.a.createElement("div",null,a):r.a.createElement("div",{id:"wrapper",className:"page"},r.a.createElement("div",null,a)),r.a.createElement(u,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),t)},data:n})};p.propTypes={children:o.a.node.isRequired};t.a=p},162:function(e,t,a){e.exports=a.p+"static/orens-d4695f82f68191d00b02781dc8850c89.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-ebbc2ac534fbba3167d3.js.map