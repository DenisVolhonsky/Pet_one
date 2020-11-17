import React from 'react'
import styles from './Main.module.scss'

const Main = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Main
