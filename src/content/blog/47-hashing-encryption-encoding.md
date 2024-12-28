---
title: Hashing, Encoding, Encryption
description: Understanding Cryptography
date: 26 Dec 2024
---

Cryptography forms the backbone of secure digital communication and data handling. This blog explores key concepts such as hashing, encryption, encoding, and public key cryptography to understand their purpose and differences.

### What is Hashing?

Hashing is a **one-way function** that converts input data into a fixed-size output, known as a hash.

- **Fixed Output:** Regardless of input size, the output size is always the same.
- **Deterministic:** The same input will always generate the same hash.
- **Collisions:** While unlikely in strong algorithms, different inputs can produce the same hash.
- **Irreversible:** Hashing cannot be reversed to retrieve the original data.

Hashing is commonly used for data verification, such as checking file integrity or securely storing passwords.

### What is Encryption?

Encryption is a **two-way function** that converts plaintext into ciphertext, which can be reversed using a key.

- **Reversible:** Encrypted data can be decrypted using the correct key.
- **Collision Proof:** Two different inputs will never produce the same ciphertext.
- **Deterministic:** The same input with the same key will always produce the same output.

Encryption is widely used for protecting sensitive data during transmission or storage.

### What is Encoding?

Encoding is a **two-way function** designed to transform data into a specific format for compatibility or transmission.

- **Reversible:** Encoded data can be decoded back into its original form.
- **Deterministic:** The same input will always produce the same encoded output.
- **Collision Proof:** No two inputs will generate the same encoded text.

Unlike encryption, encoding is not meant for security but for data handling and readability.

### Public Key Cryptography

Public key cryptography, or asymmetric cryptography, is a method of secure communication using a pair of related keys.

- **Key Pair:** Consists of a private key (kept secret) and a public key (shared openly).
- **Asymmetric:** Data encrypted with the public key can only be decrypted with the private key and vice versa.
- **Applications:** Commonly used in secure email, digital signatures, and SSL/TLS protocols.

The cryptographic algorithms that generate these key pairs ensure a strong mathematical relationship between the keys, making it impossible to derive one key from the other.

### Conclusion

Hashing, encryption, encoding, and public key cryptography each play unique roles in cryptographic systems. While hashing is ideal for data integrity, encryption and encoding focus on data confidentiality and compatibility. Public key cryptography enables secure communication, adding an additional layer of protection in modern cryptographic practices.
