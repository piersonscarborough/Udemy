print('...rock...')
print('...paper...')
print('...scissors...')

player_1 = input('Player 1, enter rock, paper or scissors. ')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
print('***** No Cheating *****')
player_2 = input('Player 2, enter rock, paper or scissors. ')

player_1 = player_1.lower()
player_2 = player_2.lower()

if player_1 == 'rock' and player_2 == 'scissors':
        print('Player 1 wins!')
elif player_1 == 'rock' and player_2 == 'paper':
        print('Player 2 wins!')
elif player_1 == 'rock' and player_2 == 'rock':
        print('Tie! Shoot again!')
elif player_1 == 'paper' and player_2 == 'scissors':
        print('Player 2 wins!')
elif player_1 == 'paper' and player_2 == 'paper':
        print('Tie! Shoot again!')
elif player_1 == 'paper' and player_2 == 'rock':
        print('Player 1 wins!')
elif player_1 == 'scissors' and player_2 == 'rock':
        print('Player 2 wins!')
elif player_1 == 'scissors' and player_2 == 'scissors':
        print('Tie! Shoot again!')
elif player_1 == 'scissors' and player_2 == 'paper':
        print('Player 1 wins!')
else:
    print('Something went wrong, play again')

