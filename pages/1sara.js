'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLyric, setCurrentLyric] = useState('');
  const [currentImage, setCurrentImage] = useState('');
  const [progress, setProgress] = useState(0);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMetadataLoaded, setIsMetadataLoaded] = useState(false);
  const audioRef = useRef(null);

  const lyrics = [
    { time: 0, text: "", image: "/images/1sara/01.png" },
    { time: 14, text: "", image: "/images/1sara/02.png" },
    { time: 29, text: "", image: "/images/1sara/03.png" },
    { time: 34, text: "", image: "/images/1sara/04.png" },
    { time: 39, text: "", image: "/images/1sara/05.png" },
    { time: 44, text: "", image: "/images/1sara/06.png" },
    { time: 49, text: "", image: "/images/1sara/07.png" },
    { time: 54, text: "", image: "/images/1sara/08.png" },
    { time: 58, text: "", image: "/images/1sara/09.png" },
    { time: 63, text: "", image: "/images/1sara/10.png" },
    { time: 67, text: "", image: "/images/1sara/11.png" },
    { time: 72, text: "", image: "/images/1sara/12.png" },
    { time: 77, text: "", image: "/images/1sara/13.png" },
    { time: 81, text: "", image: "/images/1sara/14.png" },
    { time: 86, text: "", image: "/images/1sara/15.png" },
    { time: 91, text: "", image: "/images/1sara/16.png" },
    { time: 96, text: "", image: "/images/1sara/17.png" },
    { time: 100, text: "", image: "/images/1sara/18.png" },
    { time: 105, text: "", image: "/images/1sara/19.png" },
    { time: 110, text: "", image: "/images/1sara/20.png" },
    { time: 114, text: "", image: "/images/1sara/21.png" },
    { time: 119, text: "", image: "/images/1sara/22.png" },
    { time: 124, text: "", image: "/images/1sara/23.png" },
    { time: 128, text: "", image: "/images/1sara/24.png" },
    { time: 133, text: "", image: "/images/1sara/25.png" },
    { time: 138, text: "", image: "/images/1sara/26.png" },
    { time: 142, text: "", image: "/images/1sara/27.png" },
    { time: 147, text: "", image: "/images/1sara/28.png" },
    { time: 151, text: "", image: "/images/1sara/29.png" },
    { time: 156, text: "", image: "/images/1sara/30.png" },
    { time: 160, text: "", image: "/images/1sara/31.png" },
    { time: 165, text: "", image: "/images/1sara/32.png" },
    { time: 170, text: "", image: "/images/1sara/33.png" },
    { time: 174, text: "", image: "/images/1sara/34.png" },
    { time: 178, text: "", image: "/images/1sara/35.png" },
    { time: 183, text: "", image: "/images/1sara/36.png" },
    { time: 187, text: "", image: "/images/1sara/37.png" },
    { time: 192, text: "", image: "/images/1sara/38.png" },
    { time: 196, text: "", image: "/images/1sara/39.png" },
    { time: 200, text: "", image: "/images/1sara/40.png" },
    { time: 205, text: "", image: "/images/1sara/41.png" },
    { time: 209, text: "", image: "/images/1sara/42.png" },
    { time: 214, text: "", image: "/images/1sara/43.png" },
    { time: 218, text: "", image: "/images/1sara/44.png" },
    { time: 223, text: "", image: "/images/1sara/45.png" },
    { time: 227, text: "", image: "/images/1sara/46.png" },
    { time: 231, text: "", image: "/images/1sara/47.png" },
    { time: 236, text: "", image: "/images/1sara/48.png" },
    { time: 240, text: "", image: "/images/1sara/49.png" },
    { time: 244, text: "", image: "/images/1sara/50.png" },
    { time: 249, text: "", image: "/images/1sara/51.png" },
    { time: 253, text: "", image: "/images/1sara/52.png" },
    { time: 259, text: "", image: "/images/1sara/53.png" },
    { time: 274, text: "", image: "/images/1sara/54.png" },
    { time: 292, text: "", image: "/images/1sara/55.png" },
    { time: 308, text: "", image: "/images/1sara/56.png" },
    { time: 314, text: "", image: "/images/1sara/57.png" },
    { time: 318, text: "", image: "/images/1sara/58.png" },
    { time: 323, text: "", image: "/images/1sara/59.png" },
    { time: 327, text: "", image: "/images/1sara/60.png" },
    { time: 332, text: "", image: "/images/1sara/61.png" },
    { time: 337, text: "", image: "/images/1sara/62.png" },
    { time: 341, text: "", image: "/images/1sara/63.png" },
    { time: 346, text: "", image: "/images/1sara/64.png" },
    { time: 351, text: "", image: "/images/1sara/65.png" },
    { time: 355, text: "", image: "/images/1sara/66.png" },
    { time: 360, text: "", image: "/images/1sara/67.png" },
    { time: 365, text: "", image: "/images/1sara/68.png" },
    { time: 369, text: "", image: "/images/1sara/69.png" },
    { time: 374, text: "", image: "/images/1sara/70.png" },
    { time: 379, text: "", image: "/images/1sara/71.png" },
    { time: 383, text: "", image: "/images/1sara/72.png" },
    { time: 388, text: "", image: "/images/1sara/73.png" },
    { time: 392, text: "", image: "/images/1sara/74.png" },
    { time: 396, text: "", image: "/images/1sara/75.png" },
    { time: 401, text: "", image: "/images/1sara/76.png" },
    { time: 405, text: "", image: "/images/1sara/77.png" },
    { time: 410, text: "", image: "/images/1sara/78.png" },
    { time: 414, text: "", image: "/images/1sara/79.png" },
    { time: 419, text: "", image: "/images/1sara/80.png" },
    { time: 423, text: "", image: "/images/1sara/81.png" },
    { time: 428, text: "", image: "/images/1sara/82.png" },
    { time: 432, text: "", image: "/images/1sara/83.png" },
    { time: 436, text: "", image: "/images/1sara/84.png" },
    { time: 441, text: "", image: "/images/1sara/85.png" },
    { time: 445, text: "", image: "/images/1sara/86.png" },
    { time: 449, text: "", image: "/images/1sara/87.png" },
  ];

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      const updateTime = () => setCurrentTime(audioElement.currentTime);
      const updateDuration = () => {
        const audioDuration = audioElement.duration;
        if (!isNaN(audioDuration)) {
          setDuration(audioDuration);
          setIsMetadataLoaded(true);
        }
      };

      audioElement.addEventListener('timeupdate', updateTime);
      audioElement.addEventListener('loadedmetadata', updateDuration);
      
      // 이미 메타데이터가 로드된 경우를 처리
      if (!isNaN(audioElement.duration)) {
        updateDuration();
      }

      return () => {
        audioElement.removeEventListener('timeupdate', updateTime);
        audioElement.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const currentLyricIndex = lyrics.findIndex(lyric => lyric.time <= currentTime && currentTime < (lyrics[lyrics.indexOf(lyric) + 1]?.time || Infinity));
      
      if (currentLyricIndex > 0) {
        // 이전 가사로 이동
        audioRef.current.currentTime = lyrics[currentLyricIndex - 1].time;
      } else {
        // 첫 번째 가사로 돌아가기
        audioRef.current.currentTime = 0;
      }
    }
  };

  const handleForward = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const nextLyric = lyrics.find(lyric => lyric.time > currentTime);
      if (nextLyric) {
        audioRef.current.currentTime = nextLyric.time;
      }
    }
  };

  const handleListen = (currentTime) => {
    const duration = audioRef.current.duration;
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
      const newTime = (clickX / rect.width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px auto', padding: '10px', fontFamily: 'Pretendard', maxWidth: '330px' }}>
      {/* 상단 바 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          padding: '15px',
          width: '100%',
          maxWidth: '330px',
        }}
      >
        {/* 뒤로가기 버튼 */}
        <Link href="/songlist" legacyBehavior>
          <a style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'inline-block' }}>
            <img
              src="/images/back-button.png"
              alt="Back"
              style={{ width: '30px', height: '30px' }}
            />
          </a>
        </Link>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '700', 
          color: '#000000', 
          flex: 1, 
          textAlign: 'center',
          margin: '0 10px',
          fontFamily: "'Josefin Sans', sans-serif",
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>Now Playing</h1>
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
          src="/images/sara.jpg"
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

      {/* 재생 시간 및 전체 시간 표시 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '330px', margin: '0 auto 10px' }}>
        <span>{new Date(currentTime * 1000).toISOString().substr(14, 5)}</span>
        <span>{isMetadataLoaded ? new Date(duration * 1000).toISOString().substr(14, 5) : '로딩 중...'}</span>
      </div>

      {/* 기본 음악 플레이어 */}
      <audio
        ref={audioRef}
        src="/1sara.mp3"
        onTimeUpdate={() => handleListen(audioRef.current.currentTime)}
        onLoadedMetadata={() => {
          setDuration(audioRef.current.duration);
          setIsMetadataLoaded(true);
        }}
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
        <p>춘향가 중 사랑가</p>
      </div>
      <div style={{ marginTop: '10px', fontSize: '18px' }}>
        <p>중중모리</p>
      </div>
      {/* 아래 회색 구분선 추가 */}
      <div style={{ height: '1px', backgroundColor: '#ccc', margin: '10px 0' }}></div>

      {/* 배경을 추가한 새로운 컨테이너 */}
      <div style={{ 
        marginTop: '20px', 
        backgroundColor: 'rgba(200, 200, 200, 0.2)', // 옅은 배경색
        borderRadius: '10px', // 모서리 둥글게
        padding: '20px', // 내부 여백
        width: '100%', // 화면 크기에 맞춰 조정
        maxWidth: '285px', // 최대 가로 크기
        height: '210px', // 높이 고정
        margin: '0 auto', // 가운데 정렬
        textAlign: 'center' // 텍스트 및 이미지 가운데 정렬
      }}>
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
                style={{ width: '90%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
              />
            )}
          </div>
        )}
        {/* 현재 가사 및 이미지 */}
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{currentLyric}</p>
        {currentImage && (
          <img
            src={currentImage}
            alt="현재 가사에 맞는 이미지"
            style={{ width: '100%', maxWidth: '330px', height: 'auto', display: 'block', margin: '0 auto' }}
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
                style={{ width: '90%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
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