import React from 'react';
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

const Culc: React.FC = () => {
    const x = 5;
    const y = 10;
    return (
        <p>
            {x} * {y} = {x * y}
        </p>
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
export { Header, Loading, Culc, Footer };
