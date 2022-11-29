import MovieThumb from "../../components/MovieThumb/MovieThumb";

const Home = () => {

    return (
        <div className="mt-20 row">
            <h2 className="text-4xl font-bold">Category 1:</h2>

            <div className="row__inner">
                <MovieThumb title="Title1" src="https://picsum.photos/300/500"/>
                <MovieThumb title="Title2" src="https://picsum.photos/300/501"/>
                <MovieThumb title="Title3" src="https://picsum.photos/300/502"/>
                <MovieThumb title="Title4" src="https://picsum.photos/300/503"/>
                <MovieThumb title="Title5" src="https://picsum.photos/300/504"/>
                <MovieThumb title="Title6" src="https://picsum.photos/300/505"/>
                <MovieThumb title="Title7" src="https://picsum.photos/300/506"/>
                <MovieThumb title="Title8" src="https://picsum.photos/300/507"/>
            </div>

            <hr className="mb-10"/>

            <h2 className="text-4xl font-bold">Category 2:</h2>

            <div className="row__inner">
                <MovieThumb title="Title9" src="https://picsum.photos/300/508"/>
                <MovieThumb title="Title10" src="https://picsum.photos/300/509"/>
                <MovieThumb title="Title11" src="https://picsum.photos/300/512"/>
                <MovieThumb title="Title12" src="https://picsum.photos/300/513"/>
                <MovieThumb title="Title13" src="https://picsum.photos/300/514"/>
                <MovieThumb title="Title14" src="https://picsum.photos/300/515"/>
                <MovieThumb title="Title15" src="https://picsum.photos/300/516"/>
                <MovieThumb title="Title16" src="https://picsum.photos/300/517"/>
            </div>

            <hr className="mb-10"/>

            <h2 className="text-4xl font-bold">Category 3:</h2>

            <div className="row__inner">
                <MovieThumb title="Title17" src="https://picsum.photos/300/518"/>
                <MovieThumb title="Title18" src="https://picsum.photos/300/519"/>
                <MovieThumb title="Title19" src="https://picsum.photos/300/522"/>
                <MovieThumb title="Title20" src="https://picsum.photos/300/523"/>
                <MovieThumb title="Title21" src="https://picsum.photos/300/524"/>
                <MovieThumb title="Title22" src="https://picsum.photos/300/525"/>
                <MovieThumb title="Title23" src="https://picsum.photos/300/526"/>
                <MovieThumb title="Title24" src="https://picsum.photos/300/527"/>
            </div>
        </div>
    )
}

export default Home;