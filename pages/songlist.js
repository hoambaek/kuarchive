import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Music, MapPin, Info } from 'lucide-react';

export default function IphonePro() {
  return (
    <>
      <Head>
        <link rel="stylesheet" as="style" crossOrigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
      </Head>
      <div style={{
        background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{
          height: '931px',
          position: 'relative', 
          width: '402px',
          height: '120vh',
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
              zIndex: '1000',
            }}>
              <Image
                src="/images/logo.png"  // 로고 이미지 경로
                alt="로고"
                width={200}
                height={29}  // 로고의 실제 높이에 맞게 조정하세요
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '10px'  // 10px 공백 추가
            }}>
              <h1 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
              }}>
                
              </h1>
            </div>
          </div>
          <Link href="/1sara" legacyBehavior>
            <a style={{ display: 'block', position: 'absolute', top: '149px', left: '23px', width: '355px', height: '140px' }}>
              <div style={{
                backgroundImage: 'url(/images/group-144.png)',
                backgroundSize: '100% 100%',
                height: '142px',
                width: '360px',
                position: 'relative',
              }}>
                <img
                  className="img"
                  alt="Sara"
                  src="/images/sara-1.png"
                  style={{
                    height: '85px',
                    left: '27px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '21px',
                    width: '85px',
                  }}
                />
              </div>
            </a>
          </Link>
          <Link href="/2ib" legacyBehavior>
            <a style={{ display: 'block', position: 'absolute', top: '289px', left: '23px', width: '355px', height: '140px' }}>
              <div style={{
                backgroundImage: 'url(/images/group-146.png)',
                backgroundSize: '100% 100%',
                height: '142px',
                width: '360px',
                position: 'relative',
              }}>
                <img
                  className="img"
                  alt="Element"
                  src="/images/2ib-1.png"
                  style={{
                    height: '85px',
                    left: '27px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '21px',
                    width: '85px',
                  }}
                />
              </div>
            </a>
          </Link>
          <Link href="/3gunro" legacyBehavior>
            <a style={{ display: 'block', position: 'absolute', top: '430px', left: '13px', width: '375px', height: '140px' }}>
              <div style={{ position: 'relative', width: '355px', height: '140px' }}>
                <img
                  className="group-2"
                  alt="Group"
                  src="/images/group-160.png"
                  style={{
                    height: '142px',
                    left: '10px',
                    position: 'absolute',
                    top: 0,
                    width: '360px',
                  }}
                />
                <img
                  className="element"
                  alt="Element"
                  src="/images/3gunro-1.png"
                  style={{
                    height: '85px',
                    left: '37px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '20px',
                    width: '85px',
                  }}
                />
              </div>
            </a>
          </Link>
          <Link href="/4galka" legacyBehavior>
            <a style={{ display: 'block', position: 'absolute', top: '570px', left: '23px', width: '355px', height: '140px' }}>
              <div style={{
                backgroundImage: 'url(/images/group-148.png)',
                backgroundSize: '100% 100%',
                height: '142px',
                width: '360px',
                position: 'relative',
              }}>
                <img
                  className="img"
                  alt="Galka"
                  src="/images/4galka-1.png"
                  style={{
                    height: '85px',
                    left: '27px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '21px',
                    width: '85px',
                  }}
                />
              </div>
            </a>
          </Link>
          <Link href="/5ssuk" legacyBehavior>
            <a style={{ display: 'block', position: 'absolute', top: '710px', left: '23px', width: '355px', height: '140px' }}>
              <div style={{
                backgroundImage: 'url(/images/group-149.png)',
                backgroundSize: '100% 100%',
                height: '142px',
                width: '360px',
                position: 'relative',
              }}>
                <img
                  className="img"
                  alt="Ssuk"
                  src="/images/5ssuk-1.png"
                  style={{
                    height: '85px',
                    left: '27px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '21px',
                    width: '85px',
                  }}
                />
              </div>
            </a>
          </Link>
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
    </>
  );
}
