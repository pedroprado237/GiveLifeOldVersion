import React from 'react';
import { SidebarMenu } from '../../components/Sidebar/Sidebar';

export function Report() {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu />
      <div className='pageContent'>
        <h1>PAGE REPORT</h1>
      </div>
    </div>
  );
}