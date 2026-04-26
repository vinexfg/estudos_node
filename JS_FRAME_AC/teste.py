# nums = [3, 7, 15, 20];


# maior = next((num for num in nums if num > 10), None)

# print(maior)



# maior = None

# for num in nums:
#     if num > 10:
#         maior = num
#         break

# print(maior)




nums = [10, 20, 30]


index = next((i for i, n in enumerate(nums) if n == 20), -1)
print(index)