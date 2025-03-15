import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {User} from "./06/06_callbacks";
import * as React from 'react';

createRoot(document.getElementById('root')).render(
  <>
    <User />
  </>,
)
