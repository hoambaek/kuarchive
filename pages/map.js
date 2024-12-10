import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Music, MapPin, Info } from 'lucide-react';

export default function IphonePro() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePinClick = (content) => {
    window.location.href = '/map2';
  };

  const pinPositions = [
    { top: '48%', left: '60%', content: { text: '', image: '/images/pin1.png' } },

  ];

  return (
    <>
      <Head>
        <link rel="stylesheet" as="style" crossOrigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
      </Head>
      <div style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          height: '900px',
          position: 'relative',
          width: '402px',
        }}>
          <div style={{
            padding: '20px',
            fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
          }}>
            <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '-20px',
  position: 'fixed',
  top: '0',
  left: '0',  // 변경
  width: '100%',
  height: '50px',
  backgroundColor: 'white',
  zIndex: '1000',
  paddingTop: '20px',  // 추가
  paddingBottom: '10px',  // 추가
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',  // 추가: 구분선 효과
}}>
  <Image
    src="/images/logo.png"
    alt="로고"
    width={200}
    height={29}
  />
</div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px',
              marginTop: '40px'
            }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#333',
              }}>
                아카이브
              </h1>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
              position: 'relative',
              marginTop: '-50px'
            }}>
              <Image
                src="/images/map_second.png"
                alt="전국 판소리 지도"
                width={360}  // 이미지의 너비
                height={511}  // 이미지의 높이
              />
              {pinPositions.map((position, index) => (
                <div
                  key={index}
                  className={`pin pin${index + 1}`}
                  onClick={() => handlePinClick(position.content)}
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'blue',
                    borderRadius: '50%',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    cursor: 'pointer',
                    top: position.top,
                    left: position.left,
                  }}
                >
                  {index + 1}
                </div>
              ))}
            </div>
          </div>
          <div style={{
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '360px',  // 고정된 너비
  padding: '10px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '15px 15px 0 0',
  boxSizing: 'border-box',
  height: '60px',  // 고정된 높이
  zIndex: 1000
}}>
            <Link href="/" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <Home size={24} color="black" />
                <div style={{ fontSize: '12px' }}>Home</div>
              </a>
            </Link>
            <Link href="/songlist" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <Music size={24} color="black" />
                <div style={{ fontSize: '12px' }}>Song</div>
              </a>
            </Link>
            <Link href="/map" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <MapPin size={24} color="black" />
                <div style={{ fontSize: '12px' }}>Map</div>
              </a>
            </Link>
            <Link href="/info" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <Info size={24} color="black" />
                <div style={{ fontSize: '12px' }}>Info-News</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes dissolve {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
