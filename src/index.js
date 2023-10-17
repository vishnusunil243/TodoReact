import React from 'react';
import ReactDom, { createRoot } from 'react-dom/client'
import TodoR from './TodoR';

const root=createRoot(document.getElementById("root"))
root.render(<TodoR/>)