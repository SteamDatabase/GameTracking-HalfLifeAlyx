#!/bin/bash

cd "${0%/*}"
. ../common.sh

echo "Processing Half-Life: Alyx..."

ProcessDepot ".dll"
ProcessVPK
ProcessToolAssetInfo

while IFS= read -r -d '' file
do
	baseFile="${file%.*}.txt"
	
	echo "> VPK $baseFile"
	
	../.support/vpktool "$file" > "$baseFile"
done <   <(find "game/hlvr/maps/" -type f -name "*.vpk" -print0)

FixUCS2

CreateCommit "Update" "$1"

echo "HL:A Done"
