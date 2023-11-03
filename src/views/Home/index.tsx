import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const routes = [
  {
    path: '/overview',
    title: '首页',
  },
  {
    path: '/overview2',
    title: '首页2',
  },
];
const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  // UploadOutlined,
  // BarChartOutlined,
  // CloudOutlined,
  // AppstoreOutlined,
  // TeamOutlined,
  // ShopOutlined,
].map((icon, index) => ({
  icon: React.createElement(icon),

  route: routes[index],
  label: routes[index].title,
  key: routes[index].path,
}));

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const changeNav: MenuProps['onClick'] = (e) => {
    console.log(e);

    navigate(e.key);
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}>
        <div className='demo-logo-vertical' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={[location.pathname]} items={items} onClick={changeNav} />
      </Sider>
      <Layout style={{ marginLeft: 200, height: '100vh', padding: 20 }}>
        <div style={{ height: 'calc(100vh - 40px)', background: '#fff' }}>
          <Outlet></Outlet>
        </div>
      </Layout>
    </Layout>
  );
};
export default App;
