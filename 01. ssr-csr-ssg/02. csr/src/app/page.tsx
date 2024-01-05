"use client";
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch('https://api.spacexdata.com/v3/launches?limit=3')
    .then(res => res.json())
    .then(data => {
      console.log('rockets', data);
      setData(data);
    })
    .catch(error => console.log(error))
  
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <h1>Hello CSR </h1>
        <br />
        <ul>
        {data.map((spx: any) => <li>{spx.mission_name}</li>)}
        </ul>
      </div>
    </main>
  )
}
