import {photoStream} from './data.js';
import { renderThumbnail } from './thumbmails.js';
import {showPicture} from './viewer.js';

renderThumbnail({
  pictures: photoStream,
  onClick: (picture) => {
    showPicture(picture);
  }
});

