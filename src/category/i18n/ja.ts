import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensic-science",
  title: "æ³•ç§‘å­¦ãƒ„ãƒ¼ãƒ«",
  description: "æ§‹é€ åŒ–ã•ã‚ŒãŸã‚±ãƒ¼ã‚¹ãƒˆãƒªã‚¢ãƒ¼ã‚¸ã€é€æ˜Žãªè¨ˆç®—ã€è¨¼æ‹ ã‚’æ„è­˜ã—ãŸå ±å‘Šã®ãŸã‚ã®æ³•ç§‘å­¦ãƒ¦ãƒ¼ãƒ†ã‚£ãƒªãƒ†ã‚£ã€‚",
  seo: [
    {
      type: 'title',
      text: "è¨¼æ‹ ã‚’æ„è­˜ã—ãŸè¨ˆç®—ã¨ã‚±ãƒ¼ã‚¹ãƒˆãƒªã‚¢ãƒ¼ã‚¸ã®ãŸã‚ã®æ³•ç§‘å­¦ãƒ„ãƒ¼ãƒ«",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "ã“ã®ã‚«ãƒ†ã‚´ãƒªã¯ã€è¨¼æ‹ ã‚’è§£é‡ˆã—ã€å‰æã‚’è¨˜éŒ²ã—ã€è¦‹ã›ã‹ã‘ã®ç²¾å¯†ã•ã‚’é¿ã‘ã‚‹ãŸã‚ã®æ³•ç§‘å­¦è¨ˆç®—æ©Ÿã¨æ§‹é€ åŒ–ãƒ„ãƒ¼ãƒ«ã‚’é›†ã‚ã¦ã„ã¾ã™ã€‚å°‚é–€å®¶ã‚„æ¤œè¨¼æ¸ˆã¿ãƒ—ãƒ­ãƒˆã‚³ãƒ«ã‚’ç½®ãæ›ãˆã‚‹ã‚‚ã®ã§ã¯ãªãã€åˆæœŸã®ã‚±ãƒ¼ã‚¹ãƒ¬ãƒ“ãƒ¥ãƒ¼ã‚’æ˜Žç¢ºã«ã—ã¾ã™ã€‚",
    },
    {
      type: 'paragraph',
      html: "æ³•ç§‘å­¦ã®ä½œæ¥­ã¯é‡è¦ãªåˆ¤æ–­ã«å½±éŸ¿ã—ã¾ã™ã€‚ãã®ãŸã‚ã€çµè«–ã‚’æ›¸ãå‰ã«ç¯„å›²ã€é™ç•Œã€ä¸è¶³ãƒ‡ãƒ¼ã‚¿ã‚’ç¤ºã™å¿…è¦ãŒã‚ã‚Šã¾ã™ã€‚",
    },
    {
      type: 'title',
      text: "ã“ã®ã‚«ãƒ†ã‚´ãƒªã«å«ã¾ã‚Œã‚‹ã‚‚ã®",
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
      text: "æ³•ç§‘å­¦è¨ˆç®—æ©Ÿã‚’è²¬ä»»ã‚’æŒã£ã¦ä½¿ã†",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "ã“ã‚Œã‚‰ã®ãƒ„ãƒ¼ãƒ«ã¯æ„æ€æ±ºå®šã¨èª¬æ˜Žã®è£œåŠ©ã¨ã—ã¦ä½¿ã„ã€æ³•çš„ã€åŒ»ç™‚ã€ç§»æ°‘ã€èº«å…ƒç¢ºèªã®æœ€çµ‚åˆ¤æ–­ã¨ã—ã¦ä½¿ã‚ãªã„ã§ãã ã•ã„ã€‚",
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

