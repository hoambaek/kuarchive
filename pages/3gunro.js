'use client';

import React, { useState, useRef } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLyric, setCurrentLyric] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const audioRef = useRef(null);

  const lyrics = [
    { time: 0, text: "이애 춘향아 우리 업고 좀 놀아보자" },
    { time: 5, text: "아이고 도련님은 험한소리도 다 허시오 업고 놀다가 미끄러운 장판방에서 넘어지면 어쩔라고 그러시오" },
    { time: 14, text: "네가 모르는 말이로다 업고 놀다 넘어지면 넘어지는 체 허고 그 말 속 알아 듣것느냐" },
    { time: 24, text: "도련님이 춘향을 업고 노는듸" },
    { time: 29, text: "", image: "/images/1sara/1.png" },
    { time: 34, text: "", image: "/images/1sara/2.png" },
    { time: 39, text: "", image: "/images/1sara/3.png" },
    { time: 44, text: "", image: "/images/1sara/4.png" },
  ];

  const handleListen = (currentTime) => {
    const currentLyricObj = lyrics
      .slice()
      .reverse()
      .find((lyric) => currentTime >= lyric.time);

    if (currentLyricObj) {
      setCurrentLyric(currentLyricObj.text);
      setCurrentImage(currentLyricObj.image);
    } else {
      setCurrentLyric('');
      setCurrentImage('');
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '10px', fontFamily: 'Futura, sans-serif' }}>
      {/* 상단 바 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '10px',
        }}
      >
        {/* 뒤로가기 버튼 */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img
            src="/images/back-button.png"
            alt="Back"
            style={{ width: '30px', height: '30px' }}
          />
        </button>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Now Playing</h1>
        {/* 햄버거 메뉴 */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img
            src="/images/hamburger-menu.png"
            alt="Menu"
            style={{ width: '30px', height: '30px' }}
          />
        </button>
      </div>

      {/* 회색 구분선 */}
      <div style={{ height: '1px', backgroundColor: '#ccc', margin: '10px 0' }}></div>

      {/* 음악 커버 이미지 추가 */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <img
          src="/images/3gunro.png"
          alt="음악 커버"
          style={{ width: '330px', height: 'auto' }}
        />
      </div>

      {/* 기본 음악 플레이어 */}
      <ReactAudioPlayer
        ref={audioRef}
        src="/1sara.mp3"
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        listenInterval={100}
        onListen={handleListen}
        style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
      />

      {/* 노래 제목과 가수명 추가 */}
      <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
        <p>판소리 '춘향가' 중<br />'군로 사령이 춘향잡으러 나가는데'</p>
      </div>
      <div style={{ marginTop: '10px', fontSize: '18px' }}>
                <p>*중중머리</p>
      </div>
      {/* 아래 회색 구분선 추가 */}
      <div style={{ height: '1px', backgroundColor: '#ccc', margin: '10px 0' }}></div>

      <div style={{ marginTop: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}></h2>
        <p style={{ fontSize: '16px' }}>{currentLyric}</p>
      </div>

      {/* 현재 가사에 맞는 이미지 표시 */}
      {currentImage && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={currentImage}
            alt="현재 가사에 맞는 이미지"
            style={{ width: '330px', height: 'auto' }}
          />
        </div>
      )}

      {/* 가사 아래 회색 구분선 추가 */}
      <div style={{ height: '1px', backgroundColor: '#ccc', margin: '10px 0' }}></div>

      <style jsx>{`
        .lyrics {
          transition: transform 0.1s ease;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
