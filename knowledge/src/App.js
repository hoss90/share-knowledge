import { Route,Routes,BrowserRouter } from "react-router-dom";
import Header from "./componenets/header";
import Share  from "./pages/share";
import Home from "./pages/home";
import LAstArticle from "./pages/lastArticles";
import Technologie from "./pages/technologie";
import Science from "./pages/science";
import Economic from "./pages/economic";
import Other from "./pages/other";
function App() {
 
       
  return (
  
    <div>
  <BrowserRouter>
  <Header />
      <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/share" element={<Share />} />
          <Route path="/last" element={<LAstArticle/>}/>
          <Route path="/technologie" element={<Technologie/>}/>
          <Route path="/science" element={<Science/>}/>
          <Route path="/economic" element={<Economic/>}/>
          <Route path="/other" element={<Other/>}/>
          </Routes>
          </BrowserRouter>
     
    </div>
   
  );
}

export default App;
