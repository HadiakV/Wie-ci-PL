
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site",
        },
    };
};
