import React from 'react'
import Article from './Article.js'

function ArticleList(props) {
    
    const theArticles = props.articles.map((article) =>
        <Article title={article.title} key={article.id} date={article.date} preview={article.preview} />
    )

    return (
        <main>
            {theArticles}
        </main>
    )
}

export default ArticleList