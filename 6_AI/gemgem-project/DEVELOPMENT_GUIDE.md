프로젝트: 게임 집합소 "겜겜" 개발 프로젝트
앱명: 겜겜

개발 가이드 (간소화)

0단계) 이해하기
- REQUIREMENTS.md, DESIGN.md, IMPLEMENTATION_PLAN.md 읽기
- MVP 핵심 흐름 파악(로그인 -> 맵 -> 입장 -> 모달 -> 웹뷰)

1단계) Flutter 기초
- Flutter SDK 설치, hello-world 실행
- 위젯/상태/네비게이션/에셋 감 잡기

2단계) 프로젝트 세팅
- Flutter 프로젝트 생성
- 패키지 추가: webview_flutter, supabase_flutter, joystick(또는 커스텀)
- 로컬 JSON 에셋 추가

3단계) UI 뼈대
- 로그인/맵/모달/WebView 화면 뼈대 구현

4단계) 맵 + 이동
- 조이스틱 이동, 캐릭터/카메라 추종, 마커 배치

5단계) 발견 + 모달
- 로컬 JSON 로드, 위치 배치, 근접 판정, 입장 버튼, 모달 표시

6단계) WebView 실행
- 시작하기 -> WebView 연결, 닫기/복귀 처리

7단계) 랭킹(MVP)
- Supabase 설정, 랭킹 테이블, 읽기/표시, 점수 업데이트(스텁)

8단계) 마감 + QA
- UI 정리, 기기 테스트, WebView 동작 점검

9단계) 인수인계 메모
- 새 게임 추가 방법, 실행/빌드 방법만 간단히 기록
