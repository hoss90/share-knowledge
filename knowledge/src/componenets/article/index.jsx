/* eslint-disable array-callback-return */
import { useFetch } from "../hook";
import { Exemple } from "../exemple";
export default function Article({genre}){
  const {data,loading}=useFetch("https://share-knowledge.vercel.app/api/getData")
  return loading?(
        <div className="loader"></div>):(
           <div>
           {data.map((bestArticle, index) => {
            if (index > data.length-4) {
              return <Exemple
              key={`${index}`}
              article={bestArticle.article}
              writer={bestArticle.name}
            />
           }
            }   )}
            </div>
    )
}