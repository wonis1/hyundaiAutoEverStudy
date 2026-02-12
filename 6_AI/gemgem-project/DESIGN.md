Project: Game Hub "GemGem" Development Project
App name: GemGem

SDLC Phase 2 - Design (MVP)

User Flow
- App start -> Login
- Tap "Login" -> auth=true -> Map
- Reach game spot -> "Enter" button appears
- Tap "Enter" -> detail modal
- Tap "Start" -> WebView
- Close WebView -> Map

Screens
- Login: title/logo + stub login button
- Map: 2D map, on-screen joystick, discovered list panel
- Detail modal: thumbnail/name/genre/tags/difficulty + rules + Start
- WebView: in-app browser with close/back

Game Metadata (local JSON)
{
  "games": [
    {
      "id": "string",
      "name": "string",
      "genre": "string",
      "tags": ["string"],
      "difficulty": 1,
      "thumbnailUrl": "string",
      "gameUrl": "string",
      "description": "string",
      "rules": "string",
      "location": {
        "worldArea": "string",
        "x": 0,
        "y": 0
      }
    }
  ]
}

State Rules
- Auth: boolean, default false, true on login button.
- Discovery: mark discovered when in range.
- Enter: show button when in range.
- Modal/WebView: open/close with back or close.
- Camera: follows character, no zoom.

UI Notes
- Cozy rural mood (Stardew-like).
- Game spot marker: themed sign/arch + glow ring.
- Standard joystick: direction + distance -> speed, release to stop, small dead zone.

World Layout (MVP)
- Small town map with a few themed zones (e.g., Janggi Guild, Puzzle Grove, Card Plaza).

----

프로젝트: 게임 집합소 "겜겜" 개발 프로젝트
앱명: 겜겜

SDLC 2단계 - 설계 (MVP)

사용자 흐름
- 앱 실행 -> 로그인
- "로그인" -> auth=true -> 맵
- 게임 지점 도달 -> "입장" 버튼 노출
- "입장" -> 상세 모달
- "시작하기" -> WebView
- WebView 닫기 -> 맵

화면
- 로그인: 타이틀/로고 + 스텁 버튼
- 맵: 2D 맵, 화면 조이스틱, 발견 리스트 패널
- 상세 모달: 썸네일/이름/장르/태그/난이도 + 규칙 + 시작하기
- WebView: 인앱 브라우저 + 닫기/뒤로

게임 메타데이터(로컬 JSON)
{
  "games": [
    {
      "id": "string",
      "name": "string",
      "genre": "string",
      "tags": ["string"],
      "difficulty": 1,
      "thumbnailUrl": "string",
      "gameUrl": "string",
      "description": "string",
      "rules": "string",
      "location": {
        "worldArea": "string",
        "x": 0,
        "y": 0
      }
    }
  ]
}

상태 규칙
- 인증: 기본 false, 로그인 버튼 시 true.
- 발견: 범위 내 진입 시 발견 처리.
- 입장: 범위 내 버튼 노출.
- 모달/WebView: 열기/닫기 처리.
- 카메라: 캐릭터 추종, 줌 없음.

UI 메모
- 스타듀밸리 같은 따뜻한 농촌 분위기.
- 게임 지점 마커: 테마 간판/아치 + 바닥 라이트 링.
- 표준 조이스틱: 방향+거리로 속도, 손 떼면 정지, 작은 데드존.

월드 레이아웃 (MVP)
- 소규모 마을 맵에 몇 개의 테마 구역 배치(예: 장기 기원, 퍼즐 숲, 카드 광장).
