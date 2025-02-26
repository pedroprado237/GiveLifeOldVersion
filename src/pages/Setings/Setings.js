import React from 'react';
import { SidebarMenu } from '../../components/Sidebar/Sidebar';

export function Setings() {
  return (
    <div style={{ display: 'flex' }}>
      <SidebarMenu />
      <div className="pageContent">
        <h1>PAGE Setings</h1>
      </div>
    </div>
  );
}