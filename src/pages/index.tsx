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
                    <ContentUL>
                        <ContentList>
                            스타트업에서 웹서비스의 개발/유지보수를 담당했습니다. 웹사이트를 리팩토링하여 반복되는
                            구문은 컴포넌트화/모듈화 시켜 유지보수 용이하게 작업한 적 있습니다.
                        </ContentList>
                        <ContentList>
                            서비스를 안정적으로 운영하기 위해 노력합니다. 에러트래킹 툴을 사용하여 원인을 쉽게 추적하고,
                            장애 대응을 빠르게 할 수 있습니다
                        </ContentList>
                        <ContentList>
                            유저와 인터렉션하여 유저의 경험을 주는 웹을 개발하는 것을 즐겨합니다. 유저가 주체가 되어
                            window10의 기본적인 기능을 사용할 수 있는 웹사이트를 만든적이 있습니다.
                        </ContentList>
                    </ContentUL>
                </Introduce>
                <Divider />
                <SubTitle>WORK EXPERINCE</SubTitle>
                <SectionTop>
                    <CompanyName>이음</CompanyName>
                    <Period>2021.08 - 2022.09</Period>
                </SectionTop>
                <Project>
                    <ProejctName>Admin</ProejctName>
                    <SectionContent>
                        <ProjectSubtitle>Description.</ProjectSubtitle>
                        <Description>
                            입주민이 등록한 아파트의 하자를 건설사의 관리자가 볼 수 있게 만들어진 서비스. <br />
                            등록된 하자들을 통계내고 수치화하여 표, 그래프등으로 알아보기 쉽게 제작.
                        </Description>
                        <ProjectSubtitle>Tech Stack</ProjectSubtitle>
                        <Description>Vue, Vuetify, Vuex, Scss, Typescript</Description>
                        <ProjectSubtitle>Contribution</ProjectSubtitle>
                        <ContentUL>
                            <ContentList>
                                웹사이트 전체 리팩토링. <Emphasis>css프레임워크 vuetify 적용</Emphasis> 및{" "}
                                <Emphasis>타입스크립트 도입</Emphasis>
                            </ContentList>
                            <ContentList>
                                알고리즘, 네트워킹요청 개선.{" "}
                                <Emphasis>메인페이지 진입시간 3초 → 1.5초 이하로 감소</Emphasis>
                            </ContentList>
                            <ContentList>
                                최적화작업으로 컴포넌트/모듈화, 코드스플리팅 진행.{" "}
                                <Emphasis> 번들사이즈 약 30%감소</Emphasis>
                            </ContentList>
                            <ContentList>
                                에러트래킹 툴 Sentry 개선. 중요한 에러는 수집하여 예상되는 에러 예방. 비슷한 에러는
                                Issue Grouping하고 필요한 알람만 설정.
                            </ContentList>
                        </ContentUL>
                    </SectionContent>
                </Project>
                <Project>
                    <ProejctName>채들</ProejctName>
                    <SectionContent>
                        <ProjectSubtitle>Description</ProjectSubtitle>
                        <Description>
                            아파트의 사전점검을 예약할 수 있고, 행사기간동안 하자를 등록할 수 있는 입주민전용 웹앱.
                        </Description>
                        <ProjectSubtitle>Tech Stack</ProjectSubtitle>
                        <Description>Vue, Vuetify, Vuex, Scss, AWS S3</Description>
                        <ProjectSubtitle>Contirubution</ProjectSubtitle>
                        <ContentUL>
                            <ContentList>
                                웹사이트의 전반적인 부분을 첫 구축단계에서부터 개발(90% 이상 기여)
                            </ContentList>
                            <ContentList>
                                <Emphasis>상태관리, api요청 모듈화</Emphasis>, 컴포넌트 구성 등의 아키텍처 설계
                            </ContentList>
                            <ContentList>
                                하자등록할 때 사진, 동영상 업로드 기능 구현. 파일은 Blob객체로 변환 후 스토리지에 저장.
                            </ContentList>
                        </ContentUL>
                    </SectionContent>
                </Project>

                <Divider />
                <SectionTop>
                    <SubTitle>사이드 프로젝트</SubTitle>
                    <CompanyName>LOLBook</CompanyName>
                    <Period>2022.12 - 현재</Period>
                </SectionTop>
                <SectionContent style={{ marginBottom: "40px" }}>
                    <ContentUL>
                        <ContentList>
                            신입 준비 때 만들었던 LOLCord(게임 LOL의 정보를 볼수있는 웹사이트)를 개선하여 만든 웹.
                            이전에는 React만을 사용했으나, Next.js, Typescript, Tanstack Query, jotai 등 도입.
                        </ContentList>
                        <ContentList>
                            <Emphasis>Next.js의 Pre-render</Emphasis>를 통해 페이지 진입속도 상승(첫페이지 1.5s →
                            0.5s미만, 챔피언페이지 7s이상 → 0.5s 미만)
                        </ContentList>
                        <ContentList>
                            <Emphasis>메모이제이션</Emphasis>을 활용해 불필요한 연산 감소시킴. 알고리즘 개선과{" "}
                            <Emphasis>이미지 최적화</Emphasis>를 통해 성능을 향상시킴.
                        </ContentList>
                        <ContentList>
                            API 요청시 발생하는 CORS를 해결하기 위해 express.js 서버를 중간에 두고 우회하는 방식을 적용.
                            서버 배포는 AWS 스택을 활용함 (EC2, Route53)
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
                            사용자 계정은 Cookie에 저장하고 각종 설정 및 이미지, 파일의 uuid등은 localStorage에
                            저장함으로써 브라우저가 종료되어도 유저가 설정했던 세팅을 자동으로 불러옴
                        </ContentList>
                        <ContentList>테마설정으로 다크모드, 글꼴, 해상도 설정 구현</ContentList>
                        <ContentList>textArea로 메모장 기능 구현, webAPI의 canvasAPI로 그림판구현</ContentList>
                        <ContentList>메모장과 그림판을 저장하면 AWS S3에 담아두어, 추후에도 열람/수정 가능</ContentList>
                    </ContentUL>
                </SectionContent>
                <Divider />
                <OtherSection>
                    <SubTitle>스킬</SubTitle>
                    <SectionContent noPadding={true}>
                        <ContentUL>
                            <ContentList>HTML, CSS, Javascript(ES6+), Typescript</ContentList>
                            <ContentList>React, Vue, Next.js, React-Query, jotai, styled-component, jest</ContentList>
                            <ContentList>AWS(S3, EC2, Route53), Express.js, Nginx</ContentList>
                        </ContentUL>
                    </SectionContent>
                </OtherSection>
                <OtherSection>
                    <SubTitle>링크</SubTitle>
                    <SectionContent noPadding={true}>
                        <ContentUL>
                            <ContentList>
                                깃허브: <Link href="https://github.com/christar99">https://github.com/christar99</Link>
                            </ContentList>
                            <ContentList>
                                포트폴리오 LOLBook: <Link href="https://LOLBook.me">https://LOLBook.me</Link>
                            </ContentList>
                            <ContentList>
                                포트폴리오 MyLittleSpace:{" "}
                                <Link href="https://mylittlespace.site">https://mylittlespace.site</Link>
                            </ContentList>
                        </ContentUL>
                    </SectionContent>
                </OtherSection>
                <Footer>
                    <Thanks>감사합니다.</Thanks>
                    <FooterInfo>
                        FrontEnd Developer <Hash>@Dong-A</Hash>
                    </FooterInfo>
                </Footer>
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
    margin-bottom: 20px;
`;

const SubTitle = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #209716;
`;

const CompanyName = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    flex-grow: 3;
`;

const Period = styled.p`
    font-size: 1.35rem;
    font-weight: 700;
`;

const Project = styled.section`
    display: flex;
    flex: 1 150px;
    width: 100%;
`;

const ProejctName = styled.h2`
    width: 150px;
    font-size: 1.35rem;
    font-weight: 700;
`;

const SectionContent = styled.section<{ noPadding?: boolean }>`
    width: calc(100% - 150px);
`;

const ContentUL = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: outside;
    margin-bottom: 40px;
`;

const ProjectSubtitle = styled.h2`
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 5px;
`;

const Description = styled.p`
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 25px;
`;

const ContentList = styled.li`
    font-size: 1rem;
    margin-left: 20px;
    line-height: 25px;
`;

const OtherSection = styled.section`
    display: flex;
`;

const Footer = styled.footer`
    margin-top: 100px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Thanks = styled.p`
    font-size: 1.2rem;
    font-style: italic;
`;

const FooterInfo = styled.p`
    font-size: 1rem;
`;

const Hash = styled.span`
    color: #6485cc;
`;
