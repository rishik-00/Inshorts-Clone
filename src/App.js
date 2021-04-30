import React, {  useState, useEffect } from 'react';
import NavInshort from './components/navinshort';
import News from './components/news/news';
import axios from 'axios';
import apiKey from './data/config';
import './App.css';

function App() {

const [category, setCategory]  = useState("general");
const [newsArray, setNewsArray] = useState([]);
const [newsResult, setNewsResult] = useState([]);
const [loadmore, setloadmore] = useState(15);
const newsApi = async() => {
  try{

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";  
    const news = await axios.get(
      `${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`);
    setNewsArray(news.data.articles);
    setNewsResult(news.data.totalResults);
    console.log(newsResult);

  } catch(error){
    console.log(error);
  }
};

  useEffect(() => {
    newsApi();
  }, [newsResult, category, loadmore]);

    return (
     <div className = "App">
      <NavInshort setCategory = {setCategory}/>
      <News setLoadMore={setloadmore} loadMore = {loadmore} newsArray = {newsArray} newsResults = {newsResult}/>

      </div>
        )
  }


export default App;
