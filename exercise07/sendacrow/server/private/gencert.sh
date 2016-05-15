#!/bin/bash
KEY_LENGTH=2048
# Generate key
openssl genrsa -out privatekey.pem $KEY_LENGTH
# Generate signing request
openssl req -new -key privatekey.pem -out certrequest.csr
# Generate certificate
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
