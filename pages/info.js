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
    </>
  );
}
