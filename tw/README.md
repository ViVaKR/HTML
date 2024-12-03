# Tailwindcss 4.0 beta

```bash
npm install -g typescript
tsc --v
npm install -g tsx

tsc app.ts
node app.js


# vite
npm create vite@latest
npm create vite@latest my-vue-app -- --template vue
npm install -D vite

# tailwindcss
npm install tailwindcss@next @tailwindcss/postcss@next @tailwindcss/cli@next
npx @tailwindcss/cli -i app.css -o css/app.min.css
```

<pre>
프로젝트 루트/
├── dist/                  # 컴파일된 JavaScript 파일
│   └── app.js
├── node_modules/          # npm 패키지
├── src/                   # TypeScript 소스 파일
│   ├── index.ts           # 진입점 파일
│   ├── app.ts             # 주요 애플리케이션 로직
│   ├── components/        # 컴포넌트 관련 파일
│   │   └── header.ts
│   ├── services/          # 서비스 관련 파일 (API 호출 등)
│   │   └── apiService.ts
│   ├── models/            # 데이터 모델 관련 파일
│   │   └── user.ts
│   └── utils/             # 유틸리티 함수 관련 파일
│       └── helpers.ts
├── html/                  # HTML 파일
│   ├── home.html
│   ├── code.html
│   ├── chat.html
│   └── about.html
├── css/                   # CSS 파일
│   └── app.min.css
├── package.json           # npm 설정 파일
├── tsconfig.json          # TypeScript 설정 파일
└── app.html               # 메인 HTML 파일

</pre>

보편적으로 TypeScript 파일은 프로젝트의

src

 디렉토리 내부에 모아서 관리하는 것이 효율적입니다. 이렇게 하면 프로젝트 구조가 더 깔끔해지고, 파일을 찾기 쉽습니다. 일반적으로 다음과 같은 디렉토리 구조를 사용하는 것이 좋습니다:

### 예시 디렉토리 구조

```
프로젝트 루트/
├── dist/                  # 컴파일된 JavaScript 파일
│   └── app.js
├── node_modules/          # npm 패키지
├── src/                   # TypeScript 소스 파일
│   ├── index.ts           # 진입점 파일
│   ├── app.ts             # 주요 애플리케이션 로직
│   ├── components/        # 컴포넌트 관련 파일
│   │   └── header.ts
│   ├── services/          # 서비스 관련 파일 (API 호출 등)
│   │   └── apiService.ts
│   ├── models/            # 데이터 모델 관련 파일
│   │   └── user.ts
│   └── utils/             # 유틸리티 함수 관련 파일
│       └── helpers.ts
├── html/                  # HTML 파일
│   ├── home.html
│   ├── code.html
│   ├── chat.html
│   └── about.html
├── css/                   # CSS 파일
│   └── app.min.css
├── package.json           # npm 설정 파일
├── tsconfig.json          # TypeScript 설정 파일
└── app.html               # 메인 HTML 파일
```

### 디렉토리 설명

- **

src

**: 모든 TypeScript 소스 파일을 포함합니다.
- **`index.ts`**: 애플리케이션의 진입점 파일입니다.
- **`app.ts`**: 주요 애플리케이션 로직을 포함하는 파일입니다.
- **`components/`**: 재사용 가능한 컴포넌트를 포함하는 디렉토리입니다.
- **`services/`**: API 호출 등 서비스 관련 로직을 포함하는 디렉토리입니다.
- **`models/`**: 데이터 모델을 정의하는 파일을 포함하는 디렉토리입니다.
- **`utils/`**: 유틸리티 함수들을 포함하는 디렉토리입니다.

<pre>
이 구조는 파일을 논리적으로 그룹화하여 프로젝트를 더 쉽게 관리하고 유지보수할 수 있도록 함.
src 디렉토리 내에서 파일을 적절히 분류하면, 프로젝트가 커지더라도 파일을 쉽게 찾고 수정할 수 있음.
</pre>
