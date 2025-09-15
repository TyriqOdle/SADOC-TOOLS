/**
 * Unit tests for the parseTime utility.
 */
import test from 'node:test';
import assert from 'node:assert';
import { parseTime } from './timeHandler.js';

test('parseTime converts HH:MM to minutes', () => {
  assert.strictEqual(parseTime('09:30'), 570);
});

test('parseTime handles times past midnight', () => {
  assert.strictEqual(parseTime('00:15'), 15);
});

