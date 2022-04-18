import '../styles/App.css';
// import Game from './TicTacToe';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light pt-4" aria-label="Third navbar example">
          <div className="container">
            <img src={require('../img/portfolio-logo.png')} alt="vanessa-thompson-logo" className="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav ms-auto mb-2 mb-sm-0 me-sm-3">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item ms-sm-3">
                  <a href="https://drive.google.com/file/d/15P0eU4WogNpNR-N-VqqW_T096aEHDL_J/view?usp=sharing" target="_blank" className="btn btn-outline-dark me-2">Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="container intro-container">
        <div className="row py-5 px-4">
          <div className="col-md-8 pt-5 intro-wrapper">
            <h1 className="ms-2 mb-2 intro">Vanessa Thompson</h1>
            <h2 className="ms-2 mb-4 text-white-50">Front-End Software Engineer</h2>
          </div>
          <div class="col-lg-6 col-md-8">
            <p className="ms-2 mb-5">I build exceptional web experiences and products users love. Currently, I'm looking for a position where I can collaborate with awesome people and grow as a creative individual. Welcome to my portfolio!</p>
            <a href="mailto:vcharlesthompson@gmail.com" className="ms-2 btn btn-outline-dark">Let's get in touch!</a>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container about-wrapper">
          <div className="row py-5 px-4">
            <div className="col-md-6 pt-5 intro-wrapper">
              <h1 className="mb-4">About me</h1>
              <p>Hello! My name is Vanessa and I enjoy creating things that live on the internet. My interest in web development started back in 2015 when I came up with the idea of <a herf="https://www.facebook.com/nabimusicinfo/">Nabi Music</a>, a marketplace for facilitating music education.</p>
              <p>Fast-forward to today, I've had the privilege of working at a <a className="app-link text-white-50" href="https://www.linkedin.com/company/coconecta/">fast-growing startup</a>, a <a className="app-link text-white-50" href="https://www.oracle.com/index.html">huge corporation</a>, and a <a className="app-link text-white-50" href="https://nftylabs.org/">crypto company</a>. My main focus now is to grow as a successful javascript engineer and build interfaces that help users easily achieve what they want. As a <a className="app-link text-white-50" href="https://teamtreehouse.com/vanecharles">Treehouse</a> student I'm constantly improving my skills and keeping up to date with technology changes.</p>
              <p>Here are some technologies I've been working with recently:</p>
              <ul className="skills-list general-list">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="col-md-6 pt-5 intro-wrapper text-center">
              <img className="img-fluid headshot" src={require('../img/headshot.jpg')} />
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <div className="container about-wrapper experience-wrapper">
          <div className="row py-5 px-4 justify-content-center">
            <div className="col-md-8 pt-5 intro-wrapper">
              <h1 className="mb-4">Professional Experience</h1>
              <div className="hide-on-desktop">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-nfty-tab" data-bs-toggle="pill" data-bs-target="#pills-nfty" type="button" role="tab" aria-controls="pills-nfty" aria-selected="true">NFTY</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-zoom-tab" data-bs-toggle="pill" data-bs-target="#pills-zoom" type="button" role="tab" aria-controls="pills-zoom" aria-selected="false">Zoom</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-coco-tab" data-bs-toggle="pill" data-bs-target="#pills-coco" type="button" role="tab" aria-controls="pills-coco" aria-selected="false">COCO</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-oracle-tab" data-bs-toggle="pill" data-bs-target="#pills-oracle" type="button" role="tab" aria-controls="pills-oracle" aria-selected="false">Oracle</button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-nfty" role="tabpanel" aria-labelledby="pills-nfty-tab">
                    <p class="fw-bold">NFTY Labs - Software Engineer Consultant</p>
                    <p class="fst-italic">2/2021 - 3/2022</p>
                    <ul className="general-list">
                      <li>Design and engineer SocialPass, an admin dashboard that allows users to create and manage gated content for their NFTs.</li>
                      <li>Prototype dashboard using Figma.</li>
                      <li>Use Django templated framework along with Bootstrap 5 to render a responsive user interface.</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="pills-zoom" role="tabpanel" aria-labelledby="pills-zoom-tab">
                    <p class="fw-bold">Zoom Telephonics Inc. - Lead Frontend Engineer</p>
                    <p class="fst-italic">2/2020 - 12/2020</p>
                    <ul className="general-list">
                      <li>Develop MotoManage, Motorola’s cross platform mobile app that allows users to manage their home network.</li>
                      <li>Demo product to key shareholders. Perform bug bashes and fix bugs.</li>
                      <li>Attend daily standups and other scrum ceremonies. Collaborate closely with design and API teams.</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="pills-coco" role="tabpanel" aria-labelledby="pills-coco-tab">
                    <p class="fw-bold">COCO - Co-Founder & CTO</p>
                    <p class="fst-italic">1/2019 - 9/2019</p>
                    <ul className="general-list">
                      <li>Recruit and lead front end, back end and design team to create Venezuela’s first and only online supermarket.</li>
                      <li>Set up a customer purchase funnel using Segment, Amplitude and Google Pixel. Lead scrum meetings and manage backlog stories.</li>
                      <li>Participate in Y Combinator Summer 2019 batch.</li>
                    </ul>
                  </div>
                  <div class="tab-pane fade" id="pills-oracle" role="tabpanel" aria-labelledby="pills-oracle-tab">
                    <p class="fw-bold">Oracle - Software Engineer</p>
                    <p class="fst-italic">9/2017 - 3/2019</p>
                    <ul className="general-list">
                      <li>Engineer Oracle Cloud Infrastructure’s Web Application Firewall UI from the start to its release.</li>
                      <li>Attend product kick off meetings, and continuously communicate with API, product and design teams.</li>
                      <li>Perform software release and emergent deployments.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hide-on-mobile">
                <div class="d-flex align-items-start">
                  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button class="nav-link active" id="v-pills-nfty-tab" data-bs-toggle="pill" data-bs-target="#v-pills-nfty" type="button" role="tab" aria-controls="v-pills-nfty" aria-selected="true">NFTY</button>
                    <button class="nav-link" id="v-pills-zoom-tab" data-bs-toggle="pill" data-bs-target="#v-pills-zoom" type="button" role="tab" aria-controls="v-pills-zoom" aria-selected="false">Zoom</button>
                    <button class="nav-link" id="v-pills-coco-tab" data-bs-toggle="pill" data-bs-target="#v-pills-coco" type="button" role="tab" aria-controls="v-pills-coco" aria-selected="false">COCO</button>
                    <button class="nav-link" id="v-pills-oracle-tab" data-bs-toggle="pill" data-bs-target="#v-pills-oracle" type="button" role="tab" aria-controls="v-pills-oracle" aria-selected="false">Oracle</button>
                  </div>
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-nfty" role="tabpanel" aria-labelledby="v-pills-nfty-tab">
                      <p class="fw-bold">NFTY Labs - Software Engineer Consultant</p>
                      <p class="fst-italic">2/2021 - 3/2022</p>
                      <ul className="general-list">
                        <li>Design and engineer SocialPass, an admin dashboard that allows users to create and manage gated content for their NFTs.</li>
                        <li>Prototype dashboard using Figma.</li>
                        <li>Use Django templated framework along with Bootstrap 5 to render a responsive user interface.</li>
                      </ul>
                    </div>
                    <div class="tab-pane fade" id="v-pills-zoom" role="tabpanel" aria-labelledby="v-pills-zoom-tab">
                      <p class="fw-bold">Zoom Telephonics Inc. - Lead Frontend Engineer</p>
                      <p class="fst-italic">2/2020 - 12/2020</p>
                      <ul className="general-list">
                        <li>Develop MotoManage, Motorola’s cross platform mobile app that allows users to manage their home network.</li>
                        <li>Demo product to key shareholders. Perform bug bashes and fix bugs.</li>
                        <li>Attend daily standups and other scrum ceremonies. Collaborate closely with design and API teams.</li>
                      </ul>
                    </div>
                    <div class="tab-pane fade" id="v-pills-coco" role="tabpanel" aria-labelledby="v-pills-coco-tab">
                      <p class="fw-bold">COCO - Co-Founder & CTO</p>
                      <p class="fst-italic">1/2019 - 9/2019</p>
                      <ul className="general-list">
                        <li>Recruit and lead front end, back end and design team to create Venezuela’s first and only online supermarket.</li>
                        <li>Set up a customer purchase funnel using Segment, Amplitude and Google Pixel. Lead scrum meetings and manage backlog stories.</li>
                        <li>Participate in Y Combinator Summer 2019 batch.</li>
                      </ul>
                    </div>
                    <div class="tab-pane fade" id="v-pills-oracle" role="tabpanel" aria-labelledby="v-pills-oracle-tab">
                      <p class="fw-bold">Oracle - Software Engineer</p>
                      <p class="fst-italic">9/2017 - 3/2019</p>
                      <ul className="general-list">
                        <li>Engineer Oracle Cloud Infrastructure’s Web Application Firewall UI from the start to its release.</li>
                        <li>Attend product kick off meetings, and continuously communicate with API, product and design teams.</li>
                        <li>Perform software release and emergent deployments.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container about-wrapper">
          <div className="row py-5 px-4 justify-content-center text-center">
            <div className="col-md-6 pt-5 intro-wrapper">
              <h1 className="mb-4">Get In Touch</h1>
              <p>I’m currently looking for my next great opportunity. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
              <a href="mailto:vcharlesthompson@gmail.com" className=" ms-2 btn btn-outline-dark">Say Hello</a>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center pt-5 mt-4">
        <a target="_blank" className="p-2 text-black-50" href="https://github.com/iamvane"><i class="fa-brands fa-github"></i></a>
        <a target="_blank" className="p-2 text-black-50" href="https://www.instagram.com/coolnblessed/"><i class="fa-brands fa-instagram"></i></a>
        <a target="_blank" className="p-2 text-black-50" href="https://twitter.com/VaneCharles/"><i class="fa-brands fa-twitter"></i></a>
        <a target="_blank" className="p-2 text-black-50" href="https://www.linkedin.com/in/vanessacharlesnabi/"><i class="fa-brands fa-linkedin-in"></i></a>
        <p className="text-center pt-3 pb-5 text-black-50">Designed & Built by Vanessa Thompson</p>
      </footer>
    </div>
  );
}

export default App;
