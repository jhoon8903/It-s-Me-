#nodeJS #javaScript #package #module #npm #yarn

# Package Manager
	- package를 손쉽게 다루는 작업을 편리하게 사용하기 위한 툴
	- open source로 다운받거나 배포가능
	- Node.JS 에서는 'npm' / 'yarn' 이 대표적
		npm : Node Package Manager의 약자로 대표적 패키지 매니져
		yarn : npm의 대체자로 Facebook이 출시한 패키지 매니져
		* 두가지 중 하나만 선택해서 사용하는 것을 권장 (Error 방지)
### Package.json
	- 설치한 패키지의 버전관리를 위해 사용하는 파일
	- 프로젝트명 / 작성자 / 라이센스 정보 등 다양한 meta data를 기록할 수 있음
[![[Pasted image 20221224174828.png|500]]

### Package-lock.json
	- node_modules에 들어있는 패키지들의 버전과 의존관계등 상세한 기록의 파일
	- npm으로 패키지를 설치, 수정, 삭제 할 때마다 의존관계를 기록함
	- 배포시에 같이 배포하지 않도록 주의가 필요 (보안!)
[![[Pasted image 20221224175059.png]]