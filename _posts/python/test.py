import re
import os
import shutil
from datetime import date
from glob import glob


files = glob('*.md')

now = date.today()
today = date.strftime(now, '%Y-%m-%d')


for file in files:
    filename,ext = os.path.splitext(file)
    if re.search(r'^\d+.', filename):
        new_filename = re.sub(r'[\. ]','-',filename)
        new_filename = '-'.join([today, new_filename]) + ext
        print(new_filename)
        shutil.move(file,new_filename)
        
        
