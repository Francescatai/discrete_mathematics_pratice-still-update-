# for loop
def add(n):
    sum=0
    for i in range(1,n+1):
        sum+=i
    return sum
# print(add(10))

# recursion
def add2(n):
    if n==0:
        return 0
    else:
        return n+add2(n-1)
print(add2(10))
