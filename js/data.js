import {getRandomInteger, getRandomElement} from './util.js';

const DESCRIPTIONS = [ 'Описание1', 'Описание2', 'Описание3', 'Описание4', 'Описание5', 'Описание6', 'Описание7',
  'Описание8', 'Описание9', 'Описание10', 'Описание11', 'Описание12','Описание13', 'Описание14',
  'Описание15', 'Описание16', 'Описание17', 'Описание18', 'Описание19', 'Описание20', 'Описание21',
  'Описание22', 'Описание23', 'Описание24','Описание25',];

const MESSAGES = ['Всё отлично!','В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = ['Артём', 'Андрей', 'Сергей', 'Елена', 'Наталья', 'Ирина'];

let commentID = 0;
let photoID = 0;

const createComment = () => ({
  id: commentID++,
  avatar: `img/avatar - ${getRandomInteger(0, 6)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createPhoto = () => ({
  id: photoID++,
  url: `photos/${photoID}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, 5)}, createComment)
});

const photoStream = Array.from({length: 25}, createPhoto);

export {photoStream};

