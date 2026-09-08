import assert from 'node:assert/strict';
import test from 'node:test';

import { projects } from '../lib/portfolio-data.js';

test('features HandFX and omits retired portfolio entries', () => {
  const handfx = projects.find((project) => project.title === 'HandFX');

  assert.ok(handfx);
  assert.equal(handfx.category, 'Websites');
  assert.equal(handfx.url, 'https://handfx-three.vercel.app/');
  assert.equal(handfx.image, '/projects/handfx-home.webp');
  assert.equal(projects.some((project) => /Frederic(?:'|’)?s Upholstery/i.test(project.title)), false);
  assert.equal(projects.some((project) => /Catera(?:'|’)?s Creation/i.test(project.title)), false);
  assert.equal(projects.some((project) => project.title === 'Nodewatch'), false);
  assert.equal(projects.some((project) => project.title === 'Legacy Tattoo Studio'), false);
  assert.equal(projects.some((project) => project.title === 'Dominion: God Simulator'), false);
  assert.equal(projects.some((project) => project.title === 'Skybound Dominion'), true);
});
