import React, { Component } from 'react'
import Cards from './Cards'
import './news.css';
import Loading from './Loading.js';

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
  
    }
  }
  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec073ccb403f4d56b1cb6e497bc839cd&pageSize=15`
    let data = await fetch(url);
    this.props.setProgress(50)

    let getdata = await data.json()
    this.setState({ articles: getdata.articles, total: getdata.totalResults,loading: false })
    this.props.setProgress(100)


  }
  next = async () => {
    if (Math.ceil(this.state.total / 15) < this.state.page+1) {
      
    }
    
    else {
      console.log('next' + this.state.page);
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ec073ccb403f4d56b1cb6e497bc839cd&page=${this.state.page + 1}&pageSize=15`
      this.setState({loading:true})
      let data = await fetch(url);
      let getdata = await data.json()
      this.setState({
        articles: getdata.articles,
        page: this.state.page + 1,
        loading: false
      })
    }
  }
  previous = async () => {
   console.log('previous');
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ec073ccb403f4d56b1cb6e497bc839cd&page=${this.state.page - 1}&pageSize=15`
    this.setState({loading: true})
    let data = await fetch(url);
    let getdata = await data.json()
    this.setState({
      articles: getdata.articles,
      page: this.state.page - 1,
      loading: false
    })
  }
  render() {
  
    return (
      <>
        <div className="box1">
          <center><h4><span class="badge bg-info">Santo News</span><span class="badge bg-warning"><h4>{this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)} </h4></span></h4><h1 className='heading'id='heading'> Top Headlines </h1></center>
        </div>
        <div className="text-center">
          {this.state.loading&&<Loading/>}
        </div>
        <div className='row'>
          {this.state.articles.map((elements) => {
            return <div className='col-md-4' key={elements.url}>
              <Cards title={elements.title ? elements.title : "..."} description={elements.description ? elements.description : '...'} image={elements.urlToImage ? elements.urlToImage : elements.urlToImage = "http://daijiworld.com/images/daijiSquareLogo.png"} readmore={elements.url} time={elements.publishedAt} />
            </div>
          })}
          <div className="text-center">
          {this.state.loading&&<Loading/>}
        </div>

        </div>
        < div className="d-flex justify-content-between buttons">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-warning" onClick={this.previous}>&#8592; Previous</button>
          <button type="button" disabled={Math.ceil(this.state.total / 15) < this.state.page+1} className="btn btn-warning" onClick={this.next}>Next &#8594;</button>
        </div>
      </>

    )
  }
}
