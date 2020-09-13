#!/bin/bash
# first argument: input filename/path, second argument: BPM, third argument: output filename/path
FOXSAMPLY=/home/bitnami/supercoll/foxsamply
FOXDOT_SAMPLE_DIR=/home/bitnami/.local/lib/python3.7/site-packages/FoxDot/snd/_loop_
FOXDOT_SCRIPT=/home/bitnami/supercoll/sound2.foxdot

echo "SAMPLE_NAME = $1"
echo "SAMPLE_BPM = $2"

# copy input file to mp3, convert to wav, copy to sample directory
cp uploads/$1 /tmp/$1.mp3
ffmpeg -y -i /tmp/$1.mp3 /tmp/$1.wav
cp /tmp/$1.wav $FOXDOT_SAMPLE_DIR 
export SAMPLE_NAME=$1
export SAMPLE_BPM=$2
$FOXSAMPLY -f $FOXDOT_SCRIPT -s 15 -o $3 -d 15.5

# cleanup
rm $FOXDOT_SAMPLE_DIR/$1.wav
rm uploads/$1
