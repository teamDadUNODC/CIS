import Grid from '@material-ui/core/Grid';

import MovieCard from './MovieCard/MovieCard';
import useStyles from './styles';

const movies = [
    {
        "id": "287947",
        "title": "Shazam!",
        "poster": "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
        "overview": "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
        "release_date": 1553299200,
        "genres": [
            "Action",
            "Comedy",
            "Fantasy"
        ],
        "likes": []
    },
    {
        "id": "299537",
        "title": "Captain Marvel",
        "poster": "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
        "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
        "release_date": 1551830400,
        "genres": [
            "Action",
            "Adventure",
            "Science Fiction"
        ],
        "likes": []
    },
    {
        "id": "522681",
        "title": "Escape Room",
        "poster": "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
        "overview": "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
        "release_date": 1546473600,
        "genres": [
            "Thriller",
            "Action",
            "Horror",
            "Science Fiction"
        ],
        "likes": []
    },
    {
        "id": "166428",
        "title": "How to Train Your Dragon: The Hidden World",
        "poster": "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
        "overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
        "release_date": 1546473600,
        "genres": [
            "Animation",
            "Family",
            "Adventure"
        ],
        "likes": []
    },
    {
        "id": "450465",
        "title": "Glass",
        "poster": "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
        "overview": "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
        "release_date": 1547596800,
        "genres": [
            "Documentary"
        ],
        "likes": []
    },
    {
        "id": "495925",
        "title": "Doraemon the Movie: Nobita's Treasure Island",
        "poster": "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
        "overview": "The story is based on Robert Louis Stevenson's Treasure Island novel.",
        "release_date": 1520035200,
        "genres": [
            "Animation"
        ],
        "likes": []
    },
    {
        "id": "329996",
        "title": "Dumbo",
        "poster": "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
        "overview": "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
        "release_date": 1553644800,
        "genres": [
            "Adventure",
            "Family",
            "Fantasy"
        ],
        "likes": []
    },
    {
        "id": "299536",
        "title": "Avengers: Infinity War",
        "poster": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "release_date": 1524618000,
        "genres": [
            "Adventure",
            "Action",
            "Science Fiction"
        ],
        "likes": []
    },
];


const MovieCards = () => {
    const classes = useStyles();
    
    if (!movies.length) return <p>Loading...</p>

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {movies.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default MovieCards;