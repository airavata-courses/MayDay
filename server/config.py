import sys

DEFAULT = 7000
if (len(sys.argv) == 3 and sys.argv[1] == "PORT"):
    PORT = sys.argv[2]
else:
    PORT = DEFAULT
