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
    { top: '79%', left: '53%', content: { text: '', image: '/images/pin1.png' } },
    { top: '57%', left: '32%', content: { text: '', image: '/images/pin2.png' } },
    { top: '47%', left: '36%', content: { text: '', image: '/images/pin3.png' } },
    { top: '38%', left: '62%', content: { text: '', image: '/images/pin4.png' } },
    { top: '38%', left: '68%', content: { text: '', image: '/images/pin5.png' } },

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
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              height: '50px',
              backgroundColor: 'white',
              zIndex: '3000',
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
              marginTop: '100px',
              position: 'relative',
              zIndex: '1000'
            }}>
              <Link 
                href="/map"
                style={{
                  cursor: 'pointer',
                  display: 'block'
                }}
              >
                <Image
                  src="/images/archive.png"
                  alt="아카이브"
                  width={130}
                  height={41}
                  priority
                />
              </Link>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '20px',
              position: 'relative',
              marginTop: '-90px'
            }}>
              <Image
                src="/images/map2.png"
                alt="전국 판소리 지도"
                width={400}  // 이미지의 너비
                height={598}  // 이미지의 높이
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
            padding: '5px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '15px',
            flexWrap: 'wrap',
          }}>
            <Link href="/" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <Home size={20} color="black" />
                <div style={{ fontSize: '10px' }}>Home</div>
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
          zIndex: '2000',
          animation: 'dissolve 0.5s ease-in-out'
        }}>
          <Image
            src={popupContent.image}
            alt="핀 이미지"
            layout="fill"
            objectFit="contain"
            onClick={closePopup}
          />
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
