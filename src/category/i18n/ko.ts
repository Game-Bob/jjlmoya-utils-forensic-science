import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensic-science",
  title: "법과학 도구",
  description: "구조화된 사건 분류, 투명한 계산, 증거를 고려한 보고를 위한 법과학 유틸리티.",
  seo: [
    {
      type: 'title',
      text: "증거 기반 계산과 사건 분류를 위한 법과학 도구",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "이 범주는 증거를 해석하고 가정을 문서화하며 거짓 정밀성을 피하기 위한 법과학 계산기와 구조화된 도구를 모읍니다. 전문가나 검증된 프로토콜을 대체하지 않고 초기 사건 검토를 더 명확하게 합니다.",
    },
    {
      type: 'paragraph',
      html: "법과학 업무는 중요한 결정에 영향을 줄 수 있습니다. 따라서 도구는 결론 작성 전에 범위, 한계, 누락 데이터를 보여 주어야 합니다.",
    },
    {
      type: 'title',
      text: "이 범주에 포함되는 것",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Age assessment tools:</strong> dental, skeletal, and maturity indicators with explicit uncertainty.',
        '<strong>Evidence interpretation tools:</strong> structured calculators that show assumptions, confidence, and limitations.',
        '<strong>Case triage tools:</strong> fast workflows that help decide what data are missing before formal analysis.',
        '<strong>Reporting support:</strong> outputs that encourage clear language, ranges, caveats, and traceable reasoning.',
      ],
    },
    {
      type: 'title',
      text: "법과학 계산기를 책임 있게 사용하기",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "이 도구는 의사결정과 설명의 보조 수단으로 사용하고 법적, 의료, 이민, 신원확인 결정의 최종 권위로 사용하지 마십시오.",
    },
    {
      type: 'table',
      headers: ['Good use', 'Poor use', 'Why it matters'],
      rows: [
        ["Screen a case file before specialist review.", "Replace specialist review with a calculator result.", "Forensic conclusions must be defensible and methodologically valid."],
        ["Explain uncertainty to non-specialists.", "Report one exact answer without caveats.", "False precision can mislead legal or safeguarding decisions."],
        ["Compare how assumptions affect a result.", "Hide assumptions from the report.", "Transparent assumptions make the result easier to audit."],
        ["Identify missing evidence.", "Ignore poor data quality.", "Weak inputs can make even a correct formula unreliable."],
      ],
    },
  ],
};

