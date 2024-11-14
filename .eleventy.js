
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets"); // Если есть изображения и стили

  return {
    dir: {
      input: ".",       // Входной каталог
      output: "_site",  // Папка для выходных файлов
      includes: "_includes",
      data: "_data"
    }
  };
};
