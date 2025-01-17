Unicode is the global standard for representing text across different languages and symbols. It assigns a unique code point to every character, but storing these efficiently is key!

UTF-8, a variable-length encoding makes this possible.

- UTF-8 uses 1 to 4 bytes to encode each character, ensuring that ASCII characters (like 'A') use just 1 byte, while more complex characters (like 'ॐ') can use 2-4 bytes.
  <br>

- This backward compatibility with ASCII and efficient use of memory make UTF-8 the dominant encoding on the web, supporting everything from simple text to emojis 🌍.

Efficient and universal - UTF-8 is how the world communicates digitally!
In the images below, I have explained how UTF-8 encoding works.

---

### Unicode

- Provides a unique number for every character across languages and scripts.
- ASCII was limited to 128 characters, primarily focusing on English and basic symbols.
- Unicode was developed to provide a comprehensive and global character set.

There are more than 140K characters registered in Unicode standard.

![](https://i.ibb.co/KxL3ZXn/unicode-1.png)

---

### Why UTF-8?

Computers only deal with bits (0, 1), so the challenge was how to encode these codes into bits efficiently.

Let's consider the character 'ॐ', the Unicode for this is **2384**:

- 2384 in binary is **100101010000** (12-bit representation).
  <br>
  What if we had a string 'Aॐ'
- A -> 65 -> 1000001
  <br>
- ॐ -> 2384 -> 100101010000

Since a byte (8 bits) is the basic unit of memory in most computer architectures, using 8-bit chunks (bytes) allows for efficient data handling and processing.

However, representing 'Aॐ' directly would require **16 bits** (2 bytes).
<br>

![](https://i.ibb.co/xgp8sdf/unicode-2.png)

The problem here is that we are not being efficient, see how many bits we are wasting with initial 0's.

So to be efficient, UTF-8 (Unicode Transformation Format - 8 bits) was introduced.

---

### UTF-8

UTF-8 encoding is a variable-length encoding system.

UTF-8 uses 1 to 4 bytes to encode characters.

For ASCII characters (like 'A'), UTF-8 uses 1 byte.

For characters like 'ॐ', UTF-8 uses multiple bytes.

UTF-8 has specific rules to represent characters in 8-bit (1 byte) chunks.

---

### Case 1 - if Unicode < 128, add 0's (from left) until it becomes 8-bit

![](https://i.ibb.co/fkT5P5N/unicode-3.png)

---

### Case 2 - if 128 <= Unicode < 2048, add 0's (from left) until it becomes 11-bit

![](https://i.ibb.co/4TVjD7K/unicode-4.png)

That's how UTF-8 allows us to represent characters that are more than 8-bits
which is by dividing the character into multiple chunks of bytes without wasting
multiple bits.

---

### Case 3 - if 2048 <= Unicode < 65536, add 0's (from left) until it becomes 16-bit

![](https://i.ibb.co/qkgQR2Y/unicode-5.png)

---

### Case 4 - if 65536 <= Unicode < 2097152, add 0's (from left) until it becomes 21-bit

![](https://i.ibb.co/L1vdzmx/unicode-6.png)
<br>

---

Check out the [full diagram](https://excalidraw.com/#json=PGDoak8xbXbW7SzPvtN8W,JoCK_bPG_xJXhkxWZqwRGg) to see how UTF-8 encoding works in detail.
