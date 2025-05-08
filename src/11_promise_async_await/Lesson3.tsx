import {useState} from 'react';
import API from './API';
import './lesson_3';
import * as React from 'react';

const Test_OMDb = () => {
  const [searchName, setSearchName] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchNameByType, setSearchNameByType] = useState('');
  const [searchResultByType, setSearchResultByType] = useState('');

  // const searchFilm = () => {
  //   API.searchFilmsByTitle(searchName)
  //       .then(({data}) => {
  //         const {Search, Error, Response} = data;
  //         console.log(data);
  //         if (Response === 'True') setSearchResult(Search)
  //         if (Response === 'False') setSearchResult([{Title: Error}]);
  //       })
  //       .catch(error => console.log(error));
  // };

  // с помощью async await
  const searchFilm = async () => {
    try {
      const {data} = await API.searchFilmsByTitle(searchName)
      const {Search, Error, Response} = data;
      console.log(data)
      Response === 'True' ? setSearchResult(Search) : setSearchResult([{Title: Error}]);
    } catch (e) {
      console.log(e)
    }
  };


  const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
    API.searchFilmsByType(searchNameByType, type)
  }

  return (
      <div>
        <h1>Promises</h1>
        <div>
          <h3><p>Search by name:</p></h3>
          <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
          <button onClick={searchFilm}>Search</button>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}>
            {searchResult.map((item, i) => (
                <div key={i} style={{border: '1px solid black',}}>
                  <img style={{
                    width: '30px',
                    height: '50px',
                  }} src={item.Poster} alt="none poster"/> <br/>
                  {item.Title} - {item.Year} - {item.Type}
                </div>
            ))}
          </div>
        </div>

        <div>
          <h3><p>Search by type:</p></h3>
          <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
          <button onClick={searchByType} data-t='movie'>Movie</button>
          <button onClick={searchByType} data-t='series'>Series</button>
          <div>
            {searchResultByType}
          </div>
        </div>
      </div>
  );
}
export default Test_OMDb;