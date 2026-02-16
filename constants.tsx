
import { Question } from './types';

const PART_TWO_OPTIONS = ['uai', 'ei', 'ai', 'ui'];

export const PART_ONE_QUESTIONS: Question[] = [
  // 第一組 10 題
  { id: 1, type: 'identification', target: 'ua', options: ['花', '他', '沙', '巴'], answer: '花' },
  { id: 2, type: 'identification', target: 'uo', options: ['我', '磨', '車', '蛇'], answer: '我' },
  { id: 3, type: 'identification', target: 'uai', options: ['塊', '才', '開', '來'], answer: '塊' },
  { id: 4, type: 'identification', target: 'uei', options: ['杯', '梅', '歸', '非'], answer: '歸' },
  { id: 5, type: 'identification', target: 'uang', options: ['黃', '旁', '忙', '方'], answer: '黃' },
  { id: 6, type: 'identification', target: 'ueng', options: ['翁', '溫', '文', '問'], answer: '翁' },
  { id: 7, type: 'identification', target: 'uan', options: ['團', '談', '探', '湯'], answer: '團' },
  { id: 8, type: 'identification', target: 'uen', options: ['春', '山', '申', '森'], answer: '春' },
  { id: 9, type: 'identification', target: 'ua', options: ['誇', '咖', '擦', '撒'], answer: '誇' },
  { id: 10, type: 'identification', target: 'uo', options: ['羅', '樂', '辣', '落'], answer: '羅' },
  // 第二組 10 題
  { id: 11, type: 'identification', target: 'ua', options: ['抓', '扎', '炸', '渣'], answer: '抓' },
  { id: 12, type: 'identification', target: 'uo', options: ['說', '縮', '鎖', '所'], answer: '說' },
  { id: 13, type: 'identification', target: 'uai', options: ['歪', '外', '崴', '白'], answer: '歪' },
  { id: 14, type: 'identification', target: 'uei', options: ['威', '危', '偉', '衛'], answer: '威' },
  { id: 15, type: 'identification', target: 'uang', options: ['床', '創', '瘡', '窗'], answer: '床' },
  { id: 16, type: 'identification', target: 'ueng', options: ['嗡', '翁', '瓮', '蓊'], answer: '翁' },
  { id: 17, type: 'identification', target: 'uan', options: ['彎', '灣', '晚', '萬'], answer: '彎' },
  { id: 18, type: 'identification', target: 'uen', options: ['溫', '瘟', '穩', '問'], answer: '溫' },
  { id: 19, type: 'identification', target: 'ua', options: ['刷', '唰', '耍', '灑'], answer: '刷' },
  { id: 20, type: 'identification', target: 'uo', options: ['禍', '貨', '活', '和'], answer: '禍' },
];

export const PART_TWO_QUESTIONS: Question[] = [
  { id: 21, type: 'completion', target: 'uai', options: PART_TWO_OPTIONS, answer: 'uai', displayWord: 'g + __ (怪)' },
  { id: 22, type: 'completion', target: 'ei', options: PART_TWO_OPTIONS, answer: 'ei', displayWord: 'w + __ (位)' },
  { id: 23, type: 'completion', target: 'ai', options: PART_TWO_OPTIONS, answer: 'ai', displayWord: 'b + __ (白)' },
  { id: 24, type: 'completion', target: 'uai', options: PART_TWO_OPTIONS, answer: 'uai', displayWord: 'sh + __ (帥)' },
  { id: 25, type: 'completion', target: 'ui', options: PART_TWO_OPTIONS, answer: 'ui', displayWord: 'zh + __ (追)' },
  { id: 26, type: 'completion', target: 'ai', options: PART_TWO_OPTIONS, answer: 'ai', displayWord: 'h + __ (海)' },
  { id: 27, type: 'completion', target: 'ui', options: PART_TWO_OPTIONS, answer: 'ui', displayWord: 'g + __ (貴)' },
  { id: 28, type: 'completion', target: 'ai', options: PART_TWO_OPTIONS, answer: 'ai', displayWord: 'l + __ (來)' },
  { id: 29, type: 'completion', target: 'ui', options: PART_TWO_OPTIONS, answer: 'ui', displayWord: 'ch + __ (吹)' },
  { id: 30, type: 'completion', target: 'uai', options: PART_TWO_OPTIONS, answer: 'uai', displayWord: 'k + __ (快)' },
];
