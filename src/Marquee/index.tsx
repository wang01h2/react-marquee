import {CSSProperties, FC, HTMLAttributes, useEffect, useRef, useState} from "react";
import styles from './styles.module.scss'
import classNames from 'classnames'

interface Props extends HTMLAttributes<HTMLElement> {
  startPlay?: boolean,
  speed?: number,
  direction?: 'left' | 'right'
  delay?: CSSProperties['animationDelay']
  gradientColor?: string
  gradientWidth?: CSSProperties['width']
  // hover 暂停
  pauseOnHover?: boolean
}


const Marquee: FC<Props> = (props: Props) => {
  const {
    startPlay = true,
    speed = 20,
    children,
    className,
    delay,
    direction,
    gradientWidth,
    gradientColor,
    pauseOnHover,
    ...resProps
  } = props

  const [contentWidth, setContentWidth] = useState<number>(0)
  const contentRef = useRef<HTMLDivElement>(null)

  const duration = contentWidth / speed

  useEffect(() => {
    if (startPlay && contentRef.current) {
      setContentWidth(contentRef.current.getBoundingClientRect().width)
    }
  })

  const contentStyles: CSSProperties = {
    animationDelay: delay,
    animationDirection: direction === 'right' ? 'reverse' : undefined,
    animationDuration: `${duration}s`
  }


  return (
    <div className={classNames(styles.marquee, className, {[styles.pauseOnHover]: pauseOnHover})} {...resProps}>
      <div ref={contentRef} className={styles.content} style={contentStyles}>
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
