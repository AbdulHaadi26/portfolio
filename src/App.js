import React, { Suspense } from 'react';
import VBG from './assets/vbg.mp4';
import './assets/playfair.css';
import './assets/teko.css';
import Routes from './routes';

export default () => <Suspense fallback={<></>}>
  <video src={VBG} type="video/mp4" autoPlay muted loop onContextMenu={e => e.preventDefault()} />
  <Routes />
</Suspense>

