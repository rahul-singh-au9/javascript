import random
# List1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

# Luck = random.choice(List1)

Luck = random.randint(1,20)

Guess = int(input("Enter an integer 1-20 ::"))

if Guess == Luck :
  print ("you won the game")
else:
  print("you lost! better luck next time")
  print("correct guess" ,Luck)