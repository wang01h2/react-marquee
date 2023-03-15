import './App.css'
import Marquee from "./Marquee";
import styles from './styles.module.scss'

function App() {

  return (
    <div>
      <Marquee className={styles.marquee} delay={"1s"} direction={"right"} gradientColor={'#F8FBFD'}
               gradientWidth={200} pauseOnHover>
        <div className={styles.list}> {Array(10).fill(1).map((item, index) => (
          <div className={styles.item} key={index}>{index + 1}</div>
        ))}
        </div>
      </Marquee>
    </div>
  )
}

export default App
