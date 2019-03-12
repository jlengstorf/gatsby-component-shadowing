import React from 'react';

export default ({ title, optionalProp = false }) => (
  <React.Fragment>
    <h1>{title}</h1>
    {optionalProp && <p>Some optional content!</p>}
  </React.Fragment>
);
