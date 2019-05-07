import random

print('...rock...')
print('...paper...')
print('...scissors...')

player_1 = input('Player 1, enter rock, paper or scissors. ')
rand_num = random.randint(0,2)

if rand_num == 0:
    computer = 'rock'
elif rand_num == 1:
    computer = 'paper'
else:
    computer = 'scissors'

print(f'Computer chooses {computer}')

player_1 = player_1.lower()

if player_1 == computer:
    print('Tie! Shoot again!')
elif player_1 == 'rock':
    if computer == 'scissors':
        print('Player 1 wins!')
    elif computer == 'paper':
        print('Computer wins!')
elif player_1 == 'paper':
    if copmuter == 'rock':
        print('Player 1 wins!')
    elif computer == 'scissors':
        print('Computer wins!')
elif player_1 == 'scissors':
    if computer == 'paper':
        print('Player 1 wins!')
    elif computer == 'rock':
        print('Computer wins!')
else:
    print('Something went wrong, play again')