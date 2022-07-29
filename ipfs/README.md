# IPFS

## [Install IPFS Desktop](https://github.com/ipfs/ipfs-desktop#linuxfreebsd)

# Run

```
ipfs-desktop
```

## [Install IPFS CLI](https://docs.ipfs.tech/install/command-line/#linux)

Testing
```
ipfs init
ipfs cat /ipfs/QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv/readme
ipfs cat /ipfs/QmS4ustL54uo8FzR9455qaxZwuMiUhyvMcX9Ba8nUH4uVv/quick-start
ipfs
ipfs commands
ipfs cat --help
ipfs ls --help
```

Starting Daemon (in another tab)
```
ipfs daemon
```

[CLI Docs](https://docs.ipfs.tech/reference/kubo/cli/)

UI: http://localhost:5001/webui

Text example:
```
echo "Hello IPFS" > hello-ipfs.txt
cat hello-ipfs.txt
ipfs add hello-ipfs.txt
ipfs cat <hash value>
echo “Hello ipfs. Here is more text” > hello-ipfs.txt
cat hello-ipfs.txt
ipfs add hello-ipfs.txt
https://ipfs.io/ipfs/<hash-value>
```

Media examples:
```
ipfs add image.jpg
ipfs cat <image-hash-value>
https://ipfs.io/ipfs/<image-hash-value>
ipfs add book.pdf
ipfs add video.mp4
ipfs add -r folder
https://ipfs.io/ipfs/<video-hash-value>
ipfs ls <hash value of directory>
https://ipfs.io/ipfs/<directory-hash-value>
http://localhost:5001/webui
```

HTML example:
```
https://startbootstrap.com/template-categories/all/
ipfs add -r homepage
ipfs name publish <html-file-hash>
Access the website: https://ipfs.io/ipfs/QmPxhgbKpnWhWzW1SBfpvGDxrEwTkFgL3fKJpwKXXiuvbn/
```
