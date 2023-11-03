/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../styles/ContactModal.css';
import Close from '../Assets/close.png';
import Whatsapp from '../Assets/whatsapp.png';
import { motion } from 'framer-motion';

function ContactModal({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // When the component is mounted, add a small delay to show the modal with animation.
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 100);

        // Clear the timeout when the component unmounts to prevent a memory leak.
        return () => clearTimeout(timer);
    }, []);


    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose(); 
        }, 300);
    };

    const openJaja = () => {
     
        window.location.href = 'https://wa.link/zjlba0';
    }

    const openAnita = () => {
     
        window.location.href = 'https://wa.link/vepxxb';
    }
    
    const openFaez = () => {
     
        window.location.href = 'https://wa.link/izshmt';
    }

    return (
        <div className={`contact-modal ${isOpen ? 'active' : ''}`}>
               <motion.div
                className={`reminder-modal ${isOpen ? 'active' : ''}`}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
            <div className="contact-content">
                <button onClick={closeModal}>
                    <img src={Close} alt='close-btn' width={20} height={20} />
                </button>
                <div className='header'>
                    <h4>Contact</h4>
                </div>
                <div className='contact-container'>
                    <span>JAJA</span>
                    <div className='image-container'>
                        <img src={Whatsapp} alt='whatsapp-icon' width={30} onClick={openJaja} />
                    </div>
                    <br/>
                    <span>ANITA</span>
                    <div className='image-container'>
                        <img src={Whatsapp} alt='whatsapp-icon' width={30} onClick={openAnita} />
                    </div>
                    <br />
                    <span>FAEZ</span>
                    <div className='image-container'>
                        <img src={Whatsapp} alt='whatsapp-icon' width={30} onClick={openFaez} />
                    </div>
                    
                </div>
            </div>
            </motion.div>
        </div>
    );
}

export default ContactModal;
