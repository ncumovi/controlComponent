import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from './movi/inputNumber/index'
import { useState } from 'react';

function App(){
  const [value,setValue] = useState('aaa')
  return (
      <div>
        <InputNumber value={value} onChange={e=>{
          setValue(e.target.value)
        }}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
      </div>
  )
}
export default App;
