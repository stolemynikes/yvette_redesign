import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


//pages
import Home from './pages/Home'
import Algemenevoorwaarden from './pages/Algemene-voorwaarden'
import Privacyverklaring from './pages/Privacyverklaring'
import Ademwerk from './pages/Ademwerk'
import AngstVoorHonden from './pages/AngstVoorHonden'
import Coaching from './pages/Coaching'
import Stressmanagement from './pages/Stressmanagement'
import OverOns from './pages/OverOns'
import Tarieven from './pages/Tarieven'
import Contact from './pages/Contact'
import Nieuwsbrief from './pages/Nieuwsbrief'
import NewsletterPopup from './components/NewsletterPopup'


//router
import { Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Kennismakingsgesprek from './pages/Kennismakingsgesprek'
import { useEffect } from 'react'

//global styling
import './styles/_global.scss'



function App() {

    const {pathname} = useLocation();
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) { isFirstRender.current = false; return; }
        window.scrollTo({top: 0, behavior: 'instant'})
    }, [pathname])

    const excludedRoutes = ['/algemene-voorwaarden', '/privacyverklaring'];

    const stylingRoutes = excludedRoutes.map((Array) => {
        if(pathname == Array) {
            document.body.style.overflow = 'hidden';
            document.body.style.margin = '0';
        }
    });



  return (
    <>

    {/* Paper grain texture overlay — botanical design system */}
    <div
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.018]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    />

    {!excludedRoutes.includes(pathname) &&  <Navbar/>}
    

        <div key={pathname} className="page-transition">
        <Routes>

            <Route path="/" exact element={<Home/>}/>\
            <Route path="/*" exact element={<Navigate to='/'/>}/>
            {/* <Route path='/ademwerk' exact element={<Ademwerk/>}/> */}
            {/* tijdelijk */}
                <Route path='/ademwerk' exact element={<Ademwerk/>}/>
            {/*  */}
            <Route path='/coaching' exact element={<Coaching/>}/>
            <Route path='/angst-voor-honden' exact element={<AngstVoorHonden/>}/>
            <Route path='/kennismakingsgesprek' exact element={<Kennismakingsgesprek/>}/>
            <Route path='/over-ons' exact element={<OverOns/>}/>
            <Route path='/tarieven' exact element={<Tarieven/>}/>
            <Route path='/contact' exact element={<Contact/>}/>
            <Route path='/algemene-voorwaarden' exact element={<Algemenevoorwaarden/>}/>
            <Route path='/privacyverklaring' exact element={<Privacyverklaring/>}/>
            <Route path='/stressmanagement' exact element={<Stressmanagement/>}/>
            <Route path='/nieuwsbrief' exact element={<Nieuwsbrief/>}/>

        </Routes>
        </div>

        {!excludedRoutes.includes(pathname) && <NewsletterPopup/>}
        {!excludedRoutes.includes(pathname) &&  <Footer/>}

    </>
  )
}

export default App
