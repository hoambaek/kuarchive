import React from 'react';
import Image from 'next/image';
import styles from '/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.menuButton}>
          <Image src="/images/menu-icon.png" alt="메뉴" width={30} height={30} />
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.featuredArtist}>
          <Image src="/images/featured-artist.png" alt="주요 아티스트" width={370} height={200} />
          <div className={styles.artistInfo}>
            <h2>Luis Fonsi</h2>
            <p>1,322,799,000 스트림</p>
            <button className={styles.followButton}>팔로우 +</button>
          </div>
        </div>

        <section className={styles.topMix}>
          <h2>Top Mix</h2>
          <div className={styles.mixGrid}>
            <div className={styles.mixItem}>
              <img src="/images/t1.png" alt="Mix 1" />
            </div>
            <div className={styles.mixItem}>
              <img src="/images/t2.png" alt="Mix 2" />
            </div>
          </div>
        </section>

        <section className={styles.recentlyPlayed}>
          <h2>최근 재생</h2>
          <div className={styles.songList}>
            {/* 최근 재생 목록 */}
          </div>
        </section>
      </div>

      {/* 재생 컨트롤 등 추가 요소들 */}
    </div>
  );
}
