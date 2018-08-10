import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
  hight: 'auto',
  width: '100%',
  border: '1px solid RebeccaPurple ',
  borderRadius: '5px'
};
const articleStyle = {
  width: '80%',
  margin: '0 auto',
  color: '#000',
  fontSize: '11px',
  fontWeight: '300',
  textAlign: "justify"
}

let NewsItem = ({ article }) => (
  article ?
    <article style={articleStyle} >
      <div>
        <h1 style={{ fontSize: "20px" }}>{article.title}</h1>
        <img style={imgStyle} src={article.urlToImage} alt="" />
        <h2>{article.description}</h2>
        <a href={article.url} target="_blank">READ MORE</a>
      </div>
    </article> :
    null
);

const mapStateToProps = (state) => ({
  article: state.news,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


