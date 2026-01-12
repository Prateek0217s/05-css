import React from 'react'
import styles from './button.module.css'

const Button = ({ children = 'Pick me', onClick, disabled = false, center = false, full = false }) => {
  const classList = [styles.wrapper]
  if (center) classList.push(styles.centered)
  if (full) classList.push(styles.fullCenter)
  const wrapperClass = classList.join(' ')

  return (
    <div className={wrapperClass}>
      <h1 style={{ margin: 0, fontSize: 18 }}>LOttttt</h1>
      <button className={styles.btn} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  )
}

export default Button
