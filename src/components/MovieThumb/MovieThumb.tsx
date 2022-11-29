import {Link, Route, Routes} from "react-router-dom";
import MovieInner from "../../Routes/MovieInner/MovieInner";

const MovieThumb = (props) => {

    type MovieThumbProps = {
        title: string,
        src: string,
    }

    const {title, src}: MovieThumbProps = props;

    return (
        <>
            <Link to="/movie">
                <div className="tile">
                    <div className="tile__media">
                        <img className="tile__img" src={src}
                             alt=""/>
                    </div>
                    <div className="tile__details">
                        <div className="tile__title">
                            {title}
                        </div>
                    </div>
                </div>
            </Link>

            <Routes>
                <Route path="/movie" element={<MovieInner />} />
            </Routes>

        </>
    )
}

export default MovieThumb;