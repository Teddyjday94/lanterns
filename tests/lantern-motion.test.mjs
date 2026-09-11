import assert from 'node:assert/strict';
import test from 'node:test';

import { getLanternMotionProfile } from '../lib/lantern-motion.js';

test('keeps ambient depth moving unless reduced motion is requested', () => {
  const standard = getLanternMotionProfile(false);
  const reduced = getLanternMotionProfile(true);

  assert.match(standard.depthDuration, /^\d+(?:\.\d+)?s$/);
  assert.ok(Number.parseFloat(standard.depthDuration) > 0);
  assert.equal(reduced.depthDuration, '0s');
});
