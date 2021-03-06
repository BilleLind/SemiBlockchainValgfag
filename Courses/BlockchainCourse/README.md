resultaterne af dette course:
https://www.udemy.com/course/build-blockchain-full-stack/
----------
noter:
---
Block => indeholder
Data: eks. et array af transaktioner
- dette bliver til et hash
"lastHash": hash af den forrige transaktion i kæden("Chain")
---
decentralized and distributed
- alle har en ledger(rekord/historie) af blockchainen og alle dens transaktioner
- opdatere alle andres ledgers
---
public and private keys
- public: ens "addresse"
- private: ens "signatur"
- i forbindelse med crptocurrency opbevares keys i ens wallet
---
Mining
- transaktioner er til start i en ubekræftet stadie
- proof of work : "computational puzzle algorime"
=> løsning af proof of work => tilføjes det til netværket.
---
chain validation
- at kontrollere kæden(chain)
* correct block fields present
* actual lastHash reference 
* valid hash
---
chain replacement
- når der skal flere block ind i chainen
---
Proof of work
- since it requires computationel power, it is expensive to attack the blockchain, since they would need to rewrite multiple instead of
  if they mined a single block.
- inspired by "hashCash"
- SHA-246 in hex is easier to crack then it in its binary form.
- 

---
51% Attack
- evil miner: have more than 50% of the computationel power of the blockchain network

---
Mining rate
- the system reculates the mining rate closer to the set value, by either lowering og highering the dificulty of the mine.

---
pup/sub
- pub =publisher : only cares that getting the message out, sends messages
- sub = subscriber: listens to the publishers that they are subscribed to, checks for messages
is a great example for explaning how the blockchain gets updates from each block
- each block listens or publishes to the blockchain



