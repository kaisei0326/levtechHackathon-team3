import React, { useRef, useEffect } from 'react';
import { Box } from '@mantine/core';
import Macy from 'macy';

export const useMasonry = (containerRef, options, childCount) => {
  const macyRef = useRef();

  useEffect(() => {
    const macyOptions = {
      container: containerRef.current,
      ...options,
    };

    macyRef.current = Macy(macyOptions);

    return () => {
      macyRef.current.remove();
    };
  }, [options, containerRef]);

  useEffect(() => {
    macyRef.current.reInit();
  }, [childCount]);

  return { macy: macyRef.current };
};

export const Masonry = ({ children, options = {}, className }) => {
  const containerRef = useRef();
  const childCount = React.Children.count(children);
  const { macy } = useMasonry(containerRef, options, childCount);

  return (
    <Box ref={containerRef} className={className}>
      {children}
    </Box>
  );
};
