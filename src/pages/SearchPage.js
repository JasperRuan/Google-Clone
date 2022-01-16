import React from 'react';
import './SearchPage.css';
import {useStateValue} from "../StateProvider";
import API_KEY from "../keys";
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response';
import {Link} from "react-router-dom";
import GoogleLogo from '../images/googlelogo_color_272x92dp.png';
import Search from '../components/Search';
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function SearchPage(props) {

    const [{term}, dispatch] = useStateValue();
    //LIVE API CALL
    const {data} = useGoogleSearch(term);

    //Mock API CALL
    //const data = Response;

    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                    <img
                        className='searchPage__logo'
                        src={GoogleLogo}
                        alt='Google Logo'
                    />
                </Link>
                <div className='searchPage__headerBody'>
                    <Search hideButtons/>

                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>

                            <div className="searchPage__option">
                                <SearchIcon/>
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon/>
                                <Link to='/all'>News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon/>
                                <Link to='/all'>Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon/>
                                <Link to='/all'>Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon/>
                                <Link to='/all'>Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon/>
                                <Link to='/all'>More</Link>
                            </div>

                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/toolss">Tools</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {
                 term && (
                    <div className='searchPage__results'>
                        <p className="searchPage__resultCount">
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </p>

                        {data?.items.map( (item)=>{
                            return (
                                <div className='searchPage__result'>
                                    <a className='searchPage__resultLink' href={item.link}>
                                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                            <img
                                                className='searchPage__resultImage'
                                                src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                            />
                                        )}
                                        {item.displayLink}
                                        <MoreVertIcon/>
                                    </a>
                                    <a className='searchPage__resultTitle' href={item.link}>
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p className='searchPage__resultSnippet'>
                                        {item.snippet}
                                    </p>
                                </div>
                            )
                        } )}

                    </div>
                )
            }
        </div>
    );
}

export default SearchPage;