import styles from "../Styles/Card.module.scss";

export default function Card({ img, title, content }) {
  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img src={img} alt={img} />
      </div>
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <button className='click_button'>Learn More</button>
    </div>
  );
}
