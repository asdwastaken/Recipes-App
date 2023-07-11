import './home.css'
import homeImage from '../../images/home/HomeImage.png'
import homeImageBrowse from '../../images/home/HomeBrowseImage.png'
import homeBrowseSaladImage from '../../images/home/HomeBrowseSaladImage.png'
import homeBrowseMexicanImage from '../../images/home/HomeBrowseMexicanImage.png'
import homeBrowsePancakesImage from '../../images/home/HomeBrowsePancakesImage.png'

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='home'>
            <div className='home-header-container'>
                <div className='home-header'>
                    <h1>DELICOUS FOOD</h1>
                    <h2>Recipes for your taste</h2>
                </div>
                <img src={homeImage} className='home-image' />
            </div>

            <div className='home-browse-container'>
                <div className='home-browse'>
                    <h2>Browse between various of recipes</h2>
                </div>
                <div className='home-browse-images-container'>
                    <div className='home-browse-images'>
                        <img src={homeImageBrowse} className='home-image-browse' />
                        <img src={homeBrowseSaladImage} className='home-image-browse' />
                    </div>
                    <div className='home-browse-images'>
                        <img src={homeBrowseMexicanImage} className='home-image-browse' />
                        <img src={homeBrowsePancakesImage} className='home-image-browse' />

                    </div>
                    <div className='browse-link-container'>
                        <Link className="browse-link" to="/recipes">Browse</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}