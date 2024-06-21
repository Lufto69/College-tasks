import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ComicsBanner from "../comicsBanner/comicsBanner"
import ComicsList from "../comicsList/comicsList"

const ComicsPage = () => {
    return (
        <>
            <ComicsBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage