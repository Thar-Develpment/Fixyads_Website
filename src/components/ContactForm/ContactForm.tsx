'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        website: '', // honeypot — must stay empty
    });

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     // Handle form submission logic here
    //     alert('Thank you for your message! We will get back to you soon.');
    //     console.log(formData);
    // };

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMsg, setStatusMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus('error');
                setStatusMsg(data.error || 'Something went wrong. Please try again.');
                return;
            }

            setStatus('success');
            setStatusMsg('Thank you! Your message has been sent successfully. We will contact you soon.');

            // reset form after 3 seconds
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                    website: '',
                });
                setStatus('idle');
            }, 5000);

        } catch (err) {
            console.error(err);
            setStatus('error');
            setStatusMsg('Server error. Please try again later.');
        }
    };


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                {/* <label htmlFor="name" className={styles.label}>Full Name</label> */}
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    placeholder='Full Name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                {/* <label htmlFor="email" className={styles.label}>Email Address</label> */}
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    placeholder='Email Address'
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                {/* <label htmlFor="phone" className={styles.label}>Phone Number</label> */}
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    placeholder='Phone Number'
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formGroup}>
                {/* <label htmlFor="service" className={styles.label}>Interested In</label> */}
                <select
                    id="service"
                    name="service"
                    className={styles.input}
                    required
                    value={formData.service}
                    onChange={handleChange}
                >
                    <option value="">Select a Service / Course</option>
                    <option value="Digital Marketing Services">Digital Marketing Services</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Digital Marketing Course">Digital Marketing Course</option>
                    <option value="Java Course">Java Course</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                {/* <label htmlFor="message" className={styles.label}>Message</label> */}
                <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder='Your Message'
                    required
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className={styles.formGroup} aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && <p className={styles.successMsg}>{statusMsg}</p>}
            {status === 'error' && <p className={styles.errorMsg}>{statusMsg}</p>}
        </form>
    );
};

export default ContactForm;
