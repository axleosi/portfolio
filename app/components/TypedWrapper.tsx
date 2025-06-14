'use client';

import React, { useEffect, useRef } from 'react';
import { Typed as TypedClass } from 'react-typed';

type TypedWrapperProps = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
};

const TypedWrapper: React.FC<TypedWrapperProps> = ({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
  showCursor = true,
  cursorChar = '|',
}) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<TypedClass | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new TypedClass(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
        showCursor,
        cursorChar,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop, showCursor, cursorChar]);

  return <span ref={el} />;
};

export default TypedWrapper;
