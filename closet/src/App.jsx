import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Mainlist from "./components/mainlist.jsx";
import Sidebar from "./components/sidebar.jsx";
import Color from "./components/colorpick.jsx";
import Search from "./components/search.jsx";

const l = value => console.log(value);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suit: null,
      shirt: null,
      pant: null,
      shoe: null,
      watch: null,
      laundry: false,
      home: true
    };
  }
  componentDidMount(home) {
    if (home) {
      this.setState({
        home: true
      });
    }
    this.fetchClothes("pant", 5, "WHERE laundry =false");
    this.fetchClothes("suit", 5, "WHERE laundry =false");
    this.fetchClothes("shoe", 5, "WHERE laundry =false");
    this.fetchClothes("watch", 5, "WHERE laundry =false");
    this.fetchClothes("shirt", 5, "WHERE laundry =false");
    this.setState({ laundry: false });
  }
  clickFetch(call, limit) {
    this.setState({
      suit: null,
      shirt: null,
      pant: null,
      shoe: null,
      watch: null
    });
    this.fetchClothes(call, limit);
    this.setState({ home: false });
    this.setState({ laundry: false });
  }
  clickLaundry(call, limit) {
    this.fetchClothes("pant", limit, "WHERE laundry = true");
    this.fetchClothes("suit", limit, "WHERE laundry = true");
    this.fetchClothes("shoe", limit, "WHERE laundry = true");
    this.fetchClothes("watch", limit, "WHERE laundry = true");
    this.fetchClothes("shirt", limit, "WHERE laundry = true");
    this.setState({ laundry: true });
    this.setState({ home: false });
  }

  fetchClothes(attire, limit, where) {
    if (!where) {
      where = "";
    }
    fetch(`/outfit/${attire}?limit=${limit}&&where=${where}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(data => data.json())
      .then(data2 => {
        let stateObj = {};
        stateObj[attire] = data2.rows;
        this.setState(stateObj);
      });
  }
  outfitter(starter) {
    let color = starter.color;
    let article = starter.article;
    if (article === "Shoes") {
      article = "shoe";
    }
    let type = starter.type;

    let starterItem = {};
    starterItem[article.toLowerCase()] = [starter];
    this.setState(starterItem);
    l(starter);
    if (article !== "Pant") {
      let where = `WHERE color = '${color}' AND laundry = false`;
      console.log(where);
      this.fetchClothes("pant", 1, `${where}`);
    }
    if (article !== "Shirt") {
      l("hello");
      let where = `WHERE color = '${color}' AND laundry = false`;
      this.fetchClothes("shirt", 1, `${where}`);
    }
    if (article !== "Suit") {
      let where = `WHERE color = '${color}' AND laundry = false`;
      this.fetchClothes("suit", 1, `${where}`);
    }
    if (article !== "watch") {
      let where = `WHERE color = '${color}' AND laundry = false`;
      this.fetchClothes("watch", 1, `${where}`);
    }
    if (article !== "shoe") {
      let where = `WHERE color = '${color}' AND laundry = false`;
      this.fetchClothes("shoe", 1, `${where}`);
    }
    this.setState({ home: false });
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <Route
                path="/Add"
                render={props=>{
                  return (
                    <Search />
                  )
                }}>
              </Route>
            </div>
            <div>
              <Sidebar
                click={this.clickFetch.bind(this)}
                laundClick={this.clickLaundry.bind(this)}
                home={this.componentDidMount.bind(this)}
              />
            </div>
            <div>
              <Route
                exact path="/"
                render={props => {
                  return (
                    <Mainlist
                      suit={this.state.suit}
                      shirt={this.state.shirt}
                      pants={this.state.pant}
                      shoes={this.state.shoe}
                      watches={this.state.watch}
                      home={this.state.home}
                      laundry={this.state.laundry}
                      outfitter={this.outfitter.bind(this)}
                    />
                  );
                }}
              />
            </div>
            <div>
              <Route 
                path='/color'
                render={()=>{
                  return (
                    <Color />
                  )
                }}>
                </Route>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
