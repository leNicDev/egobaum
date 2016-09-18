#!/bin/bash

cp ./Frontend/dev/index.html ./Frontend/pub/index.html && uglifyjs-folder ./Frontend/dev/js/ -o ./Frontend/pub/js/egobaum.js && node index.js