import React from 'react';

const Footer = () => {
    const thisyear = new Date().getFullYear();
    return (
        <footer className="text-center mt-5">
            <p> Copyright &copy; <small className="text-danger h6"> {thisyear}</small> </p>
        </footer>
    );
};

export default Footer;