from __future__ import print_function
import glob, os
from PIL import Image

size = (500, 500)

for infile in glob.glob("*.jpeg"):
    outfile = os.path.splitext(infile)[0] + "_thumb.jpeg"
    if infile != outfile:
        try:
	        im = Image.open(infile)
	        im.thumbnail(size)
	        im.save(outfile, "JPEG")
        except IOError:
            print("cannot create thumbnail for", infile)