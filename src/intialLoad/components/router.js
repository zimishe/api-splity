import React from 'react'
import { StaticRouter  } from 'react-router'

import App from './App'

const context = {};

const PageRouter = () => (
    <StaticRouter context={context}>
        <App />
    </StaticRouter>
);

export default PageRouter



