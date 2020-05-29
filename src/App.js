import React, { Component } from 'react'
import Content from './Content';
import Header from './Header';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Content/>
			</div>
		)
  }

}
