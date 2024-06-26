import React from "react"
import Navbar from "../../components/Navbar/navbar"
import Works from "../../components/Works/works"
import Clients from "../../components/Clients/clients"
import Blogs1 from "../../components/blogs/Blogs1/blogs1"
import CallToAction from "../../components/Call-to-action/call-to-action"
import Footer from "../../components/Footer/footer"
import LightTheme from "../../layouts/Light"
import Intro4 from "../../components/Intro4/intro4"
import AboutUs2 from "../../components/About-us2/about-us2"
import Services3 from "../../components/Services3/services3"
import AboutUs4 from "../../components/About-us4/about-us4"
import WorksStyle3 from "../../components/Works-style3/works-style3"
import CaseStudy from "../../components/Case-study/case-study"
import Blogs4 from "../../components/blogs/Blogs4/blogs4"
import Portfolio from "../../components/Portfolio/portfolio"
import Blogs3 from "../../components/blogs/Blogs3/blogs3"
import Services2 from "../../components/Services2/services2"
import SkillsCircle from "../../components/Skills-circle/skills-circle"
import ShowcasesFullScreenCircleSlide from "../../components/Showcases-full-screen-circle-slide/showcases-full-screen-circle-slide"
import Works3 from "../../components/Works3/works3"

const Homepage1 = () => {
  const fixedSlider = React.useRef(null)
  const MainContent = React.useRef(null)
  const navbarRef = React.useRef(null)
  const logoRef = React.useRef(null)

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px"
      }
    }, 1000)
    var navbar = navbarRef.current,
      logo = logoRef.current
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll")
    } else {
      navbar.classList.remove("nav-scroll")
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll")
        // logo.setAttribute("src", appData.lightLogo)
      } else {
        navbar.classList.remove("nav-scroll")
        // logo.setAttribute("src", appData.lightLogo)
      }
    })
  }, [fixedSlider, MainContent, navbarRef])

  return (
    <LightTheme>
      {/* <Navbar nr={navbarRef} lr={logoRef} /> */}
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />

      {/* <IntroWithSlider sliderRef={fixedSlider} /> */}
      <Intro4 blackStar />

      <div ref={MainContent} className="main-content">
        <Clients theme="light" />
        <AboutUs2  />
        <Services3 />
        <Services2 style="4item" />
        {/* <ShowcasesFullScreenCircleSlide /> */}
        <Works3 />

        {/* <CaseStudy/> */}
        {/* <WorksStyle3 /> */}
        {/* <Portfolio grid={3} filterPosition="center" /> */}
        <AboutUs4 />
        {/* <Blogs1 /> */}
        <Blogs3 />

        <CallToAction />
        <Footer />
      </div>
    </LightTheme>
  )
}

export default Homepage1
