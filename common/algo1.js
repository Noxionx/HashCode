const R = require('ramda')
var util = require('./util')

module.exports.browseBySteps = (photos, previousTags, slideshow) => {
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
    return this.browseBySteps(photos.slice(1), previousTags, slideshow)
  } else {
    // Comparaison des tags
    console.log(slideshow)
    return slideshow;
  }
}

function findFirtsVertical(photos) {
  return photos.find(e => e.isVertical);
}