import navigationData from './navigation.json';

// Configuration avec variables d'environnement
const navigationConfig = {
  ...navigationData,
  header: navigationData.header.map(item => {
    if (item.name === 'Developers') {
      return {
        ...item,
        path: process.env.NEXT_PUBLIC_DEVELOPERS_URL || '/developers'
      };
    }
    return item;
  })
};

export default navigationConfig;
