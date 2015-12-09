'''
This will allow for a simplified managment of AWS Elasticsearch
'''

#!/usr/bin/env python

import subprocess, json, os, sys, time
from optparse import OptionParser
# from datetime import datetime, timedelta

usage = "usage: %prog [options] [server_number]\n\
         server_number: a numeric value corresponding to the server number\n\
         e.g.: '%prog 1' will ssh into the 1st server in the list."

parser = OptionParser(usage)
(options, args) = parser.parse_args()


def command(action):
    return subprocess.Popen("aws es " + action, shell=True, stdout=subprocess.PIPE).stdout.read()


print command('list-domain-names')

# add-tags
# create-elasticsearch-domain
# delete-elasticsearch-domain
# describe-elasticsearch-domain
# describe-elasticsearch-domain-config
# describe-elasticsearch-domains
# list-domain-names
# list-tags
# remove-tags
# update-elasticsearch-domain-config


