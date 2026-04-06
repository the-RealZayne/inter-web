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
        // If query is empty, show all. If typing, filter list.
        if (!lowered) return pageOptions;

        return pageOptions.filter((page) =>
            page.label.toLowerCase().includes(lowered)
        );
    }, [query]);

    const handleSearch = () => {
        const trimmed = query.trim();
        if (!trimmed) return;

        // 1. Check if the query matches an internal page exactly
        const internalPage = pageOptions.find(
            (p) => p.label.toLowerCase() === trimmed.toLowerCase()
        );

        if (internalPage) {
            handleSelect(internalPage.path);
        } else {
            // 2. Otherwise, perform a "Real" Google search in a new window
            const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(trimmed)}&igu=1`;

            openWindow(
                `browser-${Date.now()}`,
                <WebBrowser
                    url={googleUrl}
                    pageTitle={`Zoogle: ${trimmed}`}
                    onClose={() => {}}
                    onInteract={() => {}}
                    onMinimize={() => {}}
                />,
                `Zoogle: ${trimmed}`,
                'windowExplorerIcon'
            );
        }

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
                    Find site pages or search the real web.
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

                <div style={styles.searchBoxWrapper}>
                    <div style={styles.searchBox}>
                        <input
                            type="text"
                            value={query}
                            placeholder="Type a page name or search Google..."
                            style={styles.searchInput}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => {
                                // Delay allows clicking the suggestion before it vanishes
                                window.setTimeout(() => setShowSuggestions(false), 200);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSearch();
                            }}
                        />
                        <button style={styles.searchButton} onMouseDown={handleSearch}>
                            Search
                        </button>
                    </div>

                    {showSuggestions && (
                        <div style={styles.suggestions}>
                            <h4 style={styles.suggestionsTitle}>Site Results</h4>
                            <div style={styles.suggestionsList}>
                                {searchResults.length > 0 ? (
                                    searchResults.map((page) => (
                                        <button
                                            key={page.path}
                                            type="button"
                                            style={styles.suggestionItem}
                                            onMouseDown={() => handleSelect(page.path)}
                                        >
                                            <span style={{ marginRight: '10px' }}>🔍</span>
                                            {page.label}
                                        </button>
                                    ))
                                ) : (
                                    <div style={styles.noResults}>
                                        No pages found. Press Enter to search Google.
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    header: { marginBottom: 20, textAlign: 'center' },
    title: { fontSize: 48, margin: 0 },
    subtitle: { marginTop: 8, color: '#5f6368' },
    searchContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px'
    },
    logoRow: { marginBottom: 20, display: 'flex' },
    logoLetterBlue: { fontSize: 80, fontWeight: 'bold', color: '#4285f4' },
    logoLetterRed: { fontSize: 80, fontWeight: 'bold', color: '#ea4335' },
    logoLetterYellow: { fontSize: 80, fontWeight: 'bold', color: '#fbbc05' },
    logoLetterGreen: { fontSize: 80, fontWeight: 'bold', color: '#34a853' },
    searchBoxWrapper: {
        width: '100%',
        maxWidth: '600px',
        position: 'relative', // Key for absolute positioning of suggestions
    },
    searchBox: {
        display: 'flex',
        width: '100%',
        borderRadius: '24px',
        border: '1px solid #dfe1e5',
        backgroundColor: '#fff',
        overflow: 'hidden',
        boxShadow: '0 1px 6px rgba(32,33,36,0.28)',
    },
    searchInput: {
        flex: 1,
        border: 'none',
        padding: '12px 20px',
        fontSize: '16px',
        outline: 'none',
    },
    searchButton: {
        backgroundColor: '#f8f9fa',
        border: 'none',
        borderLeft: '1px solid #dfe1e5',
        padding: '0 20px',
        cursor: 'pointer',
        color: '#3c4043'
    },
    suggestions: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        border: '1px solid #dfe1e5',
        borderRadius: '0 0 24px 24px',
        boxShadow: '0 4px 6px rgba(32,33,36,0.28)',
        zIndex: 1000,
        marginTop: '-1px', // Seamless connection to searchbox
        overflow: 'hidden'
    },
    suggestionsTitle: {
        fontSize: '12px',
        color: '#70757a',
        padding: '10px 20px 5px',
        margin: 0,
        textTransform: 'uppercase'
    },
    suggestionsList: {
        display: 'flex',
        flexDirection: 'column', // Force vertical
        maxHeight: '300px',
        overflowY: 'auto'
    },
    suggestionItem: {
        width: '100%',
        textAlign: 'left',
        padding: '10px 20px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '15px',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #f1f3f4'
    },
    noResults: {
        padding: '15px 20px',
        color: '#70757a',
        fontSize: '14px'
    }
};

export default Zoogle;
