import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Music, MapPin, Info } from 'lucide-react';

export default function IphonePro() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState({ text: '', image: '' });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePinClick = (content) => {
    setPopupContent(content);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const pinPositions = [
    { top: '20%', left: '50%', content: { text: '', image: '/images/pin1.png' } },
    { top: '30%', left: '40%', content: { text: '', image: '/images/pin2.png' } },
    { top: '50%', left: '60%', content: { text: '', image: '/images/pin3.png' } },
    { top: '65%', left: '30%', content: { text: '', image: '/images/pin4.png' } },
    { top: '90%', left: '20%', content: { text: '', image: '/images/pin5.png' } },
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
          height: '931px',
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
              marginBottom: '20px'
            }}>
              <Image
                src="/images/logo.png"
                alt="로고"
                width={130}
                height={130}
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <h1 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
              }}>
                전국 판소리 지도
              </h1>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
              position: 'relative'
            }}>
              <Image
                src="/images/map.png"
                alt="전국 판소리 지도"
                width={350}  // 이미지의 너비
                height={622}  // 이미지의 높이
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
            width: '100%',
            maxWidth: '360px',
            margin: '0 auto',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '15px',
            flexWrap: 'wrap',
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
                <div style={{ fontSize: '12px' }}>Info</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      {popupVisible && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: '1000',
          animation: 'dissolve 0.5s ease-in-out'
        }}>
          <div style={{
            backgroundColor: 'white',
            width: '300px',
            height: '500px',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '20px',
          }}>
            <p>{popupContent.text}</p>
            <Image
              src={popupContent.image}
              alt="핀 이미지"
              width={300}  // 이미지의 너비
              height={400} // 이미지의 높이
            />
            <div style={{ marginTop: '10px' }}> {/* 이미지 하단에 공백 추가 */}
              <button onClick={closePopup} style={{
                padding: '5px 10px',
                cursor: 'pointer',
              }}>Close</button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes dissolve {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
