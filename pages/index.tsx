import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mini-portfolio page</title>
        <meta name="description" content="Mini-portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my mini-portfolio page.
        </h1>
       

        <section className="hero" id="about">
      <img src="/pfr.jpg" alt="kendy-mhlongo" loading="lazy" className="hero-img"/>
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">About Me</h2>
        <p className="bio-text">
         My name is Kendy Mhlongo. I am 25 years old.
         I grew up in a small town called Ivory Park in Midrand. 
         I come from a family of six (6), two girls, two boys and parents.
          I matriculated at Ivory Park Secondary School in 2015 and took
          a gap-year in 2016 due to financial issues. In 2017, I registered at
          the Independent Institution of Rosebank College, where I was studying
          Diploma in Information Technology (Software Development). I completed my
          Diploma in record time and as one of the top student at Rosebank College in 2017.  
        </p>
        <h2 className="bio-title">Why I want to be a developer at SovTech</h2>
        <p className="bio-text">
          I’m very passionate about being a developer and would be thrilled to work for an organization that subscribes to the same core values.
          I’ve found I work best in a collaborative environment, so I look forward to working with several departments to align on and achieve our goals.
          After learning more about this job, I’m sure I can help you find ways to manage projects more efficiently and effectively.”
        </p>


        <h2 className="bio-title">Work Experience</h2>
        <p className="bio-text">
        <h3>Zensar Technologies– Java Intern [16 February 2022 – Current]</h3>
          <b>Responsibilities:</b>
          <ul>
              <li> Attending JAVA training</li>
          </ul>
        <h3>Reverside– Java system engineer [February 2021 – January 2022]</h3>
        <b>Responsibilities:</b><br/>
        <ul>
        <li> Invoke processes running on disparate operating systems (such as Windows, Macos, and
              Linux) to authenticate, authorize, and communicate using extensible markup
              language(XML).</li>
              <li> Invoke web services and receive responses independent of language and platforms.</li>
            <li>Debugging simple object access protocol (SOAP) requests and providing the client with the
              response.</li>
        </ul>
<h3>Datacentrix– L1 support Engineer/system analysis Intern [January 2020 – January 2021]</h3>
<b>Responsibilities:</b>
<ul>
<li> Validate and clarify the issues described in tickets.</li>
<li> Perform initial Analysis, Investigation and Diagnosis of the Incidents / Requests.</li>
<li> Acknowledge any Complaint and attempts to provide a Resolution at First Line. Should
First Line not be possible, executes Hierarchical Escalation to ensure the Complaint is
Resolved.</li>
</ul>
  </p>

      </div>
</section>
        
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
    </div>
  )
}
