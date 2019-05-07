
'''
user_input = input('How many times do I have to tell you? ')

user_input = int(user_input)

for num in range(user_input):
    print('CLEAN UP YOUR ROOM!')
'''



for num in range(1,21) :
    if num == 4 or num == 13:
        print(f'{num} x is unlucky')
    elif num % 2 == 0:
        print(f'{num} x is even')
    elif num % 2 != 0:
        print(f'{num} is odd')
