import math
import sys

sys.setrecursionlimit(100000)
sys.set_int_max_str_digits(100000)

def factorial(n):
    if n == 0:
        return 1
    elif n > 0:
        return n * factorial(n-1)
    else:
        return -1

def factorialZeroes(n):
    log = math.log(n,10)
    power = math.ceil(log)
    total = 0
    for i in range(1,power+2):
        total += n//(5**i)
    return total

# for i in range(1,1000+1):
i = int(input("Enter a number: "))
count = 0
fact = str(factorial(i))
for j in range(len(fact)):
    if fact[len(fact)-1-j] == "0":
        count += 1
    else:
        break
print(i, count, factorialZeroes(i))