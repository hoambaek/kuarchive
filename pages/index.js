import React, { useState } from 'react';
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
      <div style={{
        background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{
          background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
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
              marginBottom: '-20px'
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
              marginBottom: '-20px'
            }}>
              <h1 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#2c3e50',
                textAlign: 'center',
                lineHeight: '1.4',
                marginBottom: '10px',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
              }}>
                {/* 여기 텍스트 모두 제거됨 */}
              </h1>
            </div>
          </div>
          <div className="trending-podcasts" style={{
            background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginTop: '0px',
            paddingLeft: '0',
          }}>
            <div style={{
              background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
              height: '700px',
              position: 'relative',
              width: '428px',
              marginLeft: '0',
            }}>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                position: 'absolute',
                top: '20px',
                left: '30px',
                whiteSpace: 'nowrap',
              }}>인기차트</div>

              <div style={{ position: 'absolute', top: '60px', left: '32px' }}>
                <Link href="/1sara" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', cursor: 'pointer' }}>
                    <Image
                      src="/images/a1.jpg"
                      alt="Artist 1"
                      width={70}
                      height={70}
                      style={{ borderRadius: '10px' }}
                    />
                    <div style={{ fontSize: '16px', fontWeight: '700', marginLeft: '20px' }}>1</div>
                    <div style={{ marginLeft: '20px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700' }}>
                        춘향가 중 사랑가
                      </div>
                      <div style={{ fontSize: '14px', opacity: '0.7' }}>
                        동초제 박미정
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/2ib" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', cursor: 'pointer' }}>
                    <Image
                      src="/images/a2.jpg"
                      alt="Artist 2"
                      width={70}
                      height={70}
                      style={{ borderRadius: '10px' }}
                    />
                    <div style={{ fontSize: '16px', fontWeight: '700', marginLeft: '20px' }}>2</div>
                    <div style={{ marginLeft: '20px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700' }}>
                        춘향가 중 이별가
                      </div>
                      <div style={{ fontSize: '14px', opacity: '0.7' }}>
                        동초제 박미정
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="/3gunro" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', cursor: 'pointer' }}>
                    <Image
                      src="/images/a3.jpg"
                      alt="Artist 3"
                      width={70}
                      height={70}
                      style={{ borderRadius: '10px' }}
                    />
                    <div style={{ fontSize: '16px', fontWeight: '700', marginLeft: '20px' }}>3</div>
                    <div style={{ marginLeft: '20px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700' }}>
                        춘향가 중 군로사령이 나가는 대목
                      </div>
                      <div style={{ fontSize: '14px', opacity: '0.7' }}>
                        동초제 박미정
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '22px',
                fontWeight: '700',
                position: 'absolute',
                top: '390px',
                left: '30px',
                whiteSpace: 'nowrap',
              }}>추천 이벤트</div>

              <a href="https://naver.com" target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '420px', left: '32px' }}>
                <Image
                  src="/images/mask-group-5.png"
                  alt="Mask Group 5"
                  width={360}
                  height={200}
                />
              </a>

              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '16px',
                fontWeight: '700',
                position: 'absolute',
                top: '630px',
                left: '32px',
                whiteSpace: 'nowrap',
              }}>국악한마당축제 (10.11~10.15일)</div>
              <div style={{
                color: '#1f1f1f',
                fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                fontSize: '14px',
                fontWeight: '400',
                position: 'absolute',
                top: '654px',
                left: '32px',
                opacity: '0.7',
                whiteSpace: 'nowrap',
              }}>전라남도 강진</div>
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