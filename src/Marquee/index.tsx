import {CSSProperties, FC, HTMLAttributes} from "react";
import styles from './styles.module.scss'
import classNames from 'classnames'

interface Props extends HTMLAttributes<HTMLElement> {
  direction?: 'left' | 'right'
  delay?: CSSProperties['animationDelay']
  gradientColor?: string
  gradientWidth?: CSSProperties['width']
}


const Marquee: FC<Props> = (props: Props) => {
  const {children, className, delay, direction, gradientWidth, gradientColor, ...resProps} = props

  const contentStyles: CSSProperties = {
    animationDelay: delay,
    animationDirection: direction === 'right' ? 'reverse' : undefined
  }

  return (
    <div className={classNames(styles.marquee, className)} {...resProps}>
      <div className={styles.content} style={contentStyles}>
        {children}
      </div>
      <div className={styles.content} style={contentStyles}>
        {children}
      </div>
      {/*如果不给颜色就不展示*/}
      {
        gradientColor && (
          <>
            <div className={classNames(styles.overlay, styles.leftOverlay)} style={{
              background: `linear-gradient(90deg, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
              width: gradientWidth
            }}></div>
            <div className={classNames(styles.overlay, styles.rightOverlay)} style={{
              background: `linear-gradient(270deg, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
              width: gradientWidth
            }}></div>
          </>
        )
      }
    </div>
  )
}

export default Marquee
