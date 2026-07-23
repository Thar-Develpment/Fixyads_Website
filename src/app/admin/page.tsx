'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
import { 
  Lock, 
  LogOut, 
  CheckCircle, 
  Clock, 
  Inbox, 
  BarChart3, 
  Search, 
  Trash2, 
  Mail, 
  Phone, 
  User, 
  Calendar, 
  X, 
  ExternalLink,
  ChevronRight,
  Filter,
  RefreshCw,
  LayoutDashboard,
  Shield,
  Layers,
  Settings,
  HelpCircle,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';
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
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'resolved'>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'analytics' | 'settings'>('inquiries');
  
  // Selected Message for Modal Details
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn("credentials", {
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid password. Please try again.");
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    setFetching(true);
    try {
      const res = await fetch('/api/admin/messages');
      const data = await res.json();
      if (res.ok) {
        setMessages(data);
      }
    } catch (e) {
      console.error("Failed to fetch messages", e);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchMessages();
    }
  }, [status]);

  const toggleContacted = async (id: number, currentStatus: boolean) => {
    // If inside selectedMessage, update it as well
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contacted: !currentStatus }),
      });
      if (res.ok) {
        const updated = messages.map(msg =>
          msg.id === id ? { ...msg, contacted: !currentStatus } : msg
        );
        setMessages(updated);
        
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage({ ...selectedMessage, contacted: !currentStatus });
        }
      }
    } catch (e) {
      console.error("Failed to update status", e);
    }
  };

  const deleteMessage = async (id: number) => {
    if (!confirm('Are you sure you want to permanently delete this inquiry? This action cannot be undone.')) return;

    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setMessages(messages.filter(msg => msg.id !== id));
        if (selectedMessage && selectedMessage.id === id) {
          setSelectedMessage(null);
        }
      }
    } catch (e) {
      console.error("Failed to delete message", e);
    }
  };

  // Get unique services for filter dropdown
  const uniqueServices = useMemo(() => {
    const services = messages.map(m => m.service).filter(Boolean);
    return Array.from(new Set(services));
  }, [messages]);

  // Statistics calculation
  const stats = useMemo(() => {
    const total = messages.length;
    const pending = messages.filter(m => !m.contacted).length;
    const resolved = messages.filter(m => m.contacted).length;
    const rate = total > 0 ? Math.round((resolved / total) * 100) : 0;

    return { total, pending, resolved, rate };
  }, [messages]);

  // Filter messages based on search & filter state
  const filteredMessages = useMemo(() => {
    return messages.filter(msg => {
      const matchesSearch = 
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (msg.phone && msg.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
        msg.message.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = 
        statusFilter === 'all' ||
        (statusFilter === 'pending' && !msg.contacted) ||
        (statusFilter === 'resolved' && msg.contacted);
        
      const matchesService = 
        serviceFilter === 'all' ||
        msg.service === serviceFilter;

      return matchesSearch && matchesStatus && matchesService;
    });
  }, [messages, searchTerm, statusFilter, serviceFilter]);

  if (status === "loading") {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner}></div>
        <p>Verifying credentials...</p>
      </div>
    );
  }

  // --- LOGIN INTERFACE ---
  if (!session) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginBgBlob1}></div>
        <div className={styles.loginBgBlob2}></div>
        
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <div className={styles.shieldIconWrapper}>
              <Shield className={styles.shieldIcon} size={28} />
            </div>
            <h1>Fixyads</h1>
            <p>ADMIN PORTAL</p>
          </div>
          
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={18} />
              <input
                type="password"
                placeholder="Enter Admin Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            
            <button type="submit" disabled={loading} className={styles.loginButton}>
              {loading ? (
                <span className={styles.btnSpinner}></span>
              ) : (
                'Access Dashboard'
              )}
            </button>
            
            {error && (
              <div className={styles.errorBubble}>
                <AlertTriangle size={16} />
                <span>{error}</span>
              </div>
            )}
          </form>
          
          <div className={styles.loginFooter}>
            <p>© {new Date().getFullYear()} Fixyads. Authorized access only.</p>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN DASHBOARD PORTAL ---
  return (
    <div className={styles.dashboardLayout}>
      
      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logoBadge}>F</div>
          <div>
            <h2>Fixyads</h2>
            <span>Admin Desk</span>
          </div>
        </div>
        
        <nav className={styles.sidebarNav}>
          <button 
            onClick={() => setActiveTab('inquiries')}
            className={`${styles.navItem} ${activeTab === 'inquiries' ? styles.navItemActive : ''}`}
          >
            <LayoutDashboard size={18} />
            <span>Inquiries</span>
            {stats.pending > 0 && (
              <span className={styles.navBadge}>{stats.pending}</span>
            )}
          </button>
          
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`${styles.navItem} ${activeTab === 'analytics' ? styles.navItemActive : ''}`}
          >
            <BarChart3 size={18} />
            <span>Analytics</span>
            <span className={styles.comingSoon}>Soon</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('settings')}
            className={`${styles.navItem} ${activeTab === 'settings' ? styles.navItemActive : ''}`}
          >
            <Settings size={18} />
            <span>Settings</span>
            <span className={styles.comingSoon}>Soon</span>
          </button>
        </nav>
        
        <div className={styles.sidebarFooter}>
          <div className={styles.adminProfile}>
            <div className={styles.adminAvatar}>
              <User size={16} />
            </div>
            <div>
              <h4>Administrator</h4>
              <p>System Manager</p>
            </div>
          </div>
          <button onClick={() => signOut()} className={styles.logoutBtn}>
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN VIEWPORT */}
      <main className={styles.mainContent}>
        
        {/* HEADER BAR */}
        <header className={styles.dashboardHeader}>
          <div>
            <h1>Inquiry Dashboard</h1>
            <p className={styles.dateBadge}>
              <Calendar size={14} />
              {new Date().toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className={styles.headerActions}>
            <button 
              onClick={fetchMessages} 
              disabled={fetching} 
              className={styles.refreshBtn}
              title="Refresh Inquiries"
            >
              <RefreshCw className={`${styles.refreshIcon} ${fetching ? styles.rotating : ''}`} size={16} />
              <span>{fetching ? 'Refreshing...' : 'Refresh'}</span>
            </button>
            
            <div className={styles.statusIndicator}>
              <span className={styles.indicatorDot}></span>
              <span>Live Database</span>
            </div>
          </div>
        </header>

        {activeTab === 'inquiries' && (
          <>
            {/* STATS MATRIX GRID */}
            <section className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(11, 28, 61, 0.08)', color: '#0B1C3D' }}>
                  <Inbox size={22} />
                </div>
                <div className={styles.statDetails}>
                  <h3>{fetching ? '...' : stats.total}</h3>
                  <p>Total Inquiries</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(244, 82, 30, 0.08)', color: '#F4521E' }}>
                  <Clock size={22} />
                </div>
                <div className={styles.statDetails}>
                  <h3>{fetching ? '...' : stats.pending}</h3>
                  <p>Pending Action</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)', color: '#22c55e' }}>
                  <CheckCircle size={22} />
                </div>
                <div className={styles.statDetails}>
                  <h3>{fetching ? '...' : stats.resolved}</h3>
                  <p>Resolved</p>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', color: '#3b82f6' }}>
                  <BarChart3 size={22} />
                </div>
                <div className={styles.statDetails}>
                  <div className={styles.rateHeading}>
                    <h3>{fetching ? '...' : `${stats.rate}%`}</h3>
                    <TrendingUp size={16} className={styles.rateIcon} />
                  </div>
                  <p>Resolution Rate</p>
                  <div className={styles.progressBarBg}>
                    <div className={styles.progressBarFill} style={{ width: `${stats.rate}%` }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* FILTERS TOOLBAR */}
            <section className={styles.toolbar}>
              <div className={styles.searchBlock}>
                <Search className={styles.searchIcon} size={18} />
                <input 
                  type="text" 
                  placeholder="Search by client name, email, phone, keyword..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className={styles.clearSearchBtn}>
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className={styles.filtersBlock}>
                <div className={styles.tabsWrapper}>
                  <button 
                    onClick={() => setStatusFilter('all')} 
                    className={`${styles.tabBtn} ${statusFilter === 'all' ? styles.tabBtnActive : ''}`}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setStatusFilter('pending')} 
                    className={`${styles.tabBtn} ${statusFilter === 'pending' ? styles.tabBtnActive : ''}`}
                  >
                    Pending
                  </button>
                  <button 
                    onClick={() => setStatusFilter('resolved')} 
                    className={`${styles.tabBtn} ${statusFilter === 'resolved' ? styles.tabBtnActive : ''}`}
                  >
                    Resolved
                  </button>
                </div>

                <div className={styles.selectWrapper}>
                  <Filter size={14} className={styles.selectIcon} />
                  <select 
                    value={serviceFilter} 
                    onChange={(e) => setServiceFilter(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="all">All Services</option>
                    {uniqueServices.map(srv => (
                      <option key={srv} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* DATA CONTAINER */}
            <div className={styles.tableWrapper}>
              
              {/* Desktop View Table */}
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Date Received</th>
                    <th>Client Details</th>
                    <th>Requested Service</th>
                    <th>Message Preview</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {fetching ? (
                    // Skeleton loader
                    Array.from({ length: 5 }).map((_, i) => (
                      <tr key={i} className={styles.skeletonRow}>
                        <td><div className={`${styles.skeleton} ${styles.skeletonPill}`}></div></td>
                        <td><div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '80px' }}></div></td>
                        <td>
                          <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '120px', marginBottom: '6px' }}></div>
                          <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '160px' }}></div>
                        </td>
                        <td><div className={`${styles.skeleton} ${styles.skeletonPill}`} style={{ width: '100px' }}></div></td>
                        <td><div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '240px' }}></div></td>
                        <td style={{ textAlign: 'right' }}><div className={styles.skeleton} style={{ width: '60px', height: '28px', marginLeft: 'auto' }}></div></td>
                      </tr>
                    ))
                  ) : filteredMessages.length === 0 ? (
                    <tr>
                      <td colSpan={6} className={styles.emptyStateContainer}>
                        <div className={styles.emptyIconCircle}>
                          <Inbox size={32} />
                        </div>
                        <h3>No inquiries found</h3>
                        <p>We couldn't find any inquiries matching your filters. Try resetting them or check back later.</p>
                        {(searchTerm || statusFilter !== 'all' || serviceFilter !== 'all') && (
                          <button 
                            onClick={() => {
                              setSearchTerm('');
                              setStatusFilter('all');
                              setServiceFilter('all');
                            }} 
                            className={styles.resetFiltersBtn}
                          >
                            Reset Filters
                          </button>
                        )}
                      </td>
                    </tr>
                  ) : (
                    filteredMessages.map((msg) => (
                      <tr 
                        key={msg.id} 
                        className={`${styles.tableRow} ${msg.contacted ? styles.rowContacted : ''}`}
                        onClick={() => setSelectedMessage(msg)}
                      >
                        <td onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => toggleContacted(msg.id, msg.contacted)}
                            className={`${styles.statusBadge} ${msg.contacted ? styles.badgeResolved : styles.badgePending}`}
                            title={msg.contacted ? "Mark as Pending" : "Mark as Contacted"}
                          >
                            <span className={styles.statusDot}></span>
                            <span>{msg.contacted ? 'Resolved' : 'Pending'}</span>
                          </button>
                        </td>
                        <td>
                          <span className={styles.dateText}>
                            {new Date(msg.createdAt).toLocaleDateString(undefined, {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </td>
                        <td>
                          <div className={styles.clientDetailsCell}>
                            <span className={styles.clientName}>{msg.name}</span>
                            <div className={styles.clientContacts} onClick={(e) => e.stopPropagation()}>
                              <a href={`mailto:${msg.email}`} className={styles.contactLink} title={`Email ${msg.name}`}>
                                <Mail size={12} />
                                <span>{msg.email}</span>
                              </a>
                              {msg.phone && (
                                <a href={`tel:${msg.phone}`} className={styles.contactLink} title={`Call ${msg.name}`}>
                                  <Phone size={12} />
                                  <span>{msg.phone}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className={styles.serviceBadge}>
                            {msg.service || 'General'}
                          </span>
                        </td>
                        <td>
                          <p className={styles.messagePreviewText}>
                            {msg.message}
                          </p>
                        </td>
                        <td style={{ textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                          <div className={styles.rowActions}>
                            <button 
                              onClick={() => setSelectedMessage(msg)}
                              className={styles.viewRowBtn}
                              title="Expand Inquiry"
                            >
                              <span>View</span>
                              <ChevronRight size={14} />
                            </button>
                            <button 
                              onClick={() => deleteMessage(msg.id)}
                              className={styles.deleteRowBtn}
                              title="Delete Inquiry"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              {/* Mobile View Card Grid */}
              <div className={styles.mobileCards}>
                {fetching ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className={styles.skeletonCard}>
                      <div className={styles.skeletonHeader}>
                        <div className={`${styles.skeleton} ${styles.skeletonPill}`} style={{ width: '80px' }}></div>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '60px' }}></div>
                      </div>
                      <div className={styles.skeletonBody}>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '70%', marginBottom: '8px' }}></div>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '90%', marginBottom: '8px' }}></div>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`} style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  ))
                ) : filteredMessages.length === 0 ? (
                  <div className={styles.mobileEmptyState}>
                    <Inbox size={40} />
                    <h3>No inquiries found</h3>
                    <p>Try resetting the search keywords or filters.</p>
                  </div>
                ) : (
                  filteredMessages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`${styles.card} ${msg.contacted ? styles.cardContacted : ''}`}
                      onClick={() => setSelectedMessage(msg)}
                    >
                      <div className={styles.cardHeader}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleContacted(msg.id, msg.contacted);
                          }}
                          className={`${styles.statusBadge} ${msg.contacted ? styles.badgeResolved : styles.badgePending}`}
                        >
                          <span className={styles.statusDot}></span>
                          <span>{msg.contacted ? 'Resolved' : 'Pending'}</span>
                        </button>
                        <span className={styles.cardDate}>
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className={styles.cardBody}>
                        <h3>{msg.name}</h3>
                        <span className={styles.cardServiceBadge}>{msg.service}</span>
                        <p className={styles.cardMessagePreview}>{msg.message}</p>
                      </div>
                      
                      <div className={styles.cardActions} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.mobileContactsList}>
                          <a href={`mailto:${msg.email}`} className={styles.cardContactBtn}>
                            <Mail size={14} />
                          </a>
                          {msg.phone && (
                            <a href={`tel:${msg.phone}`} className={styles.cardContactBtn}>
                              <Phone size={14} />
                            </a>
                          )}
                        </div>
                        
                        <div className={styles.cardOperationBtns}>
                          <button onClick={() => deleteMessage(msg.id)} className={styles.mobileDeleteBtn}>
                            <Trash2 size={14} />
                          </button>
                          <button onClick={() => setSelectedMessage(msg)} className={styles.mobileViewBtn}>
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          </>
        )}

        {activeTab === 'analytics' && (
          <div className={styles.emptyViewState}>
            <BarChart3 size={48} />
            <h2>Analytics Dashboard Coming Soon</h2>
            <p>We are building an analytics dashboard to help you track inquiry sources, service demands, and resolution times.</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className={styles.emptyViewState}>
            <Settings size={48} />
            <h2>System Settings Coming Soon</h2>
            <p>Authorized admins will be able to customize notification preferences, set automatic email replies, and configure user permissions.</p>
          </div>
        )}
      </main>

      {/* EXPANDED MESSAGE MODAL */}
      {selectedMessage && (
        <div className={styles.modalOverlay} onClick={() => setSelectedMessage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <header className={styles.modalHeader}>
              <div className={styles.modalHeadingInfo}>
                <span className={styles.modalSubtitle}>Client Inquiry Details</span>
                <h2>{selectedMessage.name}</h2>
              </div>
              <button onClick={() => setSelectedMessage(null)} className={styles.closeModalBtn}>
                <X size={20} />
              </button>
            </header>

            <div className={styles.modalBody}>
              <div className={styles.modalMetaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Received Date</span>
                  <span className={styles.metaValue}>
                    {new Date(selectedMessage.createdAt).toLocaleString(undefined, {
                      dateStyle: 'medium',
                      timeStyle: 'short'
                    })}
                  </span>
                </div>
                
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Service Requested</span>
                  <span className={styles.modalServiceBadge}>
                    {selectedMessage.service || 'General'}
                  </span>
                </div>

                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Status</span>
                  <button 
                    onClick={() => toggleContacted(selectedMessage.id, selectedMessage.contacted)}
                    className={`${styles.statusBadge} ${selectedMessage.contacted ? styles.badgeResolved : styles.badgePending}`}
                    style={{ border: 'none', cursor: 'pointer', display: 'inline-flex' }}
                  >
                    <span className={styles.statusDot}></span>
                    <span>{selectedMessage.contacted ? 'Resolved (Click to undo)' : 'Pending (Click to resolve)'}</span>
                  </button>
                </div>
              </div>

              <div className={styles.modalContactsSection}>
                <h3>Contact Client</h3>
                <div className={styles.modalContactsGrid}>
                  <a href={`mailto:${selectedMessage.email}`} className={styles.modalContactCard}>
                    <div className={styles.contactIconCircle}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <span>Email Address</span>
                      <p>{selectedMessage.email}</p>
                    </div>
                    <ExternalLink size={14} className={styles.externalIcon} />
                  </a>

                  {selectedMessage.phone && (
                    <a href={`tel:${selectedMessage.phone}`} className={styles.modalContactCard}>
                      <div className={styles.contactIconCircle}>
                        <Phone size={18} />
                      </div>
                      <div>
                        <span>Phone Number</span>
                        <p>{selectedMessage.phone}</p>
                      </div>
                      <ExternalLink size={14} className={styles.externalIcon} />
                    </a>
                  )}
                </div>
              </div>

              <div className={styles.messageContentBlock}>
                <h3>Client Message</h3>
                <div className={styles.messageBodyBox}>
                  {selectedMessage.message}
                </div>
              </div>
            </div>

            <footer className={styles.modalFooter}>
              <button 
                onClick={() => deleteMessage(selectedMessage.id)}
                className={styles.modalDeleteBtn}
              >
                <Trash2 size={16} />
                <span>Delete Inquiry</span>
              </button>
              
              <div className={styles.modalFooterRight}>
                <button onClick={() => setSelectedMessage(null)} className={styles.modalCloseBtn}>
                  Close
                </button>
                
                <button 
                  onClick={() => toggleContacted(selectedMessage.id, selectedMessage.contacted)}
                  className={selectedMessage.contacted ? styles.modalMarkUnreadBtn : styles.modalMarkResolvedBtn}
                >
                  <CheckCircle size={16} />
                  <span>{selectedMessage.contacted ? 'Mark as Pending' : 'Mark as Resolved'}</span>
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}

    </div>
  );
}
