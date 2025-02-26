import React from 'react';
import { SidebarMenu } from '../../components/Sidebar/Sidebar';

export function Home() {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu />
      <div className='pageContent'>
        <div className='cardContent'>
        </div>
      </div>
    </div>
  );
}