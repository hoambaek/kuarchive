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
          position: 'relative',
          width: '402px',
          height: '130vh',
        }}>
          <div style={{
            paddingTop: '60px',
            paddingBottom: '80px',
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
              marginTop: '20px',
            }}>
              
            </div>
          </div>
          <div className="trending-podcasts" style={{
            background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
            marginTop: '-100px',
            paddingLeft: '0',
          }}>
            <div style={{
              background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
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
                        춘향가 중 사랑가(동초제)
                      </div>
                      <div style={{ fontSize: '14px', opacity: '0.7' }}>
                        박미정
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
                        춘향가 중 왼갖생각(동초제)
                      </div>
                      <div style={{ fontSize: '14px', opacity: '0.7' }}>
                        박미정
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
                        춘향가 중 군로사령(동초제)
                      </div>
                      <div style={{ fontSize: '14px', opacity: '0.7' }}>
                        박미정
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

              <div style={{
                marginTop: '30px',
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                top: '420px',
                left: '32px',
                width: '330px',
                height: '430px',
              }}>
                <Image
                  src="/images/event1.png"
                  alt="Image 1"
                  width={100}
                  height={159}
                  style={{ borderRadius: '10px' }}
                />
                <Image
                  src="/images/event2.png"
                  alt="Image 2"
                  width={100}
                  height={159}
                  style={{ borderRadius: '10px' }}
                />
                <Image
                  src="/images/event3.png"
                  alt="Image 3"
                  width={100}
                  height={159}
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'absolute',
                top: '620px',
                left: '32px',
                width: '330px',
              }}>
                <Image
                  src="/images/event4.png"
                  alt="Image 4"
                  width={100}
                  height={159}
                  style={{ borderRadius: '10px' }}
                />
                <Image
                  src="/images/event5.png"
                  alt="Image 5"
                  width={100}
                  height={159}
                  style={{ borderRadius: '10px' }}
                />
                <Image
                  src="/images/event6.png"
                  alt="Image 6"
                  width={100}
                  height={159}
                  style={{ borderRadius: '10px' }}
                />
              </div>
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
            width: '360px',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '15px 15px 0 0',
            boxSizing: 'border-box',
            height: '60px',
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