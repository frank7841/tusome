import React,{useState} from 'react'
import './col.css'
import {Helmet} from "react-helmet";
import { Button, Modal,ModalHeader,FormGroup, ModalBody, Form, Label, Input, ModalFooter } from "reactstrap"

const Home=()=> {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
<>
    <Helmet>
      <script src="js/app.js"></script>
     <script src="js/common.js"></script>
    </Helmet>
    
      <div className="page">
      <div className="main">

        <div className="header js-header" id="header">
          <div className="header__center center"><button className="header__burger js-header-burger"><span></span></button><a className="header__logo" href="#"><img className="header__pic" src="img/logo.svg" alt=""/></a>
            <div className="header__wrap js-header-wrap">


            <nav className="header__nav"><a className="header__item" href="/search">Search Tutor</a><a className="header__item" href="/tutor">Discover</a><a className="header__item" href="/selected">Tours</a>
                <div className="header__item js-header-item"><a className="header__head js-header-head" href="#">Explore<svg className="icon icon-arrow-down">
                      <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                    </svg></a>
                  <div className="header__body js-header-body">
                    <div className="header__center center">
                      <div className="header__row">
                        <div className="header__col">
                          <div className="header__category">Features</div>
                          <div className="header__menu"><a className="header__box" href="#">
                              <div className="header__preview"><img className="header__pic" src="img/cup.png" alt=""/></div>
                              <div className="header__deetails">
                                <div className="header__info">Collab Assistant</div>
                                <div className="header__text">Smart automation system</div>
                              </div>
                            </a><a className="header__box" href="#">
                              <div className="header__preview"><img className="header__pic" src="img/camera.png" alt=""/></div>
                              <div className="header__deetails">
                                <div className="header__info">Advanced Importer</div>
                                <div className="header__text">Work with various media formats</div>
                              </div>
                            </a><a className="header__box" href="#">
                              <div className="header__preview"><img className="header__pic" src="img/calendar.png" alt=""/></div>
                              <div className="header__deetails">
                                <div className="header__info">Product Management</div>
                                <div className="header__text">Workspace reimagined</div>
                              </div>
                            </a></div>
                        </div>
                        <div className="header__col">
                          <div className="header__category">Features</div>
                          <div className="header__menu"><a className="header__box" href="#">
                              <div className="header__preview"><img className="header__pic" src="img/chatbox.png" alt=""/></div>
                              <div className="header__deetails">
                                <div className="header__info">Support</div>
                                <div className="header__text">24/7 Live Support</div>
                              </div>
                            </a><a className="header__box" href="#">
                              <div className="header__preview"><img className="header__pic" src="img/fill.png" alt=""/></div>
                              <div className="header__deetails">
                                <div className="header__info">Color Picker</div>
                                <div className="header__text">Advanced color picker</div>
                              </div>
                            </a></div>
                        </div>
                        <div className="header__col">
                          <div className="header__category">Company</div>
                          <div className="header__menu"><a className="header__box" href="#">
                              <div className="header__preview"><img className="header__pic" src="img/clock.png" alt=""/></div>
                              <div className="header__deetails">
                                <div className="header__info">Collab Team</div>
                                <div className="header__text">See who’s behind the magic</div>
                              </div>
                            </a><a className="header__box" href="#">
                              <div className="header__preview"><img className="header__pic" src="img/bell-flat.png" alt=""/></div>
                              <div className="header__deetails">
                                <div className="header__info">Collab Design</div>
                                <div className="header__text">What we’re working on</div>
                              </div>
                            </a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
              <div className="header__photo"><img className="header__pic" src="img/menu-pic.png" alt=""/></div>
            </div>
            <div className="header__search js-header-search"><button className="header__open js-header-open"><svg className="icon icon-search">
                  <use xlinkHref="img/sprite.svg#icon-search"></use>
                </svg></button>
              <div className="header__field"><input className="header__input" type="text" placeholder="Search ..."/></div>
            </div><a className="header__btn btn btn_pink" onClick={toggle}>Get Started</a>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} charCode="close">
                <h3  style={{fontWeight:"bold", textAlign:"center"}}>Sign Up</h3>
                </ModalHeader>
                <ModalBody>
                  <Form>
                      <FormGroup>
                        <Label for="name"> Full Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Full name"  />
                      </FormGroup>
                      <FormGroup>
                        <Label for="grade">Stage/Grade/Class</Label>
                        <Input type="number" name="fleet" id="fleet" placeholder="0"  />
                      </FormGroup>
                      <FormGroup>
                        <Label for="fleet">Phone Number</Label>
                        <Input type="tel" name="num" id="num" placeholder="+254 790 943 918" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="fleet">Location</Label>
                        <Input type="text" name="town" id="town" placeholder="Where are you located"  />
                      </FormGroup>
                      <FormGroup>
                        <Label for="sacco">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="youremail.com"  />
                      </FormGroup>
                      
                  </Form>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Submit
                    </Button>
                 </ModalFooter>
                </ModalBody>
              </Modal>  

          </div>
          <div className="header__bg js-header-bg"></div>
        </div>

        <div className="main__center center">
          <div className="main__wrap">
            <h1 className="main__title title title_big" data-aos><span className="title__box"><span className="title__text">Create </span></span><span className="title__box"><span className="title__text"><span className="title__line">Like</span></span></span><span className="title__box"><span className="title__text">Never</span></span><span className="title__box"><span className="title__text">Before<span className="title__color">.</span></span></span></h1>
            <div className="main__info info" data-aos="animation-scale-y" data-aos-delay="400">Create, build, collaborate and ship products faster. Good bye code! 👋</div>
            <div className="main__control" data-aos="animation-scale-y" data-aos-delay="550"><a className="main__btn btn btn_purple" href="login.html">Get Started</a><a className="main__link" href="#">
                <div className="main__icon"><img className="main__pic" src="img/play.svg" alt=""/></div>
                <div className="main__text">See It In Action!</div>
              </a></div>
            <div className="main__scroll" data-aos="animation-scale-y" data-aos-delay="650"><a className="main__link" href="#">
                <div className="main__icon"><img className="main__pic" src="img/scroll.svg" alt=""/></div>
                <div className="main__text">Scroll to explore</div>
              </a></div>
          </div>
          <div className="main__view" data-aos>
            <div className="main__preview"><img className="main__pic js-parallax" data-scale="1.5" data-orientation="down" src="img/main-pic-1.png" alt=""/></div>
            <div className="main__preview"><img className="main__pic js-parallax" data-scale="1.5" data-orientation="up" src="img/main-pic-2.png" alt=""/></div>
            <div className="main__preview"><img className="main__pic" src="img/mouse.png" alt=""/></div>
            <div className="main__preview"><img className="main__pic" src="img/main-pic-3.png" alt=""/></div>
          </div>
          <div className="main__circles">
            <div className="main__circle"></div>
            <div className="main__circle js-rellax" data-rellax-speed="2"></div>
            <div className="main__circle js-rellax" data-rellax-speed="1"></div>
            <div className="main__circle js-rellax" data-rellax-speed="2"></div>
            <div className="main__circle js-rellax" data-rellax-speed=".3"></div>
            <div className="main__circle"></div>
            <div className="main__circle js-rellax" data-rellax-speed="1"></div>
          </div>
        </div>

    </div>
    {/* main */}
    {/* features */}

    <div className="features js-features">
        <div className="features__center center">
          <div className="features__head" data-aos="animation-scale-y">
            <div className="features__stage stage">Features</div>
            <div className="features__box">
              <h2 className="features__title title">The world’s most powerful design tool.</h2>
              <div className="features__info info">Simultaneously design, code and collaborate with your team all from one place.</div>
            </div>
          </div>
          <div className="features__body">
            <div className="features__container">
              <div className="features__slider js-features-slider">
                <div className="features__slide" data-aos="animation-scale-y">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/camera.png" alt=""/></div>
                    <div className="features__category">Import Photos & Videos</div>
                    <div className="features__text">Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide" data-aos="animation-scale-y" data-aos-delay="200">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/calendar.png" alt=""/></div>
                    <div className="features__category">Calendar API Built-In</div>
                    <div className="features__text">Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/camera.png" alt=""/></div>
                    <div className="features__category">Import Photos & Videos</div>
                    <div className="features__text">Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/calendar.png" alt=""/></div>
                    <div className="features__category">Calendar API Built-In</div>
                    <div className="features__text">Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/camera.png" alt=""/></div>
                    <div className="features__category">Import Photos & Videos</div>
                    <div className="features__text">Simply drag and drop photos and videos into your workspace to automatically add them to your Collab Cloud library.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="features__status js-features-status"></div>
          </div>
        </div>
        <div className="features__circle js-rellax" data-rellax-speed="-.7"></div>
        <div className="features__bg" data-aos data-aos-duration="1000"><img className="features__pic" src="img/features-pic-1.svg" alt=""/></div>
      </div>

    


      <div className="access">
        <div className="access__center center">
          <div className="access__view" data-aos data-aos-delay="300">
            <div className="access__preview"><img className="access__pic" src="img/access-pic-2.png" alt=""/></div>
            <div className="access__preview"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="up" src="img/access-pic-1.png" alt=""/></div>
            <div className="access__preview"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="down" src="img/main-pic-2.png" alt=""/></div>
          </div>
          <div className="access__wrap" data-aos="animation-scale-y">
            <div className="access__info">Ready to get started? <br/>Sign up with your email</div>
            <form className="access__form">
              <div className="access__field"><input className="access__input" type="email" placeholder="Email address"/>
                <div className="access__icon"><img className="access__pic" src="img/sending-mail.svg" alt=""/></div>
              </div><button className="access__btn btn btn_purple" type="submit">Get Started</button>
            </form>
          </div>
        </div>
        <div className="access__circles">
          <div className="access__circle" data-aos data-aos-offset="300"></div>
          <div className="access__circle" data-aos data-aos-delay="100" data-aos-offset="300"></div>
          <div className="access__circle" data-aos data-aos-delay="200" data-aos-offset="300"></div>
        </div>
        <div className="access__clouds">
          <div className="access__cloud"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="left" src="img/cloud.png" alt=""/></div>
          <div className="access__cloud"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt=""/></div>
        </div>
        <div className="access__balls">
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div className="access__ball js-rellax" data-rellax-speed="-1"></div>
          <div className="access__ball"></div>
          <div className="access__ball js-rellax" data-rellax-speed="1"></div>
        </div>
      </div>


      <div className="layouts">
        <div className="layouts__center center">
          <div className="layouts__wrap">
            <div className="layouts__head" data-aos="animation-scale-y">
              <div className="layouts__stage stage">Auto Adaptive layouts</div>
              <h2 className="layouts__title title">Responsive DNA<span className="title__color">.</span></h2>
            </div>
            <div className="layouts__info info" data-aos="animation-scale-y">Easily create truly responsive components while deploying production-ready code.</div>
            <div className="layouts__list">
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon"><img className="layouts__pic" src="img/layout-1.svg" alt=""/></div>
                <div className="layouts__text">Advanced pinning</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon"><img className="layouts__pic" src="img/layout-2.svg" alt=""/></div>
                <div className="layouts__text">Relative positioning with containers</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon"><img className="layouts__pic" src="img/layout-3.svg" alt=""/></div>
                <div className="layouts__text">Percentage-based geometry</div>
              </div>
            </div>
          </div>
          <div className="layouts__view" data-aos>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-1.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-2.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-3.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-4.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-5.png" alt=""/></div>
          </div>
        </div>
      </div>


      <div className="like">
        <div className="like__center center">
          <div className="like__container">
            <div className="like__wrap">
              <h2 className="like__title title" data-aos="animation-scale-x">Native-like Prototying<span className="title__color">.</span></h2>
              <div className="like__text" data-aos="animation-scale-x" data-aos-delay="150">
                <p>With Collab Smart Prototype you create your interactions and animations once and store as presets in the cloud for future use.</p>
                <p>Use the Collab App to test in real-time.</p>
              </div>
              <div className="like__btn" data-aos="animation-scale-x" data-aos-delay="300"><button className="btn btn_purple">See Sample Prototype</button></div>
            </div>
            <div className="like__preview" data-aos><img className="like__pic" src="img/hand-1.png" alt=""/></div>
            <div className="like__circle"></div>
            <div className="like__circles">
              <div className="like__circle"></div>
              <div className="like__circle js-rellax" data-rellax-speed="-1"></div>
              <div className="like__circle js-rellax" data-rellax-speed=".8"></div>
              <div className="like__circle"></div>
              <div className="like__circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="plan js-plan">
        <div className="plan__center center">
          <div className="plan__head" data-aos="animation-scale-y">
            <div className="plan__stage stage">Join The Revolution</div>
            <h2 className="plan__title title">Find the <span className="title__color">Right Plan.</span></h2>
            <div className="plan__info info">Flexible pricing options for freelancers and design teams.</div><label className="switch"><input className="switch__input" type="checkbox" checked/><span className="switch__flex"><span className="switch__yearly">Billed Yearly</span><span className="switch__box"></span><span className="switch__monthly">Billed Monthly</span></span></label>
            <div className="plan__variants"><select className="plan__select js-plan-select">
                <option>Professional</option>
                <option>Standard</option>
                <option>Ultimate</option>
              </select></div>
          </div>
          <div className="plan__body">
            <div className="plan__item js-plan-item" data-aos="animation-translate-y">
              <div className="plan__star"><svg className="icon icon-star">
                  <use xlinkHref="img/sprite.svg#icon-star"></use>
                </svg></div>
              <div className="plan__category">
                <div className="plan__icon"><img className="plan__pic" src="img/smile-1.svg" alt=""/></div>
                <div className="plan__text">Individual</div>
              </div>
              <h3 className="plan__title title title_sm">Professional</h3>
              <div className="plan__price"><span className="plan__money">$19.99</span> /month</div>
              <ul className="plan__list">
                <li>1 user</li>
                <li>2 TB of secure storage</li>
                <li>Premium productivity features and simple, secure file sharing</li>
              </ul><a className="plan__btn btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
            </div>
            <div className="plan__item js-plan-item" data-aos="animation-translate-y" data-aos-delay="200">
              <div className="plan__category">
                <div className="plan__icon"><img className="plan__pic" src="img/smile-2.svg" alt=""/></div>
                <div className="plan__text">Small Team</div>
              </div>
              <h3 className="plan__title title title_sm">Standard</h3>
              <div className="plan__price"><span className="plan__money">$29.99</span> /month</div>
              <ul className="plan__list">
                <li>3+ user</li>
                <li>5 TB of secure storage</li>
                <li>Premium productivity features and simple, secure file sharing</li>
              </ul><a className="plan__btn btn btn_pink js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
            </div>
            <div className="plan__item js-plan-item" data-aos="animation-translate-y" data-aos-delay="400">
              <div className="plan__category">
                <div className="plan__icon"><img className="plan__pic" src="img/smile-2.svg" alt=""/></div>
                <div className="plan__text">Large Team</div>
              </div>
              <h3 className="plan__title title title_sm">Ultimate</h3>
              <div className="plan__price"><span className="plan__money">$99.99</span> /month</div>
              <ul className="plan__list">
                <li>10+ user</li>
                <li>10 TB of secure storage</li>
                <li>Premium productivity features and simple, secure file sharing</li>
              </ul><a className="plan__btn btn btn_purple js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
            </div>
          </div>
        </div>
        <div className="plan__circle js-rellax" data-rellax-speed="-1"></div>
      </div>
      
      <div className="work">
        <div className="work__center center">
          <div className="work__head">
            <div className="work__stage stage">Collaboration Redefined</div>
            <h2 className="work__title title"><span className="title__color">Get Work<br/> Done</span> together</h2>
          </div>
          <div className="work__details" data-aos="animation-translate-y" data-aos-duration="800">
            <div className="work__icon"><img className="work__pic" src="img/balls.svg" alt=""/></div>
            <div className="work__text">Let your personalized Collab assistant do the heavy lifting while you focus on creating.</div><a className="work__link" href="#">Find out more</a>
          </div>
        </div>
        <div className="work__hands">
          <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0"><img className="work__pic js-parallax" data-scale="1.2" data-orientation="down" src="img/hand-2.png" alt=""/></div>
          <div className="work__hand" data-aos data-aos-duration="800" data-aos-offset="0"><img className="work__pic js-parallax" data-scale="1.3" data-orientation="up" src="img/hand-3.png" alt=""/></div>
        </div>
        <div className="work__wave"><img className="work__pic" src="img/wave.svg" alt=""/></div>
        <div className="work__preview" data-aos data-aos-duration="600"><img className="work__pic" src="img/work-pic.png" alt=""/></div>
        <div className="work__circles">
          <div className="work__circle js-rellax" data-rellax-speed="1"></div>
          <div className="work__circle"></div>
          <div className="work__circle js-rellax" data-rellax-speed="-1"></div>
          <div className="work__circle"></div>
          <div className="work__circle"></div>
        </div>
        <div className="work__cursor" data-aos><img className="work__pic" src="img/cursor.png" alt=""/></div>
      </div>
      
        

      
      <div class="teams">
        <div class="teams__center center">
          <div class="teams__head" data-aos="animation-scale-y">
            <div class="teams__stage stage">Team Collaboration Redefined</div>
            <h2 class="teams__title title">Helping world-class teams design faster together<span class="title__color">.</span></h2>
          </div>
          <div class="teams__body">
            <div class="teams__col" data-aos="animation-scale-y">
              <h3 class="teams__title title title_sm">What others are&nbsp;saying</h3>
            </div>
            <div class="teams__col">
              <div class="teams__container">
                <div class="teams__slider js-teams-slider">
                  <div class="teams__slide" data-aos="animation-scale-y" data-aos-delay="200">
                    <div class="teams__line" style={{backgroundColor: "#5956E9 "}}></div>
                    <div class="teams__name" style={{color: "#C75C6F "}}>UI8</div>
                    <div class="teams__text">Collab is fast. Files are  always up to date. <br/>It’s easy to share designs across the organization, so collaboration is easy </div>
                    <div class="teams__user">
                      <div class="teams__ava"><img class="teams__pic" src="img/ui8.png" alt=""/></div>
                      <div class="teams__box">
                        <div class="teams__man">Dash</div>
                        <div class="teams__login">Founder @UI8</div>
                      </div>
                    </div>
                  </div>
                  <div class="teams__slide" data-aos="animation-scale-y" data-aos-delay="400">
                    <div class="teams__line" style={{backgroundColor: "#FAB8C4 "}}></div>
                    <div class="teams__name" style={{color: "#5956E9 "}}>Bento</div>
                    <div class="teams__text"> Collab is fast. Files are always up to date. <br/>It’s easy to share designs across the organization, so collaboration is easy </div>
                    <div class="teams__user">
                      <div class="teams__ava"><img class="teams__pic" src="img/ava-1.png" alt=""/></div>
                      <div class="teams__box">
                        <div class="teams__man">Emily</div>
                        <div class="teams__login">Founder @Bento</div>
                      </div>
                    </div>
                  </div>
                  <div class="teams__slide">
                    <div class="teams__line" style={{backgroundColor: "#5956E9 "}}></div>
                    <div class="teams__name" style={{color: "#C75C6F "}}>UI8</div>
                    <div class="teams__text"> Collab is fast. Files are always up to date. <br/>It is easy to share designs across the organization, so collaboration is easy </div>
                    <div class="teams__user">
                      <div class="teams__ava"><img class="teams__pic" src="img/ui8.png" alt=""/></div>
                      <div class="teams__box">
                        <div class="teams__man">Dash</div>
                        <div class="teams__login">Founder @UI8</div>
                      </div>
                    </div>
                  </div>
                  <div class="teams__slide">
                    <div class="teams__line" style={{backgroundColor: "#FAB8C4 "}}></div>
                    <div class="teams__name" style={{color: "#5956E9 "}}>Bento</div>
                    <div class="teams__text"> Collab is fast. Files are always up to date. <br/>It is easy to share designs across the organization, so collaboration is easy </div>
                    <div class="teams__user">
                      <div class="teams__ava"><img class="teams__pic" src="img/ava-1.png" alt=""/></div>
                      <div class="teams__box">
                        <div class="teams__man">Emily</div>
                        <div class="teams__login">Founder @Bento</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="teams__circle js-rellax" data-rellax-speed="1"></div>
      </div>

 

      <div class="speed">
        <div class="speed__center center">
          <div class="speed__wrap">
            <div class="speed__head" data-aos="animation-scale-y">
              <div class="speed__stage stage">Collab is fast, super fast.</div>
              <h2 class="speed__title title">Speed up <br/>your <br/>workflow<span class="title__color">.</span></h2>
              <div class="speed__text">Essentially no lag, no matter the size of the file, even on mobile devices.</div>
            </div>
            <div class="speed__number" data-aos="animation-scale-y"><span>8.1</span>x</div>
          </div>
        </div>
        <div class="speed__line"><img class="speed__pic" src="img/line.svg" alt=""/></div>
        <div class="speed__preview" data-aos>
          <div class="speed__graphic"><img class="speed__pic" src="img/graphic.png" alt=""/></div>
          <div class="speed__plant"><img class="speed__pic js-parallax" data-scale="1.3" data-orientation="left" src="img/plant.png" alt=""/></div>
        </div>
        <div class="speed__circles">
          <div class="speed__circle js-rellax" data-rellax-speed="-1"></div>
          <div class="speed__circle js-rellax" data-rellax-speed="1"></div>
          <div class="speed__circle"></div>
        </div>
      </div>
      <div class="package js-package">
        <div class="package__center center">
          <div class="package__container">
            <div class="package__wrap">
              <div class="package__slider js-package-slider">
                <div class="package__slide">
                  <div class="package__row">
                    <div class="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                      <div class="package__category">
                        <div class="package__icon"><img class="package__pic" src="img/smile-2.svg" alt=""/></div>
                        <div class="package__text">Awesome feature</div>
                      </div>
                      <h3 class="package__title title title_sm">Ultimate features</h3>
                      <div class="package__info">It’s easy to share designs across the organization, so team collaboration is fast and easy.</div>
                      <div class="package__list"><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-1.svg" alt=""/></div>
                          <div class="package__text">Awesome website</div>
                        </a><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-3.svg" alt=""/></div>
                          <div class="package__text">Stunning interface</div>
                        </a></div>
                      <div class="package__btns">
                        <div class="package__arrows"><button class="package__arrow js-package-prev"><svg class="icon icon-arrow-prev">
                              <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                            </svg></button><button class="package__arrow js-package-next"><svg class="icon icon-arrow-next">
                              <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                            </svg></button></div><a class="package__btn btn btn_purple" href="login.html">Get Started</a>
                      </div>
                    </div>
                    <div class="package__preview"><img class="package__pic" src="img/laptop.png" alt=""/></div>
                  </div>
                </div>
                <div class="package__slide">
                  <div class="package__row">
                    <div class="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                      <div class="package__category">
                        <div class="package__icon"><img class="package__pic" src="img/smile-2.svg" alt=""/></div>
                        <div class="package__text">Awesome feature</div>
                      </div>
                      <h3 class="package__title title title_sm">Standard features</h3>
                      <div class="package__info">It’s easy to share designs across the organization, so team collaboration is fast and easy.</div>
                      <div class="package__list"><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-1.svg" alt=""/></div>
                          <div class="package__text">Awesome website</div>
                        </a><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-3.svg" alt=""/></div>
                          <div class="package__text">Stunning interface</div>
                        </a></div>
                      <div class="package__btns">
                        <div class="package__arrows"><button class="package__arrow js-package-prev"><svg class="icon icon-arrow-prev">
                              <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                            </svg></button><button class="package__arrow js-package-next"><svg class="icon icon-arrow-next">
                              <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                            </svg></button></div><a class="package__btn btn btn_purple" href="login.html">Get Started</a>
                      </div>
                    </div>
                    <div class="package__preview"><img class="package__pic" src="img/laptop.png" alt=""/></div>
                  </div>
                </div>
                <div class="package__slide">
                  <div class="package__row">
                    <div class="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                      <div class="package__category">
                        <div class="package__icon"><img class="package__pic" src="img/smile-2.svg" alt=""/></div>
                        <div class="package__text">Awesome feature</div>
                      </div>
                      <h3 class="package__title title title_sm">Ultimate features</h3>
                      <div class="package__info">It’s easy to share designs across the organization, so team collaboration is fast and easy.</div>
                      <div class="package__list"><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-1.svg" alt=""/></div>
                          <div class="package__text">Awesome website</div>
                        </a><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-3.svg" alt=""/></div>
                          <div class="package__text">Stunning interface</div>
                        </a></div>
                      <div class="package__btns">
                        <div class="package__arrows"><button class="package__arrow js-package-prev"><svg class="icon icon-arrow-prev">
                              <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                            </svg></button><button class="package__arrow js-package-next"><svg class="icon icon-arrow-next">
                              <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                            </svg></button></div><a class="package__btn btn btn_purple" href="login.html">Get Started</a>
                      </div>
                    </div>
                    <div class="package__preview"><img class="package__pic" src="img/laptop.png" alt=""/></div>
                  </div>
                </div>
                <div class="package__slide">
                  <div class="package__row">
                    <div class="package__details" data-aos data-aos-duration="600" data-aos-delay="400">
                      <div class="package__category">
                        <div class="package__icon"><img class="package__pic" src="img/smile-2.svg" alt=""/></div>
                        <div class="package__text">Awesome feature</div>
                      </div>
                      <h3 class="package__title title title_sm">Standard features</h3>
                      <div class="package__info">It’s easy to share designs across the organization, so team collaboration is fast and easy.</div>
                      <div class="package__list"><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-1.svg" alt=""/></div>
                          <div class="package__text">Awesome website</div>
                        </a><a class="package__link" href="#">
                          <div class="package__icon"><img class="package__pic" src="img/layout-3.svg" alt=""/></div>
                          <div class="package__text">Stunning interface</div>
                        </a></div>
                      <div class="package__btns">
                        <div class="package__arrows"><button class="package__arrow js-package-prev"><svg class="icon icon-arrow-prev">
                              <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                            </svg></button><button class="package__arrow js-package-next"><svg class="icon icon-arrow-next">
                              <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                            </svg></button></div><a class="package__btn btn btn_purple" href="login.html">Get Started</a>
                      </div>
                    </div>
                    <div class="package__preview"><img class="package__pic" src="img/laptop.png" alt=""/></div>
                  </div>
                </div>
              </div>
              <div class="package__line"><img class="package__pic" src="img/line-1.svg" alt=""/></div>
              <div class="package__circle" data-aos data-aos-duration="600"></div>
            </div>
            <div class="package__circles">
              <div class="package__circle"></div>
              <div class="package__circle"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="demo">
        <div class="demo__center center">
          <div class="demo__head" data-aos="animation-scale-y">
            <div class="demo__icon">🔥</div>
            <div class="demo__info">We offer flexible pricing options for freelancers and design teams.</div>
          </div>
          <div class="demo__list">
            <div class="demo__item" data-aos="animation-translate-y">
              <h3 class="demo__title title title_sm">Schedule <br/>Product <br/>Demo</h3>
              <div class="demo__text">Still not sure? Schedule a demo to see how Collab can help you get more done.</div><a class="demo__btn btn btn_purple js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Schedule a Demo</a>
            </div>
            <div class="demo__item" data-aos="animation-translate-y" data-aos-delay="200">
              <h3 class="demo__title title title_sm">Get <br/>Started <br/>Now</h3>
              <div class="demo__text">Ready to revolutionize your design workflow? Try Collab for free for 30 days.</div><a class="demo__btn btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a>
            </div>
          </div>
        </div>
        <div class="demo__circle js-rellax" data-rellax-speed="1"></div>
      </div>
      <div class="design">
        <div class="design__center center">
          <div class="design__wrap" data-aos="animation-translate-y">
            <div class="design__stage stage">Design accordlogy</div>
            <h2 class="design__title title">Enrich your design workflow<span class="title__color">.</span></h2>
            <div class="design__info info">Design anything from simple icons to fully featured websites and applications.</div>
          </div>
          <div class="design__hand" data-aos data-aos-duration="600"><img class="design__pic" src="img/hand-4.png" alt=""/></div>
          <div class="design__bg" data-aos data-aos-delay="400"><img class="design__pic" src="img/design-pic.png" alt=""/></div>
          <div class="design__circles">
            <div class="design__circle js-rellax" data-rellax-speed="1"></div>
            <div class="design__circle"></div>
            <div class="design__circle js-rellax" data-rellax-speed=".5"></div>
          </div>
          <div class="design__body"><a class="design__scroll" href="#">
              <div class="design__icon"><img class="design__pic" src="img/scroll.svg" alt=""/></div>
              <div class="design__text">Using Collab</div>
            </a>
            <div class="design__container">
              <div class="design__slider js-design-slider">
                <div class="design__slide" data-aos="animation-translate-y" data-aos-delay="0">
                  <div class="design__view">
                    <div class="design__preview"><img class="design__pic" src="img/design-pic-1.png" alt=""/></div>
                  </div>
                  <div class="design__details">
                    <div class="design__category">Design</div>
                    <div class="design__info">Automation Color Picker</div>
                    <div class="design__text">Use the smart color picker to easily select and apply colors.</div><a class="design__link" href="login.html">Get started<svg class="icon icon-arrow-right">
                        <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                      </svg></a>
                  </div>
                </div>
                <div class="design__slide" data-aos="animation-translate-y" data-aos-delay="200">
                  <div class="design__view">
                    <div class="design__preview"><img class="design__pic" src="img/design-pic-2.png" alt=""/></div>
                  </div>
                  <div class="design__details">
                    <div class="design__category">Build</div>
                    <div class="design__info">Component Builder Guide</div>
                    <div class="design__text">Using the Component Builder with your projects.</div><a class="design__link" href="login.html">Get started<svg class="icon icon-arrow-right">
                        <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                      </svg></a>
                  </div>
                </div>
                <div class="design__slide" data-aos="animation-translate-y" data-aos-delay="400">
                  <div class="design__view">
                    <div class="design__preview"><img class="design__pic" src="img/design-pic-3.png" alt=""/></div>
                  </div>
                  <div class="design__details">
                    <div class="design__category">Ship</div>
                    <div class="design__info">Cross-platform Deployment</div>
                    <div class="design__text">Deploy your projects more efficiently for web &amp; mobile.</div><a class="design__link" href="login.html">Get started<svg class="icon icon-arrow-right">
                        <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                      </svg></a>
                  </div>
                </div>
                <div class="design__slide" data-aos="animation-translate-y">
                  <div class="design__view">
                    <div class="design__preview"><img class="design__pic" src="img/design-pic-1.png" alt=""/></div>
                  </div>
                  <div class="design__details">
                    <div class="design__category">Design</div>
                    <div class="design__info">Automation Color Picker</div>
                    <div class="design__text">Use the smart color picker to easily select and apply colors.</div><a class="design__link" href="login.html">Get started<svg class="icon icon-arrow-right">
                        <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                      </svg></a>
                  </div>
                </div>
                <div class="design__slide" data-aos="animation-translate-y">
                  <div class="design__view">
                    <div class="design__preview"><img class="design__pic" src="img/design-pic-2.png" alt=""/></div>
                  </div>
                  <div class="design__details">
                    <div class="design__category">Build</div>
                    <div class="design__info">Component Builder Guide</div>
                    <div class="design__text">Using the Component Builder with your projects.</div><a class="design__link" href="login.html">Get started<svg class="icon icon-arrow-right">
                        <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                      </svg></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div class="details">
        <div class="details__center center">
          <div class="details__head" data-aos="animation-scale-y">
            <h2 class="details__title title">Research & <br/>background, summary<span class="title__color">.</span></h2>
            <div class="details__info info">Collab is fast. Files are always up to date and ready for production</div>
          </div>
          <div class="details__row">
            <div class="details__container">
              <div class="details__slider js-details-slider">
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
              </div>
            </div>
            <div class="details__graphic">
              <div class="details__mobile"><img class="details__pic" src="img/mobile.svg" alt=""/>
                <div class="details__box">
                  <div class="details__chart" data-aos data-aos-offset="0" data-aos-delay="300" data-aos-duration="1000"><img class="details__pic" src="img/chart.svg" alt=""/></div>
                </div>
              </div>
            </div>
          </div>
          <div class="details__hand"><img class="details__pic js-parallax" data-scale="1.2" data-orientation="up" src="img/hand-5.png" alt=""/></div>
          <div class="details__line"><img class="details__pic" src="img/line-2.svg" alt=""/></div>
          <div class="details__circles">
            <div class="details__circle"></div>
            <div class="details__circle js-rellax" data-rellax-speed="-.5"></div>
          </div>
        </div>
      </div>
      <div class="tool">
        <div class="tool__center center">
          <div class="tool__container">
            <div class="tool__wrap">
              <h2 class="tool__title title" data-aos="animation-scale-y">Ready to use the smartest design tool?</h2>
              <div class="tool__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer flexible pricing options for freelancers and design teams. </div>
              <div class="tool__btn" data-aos="animation-scale-y" data-aos-delay="300"><a class="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a></div>
            </div>
            <div class="tool__cloud"><img class="tool__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt=""/></div>
          </div>
        </div>
      </div>
      <div class="roadmap">
        <div class="roadmap__center center">
          <div class="roadmap__head">
            <div class="roadmap__wrap" data-aos="animation-scale-y">
              <div class="roadmap__stage stage">Roadmap</div>
              <h2 class="roadmap__title title">All systems are a go<span class="title__color">.</span></h2>
              <div class="roadmap__info">Find out where we are on the path to achieving the ultimate design tool.</div><select class="roadmap__select">
                <option>Current</option>
                <option>Current</option>
                <option>Current</option>
              </select>
            </div>
            <div class="roadmap__view" data-aos>
              <div class="roadmap__calendar"><img class="roadmap__pic" src="img/roadmap-pic.png" alt=""/></div>
              <div class="roadmap__bg"><img class="roadmap__pic js-parallax" data-scale="1.5" data-orientation="left" src="img/roadmap-pic-1.png" alt=""/></div>
            </div>
          </div>
          <div class="roadmap__body">
            <div class="roadmap__category">Earlier</div>
            <div class="roadmap__box">
              <div class="roadmap__top">
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Q2</div>
                    <div class="roadmap__year">2020</div>
                  </div>
                </div>
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Q3</div>
                    <div class="roadmap__year">2020</div>
                  </div>
                </div>
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Q4</div>
                    <div class="roadmap__year">2020</div>
                  </div>
                </div>
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Q1</div>
                    <div class="roadmap__year">2021</div>
                  </div>
                </div>
              </div>
              <div class="roadmap__lines">
                <div class="roadmap__line">
                  <div class="roadmap__progress" style={{width: "66.66%"}} data-aos>Collab Community</div>
                </div>
                <div class="roadmap__line">
                  <div class="roadmap__progress" style={{width: "43% "}} data-aos data-aos-delay="200">Collab Market</div>
                </div>
                <div class="roadmap__line">
                  <div class="roadmap__progress" style={{width: "50%"}} data-aos data-aos-delay="400">Collab Cloud</div>
                </div>
              </div>
            </div>
            <div class="roadmap__category">Later</div>
          </div>
        </div>
        <div class="roadmap__circles">
          <div class="roadmap__circle"></div>
          <div class="roadmap__circle"></div>
        </div>
        <div class="roadmap__preview" data-aos data-aos-duration="1000" data-aos-delay="300"><img class="roadmap__pic" src="img/roadmap-pic-2.svg" alt=""/></div>
      </div>
      <div class="accord js-accord">
        <div class="accord__center center">
          <div class="accord__row">
            <div class="accord__details">
              <div class="accord__top" data-aos="animation-scale-y">
                <div class="accord__title title title_sm">Technological maturity.</div>
                <div class="accord__text">Collab is fast. Files are always up to date and ready for production. </div>
              </div>
              <ul class="accord__list" data-aos="animation-scale-y" data-aos-delay="200">
                <li>Collab Cloud</li>
                <li>Collab Design</li>
                <li>Collab Share</li>
                <li>Collab Code</li>
              </ul>
            </div>
            <div class="accord__wrap">
              <div class="accord__item js-accord-item active" data-aos="animation-scale-y">
                <div class="accord__head js-accord-head">
                  <div class="accord__icon"><img class="accord__pic" src="img/layout-3.svg" alt=""/></div>
                  <div class="accord__category">In research</div>
                </div>
                <div class="accord__body js-accord-body" style={{display: "block", backgroundImage: `url('img/accord-pic.png')`}}>
                  <ul class="accord__desc">
                    <li>3+ user</li>
                    <li>5 TB of secure storage</li>
                    <li>Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
              <div class="accord__item js-accord-item" data-aos="animation-scale-y">
                <div class="accord__head js-accord-head">
                  <div class="accord__icon"><img class="accord__pic" src="img/layout-3.svg" alt=""/></div>
                  <div class="accord__category">Drafted</div>
                </div>
                <div class="accord__body js-accord-body" style={{backgroundImage: `url('img/accord-pic.png')`}}>
                  <ul class="accord__desc">
                    <li>3+ user</li>
                    <li>5 TB of secure storage</li>
                    <li>Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
              <div class="accord__item js-accord-item" data-aos="animation-scale-y">
                <div class="accord__head js-accord-head">
                  <div class="accord__icon"><img class="accord__pic" src="img/layout-3.svg" alt=""/></div>
                  <div class="accord__category">In development</div>
                </div>
                <div class="accord__body js-accord-body" style={{backgroundImage: `url('img/accord-pic.png')`}}>
                  <ul class="accord__desc">
                    <li>3+ user</li>
                    <li>5 TB of secure storage</li>
                    <li>Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
              <div class="accord__item js-accord-item" data-aos="animation-scale-y">
                <div class="accord__head js-accord-head">
                  <div class="accord__icon"><img class="accord__pic" src="img/layout-3.svg" alt=""/></div>
                  <div class="accord__category">Proposed</div>
                </div>
                <div class="accord__body js-accord-body" style={{backgroundImage: `url('img/accord-pic.png')`}}>
                  <ul class="accord__desc">
                    <li>3+ user</li>
                    <li>5 TB of secure storage</li>
                    <li>Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
              <div class="accord__item js-accord-item" data-aos="animation-scale-y">
                <div class="accord__head js-accord-head">
                  <div class="accord__icon"><img class="accord__pic" src="img/layout-3.svg" alt=""/></div>
                  <div class="accord__category">Completed</div>
                </div>
                <div class="accord__body js-accord-body" style={{backgroundImage: `url('img/accord-pic.png')`}}>
                  <ul class="accord__desc">
                    <li>3+ user</li>
                    <li>5 TB of secure storage</li>
                    <li>Premium productivity features and simple, secure file sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="partners">
        <div class="partners__center center">
          <div class="partners__head" data-aos="animation-scale-y">
            <div class="partners__stage stage">Clients</div>
            <div class="partners__details">
              <h2 class="partners__title title">More than 68,219 designers use Collab.</h2>
              <div class="partners__info info">Design anything from simple icons to fully featured websites and applications.</div>
            </div>
          </div>
          <div class="partners__list">
            <div class="partners__item" data-aos><img class="partners__pic" src="img/waves.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="150"><img class="partners__pic" src="img/goldlines.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="300"><img class="partners__pic" src="img/oliver.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="450"><img class="partners__pic" src="img/duotrip.svg" alt=""/></div>
            <div class="partners__item" data-aos><img class="partners__pic" src="img/rota-show.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="150"><img class="partners__pic" src="img/travelers.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="300"><img class="partners__pic" src="img/velocity-9.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="450"><img class="partners__pic" src="img/foxds.svg" alt=""/></div>
          </div>
        </div>
        <div class="partners__preview" data-aos data-aos-duration="1000"><img class="partners__pic" src="img/partners-pic.svg" alt=""/></div>
        <div class="partners__circle js-rellax" data-rellax-speed=".6"></div>
      </div>
      <div class="quality">
        <div class="quality__head">
          <div class="quality__center center">
            <div class="quality__top" data-aos="animation-scale-y">
              <div class="quality__stage stage">Effortless</div>
              <h2 class="quality__title title">Go from ideation to <br/>design and done<span class="title__color">.</span></h2>
            </div>
            <div class="quality__info info" data-aos="animation-scale-y" data-aos-delay="200">Easily create truly responsive components while deploying production-ready code.</div>
          </div>
          <div class="quality__line"><img class="quality__pic" src="img/line-3.svg" alt=""/></div>
          <div class="quality__preview"><img class="quality__pic js-parallax" data-scale="1.2" data-orientation="left" src="img/lamp.png" alt=""/></div>
        </div>
        <div class="quality__body">
          <div class="quality__col">
            <div class="quality__item" data-aos="animation-scale-x-left">
              <div class="quality__icon"><img class="quality__pic" src="img/camera-big.png" alt=""/></div>
              <div class="quality__details">
                <div class="quality__category">Assets Library</div>
                <div class="quality__text">Get access to huge library of ready-made components and illustrations, free to use on all your projects.</div><a class="quality__link" href="#">Learn more<svg class="icon icon-arrow-right">
                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                  </svg></a>
              </div>
            </div>
          </div>
          <div class="quality__col">
            <div class="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
              <div class="quality__icon"><img class="quality__pic" src="img/clock-big.png" alt=""/></div>
              <div class="quality__details">
                <div class="quality__category">Save Time</div>
                <div class="quality__text">Save tons of time by eliminating repetitive day-to-day tasks and slow load times. </div><a class="quality__link" href="#">Learn more<svg class="icon icon-arrow-right">
                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                  </svg></a>
              </div>
            </div>
          </div>
          <div class="quality__col">
            <div class="quality__item" data-aos="animation-scale-x-left">
              <div class="quality__icon"><img class="quality__pic" src="img/cup-big.png" alt=""/></div>
              <div class="quality__details">
                <div class="quality__category">Relax</div>
                <div class="quality__text">Let your personalized Collab assistant do the heavy lifting while you focus on creating.Say good bye to code 👋</div><a class="quality__link" href="#">Learn more<svg class="icon icon-arrow-right">
                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                  </svg></a>
              </div>
            </div>
          </div>
          <div class="quality__col">
            <div class="quality__item" data-aos="animation-scale-x-right" data-aos-delay="200">
              <div class="quality__icon"><img class="quality__pic" src="img/chatbox-big.png" alt=""/></div>
              <div class="quality__details">
                <div class="quality__category">Support</div>
                <div class="quality__text">Got stuck or need any help? Our support team is online 24/7 to help assist you with any issues.</div><a class="quality__link" href="#">Learn more<svg class="icon icon-arrow-right">
                    <use xlinkHref="img/sprite.svg#icon-arrow-right"></use>
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div class="quality__circles">
          <div class="quality__circle"> </div>
          <div class="quality__circle"> </div>
        </div>
      </div>
      <div class="showcase">
        <div class="showcase__center center">
          <div class="showcase__wrap">
            <div class="showcase__top" data-aos="animation-scale-y">
              <div class="showcase__stage stage">Showcase</div>
              <h2 class="showcase__title title">Created with Collab<span class="title__color">.</span></h2>
            </div>
            <div class="showcase__info info" data-aos="animation-scale-y" data-aos-delay="150">See what designers around the world are building with Collab.</div>
            <div class="showcase__btn" data-aos="animation-scale-y" data-aos-delay="300"><button class="btn btn_purple">View More Projects</button></div>
          </div>
        </div>
        <div class="showcase__bg"><img class="showcase__pic" src="img/showcase-circle.svg" alt=""/></div>
        <div class="showcase__circles">
          <div class="showcase__circle"></div>
          <div class="showcase__circle"></div>
        </div>
        <div class="showcase__list">
          <div class="showcase__preview"><img class="showcase__pic js-parallax" data-scale="1.3" data-orientation="right" src="img/group-1.png" alt=""/></div>
          <div class="showcase__preview"><img class="showcase__pic js-parallax" data-scale="1.3" data-orientation="left" src="img/group-2.png" alt=""/></div>
        </div>
      </div>
      <div class="offer">
        <div class="offer__center center">
          <div class="offer__container">
            <div class="offer__head">
              <h2 class="offer__title title" data-aos="animation-scale-y">Ready to use the smartest design tool?</h2>
              <div class="offer__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer flexible pricing options for freelancing and design teams.</div>
              <div class="offer__btn" data-aos="animation-scale-y" data-aos-delay="300"><a class="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Try free for 30 days</a></div>
            </div>
            <div class="offer__circles">
              <div class="offer__circle"></div>
              <div class="offer__circle"></div>
            </div>
          </div>
          <div class="offer__circle"></div>
        </div>
        <div class="offer__view" data-aos data-aos-delay="400" data-aos-offset="0">
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-1.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-2.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-3.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-4.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-5.png" alt=""/></div>
        </div>
      </div>
      <div class="footer js-footer">
        <div class="footer__center center">
          <div class="footer__row">
            <div class="footer__col"><a class="footer__logo" href="#"><img class="footer__pic" src="img/logo-dark.svg" alt=""/></a></div>
            <div class="footer__col js-footer-col">
              <div class="footer__category js-footer-category">Company<svg class="icon icon-arrow-down">
                  <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                </svg></div>
              <div class="footer__menu js-footer-menu"><a class="footer__link" href="#">About us</a><a class="footer__link" href="#">Jobs</a><a class="footer__link" href="#">Press</a><a class="footer__link" href="#">Blog</a></div>
            </div>
            <div class="footer__col js-footer-col">
              <div class="footer__category js-footer-category">Support<svg class="icon icon-arrow-down">
                  <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                </svg></div>
              <div class="footer__menu js-footer-menu"><a class="footer__link" href="#">Contact us</a><a class="footer__link" href="#">Cookies</a><a class="footer__link" href="#">Privacy & terms</a><a class="footer__link" href="#">Sitemap</a></div>
            </div>
            <div class="footer__col js-footer-col">
              <div class="footer__category js-footer-category">Community<svg class="icon icon-arrow-down">
                  <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                </svg></div>
              <div class="footer__menu js-footer-menu"><a class="footer__link" href="#">Developers</a><a class="footer__link" href="#">Designers</a><a class="footer__link" href="#">Forum</a><a class="footer__link" href="#">UI8</a></div>
            </div>
          </div>
          <div class="footer__bottom"><a class="footer__company" href="https://ui8.net/" target="_blank"><img class="footer__pic" src="img/ui8.svg" alt=""/></a>
            <div class="footer__copyright">© 2020, UI8 LLC.</div><a class="footer__scroll js-link-scroll" href="#header">
              <div class="footer__icon"><img class="footer__pic" src="img/scroll.svg" alt=""/></div>
              <div class="footer__text">Back to top</div>
            </a>
          </div>
        </div>
      </div>
      <div class="popup mfp-hide" id="popup-contact">
        <div class="popup__wrap">
          <div class="popup__head"><a class="popup__logo" href="#"><img class="popup__pic" src="img/logo.svg" alt=""/></a></div>
          <div class="popup__body">
            <div class="popup__title title">Get in touch<span class="title__color">.</span></div>
            <div class="popup__info">Enter your detail below</div>
            <form class="popup__form">
              <div class="popup__field field">
                <div class="field__label">Name</div>
                <div class="field__wrap">
                  <div class="field__icon"><img class="field__pic" src="img/user.svg" alt=""/></div><input class="field__input" type="text" name="name" placeholder="Name"/>
                </div>
              </div>
              <div class="popup__field field">
                <div class="field__label">Email</div>
                <div class="field__wrap">
                  <div class="field__icon"><img class="field__pic" src="img/sending-mail.svg" alt=""/></div><input class="field__input" type="email" name="email" placeholder="Email address"/>
                </div>
              </div>
              <div class="popup__field field field_textarea">
                <div class="field__label">Message</div>
                <div class="field__wrap">
                  <div class="field__icon"><img class="field__pic" src="img/message.svg" alt=""/></div><textarea class="field__textarea" name="Message" placeholder="Message"></textarea>
                </div>
              </div><button class="popup__btn btn btn_purple" type="submit">Send now</button>
            </form>
            <div class="popup__circles">
              <div class="popup__circle"></div>
              <div class="popup__circle"></div>
            </div>
          </div>
          <div class="popup__bg">
            <div class="popup__preview"><img class="popup__pic" src="img/popup-pic-1.png" alt=""/></div>
            <div class="popup__preview"><img class="popup__pic" src="img/cursor-1.png" alt=""/></div>
          </div>
        </div>
      </div>



    </div>  
    </>

  )
}

export default Home