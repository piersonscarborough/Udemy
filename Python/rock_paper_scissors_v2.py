print('...rock...')
print('...paper...')
print('...scissors...')

player_1 = input('Player 1, enter rock, paper or scissors. ')
print('***** No Cheating *****\n\n' * 50)
player_2 = input('Player 2, enter rock, paper or scissors. ')

player_1 = player_1.lower()
player_2 = player_2.lower()

if player_1 == player_2:
    print('Tie! Shoot again!')
elif player_1 == 'rock':
    if player_2 == 'scissors':
        print('Player 1 wins!')
    elif player_2 == 'paper':
        print('Player 2 wins!')
elif player_1 == 'paper':
    if player_2 == 'rock':
        print('Player 1 wins!')
    elif player_2 == 'scissors':
        print('Player 2 wins!')
elif player_1 == 'scissors':
    if player_2 == 'paper':
        print('Player 1 wins!')
    elif player_2 == 'rock':
        print('Player 2 wins!')
else:
    print('Something went wrong, play again')
