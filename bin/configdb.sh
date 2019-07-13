#!/bin/bash

database="rotsdb"

echo "Configuring database: $database"

dropdb -U node_user rotsdb
createdb -U node_user rotsdb

psql -U node_user $database < ./bin/sql/rots.sql

echo "$database configured"
