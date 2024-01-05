import styles from './page.module.css';

export default async function Home() {
  const res = await fetch('https://api.spacexdata.com/v3/launches?limit=3');
  const data = await res.json();
  
  console.log('rockets', data);
  
  return (
    <main className={styles.main}>
      <div>
        <h1>Hello SSR </h1>
        <br />
        <ul>
          {data.map((spx: any, index: any) => <li key={index}>{spx.mission_name}</li>)}
        </ul>
      </div>
    </main>
  );
}