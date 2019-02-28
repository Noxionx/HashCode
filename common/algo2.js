const R = require('ramda')
var util = require('./util')

module.exports.browseBySteps = (photos, previousTags, slideshow) => {
  console.time('SlideGen')
  if (!photos || photos.lenght < 1) {
    return [];
  }

  if (!slideshow) {
    slideshow = [];
  }

  if (!previousTags) {
    const photo1 = photos[0];
    if (photo1.isVertical) {
      // Trouve une deuxième image verticale
      const photo2 = findFirtsVertical(photos.slice(1));
      slideshow.push(`${photo1.id} ${photo2.id}`);
      previousTags = R.union(photo1.tags, photo2.tags);
    } else {
      slideshow.push('' + photo1.id);
      previousTags = photo1.tags;
    }
    console.timeEnd('SlideGen');
    return this.browseBySteps(photos.slice(1), previousTags, slideshow)
  } else {
    // Comparaison des tags
    const { photo, index } = findBestScore(photos, previousTags); 
    slideshow.push('' + photo.id);
    previousTags = photo.tags;
    photos.splice(index, 1);
    console.timeEnd('SlideGen');
    return this.browseBySteps(photos, previousTags, slideshow);
  }
}

const findFirtsVertical = (photos) => photos.find(e => e.isVertical);

const howManyTagsInCommon = (previous, current) => R.intersection(previous, current).length;

const howManyNewTags = (previous, current) => current.filter(e => previous.indexOf(e) === -1).length;

const howManyOldTags = (previous, current) => current.filter(e => previous.indexOf(e) === -1).length;

const getScore = (previous, current) => {
  return Math.min(
    howManyTagsInCommon(previous, current),
    howManyNewTags(previous, current),
    howManyOldTags(previous, current),
  );
}

const findBestScore = (photos, previousTags) => {
  let bestScore = -1;
  let photo = null;
  let index = -1;
  photos.forEach((p, i) => {
    const score = getScore(previousTags, p.tags);
    if (bestScore < score) {
      bestScore = score;
      photo = p;
      index = i;
    }
  })
  return { photo, index };
}