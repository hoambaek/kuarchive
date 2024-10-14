import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function IphonePro() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
                width={100}
                height={50}
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
                이벤트 소개
              </h1>
            </div>
            
            {/* 20px 공백 추가 */}
            <div style={{ height: '20px' }}></div>
            
            {/* mask-group-5.png 이미지 삽입 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <Image
                src="/images/mask-group-5.png"
                alt="이벤트 이미지"
                width={330}
                height={165}
                layout="responsive"
              />
              <div style={{
                width: '100%',
                maxWidth: '330px',
                marginTop: '10px',
                textAlign: 'left'
              }}>
                <div style={{
                  color: '#1f1f1f',
                  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                  fontSize: '16px',
                  fontWeight: '700',
                  marginBottom: '4px',
                }}>국악한마당축제 (10.11~10.15일)</div>
                <div style={{
                  color: '#1f1f1f',
                  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                  fontSize: '14px',
                  fontWeight: '400',
                  opacity: '0.7',
                }}>전라남도 강진</div>
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',  // 메뉴 항목 사이의 간격을 균등하게
            alignItems: 'center',
            position: 'fixed',
            bottom: '0px',
            width: '100%',
            maxWidth: '360px',  // 최대 너비 설정
            margin: '0 auto',  // 가운데 정렬
            padding: '10px 20px',  // 좌우 여백 추가
            backgroundColor: 'rgba(255, 255, 255, 1)',
            flexWrap: 'wrap',  // 모바일 화면에서 줄바꿈 허용
          }}>
            <Link href="/" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <svg width="24" height="24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                <div style={{ fontSize: '12px' }}>Home</div>
              </a>
            </Link>
            <Link href="/songlist" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <svg width="24" height="24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
                </svg>
                <div style={{ fontSize: '12px' }}>Song</div>
              </a>
            </Link>
            <Link href="/map" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <svg width="24" height="24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10.5c0-.28-.11-.53-.29-.71l-5.5-5.5a1.003 1.003 0 0 0-1.42 0l-5.5 5.5a1.003 1.003 0 0 0 0 1.42l5.5 5.5c.18.18.43.29.71.29s.53-.11.71-.29l5.5-5.5c.18-.18.29-.43.29-.71zM12 4.5l5.5 5.5-5.5 5.5-5.5-5.5L12 4.5z"/>
                </svg>
                <div style={{ fontSize: '12px' }}>Map</div>
              </a>
            </Link>
            <Link href="/info" legacyBehavior>
              <a style={{ textAlign: 'center', color: 'black', textDecoration: 'none', flex: '1' }}>
                <svg width="24" height="24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div style={{ fontSize: '12px' }}>Info</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
