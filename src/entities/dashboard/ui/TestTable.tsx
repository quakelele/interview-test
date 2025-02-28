import styles from 'styles/dashboard.module.scss'
import { TestTableItem } from './TestTableItem'
import { useFetchTests } from 'app/api/useFetchTests'
import { Test } from 'app/api/_types'

// const titles = ['NAME', 'TYPE', 'STATUS', 'SITE']

export const TestTable = () => {
   const { data, loading, error } = useFetchTests('sites')

   if (loading) return <div>Loading..</div>
   if (error) return <div>Error..</div>

   return (
      <div className={styles.wrapper}>
         <table>
            <thead className={styles.thread}>
               <tr className={styles.title}>
                  <th>
                     <p>NAME</p>
                  </th>
                  <th>
                     <p>TYPE</p>
                  </th>
                  <th>
                     <p>STATUS</p>
                  </th>
                  <th>
                     <p>SITE</p>
                  </th>
               </tr>
            </thead>
            {data?.map((obj: Test) => (
               <TestTableItem {...obj} />
            ))}
         </table>
      </div>
   )
}
