import React from 'react';
import image from './images.jpeg'
const article = {
    title: 'first', 
    image: image,
    link: 'https://google.com',
    paragraph: 'This is My First ever react app'
};

const Home = () => {
    return (
        <div className="container p-5 bg-secondary">
            {article.title === 'first' ? (
                <div className="article">
                    <img src={article.image} alt="Article" width="300"  className='me-5'/>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">Try google</a>
                </div>
            ) : article.title === 'second' (
                <div className="article">
                    <p>{article.paragraph}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
