import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function IphonePro() {
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
                src="/images/logo.png"  // 로고 이미지 경로
                alt="로고"
                width={100}  // 로고의 실제 너비에 맞게 조정하세요
                height={50}  // 로고의 실제 높이에 맞게 조정하세요
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
                연습곡을 골라보세요!
              </h1>
            </div>
          </div>
          <Link href="/1sara" legacyBehavior>
            <a style={{ display: 'block', position: 'absolute', top: '149px', left: '23px', width: '355px', height: '140px' }}>
              <div style={{
                backgroundImage: 'url(/images/group-144.png)',
                backgroundSize: '100% 100%',
                height: '140px',
                width: '355px',
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
                height: '140px',
                width: '355px',
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
                    height: '140px',
                    left: '10px',
                    position: 'absolute',
                    top: 0,
                    width: '355px',
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
          <div style={{
            height: '429px',
            left: '13px',
            position: 'absolute',
            top: '570px',
            width: '375px',
          }}>
            <Link href="/4galka" legacyBehavior>
              <a style={{ display: 'block', position: 'relative', width: '375px', height: '140px' }}>
                <img
                  className="group-3"
                  alt="Group"
                  src="/images/group-148.png"
                  style={{
                    height: '160px',
                    left: 0,
                    position: 'absolute',
                    top: '0px',  // 간격 조정
                    width: '375px',
                  }}
                />
                <img
                  className="element-galka"
                  alt="Element"
                  src="/images/4galka-1.png"
                  style={{
                    height: '77px',
                    left: '41px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '32px',  // 간격 조정
                    width: '77px',
                  }}
                />
              </a>
            </Link>
            <Link href="/5ssuk" legacyBehavior>
              <a style={{ display: 'block', position: 'relative', width: '375px', height: '140px', top: '0px' }}>
                <img
                  className="group-4"
                  alt="Group"
                  src="/images/group-149.png"
                  style={{
                    height: '160px',
                    left: 0,
                    position: 'absolute',
                    top: '0px',  // 간격 조정
                    width: '375px',
                  }}
                />
                <img
                  className="element-ssuk"
                  alt="Element"
                  src="/images/5ssuk-1.png"
                  style={{
                    height: '77px',
                    left: '41px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: '32px',  // 간격 조정
                    width: '77px',
                  }}
                />
              </a>
            </Link>
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
