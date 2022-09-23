import React from "react";
import axios from "axios";

const SeriesAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3/tv/popular?api_key=b3c62dbbf7ef4ecdea1a16d5806b193a&language=pt-BR&page=1`
});
export default class Series extends React.Component {
  state = {
    series: []
  };
  addSeries = async () => {
    const response = await SeriesAPI.get();
    const info = response.data.results.map((item) => {
      return {
        title: item.name,
        sinopse: item.overview,
        image: `https://image.tmdb.org/t/p/w200/${item.poster_path}`
      };
    });
    this.setState({
      series: info
    });
  };
  componentDidMount() {
    this.addSeries();
  }
  render() {
    return (
      <div>
        <h1>Séries:</h1>
        <ol>
          {this.state.series.map((item) => (
            <>
              <li>{item.title}</li>
              <img src={item.image} />
              <p>{item.sinopse}</p>
            </>
          ))}
        </ol>
      </div>
    );
  }
}
