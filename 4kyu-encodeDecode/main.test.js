import { describe, it, expect } from 'vitest';
import { encodeWithKey, decodeWithKey } from './main.js'; // Update the path as necessary

describe("Message encoder and decoder tests with keyword", () => {
  it("should encode and decode message with the keyword 'key'", () => {
    const originalMessage = "This is a message of the utmost importance";
    const keyword = "key";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message with the keyword 'cipher'", () => {
    const originalMessage = "Please follow these instructions carefully";
    const keyword = "cipher";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'secret'", () => {
    const originalMessage = "If you do not, this ship's nuclear engine will self-destruct in 16 seconds";
    const keyword = "secret";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'puzzle'", () => {
    const originalMessage = "Rub your hands together";
    const keyword = "puzzle";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'challenge'", () => {
    const originalMessage = "Place both hands up in the air";
    const keyword = "challenge";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'encode'", () => {
    const originalMessage = "Stretch your hands out in opposite directions as far as you can horizontally";
    const keyword = "encode";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'decode'", () => {
    const originalMessage = "Stretch your hands out in opposite directions as far as you can diagonally, right hand higher than your left";
    const keyword = "decode";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'vertical'", () => {
    const originalMessage = "Stretch your hands out in opposite directions as far as you can diagonally, right hand lower than your left";
    const keyword = "vertical";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'horizontal'", () => {
    const originalMessage = "Place your left hand at your side and stretch your right hand far out directly in front of you";
    const keyword = "horizontal";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with the keyword 'activation'", () => {
    const originalMessage = "Now squat to activate the ships computer";
    const keyword = "activation";
    const encoded = encodeWithKey(originalMessage, keyword);
    const decoded = decodeWithKey(encoded, keyword);
    expect(decoded).toBe(originalMessage);
  });
});
