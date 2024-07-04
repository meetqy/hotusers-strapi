"use strict";

const slugify = require("slugify").default;
const { pinyin } = require("pinyin-pro");

const generateSlug = (event) => {
  let nickname = event.params.data.nickname;

  if (event.params.data.nickname && !event.params.data.slug) {
    // 将 nickname 中文的部分替换为拼音
    nickname = nickname.replace(/[\u4e00-\u9fa5]/g, (word) => {
      return (
        pinyin(word, {
          toneType: "none",
          type: "array",
        }) + "-"
      );
    });

    event.params.data.slug = slugify(nickname, {
      lower: true,
    });
  }
};

module.exports = {
  async beforeCreate(event) {
    generateSlug(event);
  },
  async beforeUpdate(event) {
    generateSlug(event);
  },
};
