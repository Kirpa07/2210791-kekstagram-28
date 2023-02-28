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

const NAMES = ['Артём', 'Андрей', 'Сергей', 'Елена', 'Наталья', 'Ирина', 'Марина'];

const data = [];

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// eslint-disable-next-line no-unused-vars
const photo = {};
let commentCounter = 0;
let photoCounter = 0;

const generateComment = () => {
  commentCounter++;
  return {
    id: commentCounter,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

const createPhoto = () => {
  photoCounter++;
  const obj = {};
  obj.id = photoCounter;
  obj.url = `photos/${obj.id}.jpg`;
  obj.description = DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)];
  obj.likes = getRandomInteger(15, 200);
  obj.comments = [];

  const countComments = getRandomInteger(1, 3);
  for (let i = 0; i < countComments; i++) {
    obj.comments.push(generateComment());
  }

  return obj;
};

for (let i = 0; i < 25; i++) {
  data.push(createPhoto());
}
