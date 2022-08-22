import { encode_rules } from "../utils/encode_decode_rules.js";

/**
 * Encode or decode the given input and return the encode/decode string
 * @param {input} input
 * @returns encode/decode string
 */
export const encodeOrDecodeOperation = (input, indexMatch, indexReplace) => {
  if (input !== "") {
    encode_rules.forEach((rule) => {
      input = input.replaceAll(rule[indexMatch], rule[indexReplace]);
    });
  }

  return input;
};
