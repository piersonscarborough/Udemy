
import axios from 'axios';
import config from './config';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{

    constructor(){
        super();
        this.state ={
            movieList: []
        }
    }

    componentDidMount(){
        const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
        axios.get(nowPlayingUrl).then((response)=>{
            console.log(response.data)
            const movieData = response.data.results
            this.setState({
                movieList: movieData
            })
        })
    }
    render(){
        const imageUrl = "http://image.tmdb.org/t/p/w300"
        const movieGrid = this.state.movieList.map((movie,index)=>{
            return(
                <div className="col s3" key={index}>
                    <Link to={`/movie/${movie.id}`} >
                        <img src={`${imageUrl}${movie.poster_path}`}/>
                    </Link>
                </div>
            )
        })
        return(
            <div className="row">
                {movieGrid}
            </div>
        )
        
    }
}

export default Home;

// const apiKey = "fec8b5ab27b292a68294261bb21b04a5";
// const singleMovieUrl = "https://api.themoviedb.org/3/movie/"

// const imageUrl = "http://image.tmdb.org/t/p/w300";