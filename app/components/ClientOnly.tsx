'use client';
import React,{useEffect, useState} from 'react'

interface ClientOnlyProps {
    children: React.ReacrNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
    const [hashMounted, setHashMounted] = useState(false);

    useEffect(() => {
        setHashMounted(true);
    }, []);

    if (!hashMounted) {
        return null;
    }
  return (
      <>{children}</>
  )
}

export default ClientOnly;