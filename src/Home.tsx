import './styles/Home.css';
import { useEffect, useState } from 'react';

function Home() {
    const titles = ["VIRTUAL ASSISTANT / WEB DEVELOPER"];
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150; 
    const deletingSpeed = 100; 
    const pauseDuration = 2000; 

    useEffect(() => {
        let timeout;

        if (isDeleting) {
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                timeout = setTimeout(() => {
                    setIndex((index + 1) % titles.length);
                }, pauseDuration);
            }
        } else {
            if (displayedText.length < titles[index].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(titles[index].slice(0, displayedText.length + 1));
                }, typingSpeed);
            } else {
                setIsDeleting(true);
                timeout = setTimeout(() => {}, pauseDuration);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index]);

    return (
        <>
            <div className="hero">
                <div className="name-container">
                    <h1 className='my-name'>YZAVHEL LEGURO</h1>
                    <h3 className='my-job'>{displayedText}</h3>

                    <br />
                    <div className="social-media-icons">
                        <a href="https://www.facebook.com/share/nSyqSafM5Awvg3zD/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook" aria-label="Facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/yzavhelleguro?igsh=Mnk3dHEwMDV5eGls" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram" aria-label="Instagram"></i>
                        </a>
                        <a href="https://github.com/ysahannah" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github" aria-label="GitHub"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin" aria-label="LinkedIn"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
