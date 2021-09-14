import * as React from 'react';
import { render } from 'react-dom';

import Index from './components/Index';

import 'nes.css/css/nes.min.css';
import './index.css';
import Dexie from 'dexie';

var db = new Dexie('MyAppDatabase');
db.version(2).stores({ contacts: 'id, first, last' });

db.table('contacts')
  .toArray()
  .then((res) => console.log(res));

const App = () => <Index />;

render(<App />, document.getElementById('app'));
