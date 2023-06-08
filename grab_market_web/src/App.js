// import logo from './logo.svg';
import './App.css';
import MainPageComponent from './main/index.js';
import {Routes, Route} from 'react-router-dom';
import UploadPage from "./upload";
import ProductPage from './product';

function App() {
  
 
  // return (
  //   <div>
  //     <Routes>
  //       <Route exact={true} path="/">
  //         <MainPageComponent />
  //       </Route>
  //       <Route exact={true} path="/product">
  //         <ProductPage />
  //       </Route>
  //       <Route exact={true} path="/upload">
  //         <UploadPage />
  //       </Route>
  //     </Routes>
  //   </div>
  // );


  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<MainPageComponent />} />
        <Route exact={true} path="/products/:id" element={<ProductPage />} />
        <Route exact={true} path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );


}

export default App;
