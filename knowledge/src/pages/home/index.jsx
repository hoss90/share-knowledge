import "./Home.css";
import Article from "../../componenets/article";
import {Link} from 'react-router-dom'
function Home (){
    
  
    return(
        <div className="home">
            
               <div className="topics">
                <h2 className="topic-title">Topics</h2>
                <h4 className="topic"><Link className="link" to="/technologie">Technologie</Link></h4>
                <h4 className="topic"><Link className="link" to="/science">Science</Link></h4>
                <h4 className="topic"><Link className="link" to="/economic">Economic</Link></h4>
                <h4 className="topic"><Link className="link" to="/other">Other</Link></h4>
                </div> 
                <div className="last-articles">
                    <h2 className="last-title">Last Articles :</h2>
                   <div className="last">
                    <Article />
                    </div>
                   <span ><Link to="last">Show more ...</Link></span>
                </div>
                <div className="best-articles">
                    <h2 className="title-best">Best Articles Of The Week</h2>
                    <div className="best">
                    <Article genre='best' />
                        </div>
            
            

                </div>
        </div>
    )
}
export default Home;