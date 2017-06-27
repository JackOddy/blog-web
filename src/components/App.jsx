import React from 'react';
import styled from 'styled-components';

export default ({ className, children }) => (
  <div className={className}>
    { children }
  </div>
);
