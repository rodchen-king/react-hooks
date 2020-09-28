import React, { useState, useEffect } from 'react';

function Example () {
  // hooks
  useEffect(() => {
    // didmount
    setTimeout(() => {
      console.log('print log after 1s!');
    }, 1000);
    window.addEventListener('load', loadHandle);

    // willunmont
    return () => {
      window.removeEventListener('load', loadHandle);
    }
  })

  const loadHandle = () => {
    console.log('load document')
  }

  return (
    <h3>useEffect</h3>
  )
}

export default Example;