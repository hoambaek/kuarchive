'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLyric, setCurrentLyric] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [progress, setProgress] = useState(0);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
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

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.audioEl.current.pause();
      } else {
        audioRef.current.audioEl.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.audioEl.current.currentTime;
      const currentLyricIndex = lyrics.findIndex(lyric => lyric.time <= currentTime && currentTime < (lyrics[lyrics.indexOf(lyric) + 1]?.time || Infinity));
      
      if (currentLyricIndex > 0) {
        // 이전 가사로 이동
        audioRef.current.audioEl.current.currentTime = lyrics[currentLyricIndex - 1].time;
      } else {
        // 첫 번째 가사로 돌아가기
        audioRef.current.audioEl.current.currentTime = 0;
      }
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.audioEl.current.currentTime;
      const nextLyric = lyrics.find(lyric => lyric.time > currentTime);
      if (nextLyric) {
        audioRef.current.audioEl.current.currentTime = nextLyric.time;
      }
    }
  };

  const handleListen = (currentTime) => {
    const duration = audioRef.current.audioEl.current.duration;
    setProgress((currentTime / duration) * 100);

    const currentLyricObj = lyrics
      .slice()
      .reverse()
      .find((lyric) => currentTime >= lyric.time);

    if (currentLyricObj) {
      setCurrentLyric(currentLyricObj.text);
      setCurrentImage(currentLyricObj.image);
      setCurrentLyricIndex(lyrics.indexOf(currentLyricObj));
    } else {
      setCurrentLyric('');
      setCurrentImage('');
      setCurrentLyricIndex(0);
    }
  };

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const rect = e.target.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * audioRef.current.audioEl.current.duration;
      audioRef.current.audioEl.current.currentTime = newTime;
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
          src="/images/5ssuk.png"
          alt="음악 커버"
          style={{ width: '330px', height: 'auto', borderRadius: '20px' }}  // 모서리 라운드 추가
        />
      </div>

      {/* 재생 프로그레스바 */}
      <div
        onClick={handleProgressClick}
        style={{ position: 'relative', width: '100%', maxWidth: '330px', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px', margin: '0 auto 10px', cursor: 'pointer' }}
      >
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#3b5998', borderRadius: '5px' }}></div>
      </div>

      {/* 기본 음악 플레이어 */}
      <ReactAudioPlayer
        ref={audioRef}
        src="/1sara.mp3"
        controls={false}  // 기본 컨트롤 숨기기
        listenInterval={100}
        onListen={handleListen}
        style={{ width: '100%', maxWidth: '330px', margin: '0 auto' }}
      />

      {/* 되감기, 재생/일시정지, 앞으로 감기 버튼 추가 */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={handleRewind} style={{ margin: '0 10px', padding: '10px', cursor: 'pointer', background: 'none', border: 'none' }}>
          <img src="/images/rewind-icon.png" alt="Rewind to previous lyric" style={{ width: '50px', height: '50px' }} />
        </button>
        <button onClick={handlePlayPause} style={{ margin: '0 10px', padding: '10px', cursor: 'pointer', background: 'none', border: 'none' }}>
          <img
            src={isPlaying ? "/images/pause-icon.png" : "/images/play-icon.png"}
            alt={isPlaying ? "Pause" : "Play"}
            style={{ width: '80px', height: '80px' }}
          />
        </button>
        <button onClick={handleForward} style={{ margin: '0 10px', padding: '10px', cursor: 'pointer', background: 'none', border: 'none' }}>
          <img src="/images/forward-icon.png" alt="Forward to next lyric" style={{ width: '50px', height: '50px' }} />
        </button>
      </div>

      {/* 노래 제목과 가수명 추가 */}
      <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
        <p>판소리 '춘향가' 중 '사랑가'</p>
      </div>
      <div style={{ marginTop: '10px', fontSize: '18px' }}>
                <p>중중모리</p>
      </div>
      {/* 아래 회색 구분선 추가 */}
      <div style={{ height: '1px', backgroundColor: '#ccc', margin: '10px 0' }}></div>

      <div style={{ marginTop: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}></h2>
        {/* 이전 가사 및 이미지 */}
        {currentLyricIndex > 0 && (
          <div style={{ opacity: 0.5 }}>
            <p style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)' }}>
              {lyrics[currentLyricIndex - 1].text}
            </p>
            {lyrics[currentLyricIndex - 1].image && (
              <img
                src={lyrics[currentLyricIndex - 1].image}
                alt="이전 가사에 맞는 이미지"
                style={{ width: '330px', height: 'auto' }}
              />
            )}
          </div>
        )}
        {/* 현재 가사 및 이미지 */}
        <p style={{ fontSize: '16px', fontWeight: 'bold' }}>{currentLyric}</p>
        {currentImage && (
          <img
            src={currentImage}
            alt="현재 가사에 맞는 이미지"
            style={{ width: '330px', height: 'auto' }}
          />
        )}
        {/* 다음 가사 및 이미지 */}
        {currentLyricIndex < lyrics.length - 1 && (
          <div style={{ opacity: 0.5 }}>
            <p style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 0.5)' }}>
              {lyrics[currentLyricIndex + 1].text}
            </p>
            {lyrics[currentLyricIndex + 1].image && (
              <img
                src={lyrics[currentLyricIndex + 1].image}
                alt="다음 가사에 맞는 이미지"
                style={{ width: '330px', height: 'auto' }}
              />
            )}
          </div>
        )}
      </div>

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