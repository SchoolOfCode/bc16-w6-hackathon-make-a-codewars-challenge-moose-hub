## Scenario and Story

A group of astronauts were set to embark on the maiden voyage of their new ship (SOC-16). There's just one problem. To prevent accidental launch, and spaceship theft, a secret passcode in the form of a group of actions, was programmed to activate the ships computer. This isn't the problem, the real problem is the fact the instructions for these actions were encrypted to further improve security. We need to decode and re-encode the instructions so we can perform the actions, launch the ship and keep the secret code secure.

## Goals

- **Primary Goal**: Implement functions to encode and decode messages using a provided cipher method.
- **Stretch Goal**: Enhance the encoding/decoding functions to support keyword-based dynamic shifts, increasing message complexity and security.

## Brainstorming and Ideation (Disney Ideation Approach)

- **Dreamer Phase**:
    - Encoder function
    - Take any message and encode using caeser cipher method
    - Secret keyword for encryption
    - Decoder function?
    - Practice tests with encoded message linked together
    - Additional tests for rest of message?
- **Realist Phase**: 
    - Prioritise decoder function
    - Take encoded message and decode it
    - Story/theme oriented messages
- **Critic Phase**: 
    - Ensure the challenge remains accessible to the target skill level
    - Make a 2nd difficulty level?
    - Avoid overly complex or niche concepts.

## Incremental Development Steps

1. **MVP (Minimum Viable Product)**: Introduce a simple shift cipher (e.g., Caesar cipher) as a foundation for encoding and decoding.
   - **User Story**: "As a user, I want to encode and decode messages using a fixed shift to grasp basic encryption techniques."
   - **Acceptance Criteria**: Implement functions that can successfully encode and decode messages using a fixed numeric shift.

2. **First Iteration**: Add case sensitivity and non-alphabetic character handling to the cipher functions.
   - **User Story**: "As a user, I want my encoding function to preserve case and ignore punctuation for messages to retain their original formatting."
   - **Acceptance Criteria**: Ensure encoding and decoding functions correctly handle uppercase, lowercase, and non-alphabetic characters.

3. **Second Iteration**: Implement a keyword-based shift cipher for dynamic encoding shifts.
   - **User Story**: "As a user, I want to use a keyword for dynamic shifts in my encoding to enhance message security."
   - **Acceptance Criteria**: Functions use a keyword to dynamically alter the shift, improving the encoding's security.

4. **Stretch Goal**: Explore more complex cipher techniques, like the Vigenère cipher, for encoding and decoding.
   - **User Story**: "As an advanced user, I'm interested in encoding and decoding messages using complex ciphers to further challenge my encryption knowledge."
   - **Acceptance Criteria**: Successful implementation of a complex cipher method for users seeking an advanced challenge.

## Scenario in `6kyu-encodeDecode/main.js`

```javascript
/**
 * On the brink of humanity's next great adventure, a group of astronauts stands ready to embark on the maiden voyage of their cutting-edge spaceship SOC-16. However, there's a critical hurdle they must first overcome. The ship's computer, essential for launch and navigation, is locked behind a series of encrypted actions - a security measure to prevent unauthorized use or accidental activation.
 * 
 * The encryption of the launch codes was meant to enhance security, but it has inadvertently left our astronauts grounded. Your mission, should you choose to accept it, involves cracking the code: decoding the encrypted instructions to uncover the necessary actions for launch, and then re-encrypting these instructions to maintain the security of the ship's operating protocols.
 * 
 * Begin with mastering a basic shift cipher to decode and re-encode the launch instructions. As your skills advance, explore more complex encoding techniques, utilizing keywords to dynamically alter your encryption methods. The future of space exploration rests in your hands. Can you decode the instructions in time for launch, and secure the codes against potential threats? The countdown has begun.
 */


export function encode(message, shift) {
  // Your code here to encode a message using a fixed shift
}

export function decode(encodedMessage, shift) {
  // Your code here to decode a message using a fixed shift
}
```


## Scenario in `4kyu-encodeDecode/main.js`

```javascript
/**
> On the brink of humanity's next great adventure, a group of astronauts stands ready to embark on the maiden voyage of their cutting-edge spaceship SOC-16. However, there's a critical hurdle they must first overcome. The ship's computer, essential for launch and navigation, is locked behind a series of encrypted actions - a security measure to prevent unauthorized use or accidental activation.
 
> The encryption of the launch codes was meant to enhance security, but it has inadvertently left our astronauts grounded. Your mission, should you choose to accept it, involves cracking the code: decoding the encrypted instructions to uncover the necessary actions for launch, and then re-encrypting these instructions to maintain the security of the ship's operating protocols.
 
> Using a basic shift cypher technique wont work this time as security has been improved! Improve upon your cryptographic skills and explore more complex encoding techniques, utilizing keywords to dynamically alter your encryption methods. The future of space exploration rests in your hands. Can you decode the instructions in time for launch, and secure the codes against potential threats? The countdown has begun.
*/


export function encodeWithKey(message, keyword) {
  // Your code here to encode a message using a fixed shift
}

export function decodeWithKey(encodedMessage, keyword) {
  // Your code here to decode a message using a fixed shift
}
```