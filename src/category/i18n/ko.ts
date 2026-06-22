import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensic-science",
  title: "ë²•ê³¼í•™ ë„êµ¬",
  description: "êµ¬ì¡°í™”ëœ ì‚¬ê±´ ë¶„ë¥˜, íˆ¬ëª…í•œ ê³„ì‚°, ì¦ê±°ë¥¼ ê³ ë ¤í•œ ë³´ê³ ë¥¼ ìœ„í•œ ë²•ê³¼í•™ ìœ í‹¸ë¦¬í‹°.",
  seo: [
    {
      type: 'title',
      text: "ì¦ê±° ê¸°ë°˜ ê³„ì‚°ê³¼ ì‚¬ê±´ ë¶„ë¥˜ë¥¼ ìœ„í•œ ë²•ê³¼í•™ ë„êµ¬",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "ì´ ë²”ì£¼ëŠ” ì¦ê±°ë¥¼ í•´ì„í•˜ê³  ê°€ì •ì„ ë¬¸ì„œí™”í•˜ë©° ê±°ì§“ ì •ë°€ì„±ì„ í”¼í•˜ê¸° ìœ„í•œ ë²•ê³¼í•™ ê³„ì‚°ê¸°ì™€ êµ¬ì¡°í™”ëœ ë„êµ¬ë¥¼ ëª¨ìë‹ˆë‹¤. ì „ë¬¸ê°€ë‚˜ ê²€ì¦ëœ í”„ë¡œí† ì½œì„ ëŒ€ì²´í•˜ì§€ ì•Šê³  ì´ˆê¸° ì‚¬ê±´ ê²€í† ë¥¼ ë” ëª…í™•í•˜ê²Œ í•©ë‹ˆë‹¤.",
    },
    {
      type: 'paragraph',
      html: "ë²•ê³¼í•™ ì—…ë¬´ëŠ” ì¤‘ìš”í•œ ê²°ì •ì— ì˜í–¥ì„ ì¤„ ìˆ˜ ìžˆìŠµë‹ˆë‹¤. ë”°ë¼ì„œ ë„êµ¬ëŠ” ê²°ë¡  ìž‘ì„± ì „ì— ë²”ìœ„, í•œê³„, ëˆ„ë½ ë°ì´í„°ë¥¼ ë³´ì—¬ ì£¼ì–´ì•¼ í•©ë‹ˆë‹¤.",
    },
    {
      type: 'title',
      text: "ì´ ë²”ì£¼ì— í¬í•¨ë˜ëŠ” ê²ƒ",
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
      text: "ë²•ê³¼í•™ ê³„ì‚°ê¸°ë¥¼ ì±…ìž„ ìžˆê²Œ ì‚¬ìš©í•˜ê¸°",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "ì´ ë„êµ¬ëŠ” ì˜ì‚¬ê²°ì •ê³¼ ì„¤ëª…ì˜ ë³´ì¡° ìˆ˜ë‹¨ìœ¼ë¡œ ì‚¬ìš©í•˜ê³  ë²•ì , ì˜ë£Œ, ì´ë¯¼, ì‹ ì›í™•ì¸ ê²°ì •ì˜ ìµœì¢… ê¶Œìœ„ë¡œ ì‚¬ìš©í•˜ì§€ ë§ˆì‹­ì‹œì˜¤.",
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

