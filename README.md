# 🚀 Next.js Corporate Starter

> 현업 수준의 기업 웹사이트를 빠르게 구축할 수 있는 Next.js 템플릿

## ✨ 특징

- 🏢 **기업 웹사이트 완성형 템플릿** - 바로 사용 가능한 7개 섹션
- ⚡ **Next.js 15 최신 기술** - App Router, Server Components
- 🎨 **모던 디자인 시스템** - Tailwind CSS + shadcn/ui
- 📱 **완벽한 반응형** - Mobile First 설계
- 🇰🇷 **한국어 최적화** - Noto Sans KR 폰트 적용
- 🔧 **현업 개발환경** - TypeScript, ESLint, Prettier
- 🎯 **SEO 최적화** - 메타데이터, 구조화 데이터
- 🚨 **에러 처리 완료** - Error Boundary, Logger 시스템

## 🛠️ 기술 스택

### Core

- **Next.js 15** - React 풀스택 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 CSS
- **shadcn/ui** - 헤드리스 UI 컴포넌트

### Tools

- **ESLint + Prettier** - 코드 품질
- **Husky + lint-staged** - Git hooks
- **Framer Motion** - 애니메이션
- **Lucide React** - 아이콘

## 📁 포함된 페이지

### 🏠 홈페이지 (7개 섹션)

- Hero Section - 메인 배너
- Trust Section - 신뢰도 지표 + 고객사
- Services Section - 서비스 소개
- Portfolio Section - 프로젝트 사례
- Process Section - 개발 프로세스
- Team Section - 팀 소개
- Contact CTA Section - 연락 유도

### 📄 서브페이지

- `/about` - 회사소개 (비전, 미션, 연혁)
- `/services` - 서비스 상세 (6개 서비스)
- `/portfolio` - 포트폴리오 (필터링 기능)
- `/team` - 팀 소개 (팀원 상세)
- `/contact` - 연락처 (상담 신청 폼)

## 🚀 빠른 시작

### 1. 프로젝트 클론

```bash
git clone https://github.com/YOUR_USERNAME/nextjs-corporate-starter.git
cd nextjs-corporate-starter
```

### 2. 의존성 설치

```bash
pnpm install
# 또는
npm install
```

### 3. 개발 서버 실행

```bash
pnpm dev
# 또는
npm run dev
```

### 4. 브라우저에서 확인

`http://localhost:3000` 접속

## 🎨 커스터마이징 가이드

### 1. 회사 정보 변경

```typescript
// content/data/index.ts
export const companyInfo = {
  name: '당신의 회사명',
  description: '회사 설명',
  // ... 다른 정보들
}
```

### 2. 색상 테마 변경

```css
/* app/globals.css */
:root {
  --primary: 당신의_메인_컬러;
  --secondary: 당신의_서브_컬러;
}
```

### 3. 폰트 변경

```typescript
// src/lib/fonts.ts
import { YourFont } from 'next/font/google'

export const yourFont = YourFont({
  subsets: ['latin'],
  // ... 설정
})
```

### 4. 로고 및 이미지 교체

```
public/images/
├── logo.png          # 로고 이미지
├── portfolio/        # 포트폴리오 이미지
├── team/            # 팀원 사진
└── logos/           # 고객사 로고
```

## 📋 프로젝트 구조

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈페이지
│   ├── about/          # 회사소개
│   ├── services/       # 서비스
│   ├── portfolio/      # 포트폴리오
│   ├── team/          # 팀 소개
│   └── contact/       # 연락처
├── src/
│   ├── components/     # 재사용 컴포넌트
│   │   ├── ui/        # 기본 UI 컴포넌트
│   │   ├── layout/    # 레이아웃 컴포넌트
│   │   └── sections/  # 페이지 섹션
│   ├── lib/           # 유틸리티 함수
│   └── types/         # TypeScript 타입
├── content/data/       # 사이트 데이터
└── public/images/      # 이미지 리소스
```

## 🔧 개발 명령어

```bash
# 개발 서버
pnpm dev

# 프로덕션 빌드
pnpm build

# 타입 체킹
pnpm type-check

# 코드 포맷팅
pnpm format

# 린트 검사
pnpm lint
```

## 🌐 배포 가이드

### Vercel (추천)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# dist 폴더를 Netlify에 업로드
```

## 📝 라이선스

MIT License - 자유롭게 사용하세요!

## 🤝 기여하기

이슈나 개선사항이 있으시면 언제든 PR을 보내주세요!

---

**⭐ 도움이 되셨다면 스타를 눌러주세요!**
