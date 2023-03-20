import Marquee from "./Marquee";
import styles from './styles.module.scss'
import {imageList, textList} from "./list";
import {useState} from "react";

function App() {
  /*
  * startPlay:预留开始状态
  *
  * */
  const [loadedImages, setLoadedImages] = useState(0)

  return (
    <div className={styles.app}>
      <h1>React Marquee</h1>
      <p>一款轻量级的React跑马灯组件</p>
      <h2>鸣谢</h2>
      <Marquee className={styles.marquee} startPlay={loadedImages >= imageList.length} delay={"1s"} direction={"right"}
               gradientColor={'#F8FBFD'}
               gradientWidth={200} pauseOnHover>
        <div className={styles.imageList}> {imageList.map((item, index) => (
          <img src={item} key={index} onLoad={() => {
            setLoadedImages(num => num + 1)
          }
          }/>
        ))}
        </div>
      </Marquee>
      <h2>支持多语言</h2>
      <Marquee className={styles.marquee} delay={"1s"} direction={"left"} gradientColor={'#F8FBFD'}
               gradientWidth={200} pauseOnHover>
        <div className={styles.textList}> {textList.map((item, index) => (
          <span className={styles.textItem} key={index}>{item}</span>
        ))}
        </div>
      </Marquee>

    </div>
  )
}

export default App
