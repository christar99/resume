import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function index() {
    return (
        <OverflowWrap>
            <PageWrap>
                <ResumeTitle>이동아</ResumeTitle>
                <ResumeSubTitle>프론트엔드 엔지니어</ResumeSubTitle>
                <Email>이메일: christar99@naver.com</Email>
                <Phone>연락처: 010-2509-8547</Phone>
                <Introduce>
                    스타트업에서 웹서비스의 개발/유지보수를 담당했으며, 필요에 따라 기획단계에서 회의도 참여하여
                    일정이나 가능여부등을 조율하기도 했습니다. 저는 비즈니스가 안정적으로 잘 구현되는 것이 최우선이라
                    생각합니다. 장애대응을 원할하게 하기위하여 에러트래킹 툴의 기능들을 활용하여 원인을 쉽게 추적할 수
                    있게 하고, 웹사이트를 리팩토링하여 반복되는 구문은 컴포넌트화/모듈화 시켜 유지보수 용이하게 작업한
                    적 있습니다.
                </Introduce>
                <Divider />
                <SectionTop>
                    <SubTitle>경력</SubTitle>
                    <CompanyName>이음</CompanyName>
                    <Period>2021.08 - 2022.09</Period>
                </SectionTop>
                <SectionContent>
                    <ProejctName>
                        솔루션 Admin 웹사이트 개발 및 유지보수<ProjectPeriod>2021.08 - 2022.09</ProjectPeriod>
                    </ProejctName>
                    <ContentUL>
                        <ContentList>
                            웹사이트 전체 리팩토링. css프레임워크 vuetify 적용 및 타입스크립트 도입
                        </ContentList>
                        <ContentList>
                            알고리즘, 네트워킹요청 개선.
                            <Emphasis>메인페이지 진입시간 3초 → 1.5초 이하로 감소</Emphasis>
                        </ContentList>
                        <ContentList>
                            최적화작업으로 컴포넌트/모듈화, 코드스플리팅 진행.{" "}
                            <Emphasis> 번들사이즈 약 30%감소</Emphasis>
                        </ContentList>
                        <ContentList>
                            에러트래킹 Sentry 개선, 크로스브라우징 대응. Issue Grouping 으로 필요한 알람만 설정.
                        </ContentList>
                    </ContentUL>
                    <ProejctName>
                        아파트 하자, 예약관리 서비스(채들) <ProjectPeriod>2022.01 - 2022.05</ProjectPeriod>
                    </ProejctName>
                    <ContentUL>
                        <ContentList>웹사이트의 전반적인 부분을 첫 구축단계에서부터 개발(90% 이상 기여)</ContentList>
                        <ContentList>상태관리, api요청 모듈화, 컴포넌트 구성 등의 아키텍처 설계</ContentList>
                        <ContentList>
                            유저입장에서 예약업데이트 현황을 실시간으로 보기위해 WebSocket활용. 예약페이지 진입 시
                            Socket.io에 접속하여 페이지 이탈 전까지 지속적인 양방향 통신
                        </ContentList>
                        <ContentList>
                            하자등록할 때 사진, 동영상 첨부 가능. 파일은 Blob객체로 변환 후 서버에 저장
                        </ContentList>
                    </ContentUL>
                </SectionContent>
                <Divider />
                <SectionTop>
                    <SubTitle>프로젝트</SubTitle>
                    <CompanyName>LOLBook</CompanyName>
                    <Period>2022.12 - 현재</Period>
                </SectionTop>
                <SectionContent>
                    <ContentUL>
                        <ContentList>
                            신입 준비 때 만들었던 LOLCord를 개선하여 만든 웹. Next.js, Typescript, Tanstack Query, jotai
                            등 도입.
                        </ContentList>
                        <ContentList>
                            <Emphasis>Next.js의 Pre-render</Emphasis>를 통해 페이지 진입속도 상승(첫페이지 1.5s →
                            0.5s미만, 챔피언페이지 7s이상 → 0.5s 미만)
                        </ContentList>
                        <ContentList>
                            최적화 작업. <Emphasis>메모이제이션</Emphasis>을 활용해, 불필요연산 감소. 알고리즘 개선.{" "}
                            <Emphasis>Nextjs 이미지 최적화</Emphasis>
                        </ContentList>
                        <ContentList>
                            패치노트 JSON파일 사용 시, <Emphasis>CORS 에러 발생</Emphasis>으로 express.js의 서버 구축 때
                            CORS미들웨어를 활용(aws EC2, route53으로 배포). 프론트단에서 구축한 서버의 API를 호출하여
                            해결.
                        </ContentList>
                    </ContentUL>
                </SectionContent>
                <SectionTop>
                    <SubTitle></SubTitle>
                    <CompanyName>My-Little-Space</CompanyName>
                    <Period>2023.03 - 2023.05</Period>
                </SectionTop>
                <SectionContent>
                    <ContentUL>
                        <ContentList>웹사이트를 window10 desktop 처럼 사용할 수 있게 만든 페이지.</ContentList>
                        <ContentList>
                            사용자 계정은 cookie, 각종 설정, 배경화면 이미지, 저장한 파일의 uuid등은 localStorage에 저장
                            → 브라우저가 종료되어도, 실행 시 유저가 저장했던 설정들을 자동으로 셋팅.
                        </ContentList>
                        <ContentList>테마설정으로 다크모드, 글꼴, 해상도 설정 구현</ContentList>
                        <ContentList>textArea로 메모장 기능 구현, javascript의 canvasAPI로 그림판구현</ContentList>
                        <ContentList>
                            <Emphasis>메모장과 그림판을 저장하면 AWS S3에 담아두어</Emphasis>, 추후에도 열람/수정 가능
                        </ContentList>
                    </ContentUL>
                </SectionContent>
                <Divider />
                <OtherSection>
                    <SubTitle>스킬</SubTitle>
                    <SectionContent noPadding={true}>
                        <SkillCategory>OverAll</SkillCategory>
                        <ContentUL>
                            <ContentList>
                                항상 최신기술이 옳다고 생각하지 않습니다. 상황에 따라 적절한 기술의 선택이 필요하다고
                                생각합니다.
                            </ContentList>
                            <ContentList>
                                업무에 필요하다면 능숙한 분야가 아니라도 적극적으로 학습하여, 최적의 결과를 만들어낼 수
                                있도록 노력합니다.
                            </ContentList>
                            <ContentList>
                                오류가 발생할 때 무조건적인 검색보단, 먼저 자신의 프로젝트 상황과 브라우저나
                                라이브러리의 작동원리를 이해하고 그에 따른 해결책을 찾습니다.
                            </ContentList>
                        </ContentUL>
                        <SkillCategory>WEB</SkillCategory>
                        <ContentUL></ContentUL>
                    </SectionContent>
                </OtherSection>
            </PageWrap>
        </OverflowWrap>
    );
}
const OverflowWrap = styled.div`
    width: 100vw;
    padding: 100px 0;
    display: flex;
    justify-content: center;
`;

const PageWrap = styled.div`
    width: 700px;
    height: 100%;
`;

const Emphasis = styled.p`
    display: inline-block;
    text-decoration: underline;
    font-weight: 700;
`;

const ResumeTitle = styled.h1`
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 10px;
`;

const ResumeSubTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 700;
    color: #ccc;
    margin-bottom: 30px;
`;

const Email = styled.p`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Phone = styled.p`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 30px;
`;

const Introduce = styled.div`
    font-size: 1rem;
    line-height: 24px;
    font-weight: 500;
`;

const Divider = styled.hr`
    margin: 30px 0;
`;

const SectionTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

const SubTitle = styled.h2`
    width: 150px;
    font-size: 1.2rem;
    font-weight: 700;
`;

const CompanyName = styled.h2`
    font-size: 1.3rem;
    font-weight: 700;
    flex-grow: 3;
`;

const Period = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
`;

const SectionContent = styled.section<{ noPadding?: boolean }>`
    padding-left: ${(props) => (props.noPadding ? `10%` : `22%`)};
`;

const ProejctName = styled.p`
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const ProjectPeriod = styled.span`
    display: inline-block;
    color: #aaa;
    margin-left: 10px;
`;

const ContentUL = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: outside;
    margin-bottom: 40px;
`;

const ContentList = styled.li`
    font-size: 1rem;
    margin-left: 20px;
    line-height: 25px;
`;

const OtherSection = styled.section`
    display: flex;
`;

const SkillCategory = styled.p`
    font-size: 1.3rem;
    font-weight: 900;
    margin-bottom: 10px;
`;
