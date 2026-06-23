import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensic-science",
  title: "法科学ツール",
  description: "構造化されたケーストリアージ、透明な計算、証拠を意識した報告のための法科学ユーティリティ。",
  seo: [
    {
      type: 'title',
      text: "証拠を意識した計算とケーストリアージのための法科学ツール",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "このカテゴリは、証拠を解釈し、前提を記録し、見せかけの精密さを避けるための法科学計算機と構造化ツールを集めています。専門家や検証済みプロトコルを置き換えるものではなく、初期のケースレビューを明確にします。",
    },
    {
      type: 'paragraph',
      html: "法科学の作業は重要な判断に影響します。そのため、結論を書く前に範囲、限界、不足データを示す必要があります。",
    },
    {
      type: 'title',
      text: "このカテゴリに含まれるもの",
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
      text: "法科学計算機を責任を持って使う",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "これらのツールは意思決定と説明の補助として使い、法的、医療、移民、身元確認の最終判断として使わないでください。",
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

