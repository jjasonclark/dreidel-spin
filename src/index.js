"use strict";

const spins = {
  נ: "Nun",
  ג: "Gimmel",
  ה: "Hay",
  ש: "Shin"
};

const keys = Object.keys(spins);

const randomSpin = max => Math.floor(Math.random() * max);

const getDreidelFace = () => {
  return keys[randomSpin(keys.length)];
};

const handler = (context, req) => {
  const spin = getDreidelFace();
  context.res = {
    headers: {
      "context-type": "text/plain;utf-8"
    },
    body: spin
  };
  context.done();
};

module.exports = { handler };
