import './exemple2.css';
export function Exemple2({article,writer,category,date}){
    const dating=date.slice(0,10);
    return(
        <div className="exemple2">
            <p id="articl">{article}...</p>
            <div className='info'>
            <span className="writer2"> {writer}</span>
            <span className="category2">{category}</span>
            <span className="date2">{dating}</span>
            </div>
        </div>
    )
}
