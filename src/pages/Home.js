import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import {Avatar} from "@mui/material";
import GoogleLogo from '../images/googlelogo_color_272x92dp.png';
import Search from "../components/Search";



function Home(props) {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className="home__headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <Avatar>J</Avatar>
                </div>
            </div>

            <div className='home__body'>
                <img
                    src={GoogleLogo}
                    alt='google_logo'
                />

                <div className='home__inputContainer'>
                    <Search/>
                </div>
            </div>

        </div>
    );
}

export default Home;