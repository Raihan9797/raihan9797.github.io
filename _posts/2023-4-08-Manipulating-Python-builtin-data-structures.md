---
title: "Manipulating Python's Built In Data Structures"
categories:
  - cheatsheet
tags:
  - Data Science
  - Python
  - cheatsheet
last_modified_at: 8 April 2023
---
Having been a constant user of python, the available data structures have been very helpful throughout my work. Here are some useful snippets that I try to keep in mind!

# Lists
## 1. Getting unique ordered values from a list (by using dictionary!)
Use case: Removing duplicates but **Insertion order matters!**
- May not be the most efficient, but way cleaner
- Why not use a set? Because order is lost in a set!

```python
list_with_dupes = [1, 1, 2, 3, 3, 3]
list_without_dupes = list(dict.fromkeys(list_with_dupes))

## if insertion order did not matter (or for python 3.5 or lower iirc)
list_without_dupes = list(set(list_with_dupes))
```

## 2. Flattening a list of lists
Use case: flattening a small list of lists **without other packages**
- numpy or itertools should have other methods (see [here](https://stackoverflow.com/questions/952914/how-do-i-make-a-flat-list-out-of-a-list-of-lists)).

```python
### list comprehension
flat_list = [item for sublist in l for item in sublist]

### what the list comprehension means
flat_list = []
for sublist in l:
    for item in sublist:
        flat_list.append(item)

### simple function
def flatten(l):
    return [item for sublist in l for item in sublist]
```

## 3. Checking if at least 1 element in list A exists in List B
Use case: you have an excluded word list. Any list you are searching that has at least one element from here needs to be excluded. ([Source](https://stackoverflow.com/questions/10668282/one-liner-to-check-if-at-least-one-item-in-list-exists-in-another-list))

```python
for sentence in sentences:
  split_sentence = sentence.split()
  if any(word in bad_words_list for word in split_sentence):
    print("bad word found!")

```

# Dictionary
## 1. Getting a value without key errors
Use case: you have dictionaries that may/may not have the keys you want. Instead of using if-else to check. You can return a default value instead (if that is what you have in mind)

```python
# you have my_list, a list of dictionaries 
values_you_want = []
for my_dict in my_list_of_dicts:
  val = my_dict.get("key_you_need", None)
  values_you_want.append(val)

### older method
values_you_want = []
for my_dict in my_list_of_dicts:
  if "key_you_need" in my_dict:
    val = my_dict["key_you_need"]
    values_you_want.append(val)
  else:
    values_you_want.append(None)
```

## 2. Mapping dictionary to a dataframe column
Use case: you have a dataframe column where each element in this column is a key in your dictionary. You want to assign the dictionary values to another column in your dataframe.

```python
my_df['values'] = my_df.key_col.map(my_dict)
```
-----

# Tuples
## 1. Accessing one index of a tuple
Use case: you have a list of tuples. You want to assign all values of a to a dataframe column "A". Same thing for all b values.

```python
##eg. list of tuples: [(a1, b1), (a2, b2)]
my_df['A'] = list_of_tuples.map(lambda x: x[0])
```
