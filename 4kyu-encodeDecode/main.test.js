import { describe, it, expect } from 'vitest';
import { encodeWithKey, decodeWithKey } from './main.js';

describe("Adaptive Cipher Challenge", () => {
  it("Encoding with a dynamic shift using a keyword", () => {

    expect(encodeWithKey("This is a strategic message of the utmost importance", "school")).toEqual("Ljpg wd s uafoewipq apkuhus zx vos ieeqzh wxhqyhoyug");

    expect(encodeWithKey("Please follow these instructions carefully", "of")).toEqual("Dqsfgj ttzqcb hmsxs nbxhwihhncsg howskiqzd");

    expect(encodeWithKey("If you do not, you will fail our important ritual", "code")).toEqual("Kt bsw rr rqh, bsw klpn tdmn cxv kassthdrv flxwoo");
  });



  
  it("Decoding with a dynamic shift using a keyword", () => {
    expect(decodeWithKey("Ljpg wd s uafoewipq apkuhus zx vos ieeqzh wxhqyhoyug", "school")).toEqual("This is a strategic message of the utmost importance");

    expect(decodeWithKey("Dqsfgj ttzqcb hmsxs nbxhwihhncsg howskiqzd", "of")).toEqual("Please follow these instructions carefully");

    expect(decodeWithKey("Kt bsw rr rqh, bsw klpn tdmn cxv kassthdrv flxwoo", "code")).toEqual("If you do not, you will fail our important ritual");
  });

  it("Ensuring encoding and decoding with the same keyword return the original message", () => {
    const originalMessage = "The Quick Brown Fox Jumps Over The Lazy Dog";
    const keyword = "secure";
    const encodedMessage = encodeWithKey(originalMessage, keyword);
    const decodedMessage = decodeWithKey(encodedMessage, keyword);
    expect(decodedMessage).toEqual(originalMessage);
  });
});
