import React from 'react';
import { IconName } from '../../assets/icons';

export interface DesktopContextValue {
    openWindow: (
        key: string,
        element: JSX.Element,
        name: string,
        icon: IconName
    ) => void;
}

const DesktopContext = React.createContext<DesktopContextValue>({
    openWindow: () => {},
});

export default DesktopContext;
