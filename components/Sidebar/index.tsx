import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AiTwotoneBell } from 'react-icons/ai';
import { GoX } from 'react-icons/go';
import Logo from '../common/Logo';
import { CgProfile } from 'react-icons/cg';

const SidebarContainer = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1100;
`;

const SidebarContents = styled.div`
  max-width: 320px;
  background: #fff;
  height: 100%;
  border-right: 1px solid #000;
  overflow: auto;
  position: relative;
  padding-bottom: 62px;
`;

const SidebarHeader = styled.div`
  background: #1fc7c1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 18px;
  padding: 0.8rem;
`;
const SidebarBlank = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(22, 22, 22, 0.6);
  transition: opacity 0.2s ease;
  z-index: 1000;
`;
const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarBlank>
        <SidebarContents>
          <SidebarHeader>
            <GoX />
            <Logo />
            <AiTwotoneBell />
          </SidebarHeader>
          <SidebarProfile />
          <SidebarCategory />
          {/* <div style={{ width: '100%', textAlign: 'center', position: 'absolute', bottom: '0px', background: '#eee', padding:'20px', top:'auto', inset:'0' }}>회원가입</div> */}
        </SidebarContents>
      </SidebarBlank>
    </SidebarContainer>
  );
};

//<div style={{width:'52px', height:'52px',borderRadius:'50%', background:'#000'}}>
const SidebarProfile = () => {
  return (
    <div style={{ padding: '1rem', borderBottom: '1px solid rgb(238, 238, 238)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '59px', height: '59px' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 59 59">
              <defs>
                <clipPath id="prefix__clip-path">
                  <circle
                    id="prefix__타원_140"
                    cx="29.5"
                    cy="29.5"
                    r="29.5"
                    data-name="타원 140"
                    style={{ fill: 'none' }}
                  />
                </clipPath>
              </defs>
              <g id="prefix__그룹_5547" data-name="그룹 5547" transform="translate(-5252 -1873) translate(5252 1873)">
                <path
                  id="prefix__패스_6270"
                  d="M29.5 0A29.5 29.5 0 1 1 0 29.5 29.5 29.5 0 0 1 29.5 0z"
                  data-name="패스 6270"
                  style={{ fill: '#989898', overflow: 'hidden' }}
                />
                <g id="prefix__그룹_5546" data-name="그룹 5546">
                  <g id="prefix__그룹_5545" data-name="그룹 5545">
                    <path
                      id="prefix__패스_6269"
                      d="M5351.7 1972.261a11.264 11.264 0 0 0-8.08-9.138v-2.068a2.833 2.833 0 1 0-1.368 0v1.773a11.269 11.269 0 0 0-1.661-.124h-9.377a11.269 11.269 0 0 0-1.661.124v-1.773a2.833 2.833 0 1 0-1.367 0v2.068a11.264 11.264 0 0 0-8.033 8.865 4.99 4.99 0 0 0-3.592 4.783v1.563a4.988 4.988 0 0 0 4.579 4.964 11.27 11.27 0 0 0 7.863 6.049c-3.537 2.331-7.883 6.425-7.883 11.087 0 7.253 7.679 13.133 14.685 13.133 6.725 0 14.227-5.419 14.672-12.564 0 .01.012-.278.012-.569 0-4.642-4.326-8.722-7.837-11.057a11.268 11.268 0 0 0 7.917-5.891 4.989 4.989 0 0 0 4.479-4.956v-1.563a4.99 4.99 0 0 0-3.348-4.706z"
                      data-name="패스 6269"
                      transform="translate(-5306.307 -1942.868)"
                      style={{ fill: '#f5f5f5' }}
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div style={{ flex: 1, paddingLeft: '1rem' }}>
          <div style={{ fontSize: '1.3rem', fontWeight: '700', display: 'flex', alignItems: 'center' }}>재찬이</div>
          <div style={{ fontSize: '0.8rem', color: '#666666' }}>프로필 편집 &gt;</div>
        </div>
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </div>
  );
};

const Icon = () => {
  return (
    <a style={{ color: '#666666' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>
        <svg
          xmlns="h ttp://www.w3.org/2000/svg"
          enable-background="new 0 0 48 48"
          height="25px"
          version="1.1"
          viewBox="0 0 48 48"
          width="25px"
          color="#666666"
        >
          <g id="Expanded">
            <g>
              <g>
                <path d="M45,48H3c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1s1,0.448,1,1v3h40v-3c0-0.552,0.448-1,1-1s1,0.448,1,1v4     C46,47.552,45.552,48,45,48z" />
              </g>
              <g>
                <path d="M47,44H1c-0.552,0-1-0.448-1-1v-6c0-2.757,2.243-5,5-5h9.692c6.583-4.582,3.562-11.23,1.127-16.585     C14.803,13.178,14,11.411,14,10c0-6.521,5.029-9.933,9.997-9.933C28.968,0.067,34,3.479,34,10c0,1.404-0.799,3.168-1.812,5.402     c-2.431,5.365-5.45,12.025,1.119,16.598H43c2.757,0,5,2.243,5,5v6C48,43.552,47.552,44,47,44z M2,42h44v-5c0-1.654-1.346-3-3-3     H33c-0.197,0-0.389-0.058-0.553-0.167c-8.306-5.518-4.559-13.786-2.08-19.257C31.207,12.723,32,10.973,32,10     c0-5.451-4.148-7.933-8.003-7.933C20.146,2.067,16,4.549,16,10c0,0.978,0.797,2.731,1.641,4.587     c2.483,5.462,6.235,13.716-2.087,19.246C15.389,33.942,15.197,34,15,34H5c-1.654,0-3,1.346-3,3V42z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div style={{ fontSize: '12px', marginTop: '0.8rem' }}>출석스탬프</div>
    </a>
  );
};

const CategoryI = [
  { id: 1, name: '카테고리' },
  { id: 2, name: '공지사항' },
  { id: 3, name: '이하 소식' },
  { id: 4, name: '이하 토큰 소식' },
  { id: 5, name: '이벤트' },
  { id: 6, name: '이하 소개' },
  { id: 7, name: '답변자 인증' },
];
const CategoryItem = ({ name }: { key: number; name: string }) => {
  return (
    <a
      style={{
        display: 'block',
        borderBottom: '1px solid rgb(238, 238, 238)',
        padding: '1rem 1.25rem',
        color: 'rgba(51,51,51,var(--text-opacity))',
        fontWeight: '500',
        fontSize: '16px',
      }}
    >
      카테고리
    </a>
  );
};

const SidebarCategory = () => {
  return (
    <>
      {CategoryI.map((item) => (
        <CategoryItem key={item.id} name={item.name} />
      ))}
    </>
  );
};

export default Sidebar;
