/*

cd desktop/coding/react/homepage

npm start

git add .

git commit

git push origin master

*/

import React, { Component } from 'react'
import './App.css';


class Content extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
	  const site="http://k4kirin.github.io/";
	  return(<table>
			<tr><a href={site+"coronatable"}>Coronatable</a> - A website with updated COVID-19 statistics, with data from API.</tr>
			<tr><a href={site+"imgiftmaker"}>Imaginary Gift Maker</a> - A card generator for the card game Cardfight!! Vanguard.</tr>
		</table>
	  );
  }

}

export default Content;
