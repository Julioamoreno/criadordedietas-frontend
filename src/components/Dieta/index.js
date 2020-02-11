import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from '../../styles/global';

import Header from '../Header/index';
import Board from '../Board/index';

function app(){  
    return(
        <DndProvider backend={HTML5Backend}>
        <Header />
        <Board />
        <GlobalStyle />
    
        </DndProvider>
    );
}

export default app;