import React, { useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DesktopContext from '../os/DesktopContext';
import WebBrowser from '../applications/WebBrowser';

const pageOptions: Array<{ label: string; path: string }> = [
    { label: 'Home', path: '' },
    { label: 'About', path: 'about' },
    { label: 'Zoogle', path: 'zoogle' },
    { label: 'Experience', path: 'experience' },
    { label: 'Gaming', path: 'gaming' },
    { label: 'Content Creation', path: 'content-creation' },
    { label: 'Music', path: 'music' },
    { label: 'Community', path: 'community' },
    { label: 'Coding', path: 'coding' },
    { label: 'Projects', path: 'projects' },
    { label: 'Collaborations', path: 'collaborations' },
    { label: 'Outdoor Activities', path: 'outdoor-activities' },
    { label: 'Booking / Schedule', path: 'booking-schedule' },
    { label: 'Contribute', path: 'contribute' },
    { label: 'Contact', path: 'contact' },
];

const Zoogle: React.FC = () => {
    const navigate = useNavigate();
    const { openWindow } = useContext(DesktopContext);
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchResults = useMemo(() => {
        const lowered = query.trim().toLowerCase();
        if (!lowered) {
            return pageOptions;
        }

        return pageOptions.filter((page) =>
            page.label.toLowerCase().includes(lowered)
        );
    }, [query]);

    const handleSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) {
            return;
        }

        const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(
            trimmed
        )}`;

        openWindow(
            `browser-${Date.now()}`,
            <WebBrowser url={googleUrl} pageTitle={`Zoogle: ${trimmed}`} />,
            `Zoogle Search: ${trimmed}`,
            'windowExplorerIcon'
        );

        setShowSuggestions(false);
        setQuery('');
    };

    const handleSelect = (path: string) => {
        setShowSuggestions(false);
        setQuery('');
        if (path === '') {
            navigate('/');
        } else {
            navigate(`/${path}`);
        }
    };

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1 style={styles.title}>Zoogle</h1>
                <h3 style={styles.subtitle}>
                    Search your pages, then search the web like Google.
                </h3>
            </div>
            <div style={styles.searchContainer}>
                <div style={styles.logoRow}>
                    <span style={styles.logoLetterBlue}>Z</span>
                    <span style={styles.logoLetterRed}>o</span>
                    <span style={styles.logoLetterYellow}>o</span>
                    <span style={styles.logoLetterBlue}>g</span>
                    <span style={styles.logoLetterGreen}>l</span>
                    <span style={styles.logoLetterRed}>e</span>
                </div>
                <div style={styles.searchBox}>
                    <input
                        type="text"
                        value={query}
                        placeholder="Search Zoogle or type a query to search Google"
                        style={styles.searchInput}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setQuery(e.target.value)
                        }
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => {
                            window.setTimeout(() => setShowSuggestions(false), 150);
                        }}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <button style={styles.searchButton} onMouseDown={handleSearch}>
                        Search
                    </button>
                </div>
                {showSuggestions && (
                    <div style={styles.suggestions}>
                        <h4 style={styles.suggestionsTitle}>Recent pages</h4>
                        {searchResults.map((page) => (
                            <button
                                key={page.path}
                                type="button"
                                style={styles.suggestionItem}
                                onMouseDown={() => handleSelect(page.path)}
                            >
                                {page.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div style={styles.infoBlock}>
                <p>
                    Clicking a recent page opens it in the current showcase. Typing a query
                    and pressing Enter opens a Google search in a new desktop window.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 56,
        margin: 0,
        letterSpacing: 0,
    },
    subtitle: {
        marginTop: 12,
        maxWidth: 560,
        lineHeight: 1.4,
    },
    searchContainer: {
        maxWidth: 760,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 24,
    },
    logoLetterBlue: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#4285f4',
    },
    logoLetterRed: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#ea4335',
    },
    logoLetterYellow: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#fbbc05',
    },
    logoLetterGreen: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#34a853',
    },
    searchBox: {
        display: 'flex',
        width: '100%',
        maxWidth: 760,
        borderRadius: 999,
        border: '1px solid #dfe1e5',
        overflow: 'hidden',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    searchInput: {
        flex: 1,
        border: 'none',
        padding: '16px 20px',
        fontSize: 18,
        outline: 'none',
    },
    searchButton: {
        backgroundColor: '#1a73e8',
        color: '#fff',
        border: 'none',
        padding: '0 24px',
        cursor: 'pointer',
        fontSize: 16,
    },
    suggestions: {
        marginTop: 16,
        border: '1px solid #dfe1e5',
        borderRadius: 12,
        backgroundColor: '#fff',
        boxShadow: '0 4px 16px rgba(32,33,36,0.08)',
        overflow: 'hidden',
    },
    suggestionsTitle: {
        margin: '12px 16px 8px',
        fontSize: 14,
        color: '#5f6368',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    suggestionItem: {
        width: '100%',
        textAlign: 'left',
        padding: '12px 16px',
        background: 'transparent',
        border: 'none',
        borderTop: '1px solid #f1f3f4',
        cursor: 'pointer',
        fontSize: 16,
        color: '#202124',
    },
    infoBlock: {
        marginTop: 32,
        maxWidth: 640,
    },
};

export default Zoogle;
