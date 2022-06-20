import React from 'react';
import ReactDOM from 'react-dom/client'

import GifExpertApp from './GifExpertApp';

import './themes/styles.css';
import './themes/colors.css';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
        <GifExpertApp />
);