#print('How many kilometers did you cycle today?')
kms = input('How many kilometers did you cycle today? ')
miles = float(kms) / 1.60934
miles = round(miles, 2)
print(f'That is equal to {miles} miles')