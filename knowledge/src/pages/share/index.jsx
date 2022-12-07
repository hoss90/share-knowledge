import { useNavigate } from 'react-router-dom';
import './share.css';
import { useState } from 'react';
import Axios from "axios"
export default function Share(){
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [article, setArticle] = useState("");
    const [category, setCategory] = useState("");
    let navigate= useNavigate();
    function createUsers(){
    Axios.post("https://share-knowledge.vercel.app/api/data",{name,email,article,category})
    .then((response) => {
        setListOfUsers([
          ...listOfUsers,
          {
            name,
            email,
            article,
            category,
          },
        ]);
      });
      redirect()
    };
    async function redirect(){
      await navigate('/');
    }
  
    return(
        <div className="share">
              <h1>Share your knowldge</h1>
              <input type="text" className='input' placeholder='Your Name'  onChange={(event) => {
            setName(event.target.value);
          }} />
                <input type="email" className='input' placeholder='Your Email'   onChange={(event) => {
            setEmail(event.target.value);
          }} />
                <textarea  className='articleArea' cols={30} rows={6} placeholder="let's write your Knowledge here" onChange={(event) => {
            setArticle(event.target.value);
          }}/>
          <div>
          <input type="checkbox" className='check'  onChange={(event) => {
            setCategory('Science');
          }}/>
          <label>Science</label>
          <input type="checkbox" className='check'  onChange={(event) => {
            setCategory('Technologie');
          }}/>
          <label>Technologie</label><br/>
          <input type="checkbox" className='check' onChange={(event) => {
            setCategory('Economic');
          }}/>
          <label>Economic</label>
          <input type="checkbox" className='check' onChange={(event) => {
            setCategory('Other');
          }}/>
          <label>Other</label><br/>
          </div>
                <input type="submit" value="SHARE" className='submit' onClick={createUsers}/>
        </div>
    )
}