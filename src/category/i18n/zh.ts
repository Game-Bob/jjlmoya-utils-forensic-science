import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensic-science",
  title: "法医科学工具",
  description: "用于结构化案件分流、透明计算和证据意识报告的法医工具。",
  seo: [
    {
      type: 'title',
      text: "用于证据意识计算和案件分流的法医科学工具",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "本类别收集法医计算器和结构化工具，用于解释证据、记录假设并避免虚假精确性。它不替代专家或验证流程，而是让早期案件审查更清楚。",
    },
    {
      type: 'paragraph',
      html: "法医工作可能影响重要决定，因此工具应在写出结论前显示范围、限制和缺失数据。",
    },
    {
      type: 'title',
      text: "本类别包含什么",
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
      text: "负责任地使用法医计算器",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "请将这些工具作为决策和解释辅助，不要作为法律、医疗、移民或身份识别决定的最终依据。",
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

