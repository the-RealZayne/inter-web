import React, { useState, useRef, useEffect } from 'react';
import Window from '../os/Window';

export interface TerminalAppProps extends WindowAppProps {}

const TerminalApp: React.FC<TerminalAppProps> = (props) => {
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);
    const [output, setOutput] = useState<string[]>(['Welcome to theRealZayne Terminal', 'Type "help" for available commands.', '']);
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

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

        newOutput.push('');
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
            <div style={styles.terminal}>
                <div style={styles.output}>
                    {output.map((line: string, index: number) => (
                        <div key={index} style={styles.line}>{line}</div>
                    ))}
                </div>
                <div style={styles.inputLine}>
                    <span style={styles.prompt}>{'>'} </span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        style={styles.input}
                        autoFocus
                    />
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    terminal: {
        backgroundColor: '#000',
        color: '#00FF00',
        fontFamily: 'monospace',
        fontSize: 14,
        height: '100%',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    output: {
        flex: 1,
        overflowY: 'auto',
    },
    line: {
        whiteSpace: 'pre-wrap',
    },
    inputLine: {
        display: 'flex',
        alignItems: 'center',
    },
    prompt: {
        marginRight: 5,
    },
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#00FF00',
        fontFamily: 'monospace',
        fontSize: 14,
        flex: 1,
        outline: 'none',
    },
};

export default TerminalApp;
