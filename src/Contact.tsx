import './styles/Contact.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
    };

    return (
        <div className="contact">
            <div className="row">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <center>
                        <h2 id="Contact" className="text-light">CONTACT ME</h2>
                    </center>
                    
                <div className="contact-info mt-3">
                    <div className="row">
                        <div className="col">
                        <p className="email"><FontAwesomeIcon icon={faEnvelope} /> hleguro8@gmail.com</p>
                    </div>

                    <div className="col">
                        <p className="number">
                            <FontAwesomeIcon icon={faPhone} />+639199313717</p>
                    </div>
                    </div>
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                    type="text" 
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder='Write your subject here'
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message here"
                    />
                </div>
                <div className="form-group">
                    <center>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </center>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Contact;
