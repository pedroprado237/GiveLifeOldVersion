import { Sidenav, Nav } from 'rsuite';
import WavePointIcon from '@rsuite/icons/WavePoint';
import PieChartIcon from '@rsuite/icons/PieChart';
import GearIcon from '@rsuite/icons/Gear';
import ExitIcon from '@rsuite/icons/Exit';
import { useLocation, useNavigate } from 'react-router-dom';
import IconUserProfile from "../../assets/images/profileUser.jpg"
import './Sidebar.css';

export const SidebarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (url) => {
    navigate(url);
  };

  return (
    <div className='sidebarMenu' >
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Body>
          <div className='infosUser'>
            <div className='iconUser'>
              <img src={IconUserProfile} alt="IconUser" />
            </div>
            <span id='nameUser'> Pedro Paulo </span>
            <span id='idadeUser'> 22 anos </span>
            <hr className="separador" />
          </div>

          <Nav activeKey={location.pathname}>
            <Nav.Item id='navItem1' eventKey="/home" icon={<PieChartIcon />} onClick={() => handleItemClick('/home')}>
              Home
            </Nav.Item>
            <Nav.Item id='navItem2' eventKey="/estoque" icon={<WavePointIcon />} onClick={() => handleItemClick('/stock')}>
              Estoque
            </Nav.Item>
            <Nav.Item id='navItem3' eventKey="/relatorio" icon={<PieChartIcon />} onClick={() => handleItemClick('/report')}>
              Relatório
            </Nav.Item>
            <Nav.Item id='navItem4' eventKey="/configuracoes" icon={<GearIcon />} onClick={() => handleItemClick('/setings')}>
              Configurações
            </Nav.Item>
            <Nav.Item id='navItem5' eventKey="/login" icon={<ExitIcon />} onClick={() => handleItemClick('/login')}>
              Sair
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
