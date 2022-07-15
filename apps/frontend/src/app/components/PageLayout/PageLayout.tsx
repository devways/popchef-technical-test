import { FC } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';

import './PageLayout.scss';

const PageLayout: FC = () => {
  const location = useLocation();

  return (
    <div id="PageLayout">
      <Menu fixed="top" inverted>
        <Menu.Item
          as={Link}
          to="/recipes"
          active={['/', '/recipes'].includes(location.pathname)}
        >
          Recipes
        </Menu.Item>
      </Menu>

      <hr />

      <Container>
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for the child routes we defined above. */}
        <Outlet />
      </Container>
    </div>
  );
};

export default PageLayout;
