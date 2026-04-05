import React, { useState, useRef, useEffect } from 'react';
import Window from '../os/Window';

// Assuming WindowAppProps is defined globally or imported
export interface TerminalAppProps extends WindowAppProps {}

const TerminalApp: React.FC<TerminalAppProps> = (props) => {
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);
    const [output, setOutput] = useState<string[]>(['Welcome to theRealZayne Terminal', 'Type "help" for available commands.', '']);
    const [input, setInput] = useState('');
    
    const inputRef = useRef<HTMLInputElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom whenever output changes
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [output]);

    const handleCommand = (command: string) => {
        const newOutput = [...output, `> ${command}`];
        const cmd = command.trim().toLowerCase();

        if (cmd === 'help') {
            newOutput.push('Available commands:');
            newOutput.push('  ls - list directory contents');
            newOutput.push('  pwd - print working directory');
            newOutput.push('  clear - clear terminal');
            newOutput.push('  echo [text] - echo text');
            newOutput.push('  whoami - display current user');
            newOutput.push('  date - display current date');
            newOutput.push('  help - show this help');
        } else if (cmd === 'ls') {
            newOutput.push('about.txt    contact.txt    experience.txt');
            newOutput.push('gaming.txt   music.txt      projects/');
            newOutput.push('coding.txt   community.txt  collaborations.txt');
        } else if (cmd === 'pwd') {
            newOutput.push('/home/therealzayne');
        } else if (cmd === 'clear') {
            setOutput(['']);
            setInput('');
            return;
        } else if (cmd.startsWith('echo ')) {
            newOutput.push(command.substring(5));
        } else if (cmd === 'whoami') {
            newOutput.push('therealzayne');
        } else if (cmd === 'date') {
            newOutput.push(new Date().toString());
        } else if (cmd === '') {
            // empty command
        } else {
            newOutput.push(`Command not found: ${command}`);
        }

        newOutput.push(''); // Spacing line
        setOutput(newOutput);
        setInput('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <Window
            top={10}
            left={10}
            width={width}
            height={height}
            windowTitle="Terminal"
            windowBarColor="#1C1C1C"
            windowBarIcon="windowExplorerIcon"
            bottomLeftText={'Terminal Emulator'}
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
        >
            <div 
                style={styles.terminal} 
                onClick={() => inputRef.current?.focus()} // Focus input when clicking terminal
            >
                <div style={styles.output}>
                    {output.map((line: string, index: number) => (
                        <div key={index} style={styles.line}>
                            {line === '' ? '\u00A0' : line}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div style={styles.inputLine}>
                    <span style={styles.prompt}>{'>'} </span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        style={styles.input}
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                </div>
            </div>
        </Window>
    );
};

const styles: Record<string, React.CSSProperties> = {
    terminal: {
        backgroundColor: '#000',
        color: '#00FF00',
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: 14,
        height: '100%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        cursor: 'text',
    },
    output: {
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    line: {
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        lineHeight: '1.4em',
        minHeight: '1.4em', // Ensures empty strings take up a line
    },
    inputLine: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '5px',
        flexShrink: 0,
    },
    prompt: {
        marginRight: '8px',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#00FF00',
        fontFamily: 'monospace',
        fontSize: 14,
        flex: 1,
        outline: 'none',
        caretColor: '#00FF00', // Classic terminal green cursor
    },
};

export default TerminalApp;
