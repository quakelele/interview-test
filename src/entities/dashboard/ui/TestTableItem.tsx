import { Test } from 'app/api/_types'
import styles from 'styles/dashboard.module.scss'

export const TestTableItem = ({ id, name, status, siteId }: Test) => {
   return (
      <tbody>
         <tr className={styles.threadBody}>
            <td className={styles.results}>Order basket redesing</td>
            <td>Classic</td>
            <td>Online</td>
            <td>market.company.com</td>
            <td>
               <button className={`${styles.btn} ${styles.btnFinalize}`}>
                  Finalize
               </button>git branch
            </td>
         </tr>
         <tr className={styles.threadBody}>
            <td className={styles.finalize}>Order basket redesing</td>
            <td>Classic</td>
            <td>Online</td>
            <td>market.company.com</td>
            <td>
               <button className={`${styles.btn} ${styles.btnResults}`}>
                  Results
               </button>
            </td>
         </tr>
      </tbody>
   )
}
