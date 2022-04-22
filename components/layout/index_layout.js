import { Fragment } from 'react';

import Navigation from './navigation';

function IndexLayout(props) {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default IndexLayout;
