# Getting started

## 1) Download Linux bin

https://electrum.org/#download

## 2) Download and import signature

```bash
wget https://raw.githubusercontent.com/spesmilo/electrum/master/pubkeys/ThomasV.asc
gpg --import ThomasV.asc
```

## 3) Verify signature

```bash
gpg --verify electrum-4.2.2-x86_64.AppImage.asc electrum-4.2.2-x86_64.AppImage
```

The message should say:

Good signature from "Thomas Voegtlin (https://electrum.org) <thomasv@electrum.org>"

Primary key fingerprint: 6694 D8DE 7BE8 EE56 31BE  D950 2BD5 824B 7F94 70E6

[docs](https://electrum.readthedocs.io/en/latest/gpg-check.html)

## 4) Run

```bash
chmod +x electrum-4.2.2-x86_64.AppImage
./electrum-4.2.2-x86_64.AppImage
```

## 5) Create a Bitcoin wallet

Create a standard wallet and save the seed.
