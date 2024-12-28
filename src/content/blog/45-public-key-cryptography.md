---
title: Public Key Cryptography
description: How Data is Encrypted Over Communication
date: 28 Dec 2024
---

## The Earlier Approach: Shared Key Cryptography

Shared key cryptography relied on both parties using the same key to encrypt and decrypt messages:

```
        key        key
message --> cipher --> message
```

### Problem: Key Sharing

The major issue with shared key cryptography was securely sharing the key. If the key was intercepted, the entire communication could be compromised.

## Asymmetric Cryptography: The Solution

Asymmetric cryptography solves the key-sharing problem by using a pair of related keys: a public key and a private key.

```
        key A         key B
message -----> cipher -----> message
```

Here, the two keys (key A and key B) are mathematically related but cannot be used to derive each other. This enables secure communication without sharing a private key.

## RSA Encryption Algorithm

The RSA algorithm is one of the most popular methods in public key cryptography. It relies on the mathematical difficulty of prime factorization.

### Key Concepts

1. **Key Pair**:

   - Public Key: Shared with everyone.
   - Private Key: Kept secret.

2. **Prime Factorization**:

   - Choose two prime numbers, `p1` and `p2`.
   - Compute `n = p1 * p2`.
   - Share `n` publicly, but keep `p1` and `p2` private.

3. **Euler’s Totient Function (ϕ)**:
   - Counts the numbers that are relatively prime to `n`.
   - For prime `p`, ϕ(p) = p - 1.
   - For composite numbers, ϕ(a _b) = ϕ(a)_ ϕ(b).

## Diffie-Hellman Key Exchange

The Diffie-Hellman algorithm enables two parties to create a shared secret without directly sharing it.

### Core Idea

- Mixing two colors is easy.
- Reversing the mixture to retrieve original colors is hard.

This principle is known as a one-way function.

### Process

1. Alice and Bob choose a public “color”.
2. Each mixes the public color with their private “color”.
3. They exchange their mixed colors.
4. Both use their private “color” and the received mixed color to derive the same shared secret.

```
                  Eve
                    |  apub, amix, bmix
                    |
                    |
Alice --------------------------------- Bob

apub                                    apub
apri + apub = amix                      apub + bpri = bmix
bmix + apri = secret                    amix + bpri = secret
apub + bpri + apri = secret             apri + apub + bpri = secret
```

### Mathematical Representation

Using modular arithmetic:

```
x mod p
```

Alice and Bob can create a shared secret securely and use it to encrypt/decrypt messages.

## Man-in-the-Middle (MITM) Attack on Diffie-Hellman

Diffie-Hellman is vulnerable to MITM attacks:

### Scenario

1. Eve intercepts the initial exchange.
2. Pretends to be Bob when communicating with Alice.
3. Pretends to be Alice when communicating with Bob.

```
Alice -------------------------- Bob
a                |                b
                 |
                Eve
            ae   |   be
```

Alice thinks:

```
Alice --------------> Bob
```

Bob thinks:

```
Alice --------------> Bob
```

Reality:

```
Alice --------------> Eve -------------> Bob
```

## How RSA Enhances Security

RSA provides authentication and ensures the communicating party is who they claim to be. However, relying solely on RSA has drawbacks:

- RSA generates a single static secret. If intercepted and decrypted later, all communications are compromised.

### Combining RSA and Diffie-Hellman

Using both algorithms provides:

- **RSA**: Authenticity.
- **Diffie-Hellman**: Periodic secret regeneration to maintain forward secrecy.

By combining RSA and Diffie-Hellman, secure and authenticated communication can be achieved, mitigating the weaknesses of each individual method.
