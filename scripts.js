// 페이지 데이터
const pageData = {
    'JPT_INFORMATION': {
        breadcrumb: 'JPT > INFORMATION',
        content: `
            <p>[JPT 기록] JUPITER PROJECT TEAM 정보</p>
            <p>&nbsp;</p>
            <p>기밀 등급: CONFIDENTIAL</p>
            <p>설립일: 19██년 ██월 ██일</p>
            <p>&nbsp;</p>
            <p>JPT(JUPITER PROJECT TEAM)는 목성 탐사 프로젝트 도중 발생한 특이 현상 및 개체들을 연구하고 격리하기 위해 설립된 비밀 조직입니다.</p>
            <p>&nbsp;</p>
            <p>본 조직은 정부의 직접 지원을 받으며, 최고 수준의 보안 등급으로 운영됩니다. 모든 연구 자료 및 정보는 엄격히 관리되며, 무단 접근 시 즉시 체포 및 구금 조치가 이루어집니다.</p>
            <p>&nbsp;</p>
            <p>현재 JPT는 전 세계 7개 지역에 격리 시설을 운영 중이며, 약 ███명의 연구원과 보안 요원이 배치되어 있습니다.</p>
            <p>&nbsp;</p>
            <p>주요 임무:</p>
            <p>- 목성 관련 이상 현상 조사 및 기록</p>
            <p>- 변이 개체 격리 및 연구</p>
            <p>- 관련 정보 보안 유지 및 대중 은폐</p>
        `,
        showVideo: false
    },
    'PROJECT_JUPITER_INFORMATION': {
        breadcrumb: 'PROJECT_JUPITER > INFORMATION',
        content: `
            <p>[JPT 기록] 목성 프로젝트 개요</p>
            <p>&nbsp;</p>
            <p>기밀 등급: TOP SECRET</p>
            <p>시작일: 14██년</p>
            <p>&nbsp;</p>
            <p>프로젝트 주피터는 인류 최초의 유인 목성 탐사 임무입니다. 19██년에 시작된 이 프로젝트는 목성의 대기, 자기장, 그리고 위성들에 대한 직접적인 조사를 목표로 합니다.</p>
            <p>&nbsp;</p>
            <p>1409i, 탐사선 \"GALILEO II\"가 목성 궤도에 성공적으로 진입했습니다.</p>
            <p>&nbsp;</p>
            <p>1410i, 착륙 모듈이 목성의 위성 ████에 착륙했으나, 예상치 못한 사건이 발생했습니다. 자세한 내용은 EXPLORATION_LOG를 참조하십시오.</p>
            <p>&nbsp;</p>
            <p>현재 이 프로젝트는 JPT의 직접 관리 하에 있으며, 모든 관련 정보는 최고 기밀로 분류되었습니다.</p>
        `,
        showVideo: false
    },
    'PROJECT_JUPITER_EXPLORATION': {
        breadcrumb: 'PROJECT_JUPITER > EXPLORATION_LOG',
        content: `
            <p>[JPT 기록] 목성 탐사 일지</p>
            <p>&nbsp;</p>
            <p>기밀 등급: TOP SECRET</p>
            <p>임무 번호: PJ-1410-ALPHA</p>
            <p>&nbsp;</p>
            <p>1410i 08:23 - 착륙 모듈 정상 착륙 확인. 대원 6명 전원 무사.</p>
            <p>1410i 09:47 - 표면 탐사 시작. 이상 자기장 감지.</p>
            <p>1410i 11:15 - 대원 ████ 통신 두절. 수색 팀 파견.</p>
            <p>1410i 11:58 - 대원 ████ 발견. 상태 이상. 즉시 격리.</p>
            <p>1410i 12:34 - 대원 ████의 신체에서 급격한 변이 관찰. 원인 불명.</p>
            <p>1410i 13:02 - 긴급 귀환 명령 발동. 변이 대원 강제 확보.</p>
            <p>&nbsp;</p>
            <p>1410i 19:45 - 지구 귀환 완료. 변이 개체(J-001) 격리 시설로 이송.</p>
            <p>&nbsp;</p>
            <p>본 임무 이후 목성 탐사는 무기한 연기되었습니다.</p>
        `,
        showVideo: true,
        videoTabs: [
            { id: 'CqbPpgjCGmo', name: 'FILE_1' },
            { id: 'CqbPpgjCGmo', name: 'FILE_2' },
            { id: 'CqbPpgjCGmo', name: 'FILE_3' }
        ],
        videoTitle: 'EXPLORATION_FOOTAGE'
    },
    'APOSTLE_INFORMATION': {
        breadcrumb: 'THE_APOSTLE_OF_JUPITER > INFORMATION',
        content: `
            <p>[JPT 기록] 목성의 사도 - 개체 정보</p>
            <p>&nbsp;</p>
            <p>기밀 등급: TOP SECRET</p>
            <p>개체 번호: J-001</p>
            <p>별칭: \"목성의 사도\"</p>
            <p>&nbsp;</p>
            <p>개체 J-001은 목성 탐사 임무 중 변이한 인간 대원입니다. 변이 과정은 불과 수 분 내에 일어났으며, 현재까지 원인은 밝혀지지 않았습니다.</p>
            <p>&nbsp;</p>
            <p>주요 특징:</p>
            <p>- 강력한 자기장 방출 (최대 ██ 테슬라)</p>
            <p>- 피부 표면의 붉은 소용돌이 무늬</p>
            <p>- 불규칙한 저주파 소음 발생</p>
            <p>- 일부 인간 형태 유지</p>
            <p>&nbsp;</p>
            <p>현재 개체는 제7 격리 시설 지하 4층 특수 챔버에 격리되어 있으며, 24시간 감시 체계가 유지되고 있습니다.</p>
            <p>&nbsp;</p>
            <p>경고: 개체와의 직접 접촉은 엄격히 금지됩니다.</p>
        `,
        showVideo: false
    },
    'APOSTLE_RESEARCH': {
        breadcrumb: 'THE_APOSTLE_OF_JUPITER > RESEARCH_LOGS > FILE_1 > PERSONNEL_BODYCAM_FOOTAGE',
        content: `
            <p>[JPT 기록] 목성의 사도 연구일지</p>
            <p>&nbsp;</p>
            <p>기밀 등급: TOP SECRET</p>
            <p>작성자: DR. R. K.</p>
            <p>날짜: 19██년 10월 7일</p>
            <p>&nbsp;</p>
            <p>1410i, 정부 지원 하에 이루어진 유인 목성 탐사 임무 중, 낙오된 대원 ████(이하 J-001)이 기괴한 .   내로 ���루어졌으며, 현장 지휘관 [데이터 말소]의 판단으로 확보되었습니다. 당국은 이 사실을 철저히 은폐하고, JPT(JUPITER PROJECT TEAM)를 설립하여 J-001를 격리했습니다.</p>
            <p>&nbsp;</p>
            <p>1413i, J-001는 현재 JPT 소속 제7 격리 시설 지하 4층의 특수 챔버(이하 격리시설)에 격리 중입니다.</p>
            <p>&nbsp;</p>
            <p>1415i, 확보된 개체는 일부 인간의 형태를 유지하고 있으나 강력한 자기장을 방출하고 있으며, 피부에 정체를 알 수 없는 붉은 소용돌이 무늬가 불규칙적으로 번지고 있습니다.</p>
            <p>&nbsp;</p>
            <p>1415i, J-001는 의미를 알 수 없는 낮고 그로테스크한 소음만을 간헐적으로 배출하고 있습니다.</p>
        `,
        showVideo: true,
        videoTabs: [
            { id: 'CqbPpgjCGmo', name: 'FILE_1' },
            { id: 'CqbPpgjCGmo', name: 'FILE_2' },
            { id: 'CqbPpgjCGmo', name: 'FILE_3' }
        ],
        videoTitle: 'PERSONNEL_BODYCAM_FOOTAGE'
    },
    'ANOMALIES_INFORMATION': {
        breadcrumb: 'ANOMALIES > INFORMATION',
        content: `
            <p>[JPT 기록] 이상 현상 정보</p>
            <p>&nbsp;</p>
            <p>기밀 등급: TOP SECRET</p>
            <p>&nbsp;</p>
            <p>JPT  탐사 로트 후 다양한 이상 현상들을 관찰하고 있습니다. 이러한 현상들은 기존 과학으로는 설명할 수 없는 특성들을 보이고 있습니다.</p>
            <p>&nbsp;</p>
            <p>현재까지 기록된 주요 이상 현상:</p>
            <p>&nbsp;</p>
            <p>A-001: 자기장 이상 - 목성 표면에서 관측된 비정상적 자기장 패턴</p>
            <p>A-002: 생체 변이 - J-001 포함한 여러 생명체의 급격한 변이</p>
            <p>A-003: 시공간 왜곡 - 특정 지역에서 관측된 시간 흐름의 불일치</p>
            <p>A-004: [데이터 말소]</p>
            <p>&nbsp;</p>
            <p>모든 이상 현상은 지속적으로 모니터링되고 있으며, 관련 데이터는 CENSORED_MEDIA 섹션에 보관되어 있습니다.</p>
        `,
        showVideo: false
    },
    'ANOMALIES_MEDIA': {
        breadcrumb: 'ANOMALIES > CENSORED_MEDIA',
        content: `
            <p>[JPT 기록] 검열된 미디어 자료</p>
            <p>&nbsp;</p>
            <p>기밀 등급: TOP SECRET</p>
            <p>&nbsp;</p>
            <p>본 섹션에는 목성 탐사 및 관련 이상 현상에 대한 영상, 음성, 이미지 자료가 보관되어 있습니다.</p>
            <p>&nbsp;</p>
            <p>경고: 일부 자료는 심리적 충격을 유발할 수 있습니다.</p>
            <p>&nbsp;</p>
            <p>보관 자료 목록:</p>
            <p>- 목성 표면 탐사 영상 (14시간 분량)</p>
            <p>- 대원 ████의 변이 과정 기록</p>
            <p>- J-001 격리 시설 CCTV 영상</p>
            <p>- [데이터 말소]</p>
            <p>- 연구원 인터뷰 음성 기록</p>
            <p>- 목성 자기장 스캔 데이터</p>
            <p>&nbsp;</p>
            <p>모든 자료는 승인된 인원만 접근 가능합니다.</p>
        `,
        showVideo: true,
        videoTabs: [
            { id: '1137591614', name: 'FILE_1', type: 'vimeo', disabled: false },
            { id: '', name: 'FILE_2', type: 'youtube', disabled: true },
            { id: '', name: 'FILE_3', type: 'youtube', disabled: true },
            { id: '1137591649', name: 'FILE_4', type: 'vimeo', disabled: false },
            { id: '', name: 'FILE_5', type: 'youtube', disabled: true },
            { id: '', name: 'FILE_6', type: 'youtube', disabled: true },
            { id: '', name: 'FILE_7', type: 'youtube', disabled: true }
        ],
        videoTitle: 'CENSORED_FOOTAGE'
    }
};

let currentPage = 'APOSTLE_RESEARCH';

// YouTube Player 전역 변수
let player = null;
let bgm = null;
let bgmStarted = false;

// 페이지 로드
function loadPage(pageKey) {
    const data = pageData[pageKey];
    if (!data) return;

    currentPage = pageKey;
    
    // localStorage에 현재 페이지 저장
    localStorage.setItem('jpt_current_page', pageKey);

    // 브레드크럼 업데이트
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = data.breadcrumb.split(' > ').map((part, index, arr) => {
        if (index === arr.length - 1) {
            return `<span class="current">${part}</span>`;
        } else if (index === arr.length - 2) {
            return `<span>${part}</span><span class="separator"> // </span>`;
        } else {
            return `<span>${part}</span><span class="separator"> > </span>`;
        }
    }).join('');

    // 컨텐츠 업데이트
    const documentText = document.querySelector('.document-text');
    documentText.innerHTML = data.content;

    // 비디오 프레임과 메인 컨텐츠 표시/숨김
    const videoFrame = document.querySelector('.video-frame');
    const mainContent = document.querySelector('.main-content');
    
    if (data.showVideo) {
        videoFrame.style.display = 'block';
        mainContent.style.display = 'none';
    } else {
        videoFrame.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // 비디오 탭 업데이트
    const videoTabsContainer = document.querySelector('.video-tabs');
    const videoPlayerContainer = document.querySelector('.video-player');
    
    if (data.videoTabs) {
        videoTabsContainer.innerHTML = data.videoTabs.map((tab, index) => `
            <div class="tab ${index === 0 && !tab.disabled ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}" data-video="${tab.id}" data-type="${tab.type || 'youtube'}" data-disabled="${tab.disabled || false}">${tab.name}</div>
        `).join('');
        
        // 첫 번째 활성화된 비디오 로드
        const firstEnabledTab = data.videoTabs.find(tab => !tab.disabled);
        if (firstEnabledTab) {
            loadVideo(firstEnabledTab.id, firstEnabledTab.type || 'youtube');
        }
    } else {
        videoTabsContainer.innerHTML = '';
    }

    // 비디오 제목 업데이트
    const videoTitle = document.querySelector('.video-title');
    if (data.videoTitle) {
        videoTitle.textContent = data.videoTitle;
    } else {
        videoTitle.textContent = '';
    }
    
    // 해당 메뉴 아이템 활성화
    updateActiveMenuItem(pageKey);
}

// 메뉴 아이템 활성화 상태 데트
function updateActiveMenuItem(pageKey) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // pageKey에 따라 해당 메뉴 아이템 찾기
    const pageToMenuMap = {
        'JPT_INFORMATION': { section: 'JPT', menu: 'INFORMATION' },
        'PROJECT_JUPITER_INFORMATION': { section: 'PROJECT_JUPITER', menu: 'INFORMATION' },
        'PROJECT_JUPITER_EXPLORATION': { section: 'PROJECT_JUPITER', menu: 'EXPLORATION_LOG' },
        'APOSTLE_INFORMATION': { section: 'THE_APOSTLE_OF_JUPITER', menu: 'INFORMATION' },
        'APOSTLE_RESEARCH': { section: 'THE_APOSTLE_OF_JUPITER', menu: 'RESEARCH_LOGS' },
        'ANOMALIES_INFORMATION': { section: 'ANOMALIES', menu: 'INFORMATION' },
        'ANOMALIES_MEDIA': { section: 'ANOMALIES', menu: 'CENSORED_MEDIA' }
    };
    
    const pageInfo = pageToMenuMap[pageKey];
    if (!pageInfo) return;
    
    menuItems.forEach(item => {
        const menuText = item.textContent.trim();
        const previousDivider = Array.from(item.parentElement.children)
            .slice(0, Array.from(item.parentElement.children).indexOf(item))
            .reverse()
            .find(el => el.classList.contains('menu-divider'));
        
        const section = previousDivider ? previousDivider.querySelector('.divider-text').textContent : '';
        
        if (section === pageInfo.section && menuText === pageInfo.menu) {
            item.classList.add('active');
        }
    });
}

// 비디오 로드 함수 (YouTube 또는 Vimeo)
function loadVideo(videoId, type = 'youtube') {
    const videoPlayerContainer = document.querySelector('.video-player');
    
    if (type === 'vimeo') {
        // Vimeo iframe 생성 (UI 최소화 파라미터 추가)
        videoPlayerContainer.innerHTML = `
            <iframe 
                id="vimeo-player"
                src="https://player.vimeo.com/video/${videoId}?autoplay=0&title=0&byline=0&portrait=0&controls=1&color=e53d2e" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        // Vimeo Player API 로드 및 이벤트 리스너 추가
        if (window.Vimeo) {
            const vimeoPlayer = new Vimeo.Player(document.getElementById('vimeo-player'));
            
            vimeoPlayer.on('play', function() {
                if (bgm) bgm.pause();
            });
            
            vimeoPlayer.on('pause', function() {
                if (bgm && bgmStarted) bgm.play();
            });
            
            vimeoPlayer.on('ended', function() {
                if (bgm && bgmStarted) bgm.play();
            });
        }
    } else {
        // YouTube iframe 생성
        videoPlayerContainer.innerHTML = `
            <iframe 
                id="youtube-player"
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${videoId}?enablejsapi=1&modestbranding=1&rel=0&iv_load_policy=3" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        `;
        
        // YouTube Player 재초기화
        if (window.YT && window.YT.Player) {
            player = new YT.Player('youtube-player', {
                events: {
                    'onStateChange': function(event) {
                        if (event.data === YT.PlayerState.PLAYING) {
                            if (bgm) bgm.pause();
                        } else if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
                            if (bgm && bgmStarted) bgm.play();
                        }
                    }
                }
            });
        }
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // BGM 초기화 (자동 재생 안함)
    bgm = document.getElementById('bgm');
    bgm.volume = 0.2; // 볼륨을 20%로 설정 (0.0 ~ 1.0)
    let isVideoPlaying = false;

    // 첫 클릭 시 BGM 재생
    document.body.addEventListener('click', function initBGM() {
        if (!bgmStarted) {
            bgm.play().catch(err => console.log('BGM play error:', err));
            bgmStarted = true;
        }
    }, { once: true });

    // 햄버거 메뉴 기능 (모바일)
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('overlay');
    
    hamburger.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        hamburger.classList.toggle('open');
        overlay.classList.toggle('show');
    });
    
    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        hamburger.classList.remove('open');
        overlay.classList.remove('show');
    });

    // YouTube IFrame API 로드
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // YouTube IFrame API 준비 완료 시 호출되는 함수
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-player', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    };

    // 비디오 상태 변경 시 호출되는 함수
    function onPlayerStateChange(event) {
        // 재생 중일 때 (YT.PlayerState.PLAYING = 1)
        if (event.data === YT.PlayerState.PLAYING) {
            bgm.pause();
            isVideoPlaying = true;
        }
        // 종료되었을 때 (YT.PlayerState.ENDED = 0) 또는 일시정지 (YT.PlayerState.PAUSED = 2)
        else if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
            if (bgmStarted) {
                bgm.play();
            }
            isVideoPlaying = false;
        }
    }

    // 탭 전환 기능 (동적으로 생성되는 탭에 대응)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab')) {
            // disabled 탭 클릭 시 접근 거부 메시지 시
            const isDisabled = e.target.getAttribute('data-disabled') === 'true';
            if (isDisabled) {
                const accessDenied = document.getElementById('access-denied');
                accessDenied.classList.add('show');
                
                setTimeout(() => {
                    accessDenied.classList.remove('show');
                }, 2000);
                return;
            }
            
            const tabs = document.querySelectorAll('.tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            
            // 비디오 ID와 타입 가져오기
            const videoId = e.target.getAttribute('data-video');
            const videoType = e.target.getAttribute('data-type');
            
            if (videoId) {
                // 비디오 로드
                loadVideo(videoId, videoType || 'youtube');
            }
        }
    });

    // 화살표 버튼 클릭 이벤트 (열람 가능한 파일 간 이동)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('control-left') || e.target.classList.contains('control-right')) {
            const allTabs = Array.from(document.querySelectorAll('.tab'));
            const activeTab = allTabs.find(tab => tab.classList.contains('active'));
            
            if (!activeTab) return;
            
            // 열람 가능한 탭들만 필터링 (disabled가 아닌 탭들)
            const enabledTabs = allTabs.filter(tab => tab.getAttribute('data-disabled') !== 'true');
            
            if (enabledTabs.length === 0) return;
            
            // 현재 활성화된 탭의 인덱스 찾기
            const currentIndex = enabledTabs.findIndex(tab => tab.classList.contains('active'));
            
            if (currentIndex === -1) return;
            
            let nextIndex;
            
            if (e.target.classList.contains('control-right')) {
                // 오른쪽 화살표: 다음 파일로 (순환)
                nextIndex = (currentIndex + 1) % enabledTabs.length;
            } else {
                // 왼쪽 화살표: 이전 파일로 (순환)
                nextIndex = (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
            }
            
            // 모든 탭에서 active 제거
            allTabs.forEach(tab => tab.classList.remove('active'));
            
            // 다음 탭에 active 추가
            const nextTab = enabledTabs[nextIndex];
            nextTab.classList.add('active');
            
            // 비디오 로드
            const videoId = nextTab.getAttribute('data-video');
            const videoType = nextTab.getAttribute('data-type');
            
            if (videoId) {
                loadVideo(videoId, videoType || 'youtube');
            }
        }
    });

    // 홈 버튼 클릭 이벤트
    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', function() {
        loadPage('JPT_INFORMATION');
        // 모든 메뉴 아이템의 active 클래스 거
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        // 첫 번째 INFORMATION에 active 추가
        document.querySelectorAll('.menu-item')[0].classList.add('active');
    });

    // 메뉴 아이템 클릭 이벤트
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // 비활성화된 버튼 처리
            if (this.classList.contains('disabled')) {
                const accessDenied = document.getElementById('access-denied');
                accessDenied.classList.add('show');
                
                setTimeout(() => {
                    accessDenied.classList.remove('show');
                }, 2000);
                return;
            }

            // 모든 active 클래스 제거
            menuItems.forEach(i => i.classList.remove('active'));
            // 클릭한 아이템에 active 클래스 추가
            this.classList.add('active');

            // 페이지 매핑
            const menuText = this.textContent.trim();
            const previousDivider = Array.from(this.parentElement.children)
                .slice(0, Array.from(this.parentElement.children).indexOf(this))
                .reverse()
                .find(el => el.classList.contains('menu-divider'));
            
            const section = previousDivider ? previousDivider.querySelector('.divider-text').textContent : '';

            let pageKey = '';
            if (section === 'JPT' && menuText === 'INFORMATION') {
                pageKey = 'JPT_INFORMATION';
            } else if (section === 'PROJECT_JUPITER' && menuText === 'INFORMATION') {
                pageKey = 'PROJECT_JUPITER_INFORMATION';
            } else if (section === 'PROJECT_JUPITER' && menuText === 'EXPLORATION_LOG') {
                pageKey = 'PROJECT_JUPITER_EXPLORATION';
            } else if (section === 'THE_APOSTLE_OF_JUPITER' && menuText === 'INFORMATION') {
                pageKey = 'APOSTLE_INFORMATION';
            } else if (section === 'THE_APOSTLE_OF_JUPITER' && menuText === 'RESEARCH_LOGS') {
                pageKey = 'APOSTLE_RESEARCH';
            } else if (section === 'ANOMALIES' && menuText === 'INFORMATION') {
                pageKey = 'ANOMALIES_INFORMATION';
            } else if (section === 'ANOMALIES' && menuText === 'CENSORED_MEDIA') {
                pageKey = 'ANOMALIES_MEDIA';
            }

            if (pageKey) {
                loadPage(pageKey);
            }
        });
    });

    // 접근 거부 메시지 클릭 시 닫기
    const accessDenied = document.getElementById('access-denied');
    accessDenied.addEventListener('click', function() {
        this.classList.remove('show');
    });

    // 현재 페이지 로드
    const savedPage = localStorage.getItem('jpt_current_page');
    if (savedPage) {
        loadPage(savedPage);
    } else {
        loadPage(currentPage);
    }

    // 글리치 효과 시스템
    function triggerGlitchEffect() {
        // 화면 글리치
        const container = document.querySelector('.container');
        container.classList.add('screen-glitch');
        setTimeout(() => {
            container.classList.remove('screen-glitch');
        }, 200);

        // 헤더 타이틀 글리치
        const headerTitle = document.querySelector('.header-title');
        if (headerTitle && Math.random() > 0.5) {
            headerTitle.classList.add('glitch-effect', 'active');
            headerTitle.setAttribute('data-text', headerTitle.textContent);
            setTimeout(() => {
                headerTitle.classList.remove('active');
            }, 300);
        }

        // 브레드크 글리치
        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb && Math.random() > 0.6) {
            breadcrumb.classList.add('glitch-effect', 'active');
            breadcrumb.setAttribute('data-text', breadcrumb.textContent);
            setTimeout(() => {
                breadcrumb.classList.remove('active');
            }, 300);
        }
    }

    // 랜덤 글리치 트리거 (5~15초마다)
    function scheduleNextGlitch() {
        const delay = Math.random() * 10000 + 5000; // 5초 ~ 15초
        setTimeout(() => {
            triggerGlitchEffect();
            scheduleNextGlitch();
        }, delay);
    }

    // 글리치 효과 시작
    scheduleNextGlitch();

    // 공포 점프스퀘어 글리치 효과 (매우 간헐적)
    function triggerJumpscareGlitch() {
        const jumpscare = document.getElementById('jumpscare-glitch');
        const img = jumpscare.querySelector('img');
        
        // 화면 글리치 효과도 함께 발동
        triggerGlitchEffect();
        
        // 랜덤으로 3가지 스케일 중 하나 선택
        const scales = ['scale-large', 'scale-medium', 'scale-normal'];
        const randomScale = scales[Math.floor(Math.random() * scales.length)];
        
        // 랜덤 위치 (-15% ~ 15% 범위, 이미지가 화면을 벗어나지 않도록)
        const randomX = (Math.random() - 0.5) * 30; // -15% ~ 15%
        const randomY = (Math.random() - 0.5) * 30; // -15% ~ 15%
        
        // 랜덤 회전 (-20도 ~ 20도) - 처음부터 회전된 채로 나타남
        const randomRotation = (Math.random() - 0.5) * 40; // -20 ~ 20도
        
        // 이전 스케일 클래스 제거
        jumpscare.classList.remove('scale-large', 'scale-medium', 'scale-normal');
        
        // 새로운 스케일 클래스 추가
        jumpscare.classList.add(randomScale);
        
        // 기본 transform에 랜덤 위치와 회전 적용 (처음부터 회전된 상태로)
        // 상단 중심으로 확대되도록 설정
        const baseScale = randomScale === 'scale-large' ? 1.5 : 
                         randomScale === 'scale-medium' ? 1.2 : 1.0;
        img.style.transform = `translate(${randomX}%, ${randomY}%) rotate(${randomRotation}deg) scale(${baseScale})`;
        
        jumpscare.classList.add('trigger');
        
        // 애니메이션 완료 후 클래스 제거
        setTimeout(() => {
            jumpscare.classList.remove('trigger');
            // transform 초기화
            setTimeout(() => {
                img.style.transform = '';
            }, 100);
        }, 700);
    }

    // 랜덤 점프스퀘어 트리거 (20초마다)
    function scheduleNextJumpscare() {
        const delay = 20000; // 20초
        setTimeout(() => {
            triggerJumpscareGlitch();
            scheduleNextJumpscare();
        }, delay);
    }

    // 점프스퀘어 효과 시작
    scheduleNextJumpscare();
});