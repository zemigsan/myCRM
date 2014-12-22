MKDIR_P = mkdir -pv
RM = rm -rf
CP = cp -R 
PROD_DIR = myCRM
OUT_DIR = /cygdrive/c/xampp/htdocs/myCRM
SRC = js css client index.html app.js 


PROD_FILES= environments/prod/globals.js
LOCAL_FILES= environments/local/globals.js

.PHONY: outdir copy

all: clean directories pack
	

local: pack_local

pack:
	${CP} ${SRC} ${PROD_FILES} ${PROD_DIR}
    
pack_local:
	${CP} ${SRC} ${LOCAL_FILES} ${OUT_DIR}


directories: ${PROD_DIR}

clean: 
	${RM} ${PROD_DIR}

${PROD_DIR}:
	       ${MKDIR_P} ${PROD_DIR}

