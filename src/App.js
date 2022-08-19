import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Navbar from './Navbar'
// const api = "4c800a0d012b3d68253ad8f28e4ac840";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title='Netflix Original' fetchUrl={requests.fetchNetflixOriginal} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTreading} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Actions Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Documentries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
