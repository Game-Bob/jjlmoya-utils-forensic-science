import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { scienceCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 3 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(3);
    });

    it('scienceCategory should be defined', () => {
      expect(scienceCategory).toBeDefined();
      expect(scienceCategory.i18n).toBeDefined();
    });
  });
});
