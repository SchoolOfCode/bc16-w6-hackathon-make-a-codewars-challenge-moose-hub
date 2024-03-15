import { describe, it, expect } from 'vitest';
import { encode, decode } from './main.js'; // Update the path as necessary

describe("Basic Message Encoder", () => {
  it("Encoding with a fixed shift", () => {
    expect(encode("This is a strategic message of the utmost importance", 2)).toEqual("Vjku ku c uvtcvgike oguucig qh vjg wvoquv korqtvcpeg");

    expect(encode("Please follow these instructions carefully", 3)).toEqual("Sohdvh iroorz wkhvh lqvwuxfwlrqv fduhixoob");

    expect(encode("If you do not, you will fail our important ritual", 8)).toEqual("Qn gwc lw vwb, gwc eqtt niqt wcz quxwzbivb zqbcit");
  });

  it("Decoding with a fixed shift", () => {
    expect(decode("Vjku ku c uvtcvgike oguucig qh vjg wvoquv korqtvcpeg", 2)).toEqual("This is a strategic message of the utmost importance");

    expect(decode("Sohdvh iroorz wkhvh lqvwuxfwlrqv fduhixoob", 3)).toEqual("Please follow these instructions carefully");
    
    expect(decode("Qn gwc lw vwb, gwc eqtt niqt wcz quxwzbivb zqbcit", 8)).toEqual("If you do not, you will fail our important ritual");
  });
});
