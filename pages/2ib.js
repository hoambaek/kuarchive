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
    { time: 0, text: "", image: "/images/2ib/01.png" },
    { time: 10, text: "", image: "/images/2ib/02.png" },
    { time: 22, text: "", image: "/images/2ib/03.png" },
    { time: 31, text: "", image: "/images/2ib/04.png" },
    { time: 44, text: "", image: "/images/2ib/05.png" },
    { time: 54, text: "", image: "/images/2ib/06.png" },
    { time: 65, text: "", image: "/images/2ib/07.png" },
    { time: 76, text: "", image: "/images/2ib/08.png" },
    { time: 86, text: "", image: "/images/2ib/09.png" },
    { time: 97, text: "", image: "/images/2ib/10.png" },
    { time: 107, text: "", image: "/images/2ib/11.png" },
    { time: 117, text: "", image: "/images/2ib/12.png" },
    { time: 128, text: "", image: "/images/2ib/13.png" },
    { time: 139, text: "", image: "/images/2ib/14.png" },
    { time: 149, text: "", image: "/images/2ib/15.png" },
    { time: 159, text: "", image: "/images/2ib/16.png" },
    { time: 170, text: "", image: "/images/2ib/17.png" },
    { time: 180, text: "", image: "/images/2ib/18.png" },
    { time: 191, text: "", image: "/images/2ib/19.png" },
    { time: 201, text: "", image: "/images/2ib/20.png" },
    { time: 211, text: "", image: "/images/2ib/21.png" },
    { time: 221, text: "", image: "/images/2ib/22.png" },
    { time: 231, text: "", image: "/images/2ib/23.png" },
    { time: 241, text: "", image: "/images/2ib/24.png" },
    { time: 246, text: "", image: "/images/2ib/25.png" },
    { time: 250, text: "", image: "/images/2ib/26.png" },
    { time: 255, text: "", image: "/images/2ib/27.png" },
    { time: 259, text: "", image: "/images/2ib/28.png" },
    { time: 264, text: "", image: "/images/2ib/29.png" },
    { time: 268, text: "", image: "/images/2ib/30.png" },
    { time: 273, text: "", image: "/images/2ib/31.png" },
    { time: 277, text: "", image: "/images/2ib/32.png" },
    { time: 281, text: "", image: "/images/2ib/33.png" },
    { time: 285, text: "", image: "/images/2ib/34.png" },
    { time: 290, text: "", image: "/images/2ib/35.png" },
    { time: 294, text: "", image: "/images/2ib/36.png" },
    { time: 298, text: "", image: "/images/2ib/37.png" },
    { time: 302, text: "", image: "/images/2ib/38.png" },
    { time: 307, text: "", image: "/images/2ib/39.png" },
    { time: 311, text: "", image: "/images/2ib/40.png" },
    { time: 315, text: "", image: "/images/2ib/41.png" },
    { time: 319, text: "", image: "/images/2ib/42.png" },
    { time: 323, text: "", image: "/images/2ib/43.png" },
    { time: 328, text: "", image: "/images/2ib/44.png" },
    { time: 332, text: "", image: "/images/2ib/45.png" },
    { time: 336, text: "", image: "/images/2ib/46.png" },
    { time: 341, text: "", image: "/images/2ib/47.png" },
    { time: 344, text: "", image: "/images/2ib/48.png" },
    { time: 349, text: "", image: "/images/2ib/49.png" },
    { time: 354, text: "", image: "/images/2ib/50.png" },
    { time: 357, text: "", image: "/images/2ib/51.png" },
    { time: 361, text: "", image: "/images/2ib/52.png" },
    { time: 365, text: "", image: "/images/2ib/53.png" },
    { time: 371, text: "", image: "/images/2ib/54.png" },
    { time: 374, text: "", image: "/images/2ib/55.png" },
    { time: 378, text: "", image: "/images/2ib/56.png" },
    { time: 382, text: "", image: "/images/2ib/57.png" },
    { time: 387, text: "", image: "/images/2ib/58.png" },
    { time: 391, text: "", image: "/images/2ib/59.png" },
    { time: 395, text: "", image: "/images/2ib/60.png" },
    { time: 399, text: "", image: "/images/2ib/61.png" },
    { time: 403, text: "", image: "/images/2ib/62.png" },
    { time: 407, text: "", image: "/images/2ib/63.png" },
    { time: 411, text: "", image: "/images/2ib/64.png" },
    { time: 416, text: "", image: "/images/2ib/65.png" },
    { time: 420, text: "", image: "/images/2ib/66.png" },
    { time: 424, text: "", image: "/images/2ib/67.png" },
    { time: 428, text: "", image: "/images/2ib/68.png" },
    { time: 432, text: "", image: "/images/2ib/69.png" },
    { time: 436, text: "", image: "/images/2ib/70.png" },
    { time: 440, text: "", image: "/images/2ib/71.png" },
    { time: 444, text: "", image: "/images/2ib/72.png" },
    { time: 448, text: "", image: "/images/2ib/73.png" },
    { time: 452, text: "", image: "/images/2ib/74.png" },
    { time: 457, text: "", image: "/images/2ib/75.png" },
    { time: 461, text: "", image: "/images/2ib/76.png" },
    { time: 465, text: "", image: "/images/2ib/77.png" },
    { time: 469, text: "", image: "/images/2ib/78.png" },
    { time: 473, text: "", image: "/images/2ib/79.png" },
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
          src="/images/2ib.png"
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
        src="/2ib.mp3"
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
        <p>춘향가 중 이별가</p>
      </div>
      <div style={{ marginTop: '10px', fontSize: '18px' }}>
        <p>늦인중머리</p>
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