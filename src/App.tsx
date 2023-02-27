import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { useEffect, useState } from 'react';
import fetchImages from './api';

interface imageProps {
    url: string;
}
interface galleryProps {
    urls: string[] | null;
}

const Header: React.FC = () => {
    return (
        <header className="hero is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Cute Dog Images</h1>
                </div>
            </div>
        </header>
    );
};

const Loading: React.FC = () => {
    return <p>Now Loading...</p>;
};

const Image: React.FC<imageProps> = ({ url }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image">
                    <img src={url} alt="cute dog!" />
                </figure>
            </div>
        </div>
    );
};

const Culc: React.FC = () => {
    const x = 5;
    const y = 10;
    return (
        <p>
            {x} * {y} = {x * y}
        </p>
    );
};

const Gallery: React.FC<galleryProps> = ({ urls }) => {
    if (urls == null) {
        return <Loading />;
    }
    return (
        <div className="columns is-vcentered is-multiline">
            {urls.map((url) => {
                return (
                    <div key={url} className="column is-3">
                        <Image url={url} />
                    </div>
                );
            })}
        </div>
    );
};

const Main: React.FC = () => {
    const [urls,setUrls] = useState<string[] | null>(null);
    useEffect(() => {
        fetchImages('shiba').then((urls) => {
            setUrls(urls);
        });
    },[]);
    return (
        <main>
            <section className="section">
                <div className="container">
                    <Gallery urls={urls} />
                </div>
            </section>
        </main>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>Dog images are retrieved from Dog API</p>
                <p>
                    <a href="https://dog.ceo/dog-api/about">
                        Donate to Dog API
                    </a>
                </p>
            </div>
        </footer>
    );
};

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Main />
            <Culc />
            <Footer />
        </div>
    );
};

export default App;
