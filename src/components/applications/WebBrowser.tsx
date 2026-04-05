import React from 'react';
import Window from '../os/Window';

export interface WebBrowserProps extends WindowAppProps {
    url: string;
    pageTitle: string;
}

const WebBrowser: React.FC<WebBrowserProps> = ({
    url,
    pageTitle,
    onClose,
    onInteract,
    onMinimize,
}) => {
    return (
        <Window
            top={30}
            left={30}
            width={1000}
            height={700}
            windowTitle={pageTitle}
            windowBarColor="#1A73E8"
            windowBarIcon="windowExplorerIcon"
            bottomLeftText={url}
            closeWindow={onClose}
            onInteract={onInteract}
            minimizeWindow={onMinimize}
        >
            <div style={styles.browserShell}>
                <div style={styles.addressBar}>
                    <span style={styles.addressText}>{url}</span>
                    <button
                        type="button"
                        style={styles.openInBrowser}
                        onMouseDown={() => window.open(url, '_blank')}
                    >
                        Open in browser
                    </button>
                </div>
                <div style={styles.browserFrame}>
                    <iframe
                        src={url}
                        title={pageTitle}
                        style={styles.iframe}
                    />
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    browserShell: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
    },
    addressBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: '#F1F3F4',
        borderRadius: 12,
        marginBottom: 12,
        gap: 12,
    },
    addressText: {
        color: '#202124',
        fontSize: 14,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        flex: 1,
    },
    openInBrowser: {
        backgroundColor: '#1A73E8',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        padding: '10px 16px',
        cursor: 'pointer',
        fontSize: 14,
    },
    browserFrame: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    iframe: {
        width: '100%',
        height: '100%',
        border: 'none',
    },
};

export default WebBrowser;
