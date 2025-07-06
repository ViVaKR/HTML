# HTML

## Semantic Tags 의미의 의미가 있는

## Semantic Markup

## SEO

    - Accessibility
    - Maintainablility

## [Tags](<https://developer.mozilla.org/ko/docs/Web/HTML/Element>)

- header
- nav
- main
- article : 기사 하나, 글 하나 등등으로 독립적으로 고유한 정보를 제공하므로 해당 영역을 다른 곳에서 인용 가능함.
- section : 독립적인 영역으로 구분하여 사용 할 때 즉, 주제별 독립적인 그룹화 묶음.
- aside
- footer

- em : 강조하는 이탤릭체 (스크린 리더)
- i : 시각적으로 로만 이텔릭체

- b : 시각적으로만 강조
- strong : 정말 중요한 볼드체 (스크린 리더)

- ol : 순서가 중요한 목록
    - li
- ul : 순서가 없는 목록
    - li
- dl : 정의 또는 설명 등, 단어나 문장에 대한 정의, 설명 목록
    - dt : description title, 설명 제목
        - dd : description detail, 설명 내용

- img : 문서의 내용과 연관이 있는 중요한 이미지일 때 사용됨.
- background-image : 문서의 일부분이 아닌, 단순 스타일링 목적으로 사용될 때 사용됨.

- button : 사용자의 특정 행동 또는 액션이 발생할 때 사용하는 것이 올바른 사용법.
- a : 클릭을 했을 때 다른 페이지로 이동할 때 사용함.

- table : 방대한 행, 열 데이터
- css : 스타일링 목적은  flex, grid

## SPA (Signle Page Application)

- Ajax

## CSR (Client Side Redndering)

- 클라이언트가 모든 작업을 처리함.
- Angular, React, Vue
- Low SEO (Search Engine Optimization) : 바디 부분이 대부분 텅텅 비어져 있기 때문. <div id="root"></div> <script src="app.js"></script>
- 처음 시작 페이지 로딩이 느림 : 서버로 부터 첫 메인을 다 받아 온후, 요청시 필요한 부분만 반복적으로 다시 서버로 부터 다운로드, 가져오는 방식

## SSR (Server Side Rendering)

- 서버가 잘 만들어진 HTML 문서와 제어할 수 있는 코드를 모두 클라이언트에 전송함.
- 첫번째 페이지 로딩이 빨라짐.
- Great SEO : 모든 컨텐츠가 HTML 에 담겨져 있음으로 SEO 가 높아짐.
- Blinking issue, Non-rich site interactions
- 썩 좋지 않은 User experience
- 서버에 과부하, Server side overhead, 사용자가 많은 사이트일 경우
- 사용자와 상호작용을 할 때 까지 긴 시간이 소요됨.

## SSG (Static Site Generation)

- React + Gatsby
- React + Next.js

>- TTV (Time To View)
>- TTI (Time To Interact)

## FlexBox

>- container
    - display :
    - flex-direction :
    - flex-wrap :
    - flex-flow :
    - justify-content :
    - align-items
    - align-content
>- item
    - order :
    - flex-grow
    - flex-shrik
    - flex
    - align-self :

- main axis
- cross axis

## Float : 이미지와 텍스트에 대한 상대 정의 방법

- float: left
- float: conter
- float: right

## Postion

## Grid

>- 2차원 레이아웃
- Grid Container : 그리드를 적용하는 그리드의 전체 영역.
- Grid Item : 그리드 컨테이너의 자식 요소들
- Grid Track : 그리드의 행과 열
- Grid Area : 그리드 라인으로 둘러싸인 사각형 영역으로 그리드 셀의 집합
- Grid Number : 그리드 라인의 각 번호
- Grid Cell : 그리드의 한칸
- Grid Line : 그리드 셀을 구분하는 선
- Grid Gap
- display:grid
- grid-template-columns
- gird-template-rows
- grid-template-areas
- gird-gap
   	- grid-column-gap
   	- grid-row-gap

- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
- grid-area

- 그리드 형태 정의, 트랙의 크기 비율 정의 (fr: fraction, 숫자의 비율대로 트랙의 크기를 나눔)
- grid-template-rows
- grid-template-rows: 1fr 2fr 1fr;  /*(1 : 2 : 1) 비율*/
                    : repeat(3, 1fr);
                    : 100px 200px auto;

- grid-template-columns
- grid-template-columns: 1fr 2fr 1fr;
                       : repeat(3, 1fr);
                       : 200px 200px 500px;
                       : 100px 200px auto;
                       : 100px 2fr 1fr;

## Flex : 1차원 레이아웃

- flex-item 수직 중앙 정렬 방법 //
   	- display: flex; /*중첩 flex*/
   	- align-items: center; /*수직 정렬*/

- Flex 컨테이너에 적용되는 속성들

```css
.container {
	justify-content: flex-start; // 기본값, 시작점으로 정렬
	justify-content: flex-end; // 끝점으로 정렬
	justify-content: center; // 가운데 정렬
	justify-content: space-between; // 아이템들의 사이를 균일한 간격으로 만들어 줌
	justify-content: space-around; // 아이템들의 둘레를 균일한 간격으로 만들어 줌
	justify-content: space-evenly; // 아이템들의 사이와 둘레 모두를 균일한 간격으로 만듬.

	align-content: stretch; // 여러행 정렬
	align-items: stretch; // 아이템들이 수직 방향으로 쭈욱 늘어남

	align-content: flex-start;
	align-items: flex-start; // 아이템들이 시작점에 정렬

	align-content: flex-end;
	align-items: flex-end; // 아이템들이 끝점으로 정렬

	align-content: center;
	align-items: center; // 아이템들이 가운데 정렬

	align-items: baseline; // 아이템들이 텍스트 베이스라인 기준으로 정렬

	align-content: space-between;
	align-content: space-around;
	align-content: space-evenly;

}

/* 플렉스 컨테이너
- 플렉스 컨테이너는 플렉스 아이템을 감싸는 부모 요소입니다.
- 플렉스 컨테이너는 display: flex; 속성을 사용하여 생성합니다.
- 플렉스 컨테이너는 플렉스 아이템을 수평 또는 수직으로 정렬할 수 있습니다.
- 플렉스 컨테이너는 플렉스 아이템의 크기를 조정할 수 있습니다.
- 플렉스 컨테이너는 플렉스 아이템의 순서를 변경할 수 있습니다.
- 플렉스 컨테이너는 플렉스 아이템의 정렬을 조정할 수 있습니다.
- 플렉스 컨테이너는 플렉스 아이템의 간격을 조정할 수 있습니다.
- 플렉스 컨테이너는 플렉스 아이템의 줄바꿈을 조정할 수 있습니다.
*/


/* Flex 아이템에 적용하는 속성들 */
.item {
	flex-basis: auto; // 기본값, 해당 아이템의 width 값을 사용하며 따로 설정하지 않으면? 컨텐츠의 크기
	flex-basis: 0;
	flex-basis: 50%;
	flex-basis: 160px; // 160이 안되는 것은 늘리고 넘는 것은 원래의 폭을 유지, width 로 사용하면 절대값을 설정됨, word-wrap: break-word; 필요
	flex-basis: 10rem;
	flex-basis: content; // 컨텐츠의 크기

	flex-grow: 1; // 기본값 = 0,  아이템이 flex-basis 값보다 커질수 있는지를 결정하는 속성, 0 보다 큰값 설정시 유연하게 변함, 숫자의 의미는 비율이됨
	flex-shrink: 1; // 기본값 = 1, 아이템이 flex-basis 값보다 작아질수 있는지를 결정. 0으로 설정하면 flex-basis 보다 작아지지 않음으로 고정폭 컬럼시 사용.
}

 /* 1 : 2: 1 비율로 설정하기 */
.item:nth-child(1) { flex-grow: 1; }
.item:nth-child(2) { flex-grow: 2; }
.item:nth-child(1) { flex-grow: 1


/* (row) horizontal align : justify-content-* */
/*
	justify-content-start
	justify-content-center
	justify-content-around
	justify-content-between
	justify-content-evenly
*/

/* (row) veritical align : align-items-* */
/*
	align-items-start
	align-items-center
	align-items-end
*/

/* (col) self vertical */
/*
	align-self-start
	align-self-center
	align-self-end
*/

/*
	flex-flow : flex-direction 과 flex-wrap 을 한꺼번에 지정
	flex-flow : row wrap
*/
```

## 의사 클래스 (pseudo-class)

>- 가상요소(:pseudo-element) : 존재하지 않는 요소를 만들어 줌
- p::first-line -> 텍스트의 첫번째 중에만 특정 스타일을 입려 줌
- p::first-letter -> 첫문자

>- 가상클래스(:pseudo-class) : 실재 존재하는 요소에 클래스 추가 없이 디자인 하기

- 앵커 가상클래스
    - a:link  -> 아직방문하지 않은 링크
    - a:visited -> 방문한 링크
    - a:hover -> 사용자가 해당 요소에 커서를 가져다 댔을 때
    - a:active -> 요소가 활성화 되었거나 크릭 되었을 때
    - a:focus -> 해당 요소에 기보드 포커스가 맞춰 졌을 때

- 순서에 따른 가상 클래스 ]
    - ol li:first-child -> li 중 첫번째 요소
    - ol li:last-child -> li 중 마지막 요소
    - ol li:nth-child(n) -> li 중 n 번째 요소

- 단위
    - px
    - em : 폰트 사이즈의 상대 단위
    - rem (root em) : 루트 요소 폰트 사이즈의 상대 단위
    - 루트요소의 폰트 사이즈는 웹 브라우저의 기본 폰트 사이즈가 결정, 대부분의 웹 브라우저에서 16px 로 정해짐
    - 1.5rem 으로 지정한 경우 16px * 1.5 최종 결과값은 24px, 어떤 요소에서 사용하든 계산 기반값이 일관됨

## role : 태그의 역할을 알려주는 속성

[Ref. MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

- 스크린리더
    - aria-labe="채팅창으로 이동" 으로 적어두면? 스크린 리더는 '채팅장으로 이동 내부-링크"
    - `<a href="#" aria-label="채팅창으로 이동"><i class="ico ico-chat"></i></a>`

- Size
    - 100% : 부모의 크기의 100것
    - vh, vw : 부모와 무관하게 보이는 뷰의 100%

## CI/CD

>- CI/CD는 Continuous Integration (지속적 통합)과
>- Continuous Delivery 또는 Continuous Deployment (지속적 제공 또는 지속적 배포)의 약자입니다.
>- 이는 소프트웨어 개발 프로세스를 자동화하고 개선하기 위한 방법론으로, 코드 변경사항이 자동으로 빌드, 테스트되고, 안정적으로 배포되도록 합니다.

- **Continuous Integration (CI)**: 개발자들이 코드 변경사항을 주기적으로 중앙 리포지토리에 병합(merge)하는 것을 의미합니다. 이 과정에서 자동화된 빌드와 테스트가 실행되어, 코드 변경사항이 기존 코드베이스와 잘 통합되는지 확인합니다. 이는 버그를 조기에 발견하고 해결하는 데 도움을 줍니다.

- **Continuous Delivery (CD)**: CI 과정을 통해 테스트된 코드를 자동으로 프로덕션 환경에 배포 준비 상태로 만드는 것을 의미합니다. 이는 배포 과정을 자동화하여, 신뢰할 수 있는 소프트웨어를 빠르게 고객에게 제공할 수 있도록 합니다.

- **Continuous Deployment**: Continuous Delivery의 한 단계 더 나아가, 모든 변경사항이 `자동`으로 프로덕션 환경에 배포되는 것을 의미합니다. 이는 수동 개입 없이도 코드 변경사항이 실시간으로 사용자에게 제공될 수 있도록 합니다.

>- CI/CD 파이프라인을 구축함으로써, 개발 팀은 더 빠르고 효율적으로 소프트웨어를 개발, 테스트, 배포할 수 있으며, 이는 고객 만족도를 높이고 경쟁력을 강화하는 데 기여합니다.
>- 통합을 위한 단계 : 빌드, 테스트, 머지 의 자동화
>- Repository --> CI Server (Build, Test)

- 개발 생산성 향상.
- 문제점을 빠르게 발견.
- 버그 수정 용이.
- 코드의 퀄리티 향상.
- 유닛테스트 포함 필요.

지속적인 배포, 지속적인 제공
CI - Build, Test --> Prepare Release --> Deploy Release ()

- GitLab CI/CD
- Buildkite
- Jenkins
- GitHub Actions
- Bitbucket Pipelines
- circleci

## Code Review

- `리뷰어 포인트` : 피드백(티칭), 코드 개선, 브레인 스토밍, 팀 리스크 줄여야 함.
    - 좋은 의도를 전제로 친절하게, 호기심을 가지고 작성자의 의도를 파악.
    - 명확하고 구체적인 피드백을 주기
    - 이유와 함께..
    - 이유와 다른 대안 / 추천하는 방법을 제안
    - 중요성에 따라 명확한 행동을 추구
    - 질문(QQ), 요청사항 마이너 요구 (NIT), 강력한 변경 요청 (RC)
    - 누락된 기능 (케이스) 조기 발견
    - 버그 및 실수 조기 발견
    - 컨벤션에 관한 리뷰는 자동화 한다. (테스트 커버리지, esLint, Formatter, Team's convention)
        - 테스트 코드의 작성 여부
        - 코드 컨벤션이 잘 지켜 졌는지 확인
    - 가독성과 확장성, 유지 보수 편의성
    - 팀원들의 이해도 향상
    - 코드 퀄리티 향상
    - 리뷰 완료를 명확하게 알림.
        - Yes : 전체 방향성 OK, 작은 변경 요청
        - No : 변경요청, 이대로 배포불가 코드 수정 필요.
        - 질문 : 코드의도 파악, 큰 그림의 질문, 설계적인 질문
- `작성자`
    - 코드는 내가 아니다. 비판을 받는 것 같은 불안감을 갖을 필요가 없음. Don't take it personally. 리뷰어의 선의의 의도 수렴.
    - 내 실력에 대한 자절감. 동료, 후임에게 지적 받는 것 같은 불편함과 자존심 상함 문제 극복. 배움 성장의 기회로 삼음, 꼰대 마인셋을 버리자.
    - 자기보다 못하다고 생각되는 사람에게도 배울 점은 있으며, 모르는 것을 묻는 것은 부끄러운일이 아니다.
    - PR 사이즈를 최대한 작게 (코드 변경을 작게)
    - (작은 코드 크기 --> 코드리뷰 --> 피드백 반영) ---> yes ---> merge
    - 가급적 한 PR 에 LOC(line of code) 는 400 줄 이하로
    - 10lines of code = 10 issues. 500lines of code = "looks fine" Code reviews
    - 사용자가 이슈를 발견하는 것 보다 리뷰어가 발견하는 것이 최선이다.
    - 버그 하나당 하나의 PR
    - 버전 업데이트 및 리팩토링은 별도의 PR
    - 규모가 큰 변경 사항은 의미 있는 작은 단위로
    - 맥락 (context)을 이해할 수 있도록 풍부한 정보 제공
        - Why > What (무엇을 작성했는지 보다 왜 이런 코드를 작성했는지에 대한 정보 제공), What? Why? How? Testing? Screenshots (optional). Anything Else?
    - 빠른 시일 내에 리뷰를 받도록 최선! (님, ~까지 리뷰 가능? 님, 오늘까지 꼭 리뷰좀! 님, 제발! 이 PR 내일 까지 머지 되어야 함!)
    - 코멘트에 대해 명확하게 피드백을 하기.
    - Craft

##### [Ref. 드림코딩](https://youtu.be/bUY3wNjcVMk?si=kVbA60ry0HnBqVM-)

##### [Ref. Winter Wind Tutorials](https://www.winterwind.com/tutorials)
