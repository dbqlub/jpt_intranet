// 페이지 데이터
const pageData = {
    'JPT_INFORMATION': {
        breadcrumb: 'JPT // INFORMATION',
        content: `
            <p>[JPT 개요]</p>
            <p>&nbsp;</p>
            <p><span class="en">보안 등급: D</span></p>
            <p><span class="en">설립일:</span> ████년 ██월 ██일</p>
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
            <p>탐사일: ████년 ██월 ██일</p>
            <p>&nbsp;</p>
            <p>PROJECT JUPITER는 인류 최초의 유인 목성 탐사 프로젝트입니다. ████년에 시작된 이 프로젝트는 궁극적으로 지적 생명체 존재 가능성에 대한 조사를 목표로 합니다.</p>
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
            <p>&nbsp;</p>
            <p>개체 번호: J-001</p>
            <p>별칭: 목성의 사도</p>
            <p>&nbsp;</p>
            <p>목성의 사도는 목성 탐사 프로젝트 도중 변이한 대원 ████입니다. 현재까지 구체적인 원인은 밝혀지지 않았습니다.</p>
            <p>&nbsp;</p>
            <p>주요 특징:</p>
            <p>- 신체 중앙부에 목성의 대적반과 유사한 형태의 나선형 개구</p>
            <p>- 안면부와 복부 개구에서 지속적으로 암흑 물질 배출</p>
            <p>- 불규칙한 주기로 개구에서 안광으로 보이는 불빛 식별</p>
            <p>- 지속적으로 강력한 에너지 방출</p>
            <p>&nbsp;</p>
            <p>현재 목성의 사도는 제7 격리 시설 지하 4층 특수 챔버에 격리되어 있으며, 24시간 감시 체계가 유지되고 있습니다. 개체와의 무단 접촉은 일체 금지합니다.</p>
        `,
        showVideo: false
    },
    'APOSTLE_RESEARCH': {
        breadcrumb: 'THE_APOSTLE_OF_JUPITER // RESEARCH_LOG',
        showVideo: true,
        videoTabs: [
            { id: 'image1.png', name: 'FILE_1', type: 'image' },
            { id: 'image2.png', name: 'FILE_2', type: 'image' },
            { id: '', name: 'FILE_3', disabled: true },
            { id: 'image4.png', name: 'FILE_4', type: 'image' },
            { id: 'image5.png', name: 'FILE_5', type: 'image' },
            { id: '', name: 'FILE_6', disabled: true },
            { id: 'image7.png', name: 'FILE_7', type: 'image' },
            { id: 'image8.png', name: 'FILE_8', type: 'image' },
            { id: 'image9.mp4', name: 'FILE_9', type: 'image' },
            { id: '', name: 'FILE_10', disabled: true },
            { id: 'image11.mp4', name: 'FILE_11', type: 'image' }
        ],
        videoTitle: '████-10-07',
        videoTexts: {
            'FILE_1': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1410i, 정부 지원 하에 이루어진 유인 목성 탐사 임무 중, 대원 ████이 변이해 현장 지휘관 ████의 판단으로 확보되었습니다. 당국은 이 사실을 철저히 은폐하고, JPT를 설립해 J-001를 격리했습니다.</p>
                <br>
                <p>1930i, 개체는 현재 JPT 소속 제7 격리 시설 지하 4층의 특수 챔버에 격리 중입니다. 일부 인간의 형태를 유지하고 있으나, 인간으로서의 생사 여부는 알 수 없습니다.</p>
                <br>
                <p>2030i, 연구원 회의 결과, 목성 인근으로부터 미상의 바이러스가 대원에게 침투한 것으로 추정했습니다. 한 연구 목성의 지성체 또는 목성 자체가 무언가의 의도를 가지고 대원을 '목성의 사도'로 변이시켰다고 주장합니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_2': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1407i, J-001의 안면부는 미상의 촉수로 인해 뚫려, 개구가 형성되었습니다. 또한, 하반신이 녹아내리기 시작했습니다.</p>
                <br>
                <p>1530i, 개체로부터 측정 불가능한 수준의 에너지가 방출되고 있습니다. 해당 에너지를 착취하기 위한 억제 기술 및 역이용 기술 연구가 진행 중이나, 아직 실질적인 성과는 도출되지 않았습니다.</p>
                <br>
                <p>1800i, 지난 6일간 생체 데이터에 큰 변동이 없었습니다. 금일 1300i 검사 결과, 생체 신호는 정상에 가까우나, 심장 박동이 일반적인 인간에 비해 약 2배 빠릅니다.(210BPM)</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_4': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1809i, 격리 챔버 내부 온도가 급격히 상승하는 이상 현상이 관측되었습니다. 외부 온도는 21°C로 정상이나, 격리 챔버 내부는 43°C까지 치솟았습니다. 냉각 시스템을 최대 출력으로 가동했습니다.</p>
                <br>
                <p>2050i, 개체의 하반신이 완전히 녹아내렸습니다. 내부의 장기가 쏟아져 널부러져 있으며, 부패가 진행 중입니다.</p>
                <br>
                <p>2053i, J-001이 처음으로 명확한 움직임을 보였습니다. 격리 이후 157일 만에 관측된 최초의 자발적 행동입니다.</p>
                <br>
                <p>2135i, 개체의 움직임이 심해지기 시작하더니, 16분에 걸쳐 정자세(로 추정) 일어섰으며, 안면부와 부 개구가 식별되었습니다. 정체불명의 악취가 챔버를 뚫고 감지되었습니다.</p>
                <br>
                <p>2200i, 챔버 내부 온도가 51°C에 도달했습니다. 연구원들의 안전을 위해 현장 관찰을 중단하고 원격 감시로 전환했습니다. 개체의 그로테스크한 소음 배출 빈도가 증가했습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_5': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1420i, J-001의 크기가 성장을 지속해, 2m 40cm를 넘겼습니다. 성장세를 지켜보고 격리 챔버 교체 필요 여부를 검토하겠습니다.</p>
                <br>
                <p>1500i, 상부에서 개체의 성장이 잦아드는대로 생체 실험을 진행할 것을 촉구했습니다.</p>
                <br>
                <p style="color: #999999;">"가학적인 새끼. ██ 그 얼간이는 동정심 하나 없어. 현장에 우리 애들을 투입한다고?" - B등급 요원 ████</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_7': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1521i, J-001의 성장이 멈췄음을 확인했으며, 격리 챔버에 D등급 요원을 투입해 촉수와 하부에 고정용 사슬을 부착했습니다. 투입한 요원 12명 중 4명이 촉수의 갑작스러운 물리 공격에 의해 사망했습니다.</p>
                <br>
                <p>1600i, 내구도 테스트를 위해 격리실 내부 기압을 120배로 높이고, 중력을 4배 증강했습니다. 챔버 벽면에 균열이 발생했으며, 일부 감시 장비가 파손되었습니다. 긴급 격리 강화 프로토콜을 발동했습니다.</p>
                <br>
                <p>1614i, 높은 압력으로 인해 개체의 피부가 으깨지고 [데이터 말소]이 터져 나왔습니다. 강렬한 진동으로 인해 관찰 장비 2대가 손상되었습니다.</p>
                <br>
                <p>1615i, 개체의 복부 개구에서 촉수로 추정되는 물체가 다수 돌출했습니다. 또한 정체불명의 괴성을 포효했으나, '괴로움을 흉내내고자 고안한 행동'으로 일축하기로 합의했습니다.</p>
                <br>
                <p>1728i, 챔버 내부 온도가 일시적으로 68°C까지 상승했습니다. 연구원들의 안전을 위해 현장 관찰을 중단하고 원격 감시로 전환했습니다.</p>
                <br>
                <p style="color: #999999;">"다들 미쳤어. 완전히 미쳤어. 난 모르겠어. 누가 괴물인지." - 객원 연구원 L 박사</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_8': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1500i, J-001의 구멍에 원격 드론을 투입시킨 결과, 드론은 수분간 비행 끝에 신호를 잃었습니다. 카메라엔 도저히 해석할 수 없는 물체들과, 렌즈를 포함한 드론의 일부가 촬영되었습니다. 긴급 회의 결과, 구멍 내부는 3차원 공간이 아닌 것으로 가정했습니다.</p>
                <br>
                <p>1600i, 개체의 피부 성분 연구를 위해 50,000V에서 최대 10MV의 전류를 흘려보냈습니다. 개체는 50,000V의 경우 경미한 혼란 반응을 보였으나, 전류를 높일수록 오히려 반응이 잦아들었습니다. 일부 연구원들은 체가 점차 '적응'하는 것이 아닌지 의문을 제기했습니다.</p>
                <br>
                <p>1634i, 50,000V 실험 이후, 챔버 내부 온도가 점차 상승해, 최대 82°C까지 상승했습니다. 연구원들의 안전을 위해 현장 관찰을 중단하고 원격 감시로 전환했습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_9': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1005i, 전 세계적으로 이상 변이 현상이 발생했습니다. 불특정 다수의 몸이 뒤틀리고 비이성적인 행동을 한다는 보고가 올라왔습니다.</p>
                <br>
                <p>1010i, 개체의 안면부와 복부의 개구에서 안광으로 추정되는 미상의 불빛이 간헐적으로 식별되고 있습니다.</p>
                <br>
                <p>1300i, 의회, FBI와의 긴급 공조회의 결과, J-001과 밀접한 관련이 있을 것이라는 가설을 설정하고 개체를 제거하기 위한 절차에 들어갔습니다.</p>
                <br>
                <p>2305i, 연구원 ██명이 실종되었습다. CCTV 확인 결과, 그들은 격리 챔버 방향으로 걸어갔으나 도착 기록이 없습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_11': `
                <p><span class="en">작성자: Dr. R. K.</span></p>
                <br>
                <p>1000i, J-001 제거를 위해 한 시간 간격으로 VX, 치클론 B, 염산, 겨자 가스를 이용한 다중 화학 공격을 실시했습니다.</p>
                <br>
                <p>1101i, 다중 화학 공격 결과, 개체는 염산에 미세한 동요를 했으나 금새 적응한듯 합니다. 육안으로 식별되는 수준의 재생력이 확인되었습니다. 임원진 사이에서 공격에 대한 회의적인 여론이 강해졌습니다.</p>
                <br>
                <p>1750i, 기존 JPT 연구원의 67%가 이상 변이자로 변이했으며, 신규 연구원 채용률도 5% 미만으로 매우 낮습니다. 누적된 피해로 인해 연구소 시스템의 42%가 가동 불능 상태가 되었습니다.</p>
                <br>
                <p>1800i, 세계적인 이상 변이 현상은 지속되고 있으며, 상부는 개체에 대한 핵 공격을 검토하고 있니다.</p>
                <br>
                <p>2030i, 외부의 정보 통제는 위태롭게 유지되고 있으며, JPT 내부 시스템은 붕괴되기 직전입니다.</p>
                <br>
                <p style="color: #999999;">"젠장, 목성의 혹독한 환경에서도 살아왔다 이건가? 아무 소용이 없군." - 화생방 부대 K 대령</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `
        }
    },
    'ANOMALIES_INFORMATION': {
        breadcrumb: 'ANOMALIES // INFORMATION',
        content: `
            <p>[ANOMALIES 개요]</p>
            <p>&nbsp;</p>
            <p>보안 등급: D</p>
            <p>&nbsp;</p>
            <p>████년 ██월 ██일을 기점으로 이상 변이 현상이 발생했습니다. 변이를 겪는 이상 변이자는 기괴하게 몸이 뒤틀리고, 알 수 없는 말을 지껄이는 등의 비이성적인 행동을 합니다. 전 세계에서 동시다발적으로 발생하고 있으며, 목성의 사도(J-001)과 밀접한 관련이 있으리라 추정하고 있습니다.</p>
            <p>&nbsp;</p>
            <p>현재까지 기록된 주요 이상 현상:</p>
            <p>&nbsp;</p>
            <p>JPT는 상부의 지시에 의거해, 47개국에 지부를 설치하고 이상 변이 현상에 대한 정보를 통제를 실시하고 있습니다.</p>
            <p>&nbsp;</p>
            <p>이상 변이 현상은 지속적으로 모니터링되고 있으며, 일부 데이터는 CENSORED_MEDIA 섹션에 보관되어 있습니다.</p>
        `,
        showVideo: false
    },
    'ANOMALIES_MEDIA': {
        breadcrumb: 'ANOMALIES // CENSORED_MEDIA',
        showVideo: true,
        videoTabs: [
            { id: 'news.mp4', name: 'FILE_1', type: 'video' },
            { id: '', name: 'FILE_2', disabled: true },
            { id: '', name: 'FILE_3', disabled: true },
            { id: 'bodycam.mp4', name: 'FILE_4', type: 'video' },
            { id: '', name: 'FILE_5', disabled: true },
            { id: '', name: 'FILE_6', disabled: true },
            { id: '', name: 'FILE_7', disabled: true }
        ],
        videoTitle: 'NEWS',
        videoTexts: {
            'FILE_1': `
                <p>출처: NSK 방송국</p>
                <p>위치: 미국 워싱턴 D.C., 백악관 북쪽 잔디밭</p>
                <p>대상: NSK 소속 리포터 ███</p>
                <p>일시: ████년 ██월 ██일 1804i</p>
                <p>상태: 해당 방송 송출 강제 중단 완료 / 비디오 수거 완료</p>
                <br>
                <p>백악관에서 발생한 이상 변이 현상에 대해 보도하던 리포터가 이상 변이를 겪는 비디오입니다. 리포터의 경추가 비정상적으로 연장되며, 안면 근육이 파열될 정도로 입꼬리가 올라가는 전형적인 변이의 형태가 포착됩니다. 이후, 리포터의 언어 중추에 간섭이 발생하여 특정 문장이 송출됩니다.</p>
                <br>
                <p>해당 방송사의 위성 송출 신호를 14초 만에 차단했습니다. 시청자들에게는 "태양 흑점 폭발로 인한 통신 장애"라는 해명을 유포했습니다. 현장에 있던 카메라맨 및 스태프는 전원 실종 처리되었습니다.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `,
            'FILE_4': `
                <p>출처: B등급 요원 ██의 바디캠</p>
                <p>위치: 대한민국 육군 제23 병기고</p>
                <p>대상: 이종범 병장</p>
                <p>일시: ████년 ██월 ██일 1804i</p>
                <p>상태: 비디오 수거 완료</p>
                <br>
                <p>변이 징후가 포착되어 체포 팀이 출동했고, '이범 병장'을 대한민국 제3 격리 시설로 이송하기 위해 현장에 도착했습니다. 개체는 벽을 바라보며 미약한 움직임만을 반복하고 있었으나, 대상의 경추가 뒤틀리며 등 뒤의 요원을 응시했습니다. 개체의 손과 입엔 수류탄이 있었으며, 배 속에도 다수의 수류탄이 존재하는 것으로 추정됩니다. 이후, 수류탄 격발로 인해 요원 7명이 현장에서 즉사했고, 개체또한 산산조각 났습니다.</p>
                <br>
                <p>해당 사건은 군부대 내 폭발물 관리 소홀로 인한 사고로 위장해 유가족에게 통보했습니다.</p>
                <br>
                <p>연구팀 소견: 사도 감염체는 위기 상황에서 자폭을 선택하거나 동귀어진하려는 '군집 지성'의 명령을 받는 것으로 보임. 향후 모든 변이체 포획 시 폭발물 소지 여부를 최우선으로 스캔할 것.</p>
                <br>
                <p style="color: #e53d2e;"><span class="en">WARNING:</span></p>
                <p style="color: #e53d2e;">이 자료의 무단 열람, 복사, 배포는 엄격히 금지되어 있습니다.</p>
            `
        }
    }
};

let currentPage = 'APOSTLE_RESEARCH';
let player = null;
let bgm = null;
let bgmStarted = false;

function loadPage(pageKey) {
    const data = pageData[pageKey];
    if (!data) return;

    currentPage = pageKey;
    sessionStorage.setItem('jpt_current_page', pageKey);

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

    const documentText = document.querySelector('.document-text');
    documentText.innerHTML = data.content;

    const videoFrame = document.querySelector('.video-frame');
    const mainContent = document.querySelector('.main-content');
    
    if (data.showVideo) {
        videoFrame.style.display = 'block';
        mainContent.style.display = 'none';
    } else {
        videoFrame.style.display = 'none';
        mainContent.style.display = 'block';
    }

    const videoTabsContainer = document.querySelector('.video-tabs');
    
    if (data.videoTabs) {
        const savedTab = sessionStorage.getItem(`jpt_current_tab_${pageKey}`);
        
        videoTabsContainer.innerHTML = data.videoTabs.map((tab, index) => {
            const isActive = savedTab ? (tab.name === savedTab && !tab.disabled) : (index === 0 && !tab.disabled);
            return `<div class="tab ${isActive ? 'active' : ''} ${tab.disabled ? 'disabled' : ''}" data-video="${tab.id}" data-type="${tab.type || 'youtube'}" data-disabled="${tab.disabled || false}">${tab.name}</div>`;
        }).join('');
        
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

    const videoTitle = document.querySelector('.video-title');
    if (data.videoTitle) {
        videoTitle.textContent = data.videoTitle;
    } else {
        videoTitle.textContent = '';
    }
    
    updateActiveMenuItem(pageKey);
}

function updateActiveMenuItem(pageKey) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));
    
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

function loadVideo(videoId, type = 'youtube') {
    const videoPlayerContainer = document.querySelector('.video-player');
    
    if (type === 'vimeo') {
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
    } else if (type === 'video') {
        videoPlayerContainer.innerHTML = `
            <video controls style="width: 100%; height: 100%; object-fit: contain;">
                <source src="./videos/${videoId}" type="video/mp4">
                비디오를 로드할 수 없습니다.
            </video>
        `;
        
        const videoElement = videoPlayerContainer.querySelector('video');
        
        // 비디오 로드 에러 확인
        videoElement.addEventListener('error', function(e) {
            console.error('비디오 로드 에러:', e);
            console.error('비디오 경로:', `./videos/${videoId}`);
        });
        
        videoElement.addEventListener('loadeddata', function() {
            console.log('비디오 로드 성공:', `./videos/${videoId}`);
        });
        
        videoElement.addEventListener('play', function() {
            if (bgm) bgm.pause();
        });
        
        videoElement.addEventListener('pause', function() {
            if (bgm && bgmStarted) bgm.play();
        });
        
        videoElement.addEventListener('ended', function() {
            if (bgm && bgmStarted) bgm.play();
        });
    } else if (type === 'image') {
        const isVideo = videoId.match(/\.(mp4|webm|mov)$/i);
        
        if (isVideo) {
            videoPlayerContainer.innerHTML = `
                <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: contain;">
                    <source src="./images/${videoId}" type="video/mp4">
                </video>
            `;
        } else {
            videoPlayerContainer.innerHTML = `
                <img 
                    id="image-player"
                    src="./images/${videoId}" 
                    alt="Image" 
                    width="100%" 
                    height="100%" 
                    style="object-fit: contain;">
            `;
        }
    } else {
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

function updateBreadcrumbWithFile(fileName) {
    const data = pageData[currentPage];
    if (!data) return;
    
    const videoTitleMap = {
        'APOSTLE_RESEARCH': {
            'FILE_1': '████-10-07',
            'FILE_2': '████-10-24',
            'FILE_4': '████-12-03',
            'FILE_5': '████-01-12',
            'FILE_7': '████-02-05',
            'FILE_8': '████-03-25',
            'FILE_9': '████-04-02',
            'FILE_11': '████-07-02'
        },
        'ANOMALIES_MEDIA': {
            'FILE_1': 'NEWS',
            'FILE_4': 'BODYCAM'
        }
    };
    
    const videoTitle = videoTitleMap[currentPage]?.[fileName] || fileName;
    
    const videoTitleElement = document.querySelector('.video-title');
    if (videoTitleElement) {
        videoTitleElement.textContent = videoTitle;
    }
    
    const breadcrumb = document.getElementById('breadcrumb');
    breadcrumb.innerHTML = `<span>${data.breadcrumb}</span><span class="separator"> // </span><span class="current">${fileName}(${videoTitle})</span>`;
}

function updateVideoText(fileName) {
    const data = pageData[currentPage];
    if (!data || !data.videoTexts) return;
    
    const videoText = data.videoTexts[fileName];
    if (!videoText) return;
    
    const videoTextElement = document.querySelector('.video-text');
    if (videoTextElement) {
        videoTextElement.innerHTML = videoText;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    bgm = document.getElementById('bgm');
    bgm.volume = 0.2;

    const warningText = document.querySelector('.warning-text');
    if (warningText) {
        warningText.classList.add('scrolling');
    }

    document.body.addEventListener('click', function initBGM() {
        if (!bgmStarted) {
            bgm.play().catch(err => console.log('BGM play error:', err));
            bgmStarted = true;
        }
    }, { once: true });

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

    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('youtube-player', {
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    };

    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.PLAYING) {
            bgm.pause();
        } else if (event.data === YT.PlayerState.ENDED || event.data === YT.PlayerState.PAUSED) {
            if (bgmStarted) {
                bgm.play();
            }
        }
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab')) {
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
            
            const videoId = e.target.getAttribute('data-video');
            const videoType = e.target.getAttribute('data-type');
            const fileName = e.target.textContent.trim();
            
            if (videoId) {
                sessionStorage.setItem(`jpt_current_tab_${currentPage}`, fileName);
                loadVideo(videoId, videoType || 'youtube');
                updateBreadcrumbWithFile(fileName);
                updateVideoText(fileName);
            }
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('control-left') || e.target.classList.contains('control-right')) {
            const allTabs = Array.from(document.querySelectorAll('.tab'));
            const activeTab = allTabs.find(tab => tab.classList.contains('active'));
            
            if (!activeTab) return;
            
            const enabledTabs = allTabs.filter(tab => tab.getAttribute('data-disabled') !== 'true');
            
            if (enabledTabs.length === 0) return;
            
            const currentIndex = enabledTabs.findIndex(tab => tab.classList.contains('active'));
            
            if (currentIndex === -1) return;
            
            let nextIndex;
            
            if (e.target.classList.contains('control-right')) {
                nextIndex = (currentIndex + 1) % enabledTabs.length;
            } else {
                nextIndex = (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
            }
            
            allTabs.forEach(tab => tab.classList.remove('active'));
            
            const nextTab = enabledTabs[nextIndex];
            nextTab.classList.add('active');
            
            const videoId = nextTab.getAttribute('data-video');
            const videoType = nextTab.getAttribute('data-type');
            const fileName = nextTab.textContent.trim();
            
            if (videoId) {
                sessionStorage.setItem(`jpt_current_tab_${currentPage}`, fileName);
                loadVideo(videoId, videoType || 'youtube');
                updateBreadcrumbWithFile(fileName);
                updateVideoText(fileName);
            }
        }
    });

    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', function() {
        loadPage('JPT_INFORMATION');
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.menu-item')[0].classList.add('active');
    });

    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item) => {
        item.addEventListener('click', function() {
            if (this.classList.contains('disabled')) {
                const accessDenied = document.getElementById('access-denied');
                accessDenied.classList.add('show');
                
                setTimeout(() => {
                    accessDenied.classList.remove('show');
                }, 2000);
                return;
            }

            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

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

    const accessDenied = document.getElementById('access-denied');
    accessDenied.addEventListener('click', function() {
        this.classList.remove('show');
    });

    const savedPage = sessionStorage.getItem('jpt_current_page');
    if (savedPage) {
        loadPage(savedPage);
    } else {
        loadPage(currentPage);
    }

    function triggerGlitchEffect() {
        const container = document.querySelector('.container');
        container.classList.add('screen-glitch');
        setTimeout(() => {
            container.classList.remove('screen-glitch');
        }, 200);

        const headerTitle = document.querySelector('.header-title');
        if (headerTitle && Math.random() > 0.5) {
            headerTitle.classList.add('glitch-effect', 'active');
            headerTitle.setAttribute('data-text', headerTitle.textContent);
            setTimeout(() => {
                headerTitle.classList.remove('active');
            }, 300);
        }

        const breadcrumb = document.getElementById('breadcrumb');
        if (breadcrumb && Math.random() > 0.6) {
            breadcrumb.classList.add('glitch-effect', 'active');
            breadcrumb.setAttribute('data-text', breadcrumb.textContent);
            setTimeout(() => {
                breadcrumb.classList.remove('active');
            }, 300);
        }
    }

    function scheduleNextGlitch() {
        const delay = Math.random() * 10000 + 5000;
        setTimeout(() => {
            triggerGlitchEffect();
            scheduleNextGlitch();
        }, delay);
    }

    scheduleNextGlitch();

    function triggerJumpscareGlitch() {
        const jumpscare = document.getElementById('jumpscare-glitch');
        const img = jumpscare.querySelector('img');
        
        triggerGlitchEffect();
        
        const scales = [1.3, 1.5, 1.7];
        const randomScale = scales[Math.floor(Math.random() * scales.length)];
        const randomX = (Math.random() - 0.5) * 30;
        const randomY = (Math.random() - 0.5) * 30;
        const randomRotation = (Math.random() - 0.5) * 40;
        
        img.style.transform = `translate(${randomX}%, ${randomY}%) rotate(${randomRotation}deg) scale(${randomScale})`;
        
        jumpscare.classList.add('trigger');
        
        setTimeout(() => {
            jumpscare.classList.remove('trigger');
            setTimeout(() => {
                img.style.transform = '';
            }, 100);
        }, 700);
    }

    function scheduleNextJumpscare() {
        const delay = 20000;
        setTimeout(() => {
            triggerJumpscareGlitch();
            scheduleNextJumpscare();
        }, delay);
    }

    scheduleNextJumpscare();
});