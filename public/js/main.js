import { MyRouter } from 'router';
import 'jquery';
import { Utilities } from './app/utilities.js';
import { help } from './controllers/helpController.js';
import { newGame } from './controllers/level.js';
import { highScore } from './controllers/highScoreController.js';


const router = new MyRouter();

// starts facebook sdk and twitter widget
const shareUtilities = new Utilities();
shareUtilities.facebookShare(document, 'script', 'facebook-jssdk');
shareUtilities.twitterShare(document, "script", "twitter-wjs");

router
    .on('/beginner', () => newGame(10, 8, 8))
    .on('/intermediate', () => newGame(40, 16, 16))
    .on('/expert', () => newGame(99, 16, 30))


    .on('/highscore', () => highScore())
    .on('/help', () => help());
//logic da se zachistqt bombite


$(window).on('load', () => router.navigate());
$(window).on('hashchange', () => router.navigate());