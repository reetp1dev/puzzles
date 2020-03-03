//Given an unsorted array A of size N of non-negative integers, find a continuous sub-array which adds to a given number S.

def subArr (A, s):
    sum=0
    k=0
    for i in range (0, len(A)):
        if (sum==s):
            return(A[k:i])
        if(sum<s):
            sum+=A[i]
        if(sum>s):
            while(sum>s):
                sum-=A[k]
                k+=1
    if(i==len(A)-1):
       return(A[k:])
    
