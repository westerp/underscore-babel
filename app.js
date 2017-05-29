/**
 * Created by westerp on 2017-05-29.
 */

import $ from 'jquery';
import fnTemplate from './template.html';

$(() => $('body').html(fnTemplate({ test: [1,2,3] })));