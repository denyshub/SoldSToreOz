import React from "react";
import styles from './Content.module.css'

const AboutUs = () => {
  return (
    <div>
      <div className={styles.container_aboutUs}>
        <div>
          <h3 className={styles.aboutUs}>About us:</h3>
        </div>
        <h4 className={styles.aboutUsText}>
          The company was founded by Adolf "Adi" Dassler who made sports shoes
          in his mother's scullery or laundry room in Herzogenaurach, Germany
          after his return from World War I. In July 1924, his older brother
          Rudolf joined the business, which became "Dassler Brothers Shoe
          Factory" (Gebrüder Dassler Schuhfabrik). The electricity supply in
          Herzogenaurach was unreliable, so the brothers sometimes had to use
          pedal power from a stationary bicycle to run their equipment.

          <div className="push"></div>
        </h4>
      </div>

    </div>
  );
};

export default AboutUs;