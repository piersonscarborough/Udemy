age = input('what is your age? ')

if age != '':
    age = int(age)
    if age >= 21:
        print('drink, normal entry')

    elif age >= 18 and age < 21:
        print('wristband')

    else:
        print('too young, sorry')
else:
    print('Please enter an age')


