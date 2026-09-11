import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
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
  for (const retiredTitle of ['Broadcast Raids', 'Echo Hunt', 'Spellbreaker', 'Skybound Dominion']) {
    assert.equal(projects.some((project) => project.title === retiredTitle), false, `${retiredTitle} should be retired`);
  }
});

test('features Boba Lover and Santa Jim Hope as published business websites', async () => {
  const expectedProjects = [
    {
      title: 'Boba Lover',
      url: 'https://boba-lover.vercel.app/',
      image: '/projects/boba-lover.jpg',
    },
    {
      title: 'Santa Jim Hope',
      url: 'https://santa-jim-hope-site.vercel.app/',
      image: '/projects/santa-jim-hope.jpg',
    },
  ];

  for (const expected of expectedProjects) {
    const project = projects.find((candidate) => candidate.title === expected.title);
    assert.ok(project, `${expected.title} should be featured`);
    assert.equal(project.category, 'Websites');
    assert.equal(project.status, 'Published');
    assert.equal(project.url, expected.url);
    assert.equal(project.image, expected.image);
    assert.equal(project.visualType, 'screenshot');

    const image = await readFile(new URL(`../public${expected.image}`, import.meta.url));
    assert.ok(image.length > 100_000, `${expected.title} artwork should not be a placeholder`);
    assert.deepEqual([...image.subarray(0, 3)], [0xff, 0xd8, 0xff]);
  }
});
