import sys

DEFAULT = 7000
ZK_DEFAULT = '149.165.170.230:2181'
if (len(sys.argv) >= 3 or sys.argv[1] == "PORT"):
    PORT = sys.argv[2]
else:
    PORT = DEFAULT

if(len(sys.argv) >= 3 or sys.argv[2] == "zkserver"):
    ZK = sys.argv[4]
else:
    ZK = ZK_DEFAULT