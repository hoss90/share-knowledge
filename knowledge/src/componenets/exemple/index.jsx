import './exemple.css'
export function Exemple({article,writer}){
    return(
        <div className="exemple">
            <p className='article'>{article.slice(0,80)}...</p>
            <span className='writer'> {writer}</span>
        </div>
    )
}
