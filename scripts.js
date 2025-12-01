// 페이지 데이터
const pageData = {
    'JPT_INFORMATION': {
        breadcrumb: 'JPT // INFORMATION',
        content: `
            <p>[JPT 개요]</p>
            <p>&nbsp;</p>
            <p><span class="en">보안 등급: D</span></p>
            <p><span class="en">설립일:</span> 19██년 ██월 ██일</p>
            <p>&nbsp;</p>
            <p><span class="en">JPT(JUPITER PROJECT TEAM)</span>는 목성 탐사 프로젝트 이후 발생한 목성의 사도 및 이상 변이자들을 격리하고 연구하기 위해 설립된 단체입니다.</p>
            <p>&nbsp;</p>
            <p>본 조직은 정부의 직접 지원을 받으며, 최고 수준의 보안 등급으로 운영됩니다. 모든 자료는 엄격히 관리되며, 무단 접근 시 즉시 체포 및 구금 조치가 이루어집니다.</p>
            <p>&nbsp;</p>
            <p>현재 <span class="en">JPT</span>는 전 세계 47개 지역에 격리 시설을 운영 중이며, 약 ███명의 연구원과 보안 요원이 배치되어 있습니다.</p>
            <p>&nbsp;</p>
            <p>주요 임무:</p>
            <p>- 목성의 사도 격리 및 연구</p>
            <p>- 이상 변이자 격리 및 연구</p>
            <p>- 관련 정보 보안 유지 및 대중 은폐</p>
            <p>&nbsp;</p>
            <p>관련 정보는 보안 등급 A로 분류되었습니다.</p>
        `,
        showVideo: false
    },
    'PROJECT_JUPITER_INFORMATION': {
        breadcrumb: 'PROJECT_JUPITER // INFORMATION',
        content: `
            <p>[PROJECT JUPITER 개요]</p>
            <p>&nbsp;</p>
            <p>보안 등급: D</p>
            <p>탐사일: 19██년 ██월 ██일</p>
            <p>&nbsp;</p>
            <p>PROJECT JUPITER는 인류 최초의 유인 목성 탐사 프로젝트입니다. 19██년에 시작된 이 프로젝트는 궁극적으로 지적 생명체 존재 가능성에 대한 조사를 목표로 합니다.</p>
            <p>&nbsp;</p>
            <p>1409i, 탐사선 "GALILEO II"가 목성의 궤도에 성공적으로 진입했습니다.</p>
            <p>&nbsp;</p>
            <p>1810i, 착륙 모듈이 목성의 위성 ████에 착륙했으나, 예상치 못한 사건이 발생했습니다. 자세한 내용은 EXPLORATION_LOG를 참조하십시오.</p>
            <p>&nbsp;</p>
            <p>현재 이 프로젝트는 JPT의 직접 관리 하에 있으며, 관련 정보는 보안 등급 B로 분류되었습니다.</p>
        `,
        showVideo: false
    },
    'APOSTLE_INFORMATION': {
        breadcrumb: 'THE_APOSTLE_OF_JUPITER // INFORMATION',
        content: `
            <p>[THE APOSTLE OF JUPITER 개요]</p>
            <p>&nbsp;</p>
            <p>보안 등급: D</p>
            <p>개체 번호: J-001</p>
            <p>통칭: 목성의 사도</p>
            <p>&nbsp;</p>
            <p>목성의 사도는 목성 탐사 프로젝트 도중 알 수 없는 이유로 변이한 대원 ████입니다. 변이 과정은 불과 수 분 내에 일어났으며, 현재까지 구체적인 원인은 밝혀지지 않았습니다.</p>
            <p>&nbsp;</p>
            <p>주요 특징:</p>
            <p>- 신체 중앙부에 목성의 대적반과 유사한 나선형 구조</p>
            <p>- 신체 중앙부와 안면부의 개구에서 지속적으로 암흑 물질 배출</p>
            <p>- 불규칙한 주기로 구멍에서 안광으로 보이는 불빛 식별</p>
            <p>- 지속적으로 강력한 자기장 방출 (최대 ██ 테슬라)</p>
            <p>&nbsp;</p>
            <p>현재 목성의 사도는 제7 격리 시설 지하 4층 특수 챔버에 격리되어 있으며, 24시간 감시 체계가 유지되고 있습니다.</p>
            <p>&nbsp;</p>
            <p>경고: 개체와의 무단 접촉은 엄격히 금지됩니다.</p>
        `,
        showVideo: false
    },
    'APOSTLE_RESEARCH': {
        breadcrumb: 'THE_APOSTLE_OF_JUPITER // RESEARCH_LOG',
        showVideo: true,
        videoTabs: [
            { id: 'test.png', name: 'FILE_1', type: 'image' },
            { id: 'test.png', name: 'FILE_2', type: 'image' },
            { id: '', name: 'FILE_3', disabled: true },
            { id: 'test.png', name: 'FILE_4', type: 'image' },
            { id: 'test.png', name: 'FILE_5', type: 'image' },
            { id: '', name: 'FILE_6', disabled: true },
            { id: 'test.png', name: 'FILE_7', type: 'image' },
            { id: 'test.png', name: 'FILE_8', type: 'image' },
            { id: '', name: 'FILE_9', disabled: true },
            { id: '', name: 'FILE_10', disabled: true },
            { id: 'test.png', name: 'FILE_11', type: 'image' },
            { id: 'test.png', name: 'FILE_12', type: 'image' }
        ],
        videoTitle: '19██-10-07',
        videoTexts: {
            'FILE_1': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1410i, 정부 지원 하에 이루어진 유인 목성 탐사 임무 중, 낙오된 대원 ████(이하 목성의 사도)이 기괴한 변이했습니다. 변이는 수분 내로 이루어졌으며, 현장 지휘관 [데이터 말소]의 판단으로 확보되었습니다. 당국은 이 사실을 철저히 은폐하고, JPT(Jupiter Project Team)를 설립하여 목성의 사도를 격리했습니다.</p>
                <br>
                <p>1413i, 목성의 사도는 현재 JPT 소속 제7 격리 시설 지하 4층의 특수 챔버(이하 격��� 시설)에 격리 중입니다.</p>
                <br>
                <p>1415i, 확보 개체는 일부 인간의 형태를 유지하고 있으나 강력한 자기장을 방출하고 있으며, 피부에 정체를 알 수 없는 붉은 소용돌이 무늬가 불규칙적으로 번지고 있습니다.</p>
                <br>
                <p>1415i, 목성의 사도는 의미를 알 수 없는 낮고 그로테스크한 소음만을 간헐적으로 배출하고 있습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_2': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1405i, 목성의 사도는 현재까지 격리 챔버 내에서 외형적인 변화 없이 안정적으로 격리 상태를 유지하고 있다. 초기 관찰되었던 붉은 소용돌이 무늬는 여전히 간헐적으로 짙어지거나 옅어지는 패턴을 반복할 뿐이며, 이외 신체적인 변화는 관찰되지 않았습니다.</p>
                <br>
                <p>1805i, 측정 불가능한 수준의 에너지가 꾸준히 방출되고 있습니다. 이 에너지를 착취하기 위한 억제 기술 및 역이��� 기술 연구가 진행 중이나, 아직 실질적인 성과는 도출되지 않았습니다. 챔버 외부의 자기장 왜곡 현상은 미세하게 지속되고 있다.</p>
                <br>
                <p>1806i, 지난 6일간 생체 데이터에 큰 변동이 없었습니다. 금일 1300i 검사 결과, 생체 신호는 정상에 가까우나, 심장 박동이 일반적인 인간에 비해 약 2배 빠릅니다.(210BPM)</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_4': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1809i, 오늘 격리 시설 내부 온도가 급격히 상승하는 이상 현상이 관측되었습니다. 외부 온도는 21°C로 정상이나, 격리 챔버 내부는 43°C까지 치솟았습니다. 냉각 시스템을 최대 출력으로 가동했으나 온도 하락 효과는 미미했습니다.</p>
                <br>
                <p>1812i, 개체 J-001의 신체 표면에서 미세한 열기류가 관측되고 있습니다. 붉은 소용돌이 무늬의 색상이 평소보다 약 30% 더 선명해졌으며, 불규칙한 맥동 패턴을 보이고 있습니다.</p>
                <br>
                <p>1814i, 챔버 내부 온도가 51°C에 도달했습니다. 연구원들의 안전을 위해 직접 관찰을 중단하고 원격 감시로 전환했습니다. 개체의 그로테스크한 소음 배출 빈도가 증가했습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_5': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1900i, 개체 J-001이 처음으로 명확한 움직임을 보였습니다. 격리 이후 12일 만에 관측된 최초의 자발적 행동입니다. 개체는 천천히 고개를 들어 감시 카메라를 응시했습니다.</p>
                <br>
                <p>1903i, 개체의 안면부 개구에서 평소보다 3배 많은 암흑 물질이 배출되고 있습니다. 챔버 바닥에 고인 암흑 물질의 깊이가 약 7cm에 달합니다. 물질의 점성과 밀도가 증가하고 있으며, 정체불명의 악취가 감지되었습니다.</p>
                <br>
                <p>1907i, 개체가 입을 벌렸습니다. 구강 내부에서 목성의 대적반과 동일한 패턴의 붉은 소용돌이가 관측되었습니다. 소용돌이는 시계 반대 방향으로 회전하고 있으며, 중심부에서 미약 광원이 감지됩니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_7': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>2003i, 개체 J-001 주변에서 중력 이상 현상이 감지되었습니다. 챔버 내부에 설치된 소형 물체들이 개체를 중심으로 약 1.2m 반경 내에서 공중 부양하고 있습니다. 이는 개체가 국소적인 중력장을 생성하고 있음을 시사합니다.</p>
                <br>
                <p>2005i, 부유하는 물체들이 개체 주위를 궤도 운동하기 시작했습니다. 공전 주기는 약 47초이며, 목성의 위성 궤도와 유사한 패턴을 보입니다. 이 현상은 개체가 목성의 특성을 모방하고 있을 가능성을 제기합니다.</p>
                <br>
                <p>2008i, 중력장의 강도가 증가하고 있습니다. 챔버 벽면에 균열이 발생했으며, 일부 감시 장비가 파손되었습니다. 긴급 격리 강화 프로토콜을 발동했습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_8': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>2104i, 오늘 새벽 0312i, 개체 J-001이 최초로 음성을 발성했습니다. "...돌아가고 싶다..."는 단어가 명확히 식별되었습니다. 음성은 극도로 왜곡되어 있었으나, 분석 결과 변이 이전 대원 ████의 목소리와 87% 일치합니다.</p>
                <br>
                <p>2106i, 개체의 발성이 계속되고 있습니다. "집에... 아내... 아이들..." 등의 단편적인 단어들이 반복적으로 들립니다. 이는 개체 내부에 여전히 인간 의식이 잔존하고 있을 가능성을 시사합니다.</p>
                <br>
                <p>2109i, 개체가 격리 챔버 벽을 향해 손을 뻗었습니다. 접촉 순간 벽면이 약 15cm 깊이로 함몰되었으며, 접촉 지점에서 붉은 소용돌이 무늬가 벽면으로 전이되는 현상이 관측되었습니다. 즉시 개체를 진정시키기 위한 조치를 취했습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_11': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>2307i, 개체 J-001의 신체에서 새로운 변화가 관측되었습니다. 등 부위에 4개의 돌기가 생성되기 시작했으며, 각 돌기의 끝부분에서 미약한 전기 방전이 감지되고 있습니다.</p>
                <br>
                <p>2310i, 돌기가 완전히 형성되었습니다. 길이는 각각 약 35cm이며, 촉수처럼 자유롭게 움직입니다. 돌기 표면에도 붉은 소용돌이 무늬가 새겨져 있으며, 개체의 신체와 동기화되어 맥동하고 있습니다.</p>
                <br>
                <p>2313i, 돌기가 공중의 물체를 포획하는 행동을 보였습니다. 포획된 물체는 돌기에 흡수되어 소멸했습니다. 이는 개체가 외부 물질을 흡수하여 에너지원��로 사용할 수 있음을 의미합니다. 격리 챔버 내 모든 물체를 제거했습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_12': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>2501i, 오늘 개체 J-001이 완전히 정지 상태에 들어갔습니다. 모든 움직임이 멈췄으며, 소음 배출도 중단되었습니다. 생체 신호는 감지되나 극도로 미약합니다. 심박수가 분당 12회까지 하락했습니다.</p>
                <br>
                <p>2504i, 개체의 신체 표면에서 결정화 현상이 관측되고 있습니다. 붉은 소용돌이 무늬가 고체화되면서 유리처럼 투명한 결정 구조로 변화하고 있습니다. 결정 내부에서 미약한 빛의 맥동이 관측됩니다.</p>
                <br>
                <p>2507i, 개체가 완전히 결정화되었습니다. 외형은 인간의 형태를 유지하고 있으나, 전체가 붉은 빛을 발하는 투명한 결정체로 변화했습니다. 이것이 변이의 최종 단계인지, 아니면 새로운 변화의 시작인지는 불명확합니다. 지속적인 관찰이 필요합니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `
        }
    },
    'ANOMALIES_INFORMATION': {
        breadcrumb: 'ANOMALIES // INFORMATION',
        content: `
            <p>[JPT 기록] 이상 현상 정보</p>
            <p>&nbsp;</p>
            <p>기밀 등급: TOP SECRET</p>
            <p>&nbsp;</p>
            <p>JPT는 목성 탐사 프로젝트 후 다양한 이 현상들을 관찰하고 있습니다. 이러한 현상들은 기존 과학으로는 설명할 수 없는 특성들을 보이고 있습니다.</p>
            <p>&nbsp;</p>
            <p>현재까지 기록된 주요 이상 현상:</p>
            <p>&nbsp;</p>
            <p>A-001: 자기장 이상 - 목성 표면에서 관측된 비정상적 자기장 패턴</p>
            <p>A-002: 생체 변이 - J-001 포함한 여�� 생명체 급격한 변이</p>
            <p>A-003: 시공간 왜곡 - 특정 지역서 관측된 시간 흐름의 불일치</p>
            <p>A-004: [데이터 말소]</p>
            <p>&nbsp;</p>
            <p>모든 이상 현상은 지속적으로 모니터링되고 있으며, 관련 데이터는 CENSORED_MEDIA 섹션에 보관되어 있습니다.</p>
        `,
        showVideo: false
    },
    'ANOMALIES_MEDIA': {
        breadcrumb: 'ANOMALIES // CENSORED_MEDIA',
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
        videoTitle: 'UNKNOWN_SIGNAL_RECORD',
        videoTexts: {
            'FILE_1': `
                <p><span class="en">FILE: UNKNOWN_SIGNAL_RECORD</span></p>
                <p><span class="en">DATE:</span> <span class="en">1415i</span></p>
                <p><span class="en">SOURCE:</span> <span class="en">DEEP_SPACE_ARRAY_07</span></p>
                <p><span class="en">FREQUENCY:</span> <span class="en">██.██ MHz</span></p>
                <br>
                <p><span class="en">DESCRIPTION:</span></p>
                <p>목성 궤도에서 수신된 정체불명의 신호 패턴입니다. 반복적인 주기를 보이며, 자연 현상으로는 설명할 수 없는 구조를 가지고 습다.</p>
                <br>
                <p class="en">CORE CONTENTS:</p>
                <p>- 비정상적인 주파수 패턴 감지</p>
                <p>- 반복 주기: 약 ██분 ██초</p>
                <p>- 지적 설계 가능성: 87%</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 신호의 출처와 의미는 현재 분석 중입니다. 무단 복제 및 외부 유출 시 즉시 처벌됩니다.</p>
            `,
            'FILE_4': `
                <p><span class="en">FILE: CONTAINMENT_BREACH_FOOTAGE</span></p>
                <p><span class="en">DATE:</span> <span class="en">[REDACTED]</span></p>
                <p><span class="en">LOCATION:</span> <span class="en">FACILITY 7 - SECTOR B</span></p>
                <p><span class="en">INCIDENT_CODE:</span> <span class="en">RED-ALPHA-7</span></p>
                <br>
                <p><span class="en">DESCRIPTION:</span></p>
                <p>제7 격리 시설에서 생한 격리 실패 사건의 감시 카메라 영상입니다. 사건 당시 ██명의 연구원과 보안 요원이 실종되었습니다.</p>
                <br>
                <p class="en">CORE CONTENTS:</p>
                <p>- 격리 프로토콜 실패 (T+0:00)</p>
                <p>- 개체 이상 행동 관측 (T+2:15)</p>
                <p>- 긴급 대피 명령 발동 (T+5:43)</p>
                <p>- [데이터 손상] (T+7:██)</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">본 자료는 극비로 분류되어 있습니다. A등급 이상 보안 인가 없이 열람 시 즉시 금됩니다.</p>
            `
        }
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
        // localStorage에서 저장된 탭 가져오기
        const savedTab = localStorage.getItem(`jpt_current_tab_${pageKey}`);
        
        videoTabsContainer.innerHTML = data.videoTabs.map((tab, index) => {
            // 저장된 탭이 있으면 해당 탭을 active로, 없으면 첫 번째 활성화된 탭을 active로
            const isActive = savedTab ? (tab.name === savedTab && !tab.disabled) : (index === 0 && !tab.disabled);
            return `<div class="tab ${isActive ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}" data-video="${tab.id}" data-type="${tab.type || 'youtube'}" data-disabled="${tab.disabled || false}">${tab.name}</div>`;
        }).join('');
        
        // 저장된 탭이 있으면 해당 탭 로드, 없으면 첫 번째 활성화된 비디오 로드
        let tabToLoad;
        if (savedTab) {
            tabToLoad = data.videoTabs.find(tab => tab.name === savedTab && !tab.disabled);
        }
        if (!tabToLoad) {
            tabToLoad = data.videoTabs.find(tab => !tab.disabled);
        }
        
        if (tabToLoad) {
            loadVideo(tabToLoad.id, tabToLoad.type || 'youtube');
            updateVideoText(tabToLoad.name);
            updateBreadcrumbWithFile(tabToLoad.name);
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

// 메뉴 아이템 활성화 상태 업데이트
function updateActiveMenuItem(pageKey) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // pageKey에 따라 해당 메뉴 아이템 찾기
    const pageToMenuMap = {
        'JPT_INFORMATION': { section: 'JPT', menu: 'INFORMATION' },
        'PROJECT_JUPITER_INFORMATION': { section: 'PROJECT_JUPITER', menu: 'INFORMATION' },
        'APOSTLE_INFORMATION': { section: 'THE_APOSTLE_OF_JUPITER', menu: 'INFORMATION' },
        'APOSTLE_RESEARCH': { section: 'THE_APOSTLE_OF_JUPITER', menu: 'RESEARCH_LOG' },
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
    } else if (type === 'image') {
        // 이미지 로드
        videoPlayerContainer.innerHTML = `
            <img 
                id="image-player"
                src="/images/${videoId}" 
                alt="Image" 
                width="100%" 
                height="100%" 
                style="object-fit: contain;">
        `;
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

// 브레드크럼 및 비디오 제목 업데이트 함수
function updateBreadcrumbWithFile(fileName) {
    const data = pageData[currentPage];
    if (!data) return;
    
    // 비디오 제목 매핑
    const videoTitleMap = {
        'APOSTLE_RESEARCH': {
            'FILE_1': '19██-10-07',
            'FILE_2': '19██-10-14',
            'FILE_3': '19██-10-21',
            'FILE_4': '19██-10-28',
            'FILE_5': '19██-11-04',
            'FILE_6': '19██-11-11',
            'FILE_7': '19██-11-18',
            'FILE_8': '19██-11-25',
            'FILE_9': '19██-12-02',
            'FILE_10': '19██-12-09',
            'FILE_11': '19██-12-16',
            'FILE_12': '19██-12-23'
        },
        'ANOMALIES_MEDIA': {
            'FILE_1': 'UNKNOWN_SIGNAL_RECORD',
            'FILE_4': 'CONTAINMENT_BREACH_FOOTAGE'
        }
    };
    
    const videoTitle = videoTitleMap[currentPage]?.[fileName] || fileName;
    
    // 비디오 제목 업데이트
    const videoTitleElement = document.querySelector('.video-title');
    if (videoTitleElement) {
        videoTitleElement.textContent = videoTitle;
    }
    
    // 브레드크럼 업데이트
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `<span>${data.breadcrumb}</span><span class="separator"> // </span><span class="current">${fileName} (${videoTitle})</span>`;
}

// 비디오 텍스트 업데이트 함수
function updateVideoText(fileName) {
    const data = pageData[currentPage];
    if (!data || !data.videoTexts) return;
    
    const videoText = data.videoTexts[fileName];
    if (!videoText) return;
    
    // 비디오 텍스트 업데이트
    const videoTextElement = document.querySelector('.video-text');
    if (videoTextElement) {
        videoTextElement.innerHTML = videoText;
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    // BGM 초기화 (자동 재생 안함)
    bgm = document.getElementById('bgm');
    bgm.volume = 0.2; // 볼륨을 20%로 설정 (0.0 ~ 1.0)
    let isVideoPlaying = false;

    // 고 배너 스크롤 애니메이션 활성화
    const warningText = document.querySelector('.warning-text');
    if (warningText) {
        warningText.classList.add('scrolling');
    }

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
            // disabled 탭 클릭 시 접근 거부 메시지 표시
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
            const fileName = e.target.textContent.trim();
            
            if (videoId) {
                // localStorage에 현재 탭 저장
                localStorage.setItem(`jpt_current_tab_${currentPage}`, fileName);
                
                // 비디오 로드
                loadVideo(videoId, videoType || 'youtube');
                
                // 브레드크럼과 비디오 제목 업데이트
                updateBreadcrumbWithFile(fileName);
                // 비디오 텍스트 업데이트
                updateVideoText(fileName);
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
            const fileName = nextTab.textContent.trim();
            
            if (videoId) {
                // localStorage에 현재 탭 저장
                localStorage.setItem(`jpt_current_tab_${currentPage}`, fileName);
                
                loadVideo(videoId, videoType || 'youtube');
                // 브레드크럼과 비디오 제목 업데이트
                updateBreadcrumbWithFile(fileName);
                // 비디오 텍스트 업데이트
                updateVideoText(fileName);
            }
        }
    });

    // 홈 버튼 클릭 이벤트
    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', function() {
        loadPage('JPT_INFORMATION');
        // 모든 메뉴 아이템의 active 클래스 제거
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
            } else if (section === 'THE_APOSTLE_OF_JUPITER' && menuText === 'INFORMATION') {
                pageKey = 'APOSTLE_INFORMATION';
            } else if (section === 'THE_APOSTLE_OF_JUPITER' && menuText === 'RESEARCH_LOG') {
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

        // 브레드크럼 글리치
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
        
        // 랜덤으로 3가지 스케일 중 하나 선택 (큰 크기로 변경)
        const scales = [1.3, 1.5, 1.7];
        const randomScale = scales[Math.floor(Math.random() * scales.length)];
        
        // 랜덤 위치 (±15% 범위)
        const randomX = (Math.random() - 0.5) * 30; // -15% ~ 15%
        const randomY = (Math.random() - 0.5) * 30; // -15% ~ 15%
        
        // 랜덤 회전 (±20도 범위)
        const randomRotation = (Math.random() - 0.5) * 40; // -20 ~ 20도
        
        // 기본 transform에 랜덤 위치, 회전, 스케일 적용
        img.style.transform = `translate(${randomX}%, ${randomY}%) rotate(${randomRotation}deg) scale(${randomScale})`;
        
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