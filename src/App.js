import logo from './logo.svg';
import './App.css';
import { Content } from './components/Content';
import Header from './components/Header';
import { MapDemo } from './components/MapDemo';
import { UseState } from './components/UseState';
import { UseState2 } from './components/UseState2';
import { FromDemo1 } from './From/FromDemo1';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { AmazonHome } from './components/amazon/AmazonHome';
import { AmazonProduct } from './components/amazon/AmazonProduct';
import { Error404 } from './components/amazon/Error404';
import { ProductDetail } from './components/amazon/ProductDetail';
import { FromDemo2 } from './From/FromDemo2';
import { ApiDemo1 } from './api/ApiDemo1';
import { Omdb } from './api/Omdb';
import { OmdbDetail } from './api/OmdbDetail';
import { UseEffectDemo } from './components/UseEffectDemo';
import { UpdateUser } from './api/UpdateUser';

function App() {

  var title = "Ahmedabad";
  var data = {
    country: "INDIA",
    state: "Gujarat"
  }

  const test = () => {
    alert("Test");
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<h2>Main page</h2>}></Route>
        <Route path='/amazonhome' element={<AmazonHome />}></Route>
        <Route path='/amazonproduct' element={<AmazonProduct />}></Route>
        <Route path='/amazonproduct/productdetail/:id' element={<ProductDetail />}></Route>

        <Route path='/fromdemo1' element={<FromDemo1 />}></Route>
        <Route path='/fromdemo2' element={<FromDemo2 />}></Route>
        <Route path='/apidemo1' element={<ApiDemo1 />}></Route>
        <Route path='/omdb' element={<Omdb />}></Route>
        <Route path='/omdb/omdbdetail/:id' element={<OmdbDetail/>}></Route>
        <Route path='/useeffect' element={<UseEffectDemo/>}></Route>
        <Route path='updateuser/:id' element={<UpdateUser/>}>
        </Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      {/* <Header title ={title} d={data} test={test}></Header> */}
      {/* <Content></Content>
    <MapDemo title = {title}></MapDemo> */}
      {/* <UseState></UseState> */}

      {/* <UseState2></UseState2> */}

      {/* <FromDemo1></FromDemo1> */}
    </div>
  );
}

export default App;
