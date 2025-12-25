import React, { useState } from 'react';
import { AppstoreOutlined, ProductOutlined, ProfileOutlined, SettingOutlined, SlidersOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router';

type MenuItem = Required<MenuProps>['items'][number];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}


const App: React.FC = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['1']);


  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: '1',
      icon: <AppstoreOutlined />,
      label: 'Dashboard',
      onClick: () => { navigate(''); }
    },
    {
      key: '2',
      icon: <SlidersOutlined />,
      label: 'Analytics',
      children: [
        {
          key: '21',
          label: 'Product',
          icon: <ProductOutlined />,
          onClick: () => { navigate('analytics/product'); }
        },
        {
          key: '22',
          label: 'Customer',
          icon: <UserOutlined />,
          onClick: () => { navigate('analytics/customer'); }
        },
      ],
    },
    {
      key: '3',
      icon: <ProfileOutlined />,
      label: 'Profile',
      onClick: () => { navigate('profile'); }
    },
    {
      key: '4',
      icon: <SettingOutlined />,
      label: 'Settings',
      onClick: () => { navigate('settings'); }
    },
  ];

  const getLevelKeys = (items1: LevelKeysProps[]) => {
    const key: Record<string, number> = {};
    const func = (items2: LevelKeysProps[], level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };

  const levelKeys = getLevelKeys(items as LevelKeysProps[]);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{ marginTop: '20px' }}
      items={items}
    />
  );
};

export default App;