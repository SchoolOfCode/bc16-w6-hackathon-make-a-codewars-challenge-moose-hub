import { describe, it, expect } from 'vitest';
import { encode, decode } from './main.js'; // Update the path as necessary

describe("Basic message encoder and decoder tests", () => {
  it("should encode and decode message with a shift of 2", () => {
    const originalMessage = "This is a message of the utmost importance";
    const shift = 2;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Vjku ku c oguucig qh vjg wvoquv korqtvcpeg";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message with a shift of 3", () => {
    const originalMessage = "Please follow these instructions carefully";
    const shift = 3;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Sohdvh iroorz wkhvh lqvwuxfwlrqv fduhixoob";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of 4", () => {
    const originalMessage = "If you do not, this ship's nuclear engine will self-destruct in 16 seconds";
    const shift = 4;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Mj csy hs rsx, xlmw wlmt'w rygpiev irkmri ampp wipj-hiwxvygx mr 16 wigsrhw";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of 5", () => {
    const originalMessage = "Rub your hands together";
    const shift = 5;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Wzg dtzw mfsix ytljymjw";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of -3", () => {
    const originalMessage = "Place both hands up in the air";
    const shift = -3;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Mixzb ylqe exkap rm fk qeb xfo";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of 2", () => {
    const originalMessage = "Stretch your hands out in opposite directions as far as you can horizontally";
    const shift = 2;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Uvtgvej aqwt jcpfu qwv kp qrrqukvg fktgevkqpu cu hct cu aqw ecp jqtkbqpvcnna";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of 7", () => {
    const originalMessage = "Stretch your hands out in opposite directions as far as you can diagonally, right hand higher than your left";
    const shift = 7;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Zaylajo fvby ohukz vba pu vwwvzpal kpyljapvuz hz mhy hz fvb jhu kphnvuhssf, ypnoa ohuk opnoly aohu fvby slma";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of -5", () => {
    const originalMessage = "Stretch your hands out in opposite directions as far as you can diagonally, right hand lower than your left";
    const shift = -5;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Nomzoxc tjpm cviyn jpo di jkkjndoz ydmzxodjin vn avm vn tjp xvi ydvbjivggt, mdbco cviy gjrzm ocvi tjpm gzao";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of 3", () => {
    const originalMessage = "Place your left hand at your side and stretch your right hand far out directly in front of you";
    const shift = 3;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Sodfh brxu ohiw kdqg dw brxu vlgh dqg vwuhwfk brxu uljkw kdqg idu rxw gluhfwob lq iurqw ri brx";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });

  it("should encode and decode message correctly with a shift of -2", () => {
    const originalMessage = "Now squat to activate the ships computer";
    const shift = -2;
    const encoded = encode(originalMessage, shift);
    const expectedEncoded = "Lmu qosyr rm yargtyrc rfc qfgnq amknsrcp";
    expect(encoded).toBe(expectedEncoded);
    const decoded = decode(encoded, shift);
    expect(decoded).toBe(originalMessage);
  });
});
