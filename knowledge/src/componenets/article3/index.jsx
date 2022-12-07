/* eslint-disable array-callback-return */
import { useFetch } from "../hook";
import { Exemple2 } from "../exemple2";
import "../article2/style.css"
export default function Article3({genre}){
  const {data,loading}=useFetch("https://share-knowledge.vercel.app/api/getData")
  return loading?(
        <div className="loader"></div>):(
        <div className="lastArticle">
           {data.map((bestArticle, index) => {
            if (bestArticle.category === genre){
             return <Exemple2
              key={`${index}${bestArticle.name}`}
              article={bestArticle.article}
              writer={bestArticle.name}
              category={bestArticle.category}
              date={bestArticle.createdAt}
            />
            }
           }
          )}
            </div>
    )
}