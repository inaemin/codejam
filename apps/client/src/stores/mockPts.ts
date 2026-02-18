import { ROLE, PRESENCE, type Pt } from '@codejam/common';

const COLORS = [
  '060A23',
  '5E36F5',
  'E11234',
  'E87917',
  '3EA884',
  '0618BC',
  '0FBBE6',
  '87B80A',
  'FFC933',
  'EE77AF',
  '69785E',
  '2D3A46',
  '280F6D',
  '37364F',
  '363548',
  '4D176E',
  'AB133E',
  '420790',
  '222A54',
  '192251',
];

const FIRST_NAMES = [
  '김',
  '이',
  '박',
  '최',
  '정',
  '강',
  '조',
  '윤',
  '장',
  '임',
  '한',
  '오',
  '서',
  '신',
  '권',
  '황',
  '안',
  '송',
  '류',
  '홍',
];

const LAST_NAMES = [
  '민준',
  '서준',
  '예준',
  '도윤',
  '시우',
  '주원',
  '하준',
  '지호',
  '지후',
  '준서',
  '건우',
  '현우',
  '우진',
  '선우',
  '연우',
  '유준',
  '정우',
  '승우',
  '승현',
  '시후',
  '지훈',
  '민재',
  '현준',
  '은우',
  '지환',
  '승민',
  '유진',
  '민성',
  '지우',
  '준혁',
];

const ROLES = [ROLE.HOST, ROLE.EDITOR, ROLE.VIEWER];
// const PRESENCES = [PRESENCE.ONLINE, PRESENCE.OFFLINE];

/**
 * ScrollArea 테스트용 목 참가자 100명 생성
 */
export function generateMockPts(count: number = 100): Record<string, Pt> {
  const mockPts: Record<string, Pt> = {};

  for (let i = 0; i < count; i++) {
    const ptId = `mock-${i}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const ptHash = String(1000 + i).padStart(4, '0');
    const firstName = FIRST_NAMES[i % FIRST_NAMES.length];
    const lastName = LAST_NAMES[i % LAST_NAMES.length];
    const nickname = `${firstName}${lastName}`;

    // 첫 번째는 HOST, 나머지는 랜덤
    const role = i === 0 ? ROLE.HOST : ROLES[Math.floor(Math.random() * 2) + 1];

    // 80% 온라인, 20% 오프라인
    const presence = Math.random() < 0.8 ? PRESENCE.ONLINE : PRESENCE.OFFLINE;

    const color = COLORS[i % COLORS.length];

    // createdAt을 약간씩 다르게 (최근부터 과거 순)
    const createdAt = new Date(Date.now() - i * 1000 * 60).toISOString();

    mockPts[ptId] = {
      ptId,
      ptHash,
      nickname,
      role,
      color,
      presence,
      createdAt,
    };
  }

  return mockPts;
}
