import Navbar from "./components/Navbar";
import Offline from "./components/offline/Offline";
import Online from "./components/online/Online";
import Webinar from "./components/webinar/Webinar";
import Course from "./pages/course/Course";
import Download from "./pages/download/Download";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import MentorProfile from "./pages/mentorProfile/MentorProfile";
import Method from "./pages/method/Method";
import styles from "./style";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => (
  <Router>
     <div>
      <div className={`${styles.paddingX} ${styles.flexCenter} px-1`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
         </div>
      </div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/download" element={<Download />} />
        <Route path="/method" element={<Method/>}>
          <Route path="online" element={<Online/>}/>
          <Route path="offline" element={<Offline/>}/>
          <Route path="webinar" element={<Webinar/>}/>
        </Route>
        <Route path="/mentor/:id" element={<MentorProfile/>}/>
      </Routes>
    </div>
  </Router>
);

export default App;
