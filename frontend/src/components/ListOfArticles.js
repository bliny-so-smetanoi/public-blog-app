import Article from "./Article";

export default function ListOfArticles(props){

    const articles = props.articles
    const list = articles.map((article)=>
            <Article key={article._id} onDelete={props.onDelete} article={article}/>
    )

    return(
        <>
            {list}
        </>
    )
}