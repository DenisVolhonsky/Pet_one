import React from 'react'
import styles from './Footer.module.scss'

const Footer = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Footer
