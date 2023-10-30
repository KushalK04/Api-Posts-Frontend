import './Article.css'

export default function Article(props) {
    return (
        <div className="article">
            <p className="center">
                <a>{props.article.title}</a>
            </p>
            <p className="author">
                by: <a href={props.article.url}>{props.article.author}</a> 
            </p>
            <p className="author">
                
            </p>
        </div>
    );
}
