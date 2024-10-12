// components/NowPlaying.js
import React from 'react';
import styles from './NowPlaying.module.css';

export default function NowPlaying() {
  return (
    <div className={styles.container}>
      <h2>Now Playing</h2>
      <div className={styles.albumArt}>
        <img src="/path/to/image.jpg" alt="Album Art" />
      </div>
      <div className={styles.songInfo}>
        <div>
          <h3>Princess Diana</h3>
          <p>Ice Spice</p>
        </div>
      </div>
      <div className={styles.controls}>
        <input type="range" min="0" max="100" value="35" />
        <div className={styles.time}>
          <span>0:35</span>
          <span>3:03</span>
        </div>
        <div className={styles.buttons}>
          <button>
            <img src="/path/to/prev.png" alt="Previous" />
          </button>
          <button>
            <img src="/path/to/play.png" alt="Play" />
          </button>
          <button>
            <img src="/path/to/next.png" alt="Next" />
          </button>
        </div>
      </div>
      <div className={styles.options}>
        <button>lyrics</button>
        <hr />
        <button>images</button>
      </div>
    </div>
  );
}
