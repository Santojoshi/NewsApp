import React, { Component } from 'react'
import Nav from './components/Nav'
import News from './components/News'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
state={
  progress: 0
}
setProgress=(progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <BrowserRouter>
      <div>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      
      />

        <Nav/>
        
        <Routes>
          <Route exact path='/'  element={<News  setProgress = {this.setProgress} key='/' category='general' />} />
          <Route exact path='/business'  element={<News  setProgress = {this.setProgress} key='business'category='business' />} />
          <Route exact path='/entertainment' element={<News  setProgress = {this.setProgress} key='entertainment'category='entertainment' />} />
          <Route exact path='/health' element={<News  setProgress = {this.setProgress} key='health'category='health' />} />
          <Route exact path='/science' element={<News setProgress = {this.setProgress} key='science'category='science' />} />
          <Route exact path='/sports'element={<News  setProgress = {this.setProgress} key='sports'category='sports' />} />
          <Route exact path='/technology' element={<News  setProgress = {this.setProgress} key='technology' category='technology' />} />

          <Route exact path='/in' element={<News setProgress = {this.setProgress} key='in' country='in' />} />
          <Route exact path='/us' element={<News setProgress = {this.setProgress} key='us' country='us' />} />
          <Route exact path='/cn' element={<News setProgress = {this.setProgress} key='cn' country='cn' />} />
          <Route exact path='/ca' element={<News setProgress = {this.setProgress} key='ca' country='ca' />} />
          <Route exact path='/fr' element={<News setProgress = {this.setProgress} key='fr' country='fr' />} />
          <Route exact path='/ua' element={<News setProgress = {this.setProgress} key='ua' country='ua' />} />
          
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}
