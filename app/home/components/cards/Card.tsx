import React from "react";
import styles from "./Cards.module.css";
import Link from "next/link";
import Image from "next/image";

interface CardProps {
  tag: string;
  image: string;
  description: string;
}

export default function Card({ tag, image, description }: CardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.tag}>{tag}</span>
      <Image src={image} alt={`${tag} elevator`} className={styles.image} height={150} width={180} />
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>
          <Link href="/contact" className={styles.contactBtn}>
                      Details
                    </Link>
        </button>
      </div>
    </div>
  );
}
