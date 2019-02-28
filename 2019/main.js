const { browseBySteps } = require('../common/algo1')

const main = data => {
  const lines = data.split('\n')

  // N – number of photos in the simulation
  const N = parseInt(lines[0]);

  const photos = lines
    .slice(1, lines.length - 1)
    .map((line, id) => {
      const [orientation, nbTags, ...tags ] = line.split(' ')
      return {
        isVertical: orientation === 'V',
        nbTags,
        tags,
        id,
      }
    })
    //.sort((a, b) => a.nbTags - b.nbTags)

    const slideshow = browseBySteps(photos, null, null);
    slideshow.unshift(slideshow.length);
    return slideshow.join('\n');
}

module.exports = { main }
