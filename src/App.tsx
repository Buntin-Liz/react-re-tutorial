import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { useEffect, useState } from 'react';
import fetchImages from './api';
import { Header, Loading, Culc, Footer } from './components/common';

type reloadImages = (breed: string) => void;

interface imageProps {
    url: string;
}
interface galleryProps {
    urls: string[] | null;
}
interface formProps {
    onFormSubmit: reloadImages;
}

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

const Gallery: React.FC<galleryProps> = (props) => {
    if (props.urls == null) {
        return <Loading />;
    }
    return (
        <div className="columns is-vcentered is-multiline">
            {props.urls.map((url) => {
                return (
                    <div key={url} className="column is-3">
                        <Image url={url} />
                    </div>
                );
            })}
        </div>
    );
};

const Form: React.FC<formProps> = ({ onFormSubmit }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
        const target = e.target as typeof e.target & {
            breed: { value: string };
        };
        const breed = target.breed.value;
        onFormSubmit(breed);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <div className="control is-expanded">
                        <div className="select is-fullwidth">
                            <select name="breed" defaultValue="shiba">
                                <option value="shiba">Shiba</option>
                                <option value="akita">Akita</option>
                            </select>
                        </div>
                    </div>
                    <div className="control">
                        <button type="submit" className="button is-dark">
                            Reload
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

const Main: React.FC = () => {
    const [urls, setUrls] = useState<string[] | null>(null);
    useEffect(() => {
        fetchImages('shiba').then((urls) => {
            setUrls(urls);
        });
    }, []);
    const reloadImages: reloadImages = (breed: string) => {
        fetchImages(breed).then((urls) => {
            setUrls(urls);
        });
    };
    return (
        <main>
            <section className="section">
                <div className="container">
                    <Form onFormSubmit={reloadImages} />
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Gallery urls={urls} />
                </div>
            </section>
        </main>
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
