# Udacity Blockchain Capstone

This is my capstone as a final udacity project for blockchain developer nanodegree in order to build a decentralized housing product. 

# Problem Statement

* Nowsaday, in real estate business, house listing service is still based on paper which create a lot of error and fraud.
* 25% defect and higher legal fee
* In emerging country, we find it difficult to identify the land ownership.

# Requirement

* Title management process in house listing service
* Mint new token
* Using zk-SNARK to cope with verification without expose the sensitive information in public
* OpenSea is adopt as a marketplace

# 

```
docker run -v /Users/pongsaks/Udacity/Blockchain/Blockchain-Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
```

```
zokrates@5fb88a02575e:~$ cd code/square/
zokrates@5fb88a02575e:~/code/square$ zokrates compile -i square.code
Compiling square.code

Compilation failed:

square.code:
     --> 1:24
  |
1 | def main(private field <a_field_name>, field <b_field_name>) -> (field):␊
  |                        ^---
  |
  = expected identifier
```


```
[zokrates@5fb88a02575e:~/code/square$ zokrates compile -i square.code
Compiling square.code

Compiled code written to 'out'
Number of constraints: 4
```


```
[zokrates@5fb88a02575e:~/code/square$ zokrates compile -i square.code
Compiling square.code

Compiled code written to 'out'
Number of constraints: 4
zokrates@5fb88a02575e:~/code/square$ zokrates setup                 
Performing setup...
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/toolbox/proving_schemes.html#g16-malleability for implications.
Has generated 7 points
Verification key written to 'verification.key'
Proving key written to 'proving.key'
Setup completed
```


```
[zokrates@5fb88a02575e:~/code/square$ zokrates compute-witness -a 3 9
Computing witness...
Witness file written to 'witness'
```


```
[zokrates@5fb88a02575e:~/code/square$ ls
abi.json  out  proving.key  square.code  verification.key  witness
zokrates@5fb88a02575e:~/code/square$ cat witness
~out_0 1
~one 1
_0 3
_1 9
_2 9
_3 0
_4 1
```

```
[zokrates@5fb88a02575e:~/code/square$ zokrates generate-proof
Generating proof...
WARNING: You are using the G16 scheme which is subject to malleability. See zokrates.github.io/toolbox/proving_schemes.html#g16-malleability for implications.
Proof written to 'proof.json'
zokrates@5fb88a02575e:~/code/square$ cat proof.json
{
  "proof": {
    "a": [
      "0x17c2cc7d6f2164b0bf2ad500bb5e59e2eef4f253b9afa247c0734cfb18f08e3b",
      "0x0a1ea7e057772b913c5bfbea8e38eaf7fd0cc530ea2881548191a23b77db7a3d"
    ],
    "b": [
      [
        "0x199a19ad561c61e504a3345ab7564d1a88ed2f0474c95bebd9bdb5b27610ff18",
        "0x26bee2dc0e28d9389131701a96a74364dbec2fed43eeca1376d99b00d70d3c08"
      ],
      [
        "0x0c2d2ce6095ae440a299496483e7dbbcb3aaecd142a61ef87a8b950a0a11cfef",
        "0x1e8899b3c2403f2ad43a9c982b12fd289592ca58fe9d9fbf99d4b5dece03b61b"
      ]
    ],
    "c": [
      "0x00e278293b27b1e42842a820c6fb3f843712e0fbff063e2778e4175b0ec34e2f",
      "0x05a107b27f2828cfccf0f8cfceae401773ad26eb2dc989539d1d13c68749fa91"
    ]
  },
  "inputs": [
    "0x0000000000000000000000000000000000000000000000000000000000000009",
    "0x0000000000000000000000000000000000000000000000000000000000000001"
  ]

```

```
[zokrates@5fb88a02575e:~/code/square$ zokrates export-verifier
Exporting verifier...
Verifier exported to 'verifier.sol'
```



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
