/*
# Web Audio Bench</h1>

This page contains a series of web audio benchmark tests. The tests are run in an
OfflineAudioContext, where an AudioBufferSourceNode is used as baseline to feed
data into the test.

To get more accurate results, each test is run multiple times and the min duration
is chosen ([here's why](https://lemire.me/blog/2018/01/16/microbenchmarking-calls-for-idealized-conditions/)).
The results are given in microseconds per second of processed audio data and node,
so lower is faster. A value of 1000000 means realtime processing speed.

For accurate results:

- Make sure you are connected to power
- Close ALL other apps and browser tabs.
- Verify in Activity Monitor / Task Manager that the computer is idle.
- // Use an incognito window (disables extensions)
- // Firefox: set privacy.reduceTimerPrecision to false in about:config
*/

import { WebAudioBenchApplication } from './js/WebAudioBenchApplication.js';

new WebAudioBenchApplication();
