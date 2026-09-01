export const PROFILE = {
  nameEn: 'Kyungdeok',
  nameKo: '박경덕',
  role: 'AX Creator',
  company: '(주)풀무원 AX혁신실',
  email: 'sweetgump@naver.com',
  linkedin: 'https://www.linkedin.com/in/%EA%B2%BD%EB%8D%95-%EB%B0%95-2ab536196/',
  tagline: 'AI 에이전트 · 업무 자동화 · 데이터 시각화로 일하는 방식을 다시 설계합니다',
  about:
    '자동차 부품 제조사에서 RPA와 데이터 분석으로 커리어를 시작해, 지금은 데이터 · 자동화 · AI 에이전트 · 시민개발자 교육 네 가지 축으로 일합니다. 좋은 AI 에이전트를 만드는 것보다 그것을 현업에서 안전하게 굴리는 일이 더 어렵다고 믿습니다. 함께 만들어요!',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    number: '01',
    name: 'Data Visualization',
    description:
      'Power BI · Tableau로 흩어진 데이터를 하나의 흐름으로 모으고, 의사결정에 바로 쓰이는 대시보드를 설계합니다.',
  },
  {
    number: '02',
    name: 'Process Automation',
    description:
      'Power Automate 기반 RPA로 반복 업무를 자동화하고, 자동화를 핑계 삼아 프로세스 자체를 다시 설계합니다.',
  },
  {
    number: '03',
    name: 'AI Agent',
    description:
      'Copilot Studio · n8n 기반 AI 에이전트를 PoC에서 멈추지 않고 실제 운영 가능한 사내 서비스로 만듭니다.',
  },
  {
    number: '04',
    name: 'AX Consulting',
    description:
      '전사 AX/DX 과제를 기획부터 실행까지 책임집니다. 기술보다 먼저 문제 정의와 현업 수용성을 봅니다.',
  },
  {
    number: '05',
    name: 'Education',
    description:
      '현업이 스스로 도구를 만드는 시민개발자 문화를 확산합니다. 사내 강의와 Udemy 정규 강좌를 기획·운영합니다.',
  },
];

export const PROJECTS = [
  {
    number: '01',
    category: 'Education',
    name: 'Udemy 정규 강좌',
    summary: 'Power BI Desktop · Power Automate Desktop · 경영정보시각화능력 실기',
    href: 'https://www.udemy.com/course/power-bi-desktop/',
    tiles: ['Power BI Desktop', 'Power Automate Desktop', '경영정보시각화능력 실기'],
    accent: ['#18011F', '#B600A8', '#7621B0'],
  },
  {
    number: '02',
    category: 'Enterprise',
    name: 'AI Agent PoC → 운영 전환',
    summary: 'Copilot Studio · n8n 기반 사내 AI 에이전트 설계 및 운영',
    href: undefined,
    tiles: ['Copilot Studio', 'n8n Workflow', 'PoC → Production'],
    accent: ['#0C0C0C', '#7621B0', '#BE4C00'],
  },
  {
    number: '03',
    category: 'Client',
    name: 'BI · RPA 집체교육',
    summary: '현대트랜시스 해외법인 교육 · Salesforce S.T.A. Track 1·2기 강사',
    href: undefined,
    tiles: ['Power BI 실습', 'RPA 설계', '시민개발자 양성'],
    accent: ['#101827', '#264A73', '#4E7BA6'],
  },
];
