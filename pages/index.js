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
              marginBottom: '00px'
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
              justifyContent: 'center',  // 가운데 정렬
              alignItems: 'center',      // 수직 가운데 정렬
              marginBottom: '00px'       // 10px 공백 추가
            }}>
              <h1 style={{
                fontSize: '28px',  // 폰트 크기 증가
                fontWeight: 'bold',
                color: '#2c3e50',  // 색상 변경
                textAlign: 'center',
                lineHeight: '1.4',  // 줄간격 조정
                marginBottom: '00px',  // 아래 여백 추가
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',  // 텍스트 그림자 추가
              }}>
                프로처럼 노래하자! 
                <p style={{
                  textAlign: 'center',
                  fontSize: '16px',  // 서브텍스트 폰트 크기
                  color: '#34495e',  // 서브텍스트 색상
                  margin: '0',  // 여백 제거
                }}>
                  실시간으로 악보를 보며 연습해보세요.
                </p>  
              </h1>
            </div>
          </div>
          <div className="trending-podcasts" style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginTop: '00px',  // 원래대로 복원
            paddingLeft: '0',
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              height: '1275px',
              position: 'relative',
              width: '428px',
              marginLeft: '0',  // 왼쪽 공백 줄이기
            }}>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                position: 'absolute',
                top: '234px',
                left: '32px',
                whiteSpace: 'nowrap',
              }}>사랑가</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                position: 'absolute',
                top: '234px',
                left: '222px',
                whiteSpace: 'nowrap',
              }}>쑥대머리</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                position: 'absolute',
                top: '258px',
                left: '32px',
                opacity: '0.7',
                whiteSpace: 'nowrap',
              }}>중중머리</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                position: 'absolute',
                top: '258px',
                left: '222px',
                opacity: '0.7',
                whiteSpace: 'nowrap',
              }}>중머리</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                position: 'absolute',
                top: '464px',
                left: '32px',
                whiteSpace: 'nowrap',
              }}>춘향이 이도령 그리워하..</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                position: 'absolute',
                top: '464px',
                left: '222px',
                whiteSpace: 'nowrap',
              }}>군로 사령이 춘향 잡으러..</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                position: 'absolute',
                top: '488px',
                left: '32px',
                opacity: '0.7',
                whiteSpace: 'nowrap',
              }}>늦인중머리</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                position: 'absolute',
                top: '1043px',
                left: '32px',
                whiteSpace: 'nowrap',
              }}>국악한마당축제 (10.11~10.15일)</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                position: 'absolute',
                top: '1067px',
                left: '32px',
                opacity: '0.7',
                whiteSpace: 'nowrap',
              }}>전라남도 강진</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                position: 'absolute',
                top: '488px',
                left: '222px',
                opacity: '0.7',
                whiteSpace: 'nowrap',
              }}>중중머리</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                position: 'absolute',
                top: '575px',
                left: '32px',
                whiteSpace: 'nowrap',
              }}>오늘의 추천 음악</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                position: 'absolute',
                top: '794px',
                left: '32px',
                whiteSpace: 'nowrap',
              }}>추천 이벤트</div>
              <Link href="/1sara" legacyBehavior>
                <a>
                  <img style={{
                    height: '150px',
                    position: 'absolute',
                    top: '62px',
                    left: '32px',
                    width: '174px',
                  }} alt="Mask group" src="/images/mask-group.png" />
                </a>
              </Link>
              <Link href="/3gunro" legacyBehavior>
                <a>
                  <img style={{
                    height: '150px',
                    position: 'absolute',
                    top: '300px',
                    left: '222px',
                    width: '174px',
                  }} alt="Mask group" src="/images/mask-group-1.png" />
                </a>
              </Link>
              <Link href="/5ssuk" legacyBehavior>
                <a>
                  <img style={{
                    height: '150px',
                    position: 'absolute',
                    top: '62px',
                    left: '222px',
                    width: '174px',
                  }} alt="Mask group" src="/images/mask-group-2.png" />
                </a>
              </Link>
              <Link href="/4galka" legacyBehavior>
                <a>
                  <img style={{
                    height: '150px',
                    position: 'absolute',
                    top: '300px',
                    left: '32px',
                    width: '174px',
                  }} alt="Mask group" src="/images/mask-group-3.png" />
                </a>
              </Link>
              <div style={{
                height: '96px',
                position: 'absolute',
                top: '628px',
                left: '32px',
                width: '370px',
              }}>
                <img style={{
                  height: '96px',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '108px',
                }} alt="Mask group" src="/images/mask-group-4.png" />
                <div style={{
                  borderRadius: '24px',
                  height: '48px',
                  position: 'absolute',
                  top: '24px',
                  left: '316px',
                  width: '48px',
                }}>
                  <div style={{
                    backgroundColor: '#4c0099',
                    borderRadius: '24px',
                    height: '48px',
                    opacity: '0.1',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '48px',
                  }} />
                  <img style={{
                    height: '13px',
                    position: 'absolute',
                    top: '18px',
                    left: '19px',
                    width: '12px',
                  }} alt="Polygon" src="/images/polygon-1.svg" />
                </div>
                <div style={{
                  color: '#1f1f1f',
                  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                  fontSize: '16px',
                  fontWeight: '700',
                  position: 'absolute',
                  top: '14px',
                  left: '124px',
                  whiteSpace: 'nowrap',
                }}>이별가</div>
                <div style={{
                  color: '#1f1f1f',
                  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                  fontSize: '14px',
                  fontWeight: '400',
                  position: 'absolute',
                  top: '41px',
                  left: '124px',
                  opacity: '0.7',
                  whiteSpace: 'nowrap',
                }}>늦인중머리</div>
                <div style={{
                  color: '#1f1f1f',
                  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                  fontSize: '14px',
                  fontWeight: '400',
                  position: 'absolute',
                  top: '65px',
                  left: '124px',
                  opacity: '0.7',
                  whiteSpace: 'nowrap',
                }}>8 min</div>
              </div>
              <div style={{
                backgroundImage: 'url(/images/mask-group-5.png)',
                backgroundSize: '100% 100%',
                height: '181px',
                position: 'absolute',
                top: '847px',
                left: '33px',
                width: '362px',
              }} />
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                position: 'absolute',  // 원래대로 복원
                top: '20px',  // 136px에서 20px로 조정
                left: '30px',
                whiteSpace: 'nowrap',
              }}>오늘의 베스트 음악</div>
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