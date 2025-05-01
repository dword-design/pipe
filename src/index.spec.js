import { expect, test } from '@playwright/test';
import { filter, map } from 'lodash-es';

import self, { $ } from './index.js';

test.describe('placeholder: no', () => {
  test('functions: one', () => expect(self(1, x => x * 2)).toEqual(2));

  test('functions: multiple', () =>
    expect(
      self(
        1,
        x => x * 2,
        x => x + 5,
      ),
    ).toEqual(7));
});

test.describe('placeholder: yes', () => {
  test('functions: one', () =>
    expect(self([1, 2], [map, $, x => x * 2])).toEqual([2, 4]));

  test('functions: multiple', () =>
    expect(
      self([1, 2], [map, $, x => x * 2], [filter, $, x => x >= 4]),
    ).toEqual([4]));
});
