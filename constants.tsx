
import { Question } from './types';

const PART_TWO_OPTIONS = ['uai', 'ei', 'ai', 'ui'];

export const PART_ONE_QUESTIONS: Question[] = [
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

export const PART_THREE_QUESTIONS: Question[] = [
  { id: 31, type: 'rule', target: '韻母「u」自成音節', options: ['A. u', 'B. wu', 'C. vu', 'D. uw'], answer: 'B. wu', displayWord: '當韻母「u」自成音節時？' },
  { id: 32, type: 'rule', target: '「叻」對應詞', options: ['A. 棒', 'B. 笨', 'C. 慢', 'D. 懶'], answer: 'A. 棒', displayWord: '「叻」的普通話對應詞？' },
  { id: 33, type: 'rule', target: '韻母「ua」自成音節', options: ['A. ua', 'B. wa', 'C. wua', 'D. uwa'], answer: 'B. wa', displayWord: '韻母「ua」自成音節時改寫？' },
  { id: 34, type: 'rule', target: '「好做得嘢」對應詞', options: ['A. 能幹', 'B. 懶惰', 'C. 粗心', 'D. 膽小'], answer: 'A. 能幹', displayWord: '「好做得嘢」普通話對應詞？' },
  { id: 35, type: 'rule', target: '韻母「uo」自成音節', options: ['A. uo', 'B. wo', 'C. wuo', 'D. uw'], answer: 'B. wo', displayWord: '韻母「uo」自成音節拼寫？' },
  { id: 36, type: 'rule', target: '「抵得諗」對應詞', options: ['A. 不計較', 'B. 小氣', 'C. 貪心', 'D. 記仇'], answer: 'A. 不計較', displayWord: '「抵得諗」普通話對應詞？' },
  { id: 37, type: 'rule', target: '韻母「uai」自成音節', options: ['A. uai', 'B. wai', 'C. wuai', 'D. uwai'], answer: 'C. wuai', displayWord: '韻母「uai」自成音節寫成？' },
  { id: 38, type: 'rule', target: '「好人」對應詞', options: ['A. 心腸好', 'B. 壞人', 'C. 兇狠', 'D. 自私'], answer: 'D. 自私', displayWord: '「好人」普通話對應詞？' },
  { id: 39, type: 'rule', target: '韻母「uei」自成音節', options: ['A. uei', 'B. wei', 'C. wuei', 'D. uwei'], answer: 'B. wei', displayWord: '韻母「uei」自成音節拼寫？' },
  { id: 40, type: 'rule', target: '「勤力」對應詞', options: ['A. 努力 / 勤奮', 'B. 懶惰', 'C. 偷懶', 'D. 馬虎'], answer: 'A. 努力 / 勤奮', displayWord: '「勤力」普通話對應詞？' },
  { id: 41, type: 'rule', target: '韻母「uan」自成音節', options: ['A. uan', 'B. wan', 'C. wuan', 'D. uwan'], answer: 'B. wan', displayWord: '韻母「uan」自成音節改寫？' },
  { id: 42, type: 'rule', target: '「穩陣」對應詞', options: ['A. 牢靠 / 可靠', 'B. 不可靠', 'C. 慌張', 'D. 粗心'], answer: 'A. 牢靠 / 可靠', displayWord: '「穩陣」普通話對應詞？' },
  { id: 43, type: 'rule', target: '韻母「uen」自成音節', options: ['A. uen', 'B. wen', 'C. wuen', 'D. uwen'], answer: 'B. wen', displayWord: '韻母「uen」自成音節拼寫？' },
  { id: 44, type: 'rule', target: '「唔怪得」對應詞', options: ['A. 怪不得', 'B. 奇怪', 'C. 難怪得', 'D. 不怪'], answer: 'A. 怪不得', displayWord: '「唔怪得」普通話對應詞？' },
  { id: 45, type: 'rule', target: '韻母「uang」自成音節', options: ['A. uang', 'B. wang', 'C. wuang', 'D. uwang'], answer: 'B. wang', displayWord: '韻母「uang」自成音節寫成？' },
  { id: 46, type: 'rule', target: '「一齊」對應詞', options: ['A. 一塊兒', 'B. 分開', 'C. 一個', 'D. 獨自'], answer: 'A. 一塊兒', displayWord: '「一齊」普通話對應詞？' },
  { id: 47, type: 'rule', target: '韻母「ueng」自成音節', options: ['A. ueng', 'B. weng', 'C. wueng', 'D. uweng'], answer: 'B. weng', displayWord: '韻母「ueng」自成音節拼寫？' },
  { id: 48, type: 'rule', target: '「過關」對應詞', options: ['A. 闖關', 'B. 失敗', 'C. 放棄', 'D. 落榜'], answer: 'C. 放棄', displayWord: '「過關」普通話對應詞？' },
  { id: 49, type: 'rule', target: 'u 行韻母規則', options: ['A. 全部保留 u', 'B. 只有 u 加 w，其餘 u 改 w', 'C. 全部前加 w', 'D. 全部 u 改 w'], answer: 'B. 只有 u 加 w，其餘 u 改 w', displayWord: 'u 行韻母自成音節正確說法？' },
  { id: 50, type: 'rule', target: '「鬥快」對應詞', options: ['A. 比快', 'B. 比慢', 'C. 比賽', 'D. 跑步'], answer: 'D. 跑步', displayWord: '「鬥快」普通話對應詞？' },
];
