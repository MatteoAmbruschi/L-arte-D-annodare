import styles from './numberStars.module.css';
import Image from 'next/image';

function NumberStars({ number }) {
  const stars = Array.from({ length: number }, (_, index) => (
    <Image key={index} src='/starYellow.svg' width='17' height='17' alt='icon star' />
  ));

  return (
    <div className={styles.containerStars}>
      {stars}
    </div>
  );
}

export default NumberStars;
