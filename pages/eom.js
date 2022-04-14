import styles from '../styles/EOM.module.css'

export const eom = ({ employee }) => {
  console.log(employee)
  return (
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
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    'https://my-json-server.typicode.com/soumya495/my-JSON-server/employeeOfTheMonth'
  )
  const employee = await res.json()
  return {
    props: {
      employee,
    },
  }
}

export default eom
