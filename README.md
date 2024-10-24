# GitHub 사용자 검색 애플리케이션

GitHub API를 활용하여 사용자를 검색하고 북마크할 수 있는 웹 애플리케이션입니다.

## 주요 기능

- GitHub 사용자 검색
- 무한 스크롤을 통한 검색 결과 로딩
- 사용자 북마크 기능
- 북마크된 사용자 목록 확인

## 기술 스택

- Next.js 14
- TypeScript
- React Query
- Zustand
- SCSS

## 시작하기

### 환경 설정

1. 의존성을 설치합니다:

```bash
npm install
# or
yarn install
```

2. 환경 변수를 설정합니다:
   `.env` 파일을 생성하고 다음 변수를 설정합니다:

```bash
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
```

3. 개발 서버를 실행합니다:

```bash
npm run dev
# or
yarn dev
```

## 주요 기능 설명

### 사용자 검색

- 디바운스 처리된 검색 입력
- React Query를 활용한 데이터 캐싱
- 무한 스크롤 구현

### 북마크 기능

- Zustand를 사용한 상태 관리
- SessionStorage를 통한 북마크 데이터 유지
- 북마크 추가/제거 기능
