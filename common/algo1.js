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

    if (photo1.isVertical) {

      let al = findVertical(photo1, photos);
      if(al){
        slideshow.push(`${photo1.id} ${al.id}`);
      previousTags = R.union(photo1.tags, al.tags);
      photos = photos.slice(1);
      return this.browseBySteps(photos.filter(p => p.id !== al.id), previousTags, slideshow);
      }
      return this.browseBySteps(photos.slice(1), previousTags, slideshow);
      
    }
    else{

      let el = findOtherHorizontalNear(photo1, photos);
      if(el){
        slideshow.push('' + el.id);
        previousTags = el.tags;
        return this.browseBySteps(photos.filter(p => p.id !== el.id), previousTags, slideshow);
      }
      else{
        if(photos){
          slideshow.push('' + photo1.id);
        previousTags = photo1.tags;
        return this.browseBySteps(photos.slice(1), previousTags, slideshow);
        }
      }
    }




    return slideshow;
  }
}

function findFirtsVertical(photos) {
  return photos.find(e => e.isVertical);
}

const howManyTagsInCommon = (previous, current) => intersection(previous, current).length;


function findOtherHorizontalNear(current, photos){
  let previous = Number.POSITIVE_INFINITY;
  let goodChoice = null;
  //filter su les vertical
  photos.filter(photo => !photo.isVertical).map(photo => {
    //combien il y a de tag en commun
    let n = howManyTagsInCommon(photo.tags,current.tags);
    //prendre le moins possible
    if(n< previous && n >0){
      goodChoice = photo;
      previous = n;
    }
  });

  //return l'element le plus proche ayant le moins de tag commun mais au minimum 1
  return goodChoice;

}

function findVertical(current, photos){
  let previous = Number.POSITIVE_INFINITY;
  let goodChoice = null;
  //filter su les vertical
  photos.filter(photo => photo.isVertical).map(photo => {
    //combien il y a de tag en commun
    let n = howManyTagsInCommon(photo.tags,current.tags);
    //prendre le moins possible
    if(n< previous){
      goodChoice = photo;
      previous = n;
    }
  });

  //return l'element le plus proche ayant le moins de tag commun mais au minimum 1
  return goodChoice;

}