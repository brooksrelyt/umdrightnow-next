import React from 'react'

export default () => (
  <div>
    <div className="container-fluid red-bg">
      <div className="row med-spaces w-100">
        <a className="btn white center" href="/contact">Contact Us</a>
      </div>
    </div> 
    <footer role="contentinfo">
      <section className="container">
        <div className="row">
          <div className="col-lg-4">
            <a href="http://www.umd.edu/" aria-label="Visit the university of maryland main homepage"><img className="img-fluid umd-logo" src="/img/umd-footer-logo.png" alt="University of Maryland Logo" /></a>
          </div>

          <div className="col-lg-5">
            <p className="grey footer-info"><b>The Flagship Institution of the State of Maryland</b><br />College Park, MD 20742-5025, USA<br />P: 301.405.1000</p>
          </div>

          <div className="col-lg-3">
            <div className="social clearfix">
              <ul className="menu navbar-nav no-pad" aria-label="footer social media menu">
                <li>
                  <a className="no-pad" href="https://www.youtube.com/user/UMD2101" target="_blank" rel="noopener noreferrer" aria-label="Visit the university of maryland Youtube Channel">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a className="no-pad" href="https://www.facebook.com/UnivofMaryland" target="_blank" rel="noopener noreferrer" aria-label="like the university of maryland on facebook">
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="no-pad" href="https://twitter.com/UMDgovtaffairs?ref_src=twsrc%5Etfw" target="_blank" rel="noopener noreferrer" aria-label="follow the university of maryland on twitter">
                      <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="no-pad" href="https://www.instagram.com/univofmaryland/" target="_blank" rel="noopener noreferrer" aria-label="follow the university of maryland on instagram">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="row sub-footer">
        <div className="navbar-bottom clearfix">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="https://urhome.umd.edu">University Relations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://umd.edu/web-accessibility">Web Accessibility</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://umd.service-now.com/itsc/?id=kb_article&article=KB0012192">Privacy Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">{'\u00A9'} {(new Date().getFullYear())}</a>
            </li>
          </ul>
        </div>
      </div>
      <script src="https://umd-header.umd.edu/build/bundle.js?search=0&search_domain=&events=0&news=0&schools=0&admissions=0&support=0&support_url=&wrapper=&sticky=0"></script>
      <script src="https://fs29.formsite.com/include/form/embedManager.js?208259576"></script>
      <script>{`EmbedManager.embed({ key: "https://fs29.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTCB1eiw3ZXk0i7wTqjBKzRQ&208259576", width: "100%"});`}</script>
    </footer>
  </div>
)
