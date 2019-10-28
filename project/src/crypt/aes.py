from Crypto.Cipher import AES
from pbkdf2 import PBKDF2
import os, random, string, struct


def randomword(length):
    chars = string.ascii_lowercase+string.digits+string.ascii_uppercase
    return ''.join(random.choice(chars) for i in range(length))


password = randomword( 64 )
salt = os.urandom(8)

key = PBKDF2( password, salt).read(32) # AES key must be either 16, 24, or 32 bytes long
IV = 16 * '\x01'           # TODO IV must be 16 bytes long initialization vector for maximize security IV should be randomly generated for every encryption in can be stored with ciphered text.
mode = AES.MODE_CBC
encryptor = AES.new(key, mode, IV=IV)

text = 'j' * 64 + 'i' * 128 # nput strings must be a multiple of 16 in length
ciphertext = encryptor.encrypt(text)

print( ciphertext )


decryptor = AES.new( key, mode, IV=IV)
plain = decryptor.decrypt( ciphertext )

print( plain )