import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button, Form } from "shards-react";
import axios from "axios";

import PageTitle from "../../components/common/PageTitle";
import SmallStats from "../../components/common/SmallStats";
import UsersOverview from "../../components/blog/UsersOverview";
import UsersByDevice from "../../components/blog/UsersByDevice";
import NewDraft from "../../components/blog/NewDraft";
import Discussions from "../../components/blog/Discussions";
import TopReferrals from "../../components/common/TopReferrals";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import Artist from "./../TopTracks/Artist/Artist";
import Country from "./../TopTracks/Country/Country";
import Tag from "./../TopTracks/Tag/Tag";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormSelect
} from "shards-react";

const fs = require('fs')


const DataInfo = ({ smallStats }) => {

  let first = 0;
  const [token, setToken] = useState("");
  const [usernameToken, setUserNameToken] = useState("");
  const [successData, setState] = useState({
    name: "",
    popularity: ""
  })
  const [currentData, setCurrentData] = useState({});
  const [tab, setTab] = useState({
    value: '1'
  });

  const componentDidMount = () => {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      setToken(_token);
    }
  }
  const handleChange = (e) => {
    setTab({
      value: e.target.value
    });
  }
  const hash = window.location.hash
    .substring(1)
    .split("&")
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  const getData = (token) => {
    console.log(token);
    axios.interceptors.request.use(function (config) {
      // Do something before request is sent

      config.headers["Authorization"] = `Bearer ${token}`;
      console.log(config)
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });
    axios.get("https://api.spotify.com/v1/me/")
      .then((data) => {
        first = data.data.display_name;
        //window.location.href = `http://localhost:3000/callback?${data.data.display_name}?${token}`;

        setUserNameToken(data.data.display_name)
        console.log( "Data listed below ")
        let pictureUrlOfProfile = data.data.images[0].url
        window.localStorage.setItem("profilePic", JSON.stringify(pictureUrlOfProfile));
        console.log( pictureUrlOfProfile )
        console.log( data )
        //setState({
        //...successData,
        //[data.data.items.name ] : data.data.items.popularity
        //});
        window.location.href = `http://localhost:5000/data?${data.data.display_name}?${token}`
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(successData);
  }

  const getUserTopGenres = (token) => {
    axios.interceptors.request.use(function (config) {

      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    axios.get("https://api.spotify.com/v1/me/top/artists")
      .then((data) => {

        console.log( "Top artist listed below ")
        console.log( data.data.items )
        window.localStorage.setItem("artistList", JSON.stringify(data.data.items));

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount();
  window.location.hash = "";
  console.log(`Token before ${token}`)
  useEffect(() => {
    getUserTopGenres(token);
    getData(token);   
  })

  console.log(2)
  let urlkey = `http://localhost:5000/data?${usernameToken}?${token}`


  return (
    <div>
        <form action= {urlkey} method="POST">
            <h3>Redirecting...</h3>
        
        </form>
    </div>
  );
};
export default DataInfo;