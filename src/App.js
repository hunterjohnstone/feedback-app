import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackStats from './components/FeedbackStats.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
import { FeedbackProvider } from './context/FeedbackContext.js';
import AboutPage from './pages/AboutPage.jsx';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink.jsx';
 

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
            <div className='container'>
                <Routes>
                    <Route exact path = '/' element = {
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList/>
                        </>
                    }>
                        </Route>
                        <Route path = '/about' element = {<AboutPage/>} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
} 

export default App;
