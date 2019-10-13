from Crypto.Cipher import AES


key = '0123456789abcdef01234567' # AES key must be either 16, 24, or 32 bytes long
IV = 16 * '\x01'           # TODO IV must be 16 bytes long initialization vector for maximize security IV should be randomly generated for every encryption in can be stored with ciphered text.
mode = AES.MODE_CBC
encryptor = AES.new(key, mode, IV=IV)

text = 'j' * 64 + 'i' * 128 # nput strings must be a multiple of 16 in length
ciphertext = encryptor.encrypt(text)

print( ciphertext )


decryptor = AES.new( key, mode, IV=IV)
plain = decryptor.decrypt( ciphertext )

print( plain )