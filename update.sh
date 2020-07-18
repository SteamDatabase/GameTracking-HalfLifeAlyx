#!/bin/bash

cd "${0%/*}"
. ../common.sh

echo "Processing Half-Life: Alyx..."

ProcessDepot ".dll"
ProcessToolAssetInfo
FixUCS2

CreateCommit "Update" "$1"

echo "HL:A Done"
