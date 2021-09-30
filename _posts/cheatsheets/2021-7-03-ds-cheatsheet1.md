---
title: "My Data Science Cheatsheet"
categories:
  - cheatsheet
tags:
  - Data Science
  - cheatsheet
  - pandas
last_modified_at: 1 September 2021
---

As a budding data scientist intern, there are always the same few questions that I keep googling for. So I thought why not compile all the answers here so I have a one-stop resource for my FAQ? 

Will keep adding to this as I go on, please feel free to use this too!

<!--- 
accessing vals: at, iat, loc, iloc, list slicing
join vs merge
saving a dict of dfs
check nans

# Process Data
## MVP: The apply() function
1. On a single column

2. On multiple columns

# Useful Links and Resources
This is an HTML comment in Markdown -->


# Configuring Jupyter Notebooks
## Changing how many rows and columns you can see in a dataframe
Used when your df has a lot of rows or columns that you want to see in the notebook

```python
import pandas as pd

pd.set_option('display.max_rows', 500)
pd.set_option('display.max_colwidth', 25)
```


## Interactive Plots
Too much data in a matplotlib plot, you want to zoom in but you are using a notebook
1. Restart your kernel
2. run this cell first
```python
import matplotlib
matplotlib.use('TKAgg')
```

3. then run this cell
```python
import matplotlib.pyplot as plt
print(matplotlib.get_backend())
### test if it works
plt.plot(range(10))
plt.show()
```






# Getting and Saving Data
- Saving all your dfs into a `data` folder makes things neater!
- use `index = False`: don't save the unnamed index column into the excel file

## CSV vs Excel
- csv can be loaded alot faster
- excel is better if you think you need to edit specific portions that might be too tedious to do on Python.

```python
import pandas as pd

# saving dataframes
your_df.to_excel('data/your_df.xlsx', index = False)
your_df.to_csv('data/your_df.csv', index = False)

# loading dfs
your_df = pd.read_excel('data/your_df.xlsx')
your_df = pd.read_csv('data/your_df.csv')

```

# Accessing Data




## Handling Null values

### 1. You can visualize the severity of missing values quickly with `missingno.matrix(df)`.

```python
import missingno

missingno.matrix(train)
```


### 2. Getting the count of how many nan rows there are

```python
train.isnull().sum() # get null counts of each column

```

### 3. Getting all rows with NaN for entire dataframe
* reccomended to use `df.isna()` instead `df.isnull()` as isnull is going to be deprecated. It's also consistent with other functions like `fillna()`

```python
df[df.isnull().any(axis = 1)]
```

### 4. Getting all rows with NaN for specific column
* reccomended to use `df.isna()` instead `df.isnull()` as isnull is going to be deprecated. It's also consistent with other functions like `fillna()`

```python
df[df['column name'].isna().any(axis = 1)]
```
