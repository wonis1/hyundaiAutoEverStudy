Project: Game Hub "GemGem" Development Project
App name: GemGem

SDLC Phase 3 - Implementation Plan (MVP)

Stack
- App: Flutter (iOS/Android)
- Auth (future): Supabase Auth (OAuth later)
- Realtime ranking: Supabase (Postgres + Realtime)
- Web games hosting: Static hosting + CDN

MVP Features
- Login stub
- Map exploration + joystick + camera follow
- Discovery -> detail modal -> WebView
- Local JSON metadata
- Ranking screen (simple global list)

Work Steps
1) Flutter project setup + packages (webview_flutter, supabase_flutter, joystick/custom).
2) Local JSON loader + metadata model.
3) Map scene + movement + camera follow.
4) Discovery range + enter button + modal.
5) WebView launch + back/close handling.
6) Supabase ranking (read/write stub).
7) UI polish + device testing.

Deliverables
- MVP app that launches web game URLs from the map.
- Ranking screen connected to Supabase.
- Local JSON-based discovery list.

----

프로젝트: 게임 집합소 "겜겜" 개발 프로젝트
앱명: 겜겜

SDLC 3단계 - 구현 계획 (MVP)

스택
- 앱: Flutter (iOS/Android)
- 인증(추후): Supabase Auth (OAuth 이후)
- 실시간 랭킹: Supabase (Postgres + Realtime)
- 웹게임 호스팅: 정적 호스팅 + CDN

MVP 기능
- 로그인 스텁
- 맵 탐색 + 조이스틱 + 카메라 추종
- 발견 -> 상세 모달 -> WebView
- 로컬 JSON 메타데이터
- 랭킹 화면(간단한 글로벌 리스트)

작업 단계
1) Flutter 프로젝트/패키지 세팅(webview_flutter, supabase_flutter, joystick/커스텀).
2) 로컬 JSON 로더 + 모델 정의.
3) 맵 씬 + 이동 + 카메라 추종.
4) 근접 판정 + 입장 버튼 + 모달.
5) WebView 실행 + 닫기/복귀 처리.
6) Supabase 랭킹(읽기/쓰기 스텁).
7) UI 다듬기 + 기기 테스트.

산출물
- 맵에서 웹 게임 URL 실행 가능한 MVP 앱.
- Supabase 연동 랭킹 화면.
- 로컬 JSON 기반 발견 목록.

리스크
- Supabase 비용은 사용량에 따라 증가.
- WebView 동작은 플랫폼별 차이 가능.
- 조이스틱 감도는 튜닝 필요.
