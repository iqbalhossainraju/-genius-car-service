import React from 'react';

const Footer = () => {
    const thisyear = new Date().getFullYear();
    return (
        <footer>
            <p> <small> Copyright &copy; {thisyear}</small> </p>
        </footer>
    );
};

export default Footer;