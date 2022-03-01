import React, { FC } from 'react';
import Layout from '../components/layout';

type MainProps = {
  data: any;
  location: any;
};

const Main: FC<MainProps> = ({ data, location }) => (
  <Layout location={location}>
    <h1>Hello World</h1>
  </Layout>
);

export default Main;
