import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensic-science",
  title: "æ³•åŒ»ç§‘å­¦å·¥å…·",
  description: "ç”¨äºŽç»“æž„åŒ–æ¡ˆä»¶åˆ†æµã€é€æ˜Žè®¡ç®—å’Œè¯æ®æ„è¯†æŠ¥å‘Šçš„æ³•åŒ»å·¥å…·ã€‚",
  seo: [
    {
      type: 'title',
      text: "ç”¨äºŽè¯æ®æ„è¯†è®¡ç®—å’Œæ¡ˆä»¶åˆ†æµçš„æ³•åŒ»ç§‘å­¦å·¥å…·",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "æœ¬ç±»åˆ«æ”¶é›†æ³•åŒ»è®¡ç®—å™¨å’Œç»“æž„åŒ–å·¥å…·ï¼Œç”¨äºŽè§£é‡Šè¯æ®ã€è®°å½•å‡è®¾å¹¶é¿å…è™šå‡ç²¾ç¡®æ€§ã€‚å®ƒä¸æ›¿ä»£ä¸“å®¶æˆ–éªŒè¯æµç¨‹ï¼Œè€Œæ˜¯è®©æ—©æœŸæ¡ˆä»¶å®¡æŸ¥æ›´æ¸…æ¥šã€‚",
    },
    {
      type: 'paragraph',
      html: "æ³•åŒ»å·¥ä½œå¯èƒ½å½±å“é‡è¦å†³å®šï¼Œå› æ­¤å·¥å…·åº”åœ¨å†™å‡ºç»“è®ºå‰æ˜¾ç¤ºèŒƒå›´ã€é™åˆ¶å’Œç¼ºå¤±æ•°æ®ã€‚",
    },
    {
      type: 'title',
      text: "æœ¬ç±»åˆ«åŒ…å«ä»€ä¹ˆ",
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
      text: "è´Ÿè´£ä»»åœ°ä½¿ç”¨æ³•åŒ»è®¡ç®—å™¨",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "è¯·å°†è¿™äº›å·¥å…·ä½œä¸ºå†³ç­–å’Œè§£é‡Šè¾…åŠ©ï¼Œä¸è¦ä½œä¸ºæ³•å¾‹ã€åŒ»ç–—ã€ç§»æ°‘æˆ–èº«ä»½è¯†åˆ«å†³å®šçš„æœ€ç»ˆä¾æ®ã€‚",
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

