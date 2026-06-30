'use client';

import { useState, useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import styles from './page.module.css';



interface Message {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    service: string;
    message: string;
    contacted: boolean;
    createdAt: string;
}

export default function AdminPage() {
    const { data: session, status } = useSession();
    const [messages, setMessages] = useState<Message[]>([]);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await signIn("credentials", {
            password,
            redirect: false,
        });

        if (result?.error) {
            setError("Invalid password");
            setLoading(false);
        } else {
            setLoading(false);
        }
    };

    const fetchMessages = async () => {
        try {
            const res = await fetch('/api/admin/messages');
            const data = await res.json();
            if (res.ok) {
                setMessages(data);
            }
        } catch (e) {
            console.error("Failed to fetch messages", e);
        }
    };

    useEffect(() => {
        if (status === "authenticated") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            fetchMessages();
        }
    }, [status]);

    const toggleContacted = async (id: number, currentStatus: boolean) => {
        const action = currentStatus ? 'unmark' : 'mark';
        if (!confirm(`Are you sure you want to ${action} this message as contacted?`)) return;

        try {
            const res = await fetch(`/api/admin/messages/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contacted: !currentStatus }),
            });
            if (res.ok) {
                setMessages(messages.map(msg =>
                    msg.id === id ? { ...msg, contacted: !currentStatus } : msg
                ));
            }
        } catch (e) {
            console.error("Failed to update status", e);
        }
    };

    const deleteMessage = async (id: number) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        try {
            const res = await fetch(`/api/admin/messages/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setMessages(messages.filter(msg => msg.id !== id));
            }
        } catch (e) {
            console.error("Failed to delete message", e);
        }
    };

    if (status === "loading") {
        return <div className={styles.loginContainer}>Loading...</div>;
    }

    if (!session) {
        return (
            <div className={styles.loginContainer}>
                <form className={styles.loginForm} onSubmit={handleLogin}>
                    <h1>Admin Login</h1>
                    <input
                        type="password"
                        placeholder="Enter Admin Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <button type="submit" disabled={loading} className={styles.button}>
                        {loading ? 'Logging in...' : 'Access Dashboard'}
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            </div>
        );
    }

    return (
        <div className={styles.adminContainer}>
            <div className={styles.header}>
                <h1>Contact Messages</h1>
                <button
                    onClick={() => signOut()}
                    className={styles.logoutBtn}
                >
                    Logout
                </button>
            </div>

            <div className={styles.tableWrapper}>
                {/* Desktop Table */}
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Service</th>
                            <th>Message</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.length === 0 ? (
                            <tr>
                                <td colSpan={8} style={{ textAlign: 'center' }}>No messages found.</td>
                            </tr>
                        ) : (
                            messages.map((msg) => (
                                <tr key={msg.id} className={msg.contacted ? styles.rowContacted : ''}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={msg.contacted}
                                            onChange={() => toggleContacted(msg.id, msg.contacted)}
                                            className={styles.checkbox}
                                            title="Mark as contacted"
                                        />
                                    </td>
                                    <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
                                    <td>{msg.name}</td>
                                    <td>{msg.email}</td>
                                    <td>{msg.phone || 'N/A'}</td>
                                    <td>{msg.service}</td>
                                    <td className={styles.messageCell}>{msg.message}</td>
                                    <td>
                                        <button
                                            onClick={() => deleteMessage(msg.id)}
                                            className={styles.deleteBtn}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {/* Mobile Cards */}
                <div className={styles.mobileCards}>
                    {messages.length === 0 ? (
                        <p style={{ textAlign: 'center', padding: '2rem' }}>No messages found.</p>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} className={`${styles.card} ${msg.contacted ? styles.cardContacted : ''}`}>
                                <div className={styles.cardHeader}>
                                    <span className={styles.cardDate}>{new Date(msg.createdAt).toLocaleDateString()}</span>
                                    <input
                                        type="checkbox"
                                        checked={msg.contacted}
                                        onChange={() => toggleContacted(msg.id, msg.contacted)}
                                        className={styles.checkbox}
                                    />
                                </div>
                                <div className={styles.cardBody}>
                                    <p><strong>Name:</strong> {msg.name}</p>
                                    <p><strong>Email:</strong> {msg.email}</p>
                                    <p><strong>Phone:</strong> {msg.phone || 'N/A'}</p>
                                    <p><strong>Service:</strong> {msg.service}</p>
                                    <p className={styles.cardMessage}><strong>Message:</strong> {msg.message}</p>
                                </div>
                                <div className={styles.cardActions}>
                                    <button
                                        onClick={() => deleteMessage(msg.id)}
                                        className={styles.deleteBtn}
                                    >
                                        Delete Message
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
