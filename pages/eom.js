import Head from 'next/head'
import styles from '../styles/EOM.module.css'

export const eom = ({ employee }) => {
  return (
    <>
      <Head>
        <title>Employee Of The Month</title>
        <meta
          name='description'
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property='og:image' content={employee.image} />
        <meta property='og:title' content='Employee Of The Month' />
        <meta
          property='og:description'
          content={`This month's employee of the month is ${employee.name}`}
        />

        <meta property='twitter:image' content={employee.image} />
        <meta property='twitter:title' content='Employee Of The Month' />
        <meta
          property='twitter:description'
          content={`This month's employee of the month is ${employee.name}`}
        />
      </Head>
      <div className='page-container'>
        <div className={styles.main}>
          <h1>Employee of the month</h1>
          <div className={styles.employeeOfTheMonth}>
            <h3>{employee.name}</h3>
            <h6>{employee.position}</h6>
            <img src={employee.image} alt='employee-img' />
            <p>{employee.position}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const url =
    'https://my-json-server.typicode.com/soumya495/my-JSON-server/employeeOfTheMonth'

  const res = await fetch(url)
  const employee = await res.json()
  return {
    props: {
      employee,
    },
  }
}

export default eom
