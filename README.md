# cdiff (Color Diff CLI)

## Installation

```sh
npm install -g ssssota/color-diff-cli
```

## Usage

```sh
cdiff '#ccc' 'hsl(120 50% 50%)'
# -> CIEDE2000: 60.83277119738785

cdiff red yellow
# -> CIEDE2000: 31.4017499865085

# Ignore alpha
cdiff 'lab(97.14,-21.56,94.48)' 'rgba(123, 0, 90, 0.5)'
# -> CIEDE2000: 18.32732103963242
cdiff 'lab(97.14,-21.56,94.48)' 'rgb(123, 0, 90)'
# -> CIEDE2000: 18.32732103963242
```
