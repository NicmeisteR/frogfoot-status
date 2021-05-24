import Head from 'next/head'
import Image from 'next/image'
import { getStatus } from '../lib/afrihost';
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const data = await getStatus();

  return {
    props: {
     data
    }
  }
}



export default function Home({ data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>FrogFoot - Status</title>
        <meta name="description" content="FrogFoot - Status" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Is FrogFoot Online?
        </h1>

        <p className={styles.description}>
          Definitely not, it's 
          <code className={styles.code}>Severly Impacted</code>
        </p>
        

        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Open Issues
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <div className="row">
                {data.open.map(({ id, title, description }) => (
                <div className="col-md-3">
                  
                <div key={id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{ description }</p>
  
                    </div>
                  </div>
                </div>
                ))}
              </div>
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Closed Issues
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <div className="row">
                {data.closed.map(({ id, title, description }) => (
                <div className="col-md-3">
                  
                <div key={id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{ description }</p>
  
                    </div>
                  </div>
                </div>
                ))}
              </div>
        </div>
      </div>
    </div>
  </div>
        {/* <div className={styles.grid}>
        {data.map(({ id, title, description }) => (
  
            <a key={id} href="https://nextjs.org/docs" className={styles.card}>
              <h2> {title} &rarr;</h2>
              <p> { description }</p>
            </a>
          ))}
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"></script>
    </div>
  )
}
