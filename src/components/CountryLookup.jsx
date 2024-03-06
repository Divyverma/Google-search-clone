'use client'

import { useEffect, useState } from "react"

export default function CountryLookup() {
    
    const [country, setCountry] = useState("United states")

    useEffect(()=>{
        const getcountry = async ()=>{
            const response = await fetch('http://ip-api.com/json/')
                .then((res) => res.json())
                .then((data) => data.country);
            
            if(!response) return;
            setCountry(response);
        };
        getcountry();
    }, []);

  return (
    <div>{country}</div>
  )
}
