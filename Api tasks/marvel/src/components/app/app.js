import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "../header/header"
// import {MainPage, ComicsPage, Page404, SingleComic} from "../pages"

const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const Page404 = lazy(() => import('../pages/404'))
const SingleComic = lazy(() => import('../singleComic/SingleComic'))

const App = () => {

    return(
        <Router>
            <div className="app">
                <Header></Header>
                <main>
                    <Suspense>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SingleComic/>}/>
                            <Route path='*' element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
    
}

export default App