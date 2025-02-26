import React from 'react';
import { SidebarMenu } from '../../components/Sidebar/Sidebar';

export function Stock() {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu />
      <div className='pageContent'>
        <h1>PAGE STOCK</h1>
      </div>
    </div>
  );
}