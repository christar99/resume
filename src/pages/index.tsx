import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function index() {
    return (
        <OverflowWrap>
            <PageWrap>
                <CatchPhrase>모든것을 코드로 구현해보고픈 개발자, 이동아입니다.</CatchPhrase>
                <Section>
                    <Subject>😀 About Me</Subject>
                    <Content>
                        <SubSection>
                            <Subtitle>Introduction</Subtitle>
                            <ListGroup>
                                <ListContent>안녕하세요. 2년차 프론트엔드 개발자 이동아입니다</ListContent>
                                <ListContent>
                                    사람들이 편히 볼 수 있는 인터페이스와 애니메이션을 구현하는 것을 좋아합니다.
                                </ListContent>
                                <ListContent>
                                    항상 정리정돈과 효율성에 대한 생각을 하고 습관처럼 행동합니다.
                                </ListContent>
                                <ListContent>
                                    끊임없는 성장을 추구하며, 이를 실현하기 위해 꾸준히 포트폴리오를 유지보수하고,
                                    개발상식을 터득하고 있습니다.
                                </ListContent>
                            </ListGroup>
                        </SubSection>
                        <SubSection>
                            <Subtitle>Contact</Subtitle>
                            <ListGroup>
                                <ListContent>Phone: 010-2509-8547</ListContent>
                                <ListContent>Email: christar99@naver.com</ListContent>
                                <ListContent>
                                    Github:&nbsp;
                                    <Link href="https://github.com/christar99" target="_blank">
                                        https://github.com/christar99
                                    </Link>
                                </ListContent>
                                <ListContent>
                                    Blog:&nbsp;
                                    <Link href="https://velog.io/@liebestraum" target="_blank">
                                        https://velog.io/@liebestraum
                                    </Link>
                                </ListContent>
                            </ListGroup>
                        </SubSection>
                    </Content>
                </Section>
                <Divider />
                <Section>
                    <Subject>🔨 Skills</Subject>
                    <Content>
                        <SubSection>
                            <Subtitle>Overall</Subtitle>
                            <ListGroup>
                                <ListContent>
                                    항상 최신기술이 옳다고 생각하지 않습니다. 상황에 따라 적절한 선택을 하려 노력하고
                                    있습니다.
                                </ListContent>
                                <ListContent>
                                    업무에 필요하다면 능숙하지 않는 스킬이라도, 적극적으로 탐색해서 좋은 결과를 이끌어
                                    낼 수 있도록 노력하고 있습니다.
                                </ListContent>
                                <ListContent>
                                    개발자의 중요한 스킬 중 하나는 커뮤니케이션입니다. 협업 시, 원할한 커뮤니케이션
                                    없이는 좋은 결과를 만들기 어렵다고 생각합니다.
                                </ListContent>
                            </ListGroup>
                        </SubSection>
                        <SubSection>
                            <Subtitle>FrontEnd</Subtitle>
                            <ListGroup>
                                <ListContent>HTML5, CSS3, Javascript(es6+), Typescript</ListContent>
                                <ListContent>React, Next.js, Redux-toolkit, Jotai, React-Query, Vuejs</ListContent>
                                <ListContent>Scss, Styled-component, Vuetify</ListContent>
                                <ListContent>Jest, react-testing-library, Webpack</ListContent>
                            </ListGroup>
                        </SubSection>
                        <SubSection>
                            <Subtitle>BackEnd & DevOps</Subtitle>
                            <ListGroup>
                                <ListContent>Node.js(Express.js), MySQL</ListContent>
                                <ListContent>AWS(EC2, S3, Route53), NginX</ListContent>
                            </ListGroup>
                        </SubSection>
                        <SubSection>
                            <Subtitle>Collaboration & Tools</Subtitle>
                            <ListGroup>
                                <ListContent>Git, Github, VSCode</ListContent>
                                <ListContent>Slack, Github Project, Zeplin/Figma</ListContent>
                            </ListGroup>
                        </SubSection>
                    </Content>
                </Section>
                <Divider />
                <Section>
                    <Subject>💻 Work Experience</Subject>
                    <CompanyName>이음 (2021.08 ~ 2022.09, 1년 1개월)</CompanyName>
                    <Content>
                        <SubSection>
                            <Subtitle>
                                Admin <br />
                                (2021.09 ~ 2022.09)
                            </Subtitle>
                            <ListGroup>
                                <Explain>
                                    아파트 사전점검의 예약/하자를 등록할 수 있고, 등록된 현황을 리스트, 그래프, 표,
                                    입면도 등으로 쉽게 알아볼 수 있게 제작.
                                </Explain>
                                <br />
                                <ExplainGroup>유지보수와 리팩토링</ExplainGroup>
                                <ListContent>각종 Sentry 오류 수정 </ListContent>
                                <ListContent> css 프레임워크 적용(사이트 리뉴얼) </ListContent>
                                <ListContent>코드품질 향상(클린코드 지향) </ListContent>
                                <ListContent> 반복 사용되는 코드 모듈화 또는 컴포넌트화로 효율적으로 관리</ListContent>
                                <ListContent>최적화 작업으로 속도개선, code splitting으로 번들사이즈 감소</ListContent>
                                <br />
                                <br />
                                <ExplainGroup>문제와 해결</ExplainGroup>
                                <ListContent>
                                    속도개선: 기존 대시보드 페이지의 진입속도가 4s이상. 네트워크 요청이 직렬구조로
                                    돼있는 것을 보고 Promise.all로 묶어서 비동기 요청하여 2s 미만으로 감소.
                                </ListContent>
                                <ListContent>
                                    사용자 UI개선을 위해 디자인 요청: 하자리스트에서 수 천개의 항목을 엑셀로 다운 +
                                    비밀번호 저장할 시, 엑셀저장 라이브러리 내부문제로 처리하기까지 10초이상 소요.
                                    사용자의 지루함을 덜어주기 위해, loading-spinner와 progress-bar 디자인 요청 후 반영.
                                </ListContent>
                            </ListGroup>
                        </SubSection>
                        <SubSection>
                            <Subtitle>
                                Chaedle 채들 <br />
                                (2022.02 ~ 2022.05)
                            </Subtitle>
                            <ListGroup>
                                <Explain>
                                    아파트의 사전점검을 예약할 수 있고, 행사기간동안 하자를 등록할 수 있는 입주민 전용
                                    웹앱. 등록현황을 볼 수 있고, 수정/삭제 가능.
                                </Explain>
                                <ListContent>
                                    웹사이트의 전반적인 부분을 첫 구축단계에서부터 개발(프론트부문에서 대부분을 기여)
                                </ListContent>
                                <ListContent>상태관리, api요청 모듈화, 컴포넌트 구성 등의 아키텍처 설계</ListContent>
                                <ListContent>
                                    유저 입장에서 예약 업데이트 현황을 실시간으로 보기 위해 WebSocket 활용. 예약 페이지
                                    진입 시 Socket.io에 접속하여 페이지 이탈 전까지 지속적인 양방향 통신
                                </ListContent>
                                <ListContent>
                                    하자등록 할 때 사진, 동영상 첨부가능. 파일은 Blob객체로 변환 후 서버에 저장
                                </ListContent>
                            </ListGroup>
                        </SubSection>
                    </Content>
                </Section>
                <Divider />
                <Section>
                    <Subject>💻 Personal Project</Subject>
                    <Content>
                        <SubSection>
                            <Subtitle>
                                LOLBook <br /> (2022.12 ~ 2023.02)
                            </Subtitle>
                            <ListGroup>
                                <Explain>
                                    URL:&nbsp;
                                    <Link href="https://LOLBook.me" target="_blank">
                                        https://LOLBook.me
                                    </Link>
                                </Explain>
                                <Explain>
                                    Github:&nbsp;
                                    <Link href="https://github.com/christar99/lolbook" target="_blank">
                                        https://github.com/christar99/lolbook
                                    </Link>
                                </Explain>
                                <Explain>
                                    게임 리그오브레전드의 업데이트현황, 아이템, 챔피언 정보를 볼 수 있는 웹사이트. 이와
                                    같은정보가 웹사이트상에는 찾아볼 수 없었고, 한 눈에 간편하게 보기 위해 만든
                                    웹페이지. 이전에 만든&nbsp;
                                    <Link href="https://lolcord.netlify.app">https://lolcord.netlify.app</Link>의
                                    단점들을 개선하여 새로 만든 앱
                                </Explain>
                                <br />
                                <ExplainGroup>LOLCord와 달라진점</ExplainGroup>
                                <ListContent>
                                    Next.js의 pre-render를 통해 페이지 진입속도 상승(챔피언 페이지 7s이상 → 1s미만)
                                </ListContent>

                                <ListContent>
                                    next/image로 이미지 최적화(avif파일 변환, 이미지 캐싱/리사이징)
                                </ListContent>

                                <ListContent>
                                    반복문 로직 개선, 네트워크 요청 개선, memoization을 활용한 최적화 작업
                                </ListContent>

                                <ListContent>
                                    typescript의 사용으로 런타임이전 발생할 수 있는 에러 사전 차단
                                </ListContent>

                                <ListContent>Redux활용하여, 필요한 부분 전역객체로 저장</ListContent>

                                <ListContent>
                                    RIOT 패치노트 json파일 사용 시, cors 에러발생으로 express.js의 cors미들웨어 활용으로
                                    해결
                                </ListContent>

                                <ListContent>
                                    express.js에 패치노트 api생성 후 aws-ec2, route53으로 서버배포
                                </ListContent>
                            </ListGroup>
                        </SubSection>
                        <SubSection>
                            <Subtitle>
                                MY-LITTLE-SPACE <br /> (2023.03 ~ 2023.05)
                            </Subtitle>
                            <ListGroup>
                                <Explain>
                                    URL:&nbsp;
                                    <Link href="https://mylittlespace.site" target="_blank">
                                        https://mylittlespace.site
                                    </Link>
                                </Explain>
                                <Explain>
                                    Github:&nbsp;
                                    <Link href="https://github.com/christar99/my-little-space" target="_blank">
                                        https://github.com/christar99/my-little-space
                                    </Link>
                                </Explain>
                                <Explain>
                                    웹사이트를 window10 desktop 처럼 만든 페이지. 기본적인 기능은 Window10과 비슷하며,
                                    사용법은 Github Repository에서 ReadME 참조.
                                </Explain>
                                <ListContent>
                                    사용자 계정은 cookie, 각종 설정, 배경화면 이미지, 저장한 파일의 uuid등은
                                    localStorage에 저장 → 브라우저가 종료되어도, 실행 시 유저가 저장했던 설정들을
                                    자동으로 셋팅.
                                </ListContent>
                                <ListContent>테마설정으로 다크모드, 글꼴, 해상도 설정 구현</ListContent>
                                <ListContent>
                                    textArea로 메모장 기능 구현, javascript의 canvasAPI로 그림판2D구현
                                </ListContent>
                                <ListContent>
                                    메모장과 그림판을 저장하면 s3에 담아두어, 추후에도 열람/수정 가능
                                </ListContent>
                            </ListGroup>
                        </SubSection>
                    </Content>
                </Section>

                <Divider />
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
    height: 100vh;
`;

const PageWrap = styled.div`
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 70px 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CatchPhrase = styled.p`
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 70px;
    justify-content: flex-start;
`;

const Section = styled.section``;

const Divider = styled.div`
    width: 950px;
    margin-top: 30px;
    margin-bottom: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

const Subject = styled.div`
    padding-bottom: 10px;
    font-size: 2.8rem;
    font-weight: 700;
    color: #6485cc;
`;

const Content = styled.div`
    width: 100%;
    max-width: 950px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const SubSection = styled.div`
    width: 100%;
    display: flex;
`;

const Subtitle = styled.p`
    min-width: 300px;
    font-size: 2.5rem;
    font-weight: 700;
`;

const ListGroup = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ListContent = styled.li`
    list-style: none;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: -0.5px;

    ::before {
        content: "•";
        color: #6485cc;
        margin-right: 10px;
    }
`;

const CompanyName = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    color: #e06c3e;
`;

const Explain = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 30px;
`;

const ExplainGroup = styled.p`
    font-style: italic;
    font-size: 2rem;
    font-weight: 700;
    color: #464646;

    ::before {
        content: "*";
        margin-right: 10px;
    }
`;

const Footer = styled.footer`
    margin-top: 50px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Thanks = styled.p`
    font-size: 2rem;
    font-style: italic;
`;

const FooterInfo = styled.p`
    font-size: 1.5rem;
`;

const Hash = styled.span`
    color: #6485cc;
`;
